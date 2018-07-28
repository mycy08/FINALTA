/**
 * RatingController
 *
 * @description :: Server-side logic for managing ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function paginate (array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.sort(function(a, b){return b.updatedAt - a.updatedAt} ).slice(page_number * page_size, (page_number + 1) * page_size);
}
module.exports = {
	add:function(req,res){
        res.view('admin/addRating')
    },
    RatingMobile: function (req, res, next) {

        Anime.findOne(req.param('id')).populateAll().exec(function (err, anime) {
            if (err) {
                return res.serverError(err);
            } else {
                anime.userStrings = []
                async.each(anime.ratings, function (user, callback) {

                            User.findOne({ id: user.id_user }).exec(function (err, users) {
                                if (err) {
                                    callback(err)
                                } else {
                                    anime.userStrings.push({
                                        id: users.id,
                                        nama: users.nama,
                                        email :users.email,
                                        photo_url: users.photo_url,
                                        review: user.review,
                                        score: user.score,
                                        createdAt : user.createdAt,
                                        updatedAt :user.updatedAt
                                        

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
                                        var page=req.param('page')
                                        var item_count = req.param('item_count')
                                        res.json(paginate(anime.userStrings,item_count,page)) 
                                    }
                            }
                        })
                

            }
        })
    },
    tambahRating:function(req,res){
       
        Rating.findOne({id_anime:req.param('id_anime')}).where({id_user:req.param('id_user')}).exec(function(err,rating){
            if (err) {
                return res.serverError(err);
            }
            else{
                if(!rating){
                    var ratingObj={
                        owner_anime:req.param('id_anime'),
                        owner_user:req.param('id_user'),
                        id_anime : req.param('id_anime'),
                        id_user : req.param('id_user'),
                        score:req.param('score'),
                        review:req.param('review')
                    }
                  Rating.create(ratingObj,function(err,ratings){
                    if(err){
                      var failedRating = [
                        'Ada Kesalahan pada Server'
                      ]
                      req.session.flash = {
                        err: failedRating
                      }
                    } 
                    else{
                      var successRating = [
                        'Review telah berhasil diberikan'
                      ]
                      req.session.flash = {
                        err: successRating
                      }
                      
                      res.redirect('/detail-anime/'+req.param('id_anime'));
                      return
                    }
                  })
                }
                else{
                  Rating.update({
                    id_anime :req.param('id_anime'),
                    id_user :req.param('id_user')
                  },{
                    score:req.param('score'),
                    review:req.param('review')
                  }).exec(function(err,ratings){
                    var updateRating = [
                      'Review Anime sudah berhasil diubah'
                    ]
                    req.session.flash = {
                      err: updateRating
                    }
                    res.redirect('/detail-anime/'+req.param('id_anime'));
                    return
                  })
                  
                }
            }
        })
    },

    findall: function (req, res) {
        console.log("Inside findall..............");

        return Rating.find().then(function (rating) {
            console.log("animeService.findAll -- anime = " + rating);
            return res.view("admin/listEpisode", {
                status: 'OK',
                title: 'List of anime',
                rating: rating
            });
        }).catch(function (err) {
            console.error("Error on ContactService.findAll");
            console.error(err);
            return res.view('500', {message: "Sorry, an error occurd - " + err});
        });
    },
    tambahRatingMobile:function(req,res){
       
        Rating.findOne({id_anime:req.param('id_anime')}).where({id_user:req.param('id_user')}).exec(function(err,rating){
            if (err) {
                return res.serverError(err);
            }
            else{
                if(!rating){
                    var ratingObj={
                        owner_anime:req.param('id_anime'),
                        owner_user:req.param('id_user'),
                        id_anime : req.param('id_anime'),
                        id_user : req.param('id_user'),
                        score:req.param('score'),
                        review:req.param('review')
                    }
                  Rating.create(ratingObj,function(err,ratings){
                    if(err){
                      var failedRating = [
                        'Ada Kesalahan pada Server'
                      ]
                      req.session.flash = {
                        err: failedRating
                      }
                    } 
                    else{
                      var successRating = [
                        'Review telah berhasil diberikan'
                      ]
                      req.session.flash = {
                        err: successRating
                      }
                      
                      res.redirect('/anime/detailAnimeMobile/'+req.param('id_anime'));
                      return
                    }
                  })
                }
                else{
                  Rating.update({
                    id_anime :req.param('id_anime'),
                    id_user :req.param('id_user')
                  },{
                    score:req.param('score'),
                    review:req.param('review')
                  }).exec(function(err,ratings){
                    var updateRating = [
                      'Review Anime sudah berhasil diubah'
                    ]
                    req.session.flash = {
                      err: updateRating
                    }
                    res.redirect('/anime/detailAnimeMobile/'+req.param('id_anime'))
                    // res.redirect('/detail-anime/'+req.param('id_anime'));
                    return
                  })
                  
                }
            }
        })
    }
};

