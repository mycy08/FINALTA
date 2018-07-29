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
};

