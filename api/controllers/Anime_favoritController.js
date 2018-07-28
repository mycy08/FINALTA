/**
 * Anime_favoritController
 *
 * @description :: Server-side logic for managing anime_favorits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	tambah:function(req,res,next){
    Anime_favorit.findOne({  id_anime: req.param('id_anime') }).where({id_user : req.param('id_user')}).exec(function (err,search){
        if (err) {
            return res.serverError(err);
        }
        else{
            if(!search){
              
              var AfObj={
                owner_anime:req.param('id_anime'),
                owner_user:req.param('id_user'),
                id_anime : req.param('id_anime'),
                id_user : req.param('id_user')
              }
              Anime_favorit.create(AfObj,function(err,favorit){
                if(err){
                  var failedFavorit = [
                    'Ada Kesalahan pada Server'
                  ]
                  req.session.flash = {
                    err: failedFavorit
                  }
                }
                else{
                  var successFavorit = [
                    'Anime berhasil di favoritkan'
                  ]
                  req.session.flash = {
                    err: successFavorit
                  }
                  res.redirect('/profile/'+req.param('id_user'));
                  return
                }
              })
            }
            else{
              var failedFavorit = [
                'Anime sudah di favoritkan'
              ]
              req.session.flash = {
                err: failedFavorit
              }
              res.redirect('/profile/'+req.param('id_user'));
              return
            }
        }
    })
},
delete:function(req,res){
  Anime_favorit.destroy({id:req.param('id')}).exec(function(err){
      if(err){
          res.send(500,{error:'Database error'})
      }
      res.redirect('/profile/'+req.param('id_user'));
  })
},
//mobile
deleteMobile:function(req,res){
  Anime_favorit.destroy({id_anime:req.param('id_anime')}).where({id_user:req.param('id_user')}).exec(function(err){
      if(err){
          res.send(500,{error:'Database error'})
      }
      res.json(200,{pesan:"Sukses"});
  })
},
tambahFavorit:function(req,res,next){
    Anime_favorit.findOne({  id_anime: req.param('id_anime') }).where({id_user : req.param('id_user')}).exec(function (err,search){
        if (err) {
            return res.serverError(err);
        }
        else{
            if(!search){
              
              var AfObj={
                owner_anime:req.param('id_anime'),
                owner_user:req.param('id_user'),
                id_anime : req.param('id_anime'),
                id_user : req.param('id_user')
              }
              Anime_favorit.create(AfObj,function(err,favorit){
                if(err){
                  var failedFavorit = [
                    'Ada Kesalahan pada Server'
                  ]
                  req.session.flash = {
                    err: failedFavorit
                  }
                }
                else{
                  var successFavorit = [
                    'Anime berhasil di favoritkan'
                  ]
                  req.session.flash = {
                    err: successFavorit
                  }
                  res.json(200,{pesan : "sukses"});
                  return
                }
              })
            }
            else{
              var failedFavorit = [
                'Anime sudah di favoritkan'
              ]
              req.session.flash = {
                err: failedFavorit
              }
              res.json(202,{pesan : "error"});
              return
            }
        }
    })
},

};

