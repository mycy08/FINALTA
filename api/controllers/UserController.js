/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var bcrypt = require('bcrypt')
module.exports = {
  
  userProfile: function (req, res, next) {
    User.findOne(req.param('id')).populateAll().exec(function (err, user) {
      if (err) {
        return res.serverError(err);
      } else {
        user.anfavStrings = []
        async.each(user.anime_favorits, function (anfav, callback) {
          Anime.findOne({ id: anfav.owner_anime }).exec(function (err, anfavs) {
            if (err) {
              callback(err)
            } else {

              user.anfavStrings.push({
                id_fav: anfav.id,
                id: anfavs.id,
                nama_anime: anfavs.nama_anime,
                photo_url: anfavs.photo_url,
                deskripsi: anfavs.deskripsi
              })
              callback()
            }
          })
        }, function (err) { // function ini akan jalan bila semua genre_lists telah diproses

          if (err) {
            return res.serverError(err);
          }
          else {
            Genre.find().exec(function (err, genre) {
              if (req.session.User) {
                Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function(err,notif){
                  Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                    res.view("user/profile", {
                      notif:notif,
                      genre: genre,
                      status: 'OK',
                      title: 'Prorfil',
                      user: user,
                      countNotif:countNotif
                    })
                  })
                 
                })
                
              }
            else{
              res.view("user/profile", {
                genre: genre,
                status: 'OK',
                title: 'Prorfil',
                user: user
              })
            }

            })

          }
        })
      }
    })
  },
  editProfile: function (req, res, next) {
    User.findOne(req.param('id'), function (err, editProfile) {
      if (err) {
        console.log(err);
      }
      else {
        Genre.find().exec(function (err, genre) {
          if (req.session.User) {
            Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function(err,notif){
              Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                return res.view('user/edit-profile', {
                  notif:notif,
                  status: 'OK',
                  title: 'Edit Profil',
                  genre: genre,
                  editProfile: editProfile,
                  countNotif:countNotif
                })
              })
              
            })
          }
          else{
            return res.view('user/edit-profile', {
              status: 'OK',
              title: 'Edit Profil',
              genre: genre,
              editProfile: editProfile
            })
          }
          
        })

      }
    })
  },
  updateProfile:function(req,res,next){
    var userObj = {
      nama: req.param('nama'),
      tgl_lahir: req.param('tgl_lahir'),
      jenis_kelamin: req.param('jenis_kelamin'),
      email: req.param('email'),
      no_hp: req.param('no_hp')
    }
    
    if(req.param('no_hp').length>12|| req.param('no_hp').length<11){
      var failedNohp = [
        'Nomor Hp yang Anda masukan salah'
      ]
      req.session.flash = {
        err: failedNohp
      }
      res.redirect('/edit-profile/'+req.param('id'));
      return
    }
    else{
      User.update(req.param('id'),userObj,function(err){
      
        if(err){
          console.log(err);
        }
        else{
          var ubahSuccess = [
            'Biodata Sudah berhasil diubah',
          ]
          req.session.flash = {
            err: ubahSuccess
          // If error redirect back to sign-up page
          }
          res.redirect('/profile/' + req.param('id'));
        }
      })
    }
      
    
  },
  gantiPassword:function(req,res,next){
    User.findOne(req.param('id')).exec(function(err,user){
      if(req.param('password_lama')==req.param('password_baru')){
        console.log("bener")
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.param('password_baru'), salt, function(err, hash) {
            if(err) {
                console.log(err);     
            } else {
              var passObj={
                  password : hash
                }
              User.update(req.param('id'),passObj,function(err){
  
                      if(err){
                        console.log(err);
                      }
                      else{
                        var ubahPass = [
                          'Password berhasil diubah, Silahkan Login kembali !',
                        ]
                        req.session.flash = {
                          err: ubahPass
                        // If error redirect back to sign-up page
                        }
                        res.redirect('/login/');
                      }
                })    
            }
          });
        });
      }
      else{
        var usernamePasswordMismatchError = [
          "Konfirmasi password tidak sama dengan Kata sandi baru !"
        ]
        req.session.flash = {
          err: usernamePasswordMismatchError
        }
        res.view("user/ganti-sandi/", {
					layout:false,
                    status: 'OK',
                    title: 'Aktivasi Akun',
                    user: user
                }) 
      }
    })
    
  },
  updateProfilPassword:function(req,res,next){
    User.findOne(req.param('id'), function(err,pass){
      if(err){
        console.log(err)
      }
      else{
        bcrypt.compare(req.param('password_lama'), pass.password, function(err, valid) {
          if (err) return next(err);
  
          // If the password from the form doesn't match the password from the database...
          if (!valid) {
            var usernamePasswordMismatchError = [
              "Password Lama Anda salah"
            ]
            req.session.flash = {
              err: usernamePasswordMismatchError
            }
            res.redirect('/profile/' + req.param('id'));
            return;
          }
          else{
            var passbaru 
            bcrypt.genSalt(10, function(err, salt) {
              bcrypt.hash(req.param('password_baru'), salt, function(err, hash) {
                if(err) {
                    console.log(err);     
                } else {
                  var passObj={
                      password : hash
                    }
                  User.update(req.param('id'),passObj,function(err){
    
                          if(err){
                            console.log(err);
                          }
                          else{
                            var ubahPass = [
                              'Password berhasil diubah',
                            ]
                            req.session.flash = {
                              err: ubahPass
                            // If error redirect back to sign-up page
                            }
                            res.redirect('/profile/' + req.param('id'));
                          }
                    })    
                }
              });
            });
            
          }
        })
      }
    })
  },
  uploadPhotoProfil: function(req, res) {
    req.file('photo_url') // this is the name of the file in your multipart form
    .upload({ dirname: '../../assets/images/user' }, function(err, uploads) {
      // try to always handle errors
      if (err) { return res.serverError(err) }
      // uploads is an array of files uploaded 
      // so remember to expect an array object
      if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
      // if file was uploaded create a new registry
      // at this point the file is phisicaly available in the hard drive
      var id =User.id;
      var photo = User.photo;
      var fd = uploads[0].fd;  
      var nameImage = fd.substring(64)
      
      User.update({id:req.param('id')}
                ,
                {photo_url: nameImage
              }).exec(function(err, file) {
                if (err) { return res.serverError(err) }
                // if it was successful return the registry in the response
                res.redirect('/profile/' + req.param('id'));
    })
    })
    
},
  
  
  
  create:function(req,res,next){
    User.findOneByEmail(req.param('email'),function(err,user){
      if(user){
        var emailAlready = [
          'Email sudah terdaftar. gunakan email lain untuk mendaftar'
				]
				req.session.flash = {
					err: emailAlready
        }
        res.redirect('/register');
        return
      }
      else{
        
        if(req.param('no_hp').length>12|| req.param('no_hp').length<11){
          var failedNohp = [
            'Nomor Hp yang Anda masukan salah'
          ]
          req.session.flash = {
            err: failedNohp
          }
          res.redirect('/register');
          return
        }
        else{
          User.findOne({no_hp:req.param('no_hp')}).exec(function(err,user){
            if(user){
              var nohpready = [
                'Nomor Hp sudah terdaftar. gunakan Nomor Hp lain untuk mendaftar'
              ]
              req.session.flash = {
                err: nohpready
              }
              res.redirect('/register');
              return
            }
            else{
              var kode = Math.floor(Math.random()*90000) + 10000;
              var userObj={
                email:req.param('email'),
                password:req.param('password'),
                nama:req.param('nama'),
                no_hp:req.param('no_hp'),
                kode_verifikasi:kode,
                status:false
              }
              User.create(userObj).exec(function(err,user){ 
                  if (err) {
                    console.log(err);
                    
                    }
                  else{
                    var daftarSuccess = [
                      'Email sudah berhasil didaftar. Silahkan Login'
                    ]
                    req.session.flash = {
                      err: daftarSuccess
                    // If error redirect back to sign-up page
                    }
                    mailer.sendWelcomeMail(user)
                    res.redirect('/login');
                    return;
                  }
                })
            }
          })
          
        }
        
      }
    })
  },

  //mobile
  gantiPasswordMobile:function(req,res,next){
    User.findOne(req.param('email')).exec(function(err,user){
      if(req.param('password_lama')==req.param('password_baru')){
        console.log("bener")
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(req.param('password_baru'), salt, function(err, hash) {
            if(err) {
                console.log(err);     
            } else {
              var passObj={
                  password : hash
                }
              User.update(req.param('id'),passObj,function(err){
  
                      if(err){
                        console.log(err);
                      }
                      else{
                        var ubahPass = [
                          'Password berhasil diubah, Silahkan Login kembali !',
                        ]
                        req.session.flash = {
                          err: ubahPass
                        // If error redirect back to sign-up page
                        }
                        res.json(200,{pesan:"sukses"});
                      }
                })    
            }
          });
        });
      }
      else{
        var usernamePasswordMismatchError = [
          "Konfirmasi password tidak sama dengan Kata sandi baru !"
        ]
        req.session.flash = {
          err: usernamePasswordMismatchError
        }
        res.json(202,{pesan:"password tidak sama"})
      }
    })
    
  },
    profileMobile: function(req, res, next){
    var email = req.param('email')
    User.findOne({email:email}).populateAll().exec(function(err,user){
        if (err) {
            return res.serverError(err);
          }
          if (!user) {
            return res.notFound('Could not find email, sorry.');
          }
        
          //sails.log('Found "%s"', finn.fullName);
          
            res.json(user)
        });
        
    },
