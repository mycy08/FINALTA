/**
 * RatingController
 *
 * @description :: Server-side logic for managing ratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
function paginate(array, page_size, page_number) {
  --page_number; // because pages logically start with 1, but technically with 0
  return array.sort(function (a, b) { return b.updatedAt - a.updatedAt }).slice(page_number * page_size, (page_number + 1) * page_size);
}
module.exports = {
  tambahRating: function (req, res) {

    Rating.findOne({ id_anime: req.param('id_anime') }).where({ id_user: req.param('id_user') }).exec(function (err, rating) {
      if (err) {
        return res.serverError(err);
      }
      else {
        if (!rating) {
          var ratingObj = {
            owner_anime: req.param('id_anime'),
            owner_user: req.param('id_user'),
            id_anime: req.param('id_anime'),
            id_user: req.param('id_user'),
            score: req.param('score'),
            review: req.param('review')
          }
          Rating.create(ratingObj, function (err, ratings) {
            if (err) {
              var failedRating = [
                'Ada Kesalahan pada Server'
              ]
              req.session.flash = {
                err: failedRating
              }
            }
            else {
              var successRating = [
                'Review telah berhasil diberikan'
              ]
              req.session.flash = {
                err: successRating
              }
            }
            res.redirect("/rating/updateRating?id_anime=" + req.param('id_anime'))
          })

        }
        else {
          Rating.update({
            id_anime: req.param('id_anime'),
            id_user: req.param('id_user')
          }, {
              score: req.param('score'),
              review: req.param('review')
            }).exec(function (err, ratings) {
              var updateRating = [
                'Review Anime sudah berhasil diubah'
              ]
              req.session.flash = {
                err: updateRating
              }
              res.redirect("/rating/updateRating?id_anime=" + req.param('id_anime'))
            })


        }
      }
    })
  },
  updateRating: function (req, res) {
    Anime.findOne(req.param('id_anime')).populateAll().exec(function (err, anime) {
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
                photo_url: users.photo_url, users,
                review: user.review,
                score: user.score,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt


              })
              callback()
            }
          })
        }, function (err) {
          var jumlahRating,
            bintang,
            persenBintang5 = 0,
            persenBintang4 = 0,
            persenBintang3 = 0,
            persenBintang2 = 0,
            persenBintang1 = 0,
            t_score1 = 0,
            t_score2 = 0,
            t_score3 = 0,
            t_score4 = 0,
            t_score5 = 0,
            t_score6 = 0,
            t_score7 = 0,
            t_score8 = 0,
            t_score9 = 0,
            t_score10 = 0,
            score = 0

          _.each(anime.userStrings, function (cariRating) {
            if (cariRating.score == 10) {
              t_score10 = t_score10 + 1
              score = score + 10
            }
            else if (cariRating.score == 9) {
              t_score9 = t_score9 + 1
              score = score + 9
            }
            else if (cariRating.score == 8) {
              t_score8 = t_score8 + 1
              score = score + 8
            }
            else if (cariRating.score == 7) {
              t_score7 = t_score7 + 1
              score = score + 7
            }
            else if (cariRating.score == 6) {
              t_score6 = t_score6 + 1
              score = score + 6
            }
            else if (cariRating.score == 5) {
              t_score5 = t_score5 + 1
              score = score + 5
            }
            else if (cariRating.score == 4) {
              t_score4 = t_score4 + 1
              score = score + 4
            }
            else if (cariRating.score == 3) {
              t_score3 = t_score3 + 1
              score = score + 3
            }
            else if (cariRating.score == 2) {
              t_score2 = t_score2 + 1
              score = score + 2
            }
            else {
              t_score1 = t_score1 + 1
              score = score + 1
            }

            jumlahRating = t_score1 + t_score2 + t_score3 + t_score4 + t_score5 + t_score6 + t_score7 + t_score8 + t_score9 + t_score10


          })

          var ratingAkhir = (score / anime.userStrings.length)
          Anime.update({ id: req.param('id_anime') }, { score: ratingAkhir }).exec(function (err, animeUpdated) {
            res.redirect('/detail-anime/' + req.param('id_anime'));
            return
          })
        })


      }
    })
  },


  //mobile
  tambahRatingMobile: function (req, res) {

    Rating.findOne({ id_anime: req.param('id_anime') }).where({ id_user: req.param('id_user') }).exec(function (err, rating) {
      if (err) {
        return res.serverError(err);
      }
      else {
        if (!rating) {
          var ratingObj = {
            owner_anime: req.param('id_anime'),
            owner_user: req.param('id_user'),
            id_anime: req.param('id_anime'),
            id_user: req.param('id_user'),
            score: req.param('score'),
            review: req.param('review')
          }
          Rating.create(ratingObj, function (err, ratings) {
            if (err) {
              var failedRating = [
                'Ada Kesalahan pada Server'
              ]
              req.session.flash = {
                err: failedRating
              }
            }
            else {
              var successRating = [
                'Review telah berhasil diberikan'
              ]
              req.session.flash = {
                err: successRating
              }
            }
            res.redirect("/rating/updateRatingMobile?id_anime=" + req.param('id_anime'))
          })

        }
        else {
          Rating.update({
            id_anime: req.param('id_anime'),
            id_user: req.param('id_user')
          }, {
              score: req.param('score'),
              review: req.param('review')
            }).exec(function (err, ratings) {
              var updateRating = [
                'Review Anime sudah berhasil diubah'
              ]
              req.session.flash = {
                err: updateRating
              }
              res.redirect("/rating/updateRatingMobile?id_anime=" + req.param('id_anime'))
            })


        }
      }
    })
  },
  updateRatingMobile: function (req, res) {
    Anime.findOne(req.param('id_anime')).populateAll().exec(function (err, anime) {
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
                photo_url: users.photo_url, users,
                review: user.review,
                score: user.score,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt


              })
              callback()
            }
          })
        }, function (err) {
          var jumlahRating,
            bintang,
            persenBintang5 = 0,
            persenBintang4 = 0,
            persenBintang3 = 0,
            persenBintang2 = 0,
            persenBintang1 = 0,
            t_score1 = 0,
            t_score2 = 0,
            t_score3 = 0,
            t_score4 = 0,
            t_score5 = 0,
            t_score6 = 0,
            t_score7 = 0,
            t_score8 = 0,
            t_score9 = 0,
            t_score10 = 0,
            score = 0

          _.each(anime.userStrings, function (cariRating) {
            if (cariRating.score == 10) {
              t_score10 = t_score10 + 1
              score = score + 10
            }
            else if (cariRating.score == 9) {
              t_score9 = t_score9 + 1
              score = score + 9
            }
            else if (cariRating.score == 8) {
              t_score8 = t_score8 + 1
              score = score + 8
            }
            else if (cariRating.score == 7) {
              t_score7 = t_score7 + 1
              score = score + 7
            }
            else if (cariRating.score == 6) {
              t_score6 = t_score6 + 1
              score = score + 6
            }
            else if (cariRating.score == 5) {
              t_score5 = t_score5 + 1
              score = score + 5
            }
            else if (cariRating.score == 4) {
              t_score4 = t_score4 + 1
              score = score + 4
            }
            else if (cariRating.score == 3) {
              t_score3 = t_score3 + 1
              score = score + 3
            }
            else if (cariRating.score == 2) {
              t_score2 = t_score2 + 1
              score = score + 2
            }
            else {
              t_score1 = t_score1 + 1
              score = score + 1
            }

            jumlahRating = t_score1 + t_score2 + t_score3 + t_score4 + t_score5 + t_score6 + t_score7 + t_score8 + t_score9 + t_score10


          })

          var ratingAkhir = (score / anime.userStrings.length)
          Anime.update({ id: req.param('id_anime') }, { score: ratingAkhir }).exec(function (err, animeUpdated) {
            res.json(200, { pesan: "Rating Sukses" });

          })
        })


      }
    })
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
                email: users.email,
                photo_url: users.photo_url,
                review: user.review,
                score: user.score,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt


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
              var page = req.param('page')
              var item_count = req.param('item_count')
              res.json(paginate(anime.userStrings, item_count, page))
            }
          }
        })


      }
    })
  },

};

