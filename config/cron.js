var request = require('request')
var cheerio = require('cheerio')
var Promise = require('bluebird')
module.exports.cron = {
    myJob: {
      schedule: '* */5 * * * *',
      onTick: function(req,res) {
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
                        request(anime.url_anime_english, function (err, res, body) {
                            
                            if (!err && res.statusCode == 200) {
                                var metadata = []
                                var $ = cheerio.load(body);
                                $('.infovanr').each(function (index) {
                
                                    var url = $(this).attr('href')
                                    var episode = $(this).find('.infoept2r', '.centerv').text()
                                    metadata.push({
                                        id_anime: anime._id.toString(),
                                        nama_anime:anime.nama_anime,
                                        url: "http://animeheaven.eu/"+url,
                                        episode: episode
                                    })
                                   
                
                                })
                                $('.infovan').each(function (index) {
                
                                    var url = $(this).attr('href')
                                    var episode = $(this).find('.infoept2', '.centerv').text()
                                    metadata.push({
                                        id_anime: anime._id.toString(),
                                        nama_anime:anime.nama_anime,
                                        url: "http://animeheaven.eu/"+url,
                                        episode: episode
                                    })
                                   
                
                                })
                
                            }
                            
                
                            
                            async.map(metadata, (function(object, callback) {
                                Episode_anime.findOne({id_anime:object.id_anime,episode:object.episode}).exec(function(err,found){
                                    if(err) return res.serverError(err)
                                    // console.log(found)
                                    if(!found){
                                        var ObjEps={
                                            owner_anime : object.id_anime,
                                            id_anime:object.id_anime,
                                            nama_anime:object.nama_anime,
                                            episode:object.episode,
                                            url_versi_english:object.url,
                                            url_versi_indo:""
                                        }
                                        Episode_anime.create(ObjEps).exec(function(err,created){
                                            if(err) return console.log(err)
                                            
                                            
                                                Anime_favorit.find({id_anime:created.id_anime}).exec(function(err,anfav){
                                                    if(err) return res.serverError(err)
                                                    async.map(anfav,(function(notif,callback){
                                                        var ObjNotifikasi={
                                                            owner_anime:created.id_anime,
                                                            id_anime:created.id_anime,
                                                            owner_user:notif.id_user,
                                                            id_user:notif.id_user,
                                                            nama_anime:created.nama_anime,
                                                            url:created.url_versi_english,
                                                            episode:created.episode,
                                                            bahasa:"English",
                                                            status:false
                                                        }
                                                        Notifikasi.create(ObjNotifikasi).exec(callback)
                                                    }),function(notifikasi){
                                                    })
                                            })
                                            
                                        })
                                    }
                                    
                                })
                                
                                
                                
                              }), function(error, createdOrFoundObjects) {
                                
                                
                                
                              });
                            
                             
                        })
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
                                        nama_anime:anime.nama_anime,
                                        url: url,
                                        episode: episodes
                                    })
                                })
                                
    
                            }
                            
                            
                            Episode_anime.find({id_anime:anime._id.toString()}).exec(function(err,episode){
                                if(err) return res.serverError(err)
                                var data =[]
                                async.map(episode,(function(episodes,callback){
                                    
                                    if(episodes.url_versi_indo==""){
                                        data.push({
                                            id_episode:episodes.id,
                                            id_anime:episodes.id_anime,
                                            episode:episodes.episode,
                                            url_versi_indo:""
                                        })
                                    }
                                    
                                    callback()
    
                                    
                                }),function(err,found){
                                    
                                    for(var i=0;i<data.length;i++){
                                        for(var j=0;j<metadata.length;j++){
                                            if(data[i].id_anime==metadata[j].id_anime&&data[i].episode==metadata[j].episode){
                                                Episode_anime.update({id:data[i].id_episode},{
                                                    url_versi_indo:metadata[j].url,
                                                    nama_anime :metadata[j].nama_anime
                                                }).exec(function(err,update){
                                                    update.forEach(function(up){
                                                        
                                                         Anime_favorit.find({id_anime:up.id_anime}).exec(function(err,anfav){
                                                                if(err) return res.serverError(err)
                                                                async.map(anfav,(function(notif,callback){
                                                                    var ObjNotifikasi={
                                                                        owner_anime:up.id_anime,
                                                                        id_anime:up.id_anime,
                                                                        owner_user:notif.id_user,
                                                                        id_user:notif.id_user,
                                                                        nama_anime:up.nama_anime,
                                                                        url:up.url_versi_indo,
                                                                        episode:up.episode,
                                                                        bahasa:"Indonesia",
                                                                        status:false
                                                                    }
                                                                    Notifikasi.create(ObjNotifikasi).exec(callback)
                                                                }),function(notifikasi){
                                                                    
                                                                })
                                                        })
                                                    })
                                                
                                                })
                                            }
                                        }
                                    }
                                })
                            })
              
                         })
                         
                         
                    })
                    
                    
                    
                    
                })
    
            })
            
        })
        console.log("episode telah diupdate")
      },
      start: false
    }
  };