animeFavoritMobile: function(req, res, next){
  User.findOne({email:req.param('email')}).populateAll().exec(function(err,user){
  if (err){
    return res.serverError(err);
  } else {
      user.anfavStrings = []
      async.each(user.anime_favorits, function(anfav,callback){
        
          Anime.findOne({id:anfav.owner_anime}).exec(function(err,anfavs){
            if (err) {
              callback(err)
            } else {
              
              user.anfavStrings.push({
                  id_fav:anfav.id,
                  id:anfavs.id,
                  total:user.anime_favorits.length,
                  nama_anime:anfavs.nama_anime,
                  photo_url :anfavs.photo_url,
                  deskripsi :anfavs.deskripsi,
                  createdAt : anfav.createdAt
                })
              callback()
            }
          })
  }, function(err){ // function ini akan jalan bila semua genre_lists telah diproses
          
          if (err){
            return res.serverError(err);
          }
          else{
            
            // console.log(user.anfavStrings.sort(function(a, b){return b.createdAt - a.createdAt}))
            res.json(user.anfavStrings.sort(function(a, b){return b.createdAt - a.createdAt}))
             
          }
      })
  }
})
        
    },
uploadPhotoProfilMobile: function(req, res) {
    req.file('file') // this is the name of the file in your multipart form
    .upload({ dirname: '../../assets/images/user' }, function(err, uploads) {
      // try to always handle errors
      if (err) { return res.serverError(err) }
      // uploads is an array of files uploaded 
      // so remember to expect an array object
      if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
      // if file was uploaded create a new registry
      // at this point the file is phisicaly available in the hard drive
      var id =User.id;
      var photo = User.photo;
      var fd = uploads[0].fd;
      
      var nameImage = fd.substring(64)
      
      
      User.update({id:req.param('id')}
                ,
                {photo_url: nameImage
              }).exec(function(err, file) {
                if (err) { return res.serverError(err) }
                // if it was successful return the registry in the response
                res.json(file);
    })
    })
    
},
  
