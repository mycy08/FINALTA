/**
 * GenreController
 *
 * @description :: Server-side logic for managing genres
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}
function paginate(array, perPage, page) {
    --page; // because pages logically start with 1, but technically with 0
    return array.slice(page * perPage, (page + 1) * perPage);
}
module.exports = {
	add:function(req,res){
        res.view('admin/addGenre')
    },
    tampilGenre:function(req,res){
        Genre.findOne({id:req.param('id')})
            
            .populateAll().exec(function(err,gen){
            if(err){
                return res.serverError(err);
            }
            else{
                gen.animeStrings =[]
                async.each(gen.genres, function (genres, callback) {
                    Anime.findOne({ id: genres.id_anime }).exec(function (err, anime) {
                        if (err) {
                            callback(err)
                        } else {
                            gen.animeStrings.push({
                                id: anime.id,
                                type:anime.type,
                                score:anime.score,
                                nama_anime: anime.nama_anime,
                                photo_url: anime.photo_url, 
                                deskripsi : anime.deskripsi
                            })
                            callback()
                        }
                    })
                }, function (err) { 
                    
                    if (err)
                        return res.serverError(err);
                    else {
                        if (err)
                                return res.serverError(err);
                            else {
                                
                                Genre.find().exec(function(err,genre){
                                    if (req.session.User) {
                                        Notifikasi.find({ id_user: req.session.User.id }).sort('updateAt DESC').exec(function(err,notif){
                                            res.view("user/genre/", {
                                                notif:notif,
                                                status: 'OK',
                                                title: 'Genre',
                                                gen:gen,
                                                genre:genre,
                                                
                                            })
                                        })
                                      }
                                    else{
                                        res.view("user/genre/", {

                                            status: 'OK',
                                            title: 'Genre',
                                            gen:gen,
                                            genre:genre,
                                            
                                        })
                                    }
                                    
                                })
                                
                            }
                    }
                })
            }
        })
    },
    //mobile
    tampilGenreMobile:function(req,res){
        var page_number = req.param('page_number')
        var item_count = req.param('item_count')
        Genre.findOne({id:req.param('id')})
            
            .populateAll().exec(function(err,gen){
            if(err){
                return res.serverError(err);
            }
            else{
                gen.animeStrings =[]
                async.each(gen.genres, function (genres, callback) {
                    Anime.findOne({ id: genres.id_anime }).exec(function (err, anime) {
                        if (err) {
                            callback(err)
                        } else {
                            gen.animeStrings.push({
                                id: anime.id,
                                nama_anime: anime.nama_anime,
                                photo_url: anime.photo_url, 
                                deskripsi : anime.deskripsi
                            })
                            callback()
                        }
                    })
                }, function (err) { 
                    
                    if (err)
                        return res.serverError(err);
                    else {
                        if (err)
                                return res.serverError(err);
                            else {
                                
                                res.json(paginate(gen.animeStrings,item_count,page_number))
                                
                            }
                    }
                })
            }
        })
    },
    
};

