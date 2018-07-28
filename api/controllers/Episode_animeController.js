/**
 * Episode_animeController
 *
 * @description :: Server-side logic for managing episode_animes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request')
var cheerio = require('cheerio')
var Promise = require('bluebird')
function paginate(array, perPage, page) {
    --page; // because pages logically start with 1, but technically with 0
    return array.slice(page * perPage, (page + 1) * perPage);
}

fs = require('fs'),
    urls = [],
    urls1 = [];
module.exports = {
    add: function (req, res) {
        res.view('admin/addEpisode', {
            layout: false
        })

    },
    updateEpisode: function (req, res) {
        
        var nativePromise = new Promise(function (resolve, reject) {
        Anime.native(function (err, collection) {
            if (err) return res.serverError(err);

            collection.find({ status: "OnGoing" }, {
                nama_anime: true,
                url_anime_english: true,
                url_anime_indo: true,
                nama_anime: true,
                anime_id: true,
            }).toArray(function (err, results) {
                
                if (err) return res.serverError(err);
                results.forEach(function (anime) {
                    request(anime.url_anime_indo, function (err, res, body) {
                        
                        if (!err && res.statusCode == 200) {
                            var metadata = []
                            var $ = cheerio.load(body);
                            $('li','.episodelist').each(function(index){
                                var url = $(this).find('a','.lefttitle').attr('href')
                                var episode = $(this).find('.leftoff').text()
                                var episodes = parseInt(episode)
                                
                                metadata.push({
                                    id_anime: anime._id.toString(),
                                    url: url,
                                    episode: episodes
                                })
                            })
                            

                        }
                        
                        async.map(metadata, (function(metadatas, callback) {
                            Episode_anime.native(function (err, collection) {
                                if (err) return res.serverError(err);
                    
                                collection.find({ id_anime: metadatas.id_anime }, {
                                    id_anime:true
                                }).toArray(function (err, results) {
                                    console.log(results)
                                })
                            })
    
                        }), function(error, createdOrFoundObjects) {
                            
                          //   console.log(error, createdOrFoundObjects)
                        });
                            
                        
                         
                    })
                    
                    request(anime.url_anime_english, function (err, res, body) {
                        
                        if (!err && res.statusCode == 200) {
                            var metadata = []
                            var $ = cheerio.load(body);
                            $('.infovan').each(function (index) {

                                var url = $(this).attr('href')
                                var episode = $(this).find('.infoept2', '.centerv').text()
                                metadata.push({
                                    id_anime: anime._id.toString(),
                                    url: "http://animeheaven.eu/"+url,
                                    episode: episode
                                })
                               

                            })

                        }
                        
                        async.map(metadata, (function(object, callback) {
                             Episode_anime.findOrCreate({id_anime:object.id_anime,episode:object.episode},{
                                 owner_anime : object.id_anime,
                                 id_anime:object.id_anime,
                                 episode:object.episode,
                                 url_versi_english:object.url,
                                 url_versi_indo:""
                             }).exec(callback)                   
                            
                          }), function(error, createdOrFoundObjects) {
                            //   console.log(error, createdOrFoundObjects)
                          });
                         
                    })
                        
                    

                })
                

                return res.ok(results);
            })

        })
        
    })
    
    // return nativePromise.then(function (itemList) {
    //     console.log(itemList)
    //   })
},

    episodeMobile : function(req,res){
        var item_count = req.param('item_count')
        var page = req.param('page')
        Anime.findOne(req.param('id')).populateAll().exec(function(err,eps){
            if(err) return res.serverError(err)
            res.json(paginate(eps.episodes.sort(function(a, b){return b.episode - a.episode}),item_count,page))

        })
    },


    findall: function (req, res) {
        console.log("Inside findall..............");

        return Episode_anime.find().then(function (episode_anime) {
            console.log("animeService.findAll -- anime = " + episode_anime);
            return res.view("admin/listEpisode", {
                status: 'OK',
                title: 'List of anime',
                episode_anime: episode_anime
            });
        }).catch(function (err) {
            console.error("Error on ContactService.findAll");
            console.error(err);
            return res.view('500', { message: "Sorry, an error occurd - " + err });
        });
    },
    delete: function (req, res) {
        Episode_anime.destroy({ id: req.params.id }).exec(function (err) {
            if (err) {
                res.send(500, { error: 'Database error' })
            }
            res.redirect('/episode_anime')
        })
    }
};

