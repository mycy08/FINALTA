/**
 * Genre_listController
 *
 * @description :: Server-side logic for managing genre_lists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	add:function(req,res){
        res.view('admin/addGenreList')
    },
    findall: function (req, res) {
        console.log("Inside findall..............");

        return Genre_list.find().then(function (genre_list) {
            console.log("animeService.findAll -- anime = " + genre_list);
            return res.view("admin/listEpisode", {
                status: 'OK',
                title: 'List of anime',
                genre_list: genre_list
            });
        }).catch(function (err) {
            console.error("Error on ContactService.findAll");
            console.error(err);
            return res.view('500', {message: "Sorry, an error occurd - " + err});
        });
    },
};

