/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcrypt')
module.exports = {
    login:function(req,res){
        res.view('loginAdmin',{
            layout:false,
            title:'loginAdmin',
            
        })
    },
    addAnime:function(req,res){
        res.view('admin/anime/tambah-anime',{
            layout:false,
            title: 'Tambah Anime',
        })
    },
    loginAdmin: function (req, res, next) {


		if (!req.param('email') || !req.param('password')) {

			var usernamePasswordRequiredError = [
				"Masukan Username dan Password anda"
			]


			req.session.flash = {
				err: usernamePasswordRequiredError
			}

			res.redirect('/admin/login');
			return;
		}


		Admin.findOneByEmail(req.param('email'), function foundUser(err, admin) {
			if (err) return next(err);


			if (!admin) {
				var noAccountError = [
					"Email Belum Terdaftar"
				]
				req.session.flash = {
					err: noAccountError
				}
				res.redirect('/admin/login');
				return;
			}
			
				bcrypt.compare(req.param('password'), admin.password, function (err, valid) {
					if (err) return next(err);


					if (!valid) {
						var usernamePasswordMismatchError = [
							"Email atau Password Salah"
						]
						req.session.flash = {
							err: usernamePasswordMismatchError
						}
						res.redirect('/admin/login');
						return;
					}


					req.session.authenticated = true;
					req.session.Admin = admin;
					res.redirect('/data-anime/1');

				});
			


		});
	},
    dataAnime:function(req,res){
        var page = req.param('page')
        var perPage=19
        Anime.find()
            .sort('updatedAt desc')
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function(err,dataAnime){
            if(err) return res.serverError(err)
            Anime.count().exec(function(err,count){
                res.view("admin/anime/data-anime",{
                    layout:false,
                    title: 'Data Anime',
                    dataAnime:dataAnime,
                    current: page,
                    pages: Math.ceil(count / perPage)
                })
            })
            
        })
    },
    search: function (req, res, next) {
        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }

        Anime.find({ like: { nama_anime: '%' + req.param('search') + '%' } })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec(function (err, search) {
            if (err) {
                return res.serverError(err);
            }
            else {
                

                        Anime.count({ like: { nama_anime: '%' + req.param('search') + '%' } }).exec(function(err,count){
                            res.view("admin/anime/search/", {
                                layout:false,
                                status: 'OK',
                                title: 'Hasil Pencarian',
                                search: search,
                                current: page,
                                pages: Math.ceil(count / perPage)
                            })
                        })
                        
            }

        })


    },

};

