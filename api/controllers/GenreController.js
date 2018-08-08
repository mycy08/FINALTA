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
                nama_genre=req.param('nama_genre')
            
                Anime.find({like:{genre:'%' + req.param('nama_genre') + '%' }}).exec(function(err,anime){
                    if(err) return res.serverError(err)
                    Genre.find().exec(function(err,genre){
                        if (req.session.User) {
                            Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function(err,notif){
                                Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                    res.view("user/genre/", {
                                        notif:notif,
                                        status: 'OK',
                                        title: 'Genre',
                                        nama_genre:nama_genre,
                                        anime:anime,
                                        genre:genre,
                                        countNotif:countNotif
                                        
                                    })
                                })
                                
                            })
                          }
                        else{
                            res.view("user/genre/", {

                                status: 'OK',
                                title: 'Genre',
                                nama_genre:nama_genre,
                                anime:anime,
                                genre:genre,
                                
                            })
                        }
                        
                    })
                })
                
        
    },
    //mobile
    tampilGenreMobile:function(req,res){
        var page_number = req.param('page_number')
        var item_count = req.param('item_count')
        Anime.find({like:{genre:'%' + req.param('nama_genre') + '%' }})
            .skip((item_count * page_number) - item_count)
            .limit(item_count)
        .exec(function(err,genre){
            if(err) return res.serverError(err)
            res.json(genre)
            
        })
    },
    
};