updateMobile: function(req, res, next){
    User.update(req.param('id'),req.params.all(), function userUpdated(err,user){
        if(err){
            return res.redirect('/user/' + req.param('id'));
        }
  if(user)
    res.json(user);
    });
},
createMobile:function(req,res,next){
    User.findOneByEmail(req.param('email'),function(err,user){
      if(user){
        var emailAlready = [
          'Email sudah terdaftar. gunakan email lain untuk mendaftar'
        ]
        req.session.flash = {
          err: emailAlready
        }
        res.json(500,{ pesan: 'emailReady' });
        return
      }
      else{
        
        if(req.param('no_hp').length>12|| req.param('no_hp').length<11){
          var failedNohp = [
            'Nomor Hp yang Anda masukan salah'
          ]
          req.session.flash = {
            err: failedNohp
          }
          res.redirect('/register');
          return
        }
        else{
          User.findOne({no_hp:req.param('no_hp')}).exec(function(err,user){
            if(user){
              var nohpready = [
                'Nomor Hp sudah terdaftar. gunakan Nomor Hp lain untuk mendaftar'
              ]
              req.session.flash = {
                err: nohpready
              }
              res.json(501,{ pesan: 'nomorReady' });
              return
            }
            else{
              var kode = Math.floor(Math.random()*90000) + 10000;
              var userObj={
                email:req.param('email'),
                password:req.param('password'),
                nama:req.param('nama'),
                no_hp:req.param('no_hp'),
                kode_verifikasi:kode,
                status:false
              }
              User.create(userObj).exec(function(err,user){ 
                  if (err) {
                    console.log(err);
                    
                    }
                  else{
                    var daftarSuccess = [
                      'Email sudah berhasil didaftar. Silahkan Login'
                    ]
                    req.session.flash = {
                      err: daftarSuccess
                    // If error redirect back to sign-up page
                    }
                    mailer.sendWelcomeMail(user)
                    res.json(200,{ pesan: 'true' });
                    return;
                  }
                })
            }
          })
          
        }
        
      }
    })
  },
