/**
 * AdminController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcrypt')
module.exports = {
    algo:function(req,res){
        res.view('admin/algoritma/algoritma.ejs',{
            layout:false,
            title:"Dashboard"
        })
    },
    dash:function(req,res){
        res.view('admin/dashboard.ejs',{
            layout:false,
            title:"Dashboard"
        })
    },
    dataUser:function(req,res){
        var page = req.param('page')
        var perPage = 12
        User.find()
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function(err,user){
                if(err) return res.serverError(err)
                User.count().exec(function(err,count){
                    res.view('admin/user/data-user',{
                        layout:false,
                        user:user,
                        title: 'Data User',
                        current: page,
                        pages: Math.ceil(count / perPage)
                    })
                })
            })
        
    },
    searchUser: function (req, res, next) {
        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }
        console.log(req.param('search'))
        User.find({ like: { nama: '%' + req.param('search') + '%' },
                     like: { email: '%' + req.param('search') + '%' }
        })
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function (err, search) {
                if (err) {
                    return res.serverError(err);
                }
                else {
                    console.log(search)


                User.count({ like: { nama: '%' + req.param('search') + '%' },
                            like: { email: '%' + req.param('search') + '%' }
                            
                }).exec(function (err, count) {
                        res.view("admin/user/searchUser/", {
                            layout: false,
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
    delete:function(req,res){
        User.update({id:req.param('id')},{status:"Banned"}).exec(function(err,banned){
            if(err) return res.serverError(err)
            res.redirect('/data-user/1')
        })
    },
    login: function (req, res) {
        res.view('loginAdmin', {
            layout: false,
            title: 'Login Admin',

        })
    },
    addAnime: function (req, res) {
        Genre.find().exec(function (err, genre) {
            if (err) return res.serverError(err)
            res.view('admin/anime/tambah-anime', {
                layout: false,
                title: 'Tambah Anime',
                genre: genre
            })
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
    dataAnime: function (req, res) {
        var page = req.param('page')
        var perPage = 19
        Anime.find()
            .sort('updatedAt desc')
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function (err, dataAnime) {
                if (err) return res.serverError(err)
                Anime.count().exec(function (err, count) {
                    res.view("admin/anime/data-anime", {
                        layout: false,
                        title: 'Data Anime',
                        dataAnime: dataAnime,
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


                    Anime.count({ like: { nama_anime: '%' + req.param('search') + '%' } }).exec(function (err, count) {
                        res.view("admin/anime/search/", {
                            layout: false,
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

    tambahAnime: function (req, res, next) {
        // console.log(req.param('genre'))
        genre = req.param('genre') + ""

        gen = genre.split(',')


        genres = genre.replace(/,/g, ", ")
        req.file('photo_url') // this is the name of the file in your multipart form
            .upload({ dirname: '../../assets/images/anime' }, function (err, uploads) {
                // try to always handle errors
                if (err) { return res.serverError(err) }
                // uploads is an array of files uploaded 
                // so remember to expect an array object
                if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
                // if file was uploaded create a new registry
                // at this point the file is phisicaly available in the hard drive

                var fd = uploads[0].fd;
                var nameImage = fd.substring(64)



                Anime.create({
                    nama_anime: req.param('nama_anime'),
                    url_anime_indo: req.param('url_anime_indo'),
                    url_anime_english: req.param('url_anime_english'),
                    type: req.param('type'),
                    status: req.param('status'),
                    tahun_terbit: req.param('tahun_terbit'),
                    photo_url: nameImage,
                    deskripsi: req.param('deskripsi'),
                    genre: genres,
                    score: 0

                }).exec(function (err, addAnime) {
                    if (err) { return res.serverError(err) }
                    Genre.find().exec(function (err, genree) {
                        if (err) return res.serverError(err)
                        var action = 0
                        var adventure = 0
                        var comedy = 0
                        var scifi = 0
                        var drama = 0
                        var space = 0
                        var supernatural = 0
                        var thriller = 0
                        var mystery = 0
                        var seinen = 0
                        var school = 0
                        var historical = 0
                        var echi = 0
                        var sliceoflife = 0
                        var harem = 0
                        var pyschological = 0
                        var superpower = 0
                        var fantasy = 0
                        var mecha = 0
                        var sports = 0
                        var romance = 0
                        var shounen = 0
                        var horor = 0
                        var martialarts = 0
                        var magic = 0
                        for (var i = 0; i < gen.length; i++) {

                            if (gen[i] == "Action") {
                                action = 1
                            }
                            if (gen[i] == "Adventure") {
                                adventure = 1
                            }
                            if (gen[i] == "Comedy") {
                                comedy = 1
                            }
                            if (gen[i] == "Sci-Fi") {
                                scifi = 1
                            }
                            if (gen[i] == "Drama") {
                                drama = 1
                            }
                            if (gen[i] == "Space") {
                                space = 1
                            }
                            if (gen[i] == "SuperNatural") {
                                supernatural = 1
                            }
                            if (gen[i] == "Thriller") {
                                thriller = 1
                            }
                            if (gen[i] == "Mystery") {
                                mystery = 1
                            }
                            if (gen[i] == "Seinen") {
                                seinen = 1
                            }
                            if (gen[i] == "School") {
                                school = 1
                            }
                            if (gen[i] == "Historical") {
                                historical = 1
                            }
                            if (gen[i] == "Ecchi") {
                                echi = 1
                            }
                            if (gen[i] == "Slice Of life") {
                                sliceoflife = 1
                            }

                            if (gen[i] == "Harem") {
                                harem = 1
                            }
                            if (gen[i] == "Pyschological") {
                                pyschological = 1
                            }
                            if (gen[i] == "Super Power") {
                                superpower = 1
                            }
                            if (gen[i] == "Fantasy") {
                                fantasy = 1
                            }
                            if (gen[i] == "Mecha") {
                                mecha = 1
                            }
                            if (gen[i] == "Sport") {
                                sports = 1
                            }
                            if (gen[i] == "Shounen") {
                                shounen = 1
                            }
                            if (gen[i] == "Romance") {
                                romance = 1
                            }
                            if (gen[i] == "Horror") {
                                horor = 1
                            }
                            if (gen[i] == "Martial Arts") {
                                martialarts = 1
                            }
                            if (gen[i] == "Magic") {
                                magic = 1
                            }





                        }
                        Rekomendasi.create({
                            id_anime: addAnime.id,
                            nama_anime: addAnime.nama_anime,
                            action: action,
                            adventure: adventure,
                            comedy: comedy,
                            scifi: scifi,
                            drama: drama,
                            space: space,
                            supernatural: supernatural,
                            thriller: thriller,
                            mystery: mystery,
                            seinen: seinen,
                            school: school,
                            historical: historical,
                            echi: echi,
                            sliceoflife: sliceoflife,
                            harem: harem,
                            pyschological: pyschological,
                            superpower: superpower,
                            fantasy: fantasy,
                            mecha: mecha,
                            sports: sports,
                            romance: romance,
                            shounen: shounen,
                            horor: horor,
                            martialarts: martialarts,
                            magic: magic,
                        }).exec(function (err, rekom) {
                            if (err) return res.serverError(err)
                        })
                    })

                    return res.redirect("/data-anime/1")
                    // if it was successful return the registry in the response

                })
            })
    },
    editAnime: function (req, res) {
        Anime.findOne(req.param('id')).exec(function (err, anime) {
            if (err) return res.serverError(err)
            Genre.find().exec(function (err, genre) {
                res.view("admin/anime/edit-anime", {
                    title: "Edit Anime",
                    layout: false,
                    anime: anime,
                    genre: genre
                })
            })
        })
    },
    updateAnime: function (req, res, next) {

        genre = req.param('genre') + ""

        gen = genre.split(',')

        genres = genre.replace(/,/g, ", ")
        req.file('photo_url') // this is the name of the file in your multipart form
            .upload({ dirname: '../../assets/images/anime' }, function (err, uploads) {
                // try to always handle errors
                if (err) { return res.serverError(err) }
                // uploads is an array of files uploaded 
                // so remember to expect an array object
                if (uploads.length === 0) { return res.badRequest('No file was uploaded') }
                // if file was uploaded create a new registry
                // at this point the file is phisicaly available in the hard drive

                var fd = uploads[0].fd;
                var nameImage = fd.substring(64)



                Anime.update({ id: req.param('id') },
                    {
                        nama_anime: req.param('nama_anime'),
                        url_anime_indo: req.param('url_anime_indo'),
                        url_anime_english: req.param('url_anime_english'),
                        type: req.param('type'),
                        status: req.param('status'),
                        tahun_terbit: req.param('tahun_terbit'),
                        photo_url: nameImage,
                        deskripsi: req.param('deskripsi'),
                        genre: genres,
                        score: 0

                    }).exec(function (err, addAnime) {
                        if (err) { return res.serverError(err) }
                        Genre.find().exec(function (err, genree) {
                            if (err) return res.serverError(err)
                            var action = 0
                            var adventure = 0
                            var comedy = 0
                            var scifi = 0
                            var drama = 0
                            var space = 0
                            var supernatural = 0
                            var thriller = 0
                            var mystery = 0
                            var seinen = 0
                            var school = 0
                            var historical = 0
                            var echi = 0
                            var sliceoflife = 0
                            var harem = 0
                            var pyschological = 0
                            var superpower = 0
                            var fantasy = 0
                            var mecha = 0
                            var sports = 0
                            var romance = 0
                            var shounen = 0
                            var horor = 0
                            var martialarts = 0
                            var magic = 0

                            Genre_list.destroy({ id_anime: req.param('id') }).exec(function (err, del) {
                                if (err) return res.serverError(err)
                            })
                            for (var i = 0; i < gen.length; i++) {

                                if (gen[i] == "Action") {
                                    action = 1
                                }
                                if (gen[i] == "Adventure") {
                                    adventure = 1
                                }
                                if (gen[i] == "Comedy") {
                                    comedy = 1
                                }
                                if (gen[i] == "Sci-Fi") {
                                    scifi = 1
                                }
                                if (gen[i] == "Drama") {
                                    drama = 1
                                }
                                if (gen[i] == "Space") {
                                    space = 1
                                }
                                if (gen[i] == "SuperNatural") {
                                    supernatural = 1
                                }
                                if (gen[i] == "Thriller") {
                                    thriller = 1
                                }
                                if (gen[i] == "Mystery") {
                                    mystery = 1
                                }
                                if (gen[i] == "Seinen") {
                                    seinen = 1
                                }
                                if (gen[i] == "School") {
                                    school = 1
                                }
                                if (gen[i] == "Historical") {
                                    historical = 1
                                }
                                if (gen[i] == "Ecchi") {
                                    echi = 1
                                }
                                if (gen[i] == "Slice Of life") {
                                    sliceoflife = 1
                                }

                                if (gen[i] == "Harem") {
                                    harem = 1
                                }
                                if (gen[i] == "Pyschological") {
                                    pyschological = 1
                                }
                                if (gen[i] == "Super Power") {
                                    superpower = 1
                                }
                                if (gen[i] == "Fantasy") {
                                    fantasy = 1
                                }
                                if (gen[i] == "Mecha") {
                                    mecha = 1
                                }
                                if (gen[i] == "Sport") {
                                    sports = 1
                                }
                                if (gen[i] == "Shounen") {
                                    shounen = 1
                                }
                                if (gen[i] == "Romance") {
                                    romance = 1
                                }
                                if (gen[i] == "Horror") {
                                    horor = 1
                                }
                                if (gen[i] == "Martial Arts") {
                                    martialarts = 1
                                }
                                if (gen[i] == "Magic") {
                                    magic = 1
                                }





                            }
                            Rekomendasi.update({ id_anime: req.param('id') }, {

                                nama_anime: req.param('nama_anime'),
                                action: action,
                                photo_url: nameImage,
                                adventure: adventure,
                                comedy: comedy,
                                scifi: scifi,
                                drama: drama,
                                space: space,
                                supernatural: supernatural,
                                thriller: thriller,
                                mystery: mystery,
                                seinen: seinen,
                                school: school,
                                historical: historical,
                                echi: echi,
                                sliceoflife: sliceoflife,
                                harem: harem,
                                pyschological: pyschological,
                                superpower: superpower,
                                fantasy: fantasy,
                                mecha: mecha,
                                sports: sports,
                                romance: romance,
                                shounen: shounen,
                                horor: horor,
                                martialarts: martialarts,
                                magic: magic,
                            }).exec(function (err, rekom) {
                                if (err) return res.serverError(err)
                            })
                        })
                        // if it was successful return the registry in the response
                        return res.redirect("/data-anime/1")
                    })
            })
    },
    hapus: function (req, res) {
        Anime.destroy(req.param('id')).exec(function (err, hapusAnime) {
            if (err) return res.serverError(err)

        })
        Rekomendasi.destroy({ id_anime: req.param('id') })
            .exec(function (err, hapusAnime) {
                if (err) return res.serverError(err)

            })

        Episode_anime.destroy({ id_anime: req.param('id') })
            .exec(function (err, hapusAnime) {
                if (err) return res.serverError(err)

            })

        Rating.destroy({ id_anime: req.param('id') })
            .exec(function (err, hapusAnime) {
                if (err) return res.serverError(err)

            })
        Notifikasi.destroy({ id_anime: req.param('id') })
            .exec(function (err, hapusAnime) {
                if (err) return res.serverError(err)

            })
        Anime_favorit.destroy({ id_anime: req.param('id') })
            .exec(function (err, hapusAnime) {
                if (err) return res.serverError(err)

            })
        res.redirect('/data-anime/1')
    },
    destroy: function (req, res, next) {

		Admin.findOne(req.session.Admin.id, function foundUser(err, user) {

			var userId = req.session.Admin.id;

			if (user) {

				User.update(userId, {
					online: false
				}, function (err) {
					if (err) return next(err);


					Admin.publishUpdate(userId, {
						loggedIn: false,
						id: userId,
						name: user.nama,
						action: ' has logged out.'
					});


					req.session.destroy();


					res.redirect('/login-admin');
				});
			} else {


				req.session.destroy();


				res.redirect('/login-admin');
			}
		});
	},

};

