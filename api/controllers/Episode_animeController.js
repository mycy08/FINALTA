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
        // Anime_favorit.find({id_anime:"5b201d8840182d3e18c96eee"}).exec(function(err,anfav){
        //     if(err) return res.serverError(err)
        //     console.log(anfav)
        // })
        sails.hooks.cron.jobs.myJob.start();
        console.log("start")
        res.redirect('/data-anime/1')
},
//mobile

    episodeMobile : function(req,res){
        var item_count = req.param('item_count')
        var page = req.param('page')
        Anime.findOne(req.param('id')).populateAll().exec(function(err,eps){
            if(err) return res.serverError(err)
            res.json(paginate(eps.episodes.sort(function(a, b){return b.episode - a.episode}),item_count,page))

        })
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