updateProfilPasswordMobile:function(req,res,next){
  User.findOne(req.param('id'), function(err,pass){
    if(err){
      console.log(err)
    }
    else{
      bcrypt.compare(req.param('password_lama'), pass.password, function(err, valid) {
        if (err) return next(err);

        // If the password from the form doesn't match the password from the database...
        if (!valid) {
          var usernamePasswordMismatchError = [
            "Password Lama Anda salah"
          ]
          req.session.flash = {
            err: usernamePasswordMismatchError
          }
          res.send('false')
          return;
        }
        else{
          var passbaru 
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.param('password_baru'), salt, function(err, hash) {
              if(err) {
                  console.log(err);     
              } else {
                var passObj={
                    password : hash
                  }
                User.update(req.param('id'),passObj,function(err,userUpdated){
  
                        if(err){
                          console.log(err);
                        }
                        else{
                          var ubahPass = [
                            'Password berhasil diubah',
                          ]
                          req.session.flash = {
                            err: ubahPass
                          // If error redirect back to sign-up page
                          }
                          res.send('true');
                        }
                  })    
              }
            });
          });
          
        }
      })
    }
  })
},
animeFavoritMobile: function(req, res, next){
  User.findOne({email:req.param('email')}).populateAll().exec(function(err,user){
  if (err){
    return res.serverError(err);
  } else {
      user.anfavStrings = []
      async.each(user.anime_favorits, function(anfav,callback){
        
          Anime.findOne({id:anfav.owner_anime}).exec(function(err,anfavs){
            if (err) {
              callback(err)
            } else {
              
              user.anfavStrings.push({
                  id_fav:anfav.id,
                  id:anfavs.id,
                  total:user.anime_favorits.length,
                  nama_anime:anfavs.nama_anime,
                  photo_url :anfavs.photo_url,
                  deskripsi :anfavs.deskripsi,
                  createdAt : anfav.createdAt
                })
              callback()
            }
          })
  }, function(err){ // function ini akan jalan bila semua genre_lists telah diproses
          
          if (err){
            return res.serverError(err);
          }
          else{
            
            // console.log(user.anfavStrings.sort(function(a, b){return b.createdAt - a.createdAt}))
            res.json(user.anfavStrings.sort(function(a, b){return b.createdAt - a.createdAt}))
             
          }
      })
  }
})
        
    }
}