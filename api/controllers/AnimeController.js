/**
 * AnimeController
 *
 * @description :: Server-side logic for managing animes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nestedPop = require('nested-pop')
var Promise = require('bluebird');
var moment = require('moment');
function paginate(array, perPage, page) {
    --page; // because pages logically start with 1, but technically with 0
    return array.slice(page * perPage, (page + 1) * perPage);
}
module.exports = {
    editAni: function (req, res) {
        res.view('admin/editAnime', {
            layout: false
        })
    },
    editAnime: function (req, res, next) {
        var id = req.param('id_anime')
        Anime.update({ id: id }, {
            genre: req.param('genre'),

        }).exec(function (err, animeUpdated) {
            if (err) {
                if (err) return next(err)

            }
            res.json(animeUpdated)
        })
    },
    animeTerbaru: function (req, res, next) {

        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }

        Episode_anime
            .find({})
            .sort({ createdAt: 'DESC', episode: 'DESC' })
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .populateAll()
            .exec(function (err, episode) {
                Genre.find().exec(function (err, genre) {
                    Episode_anime.count().exec(function (err, count) {
                        if (err) return next(err)
                        if (req.session.User) {
                            Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                                Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                    res.view('user/anime-terbaru/', {
                                        title: "Anime Terbaru",
                                        notif: notif,
                                        episode: episode,
                                        genre: genre,
                                        moment:moment,
                                        countNotif:countNotif,
                                        current: page,
                                        pages: Math.ceil(count / perPage)
                                    })
                                })
                                
                            })
                        }
                        else {
                            res.view('user/anime-terbaru/', {
                                title: "Anime Terbaru",
                                episode: episode,
                                genre: genre,
                                moment:moment,
                                current: page,
                                pages: Math.ceil(count / perPage)
                            })
                        }

                    })
                })

            });
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
                
                Genre.find().exec(function (err, genre) {
                    if (req.session.User) {
                        Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                            Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                Anime.count({ like: { nama_anime: '%' + req.param('search') + '%' } }).exec(function(err,count){
                                    res.view("user/search/", {
                                        status: 'OK',
                                        notif: notif,
                                        title: 'Hasil Pencarian',
                                        genre: genre,
                                        search: search,
                                        countNotif:countNotif,
                                        current: page,
                                        pages: Math.ceil(count / perPage)
                                        
                                       
                                    })
                                })
                            })
                            
                            
                        })
                    }
                    else {
                        Anime.count({ like: { nama_anime: '%' + req.param('search') + '%' } }).exec(function(err,count){
                            res.view("user/search/", {
                                status: 'OK',
                                title: 'Hasil Pencarian',
                                genre: genre,
                                search: search,
                                current: page,
                                pages: Math.ceil(count / perPage)
                            })
                        })
                        
                    }

                })


            }
        })
    },

    daftarAnime: function (req, res, next) {
        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }

        var item_count = req.param('item_count')
        var page_number = req.param('page_number')
        Anime.find()
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function (err, anime) {
                if (err) {
                    return res.serverError(err);
                }
                else {
                    Genre.find().exec(function (err, genre) {
                        Anime.count().exec(function (err, count) {
                            if (err) return next(err)
                            if (req.session.User) {
                                Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                                    Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                        res.view('user/daftar-anime/', {
                                            title: "Daftar Anime",
                                            notif: notif,
                                            anime: anime,
                                            genre: genre,
                                            countNotif:countNotif,
                                            current: page,
                                            pages: Math.ceil(count / perPage)
                                        })
                                    })
                                    
                                })
                            }
                            else {
                                res.view('user/daftar-anime/', {
                                    title: "Daftar Anime",
                                    anime: anime,
                                    genre: genre,
                                    current: page,
                                    pages: Math.ceil(count / perPage)
                                })
                            }

                        })
                    })

                }

            })
    },
    popular: function (req, res, next) {
        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }

        var item_count = req.param('item_count')
        var page_number = req.param('page_number')
        Anime.find()
            .sort("score desc")
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .exec(function (err, anime) {
                if (err) {
                    return res.serverError(err);
                }
                else {
                    Genre.find().exec(function (err, genre) {
                        Anime.count().exec(function (err, count) {
                            if (err) return next(err)
                            if (req.session.User) {
                                Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                                    Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                        res.view('user/popular/', {
                                            title: "Anime Populer",
                                            notif: notif,
                                            anime: anime,
                                            genre: genre,
                                            countNotif:countNotif,
                                            current: page,
                                            pages: Math.ceil(count / perPage)
                                        })
                                    })
                                    
                                })
                            }
                            else {
                                res.view('user/popular/', {
                                    title: "Anime Populer",
                                    anime: anime,
                                    genre: genre,
                                    current: page,
                                    pages: Math.ceil(count / perPage)
                                })
                            }

                        })
                    })

                }

            })
    },

    detailAnime: function (req, res, next) {

        Temp.destroy().exec(function (deletaAll) {

        })

        Anime.findOne(req.param('id')).populateAll().exec(function (err, anime) {
            if (err) {
                return res.serverError(err);
            } else {

                anime.genreStrings = []
                anime.userStrings = []
                async.each(anime.genre_lists, function (genre, callback) {
                    Genre.findOne({ id: genre.id_genre }).exec(function (err, genres) {
                        if (err) {
                            callback(err)
                        } else {

                            anime.genreStrings.push({

                                id: genres.id,
                                nama_genre: genres.nama_genre
                            })
                            callback()
                        }
                    })
                }, function (err) {

                    if (err)
                        return res.serverError(err);
                    else {
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

                            if (err)
                                return res.serverError(err);
                            else {
                                if (err)
                                    return res.serverError(err);
                                else {

                                    Rekomendasi.native(function (err, collection) {
                                        if (err) return res.serverError(err);

                                        collection.find({}, {
                                            id_anime: true,
                                            nama_anime: true,
                                            action: true,
                                            adventure: true,
                                            comedy: true,
                                            scifi: true,
                                            drama: true,
                                            space: true,
                                            supernatural: true,
                                            thriller: true,
                                            mystery: true,
                                            seinen: true,
                                            school: true,
                                            historical: true,
                                            echi: true,
                                            sliceoflife: true,
                                            harem: true,
                                            pyschological: true,
                                            superpower: true,
                                            fantasy: true,
                                            mecha: true,
                                            sports: true,
                                            romance: true,
                                            shounen: true,
                                            horor: true,
                                            martialarts: true,
                                            magic: true,
                                            photo_url: true
                                        }).toArray(function (err, rekomendasi) {
                                            if (err) return res.serverError(err);
                                            var iterasi = 0
                                            var cluster = []
                                            var naction = 0
                                            var nadventure = 0
                                            var ncomedy = 0
                                            var nscifi = 0
                                            var ndrama = 0
                                            var nspace = 0
                                            var nsupernatural = 0
                                            var nthriller = 0
                                            var nmystery = 0
                                            var nseinen = 0
                                            var nschool = 0
                                            var nhistorical = 0
                                            var nechi = 0
                                            var nsliceoflife = 0
                                            var nharem = 0
                                            var npyschological = 0
                                            var nsuperpower = 0
                                            var nfantasy = 0
                                            var nmecha = 0
                                            var nsports = 0
                                            var nromance = 0
                                            var nshounen = 0
                                            var nhoror = 0
                                            var nmartialarts = 0
                                            var nmagic = 0


                                            var c1 = []
                                            var c2 = []
                                            var c3 = []
                                            var c1New = []
                                            var c2New = []
                                            var c3New = []

                                            var sentroid = []
                                            var sentroid1 = []
                                            var sentroid2 = []
                                            var sentroid3 = []
                                            var anggotac1 = []
                                            var anggotac2 = []
                                            var anggotac3 = []
                                            var anggotac1New = []
                                            var anggotac2New = []
                                            var anggotac3New = []
                                            for (var i = 0; i < 3; i++) {
                                                var rand = Math.floor(Math.random() * 200);
                                                cluster.push(rekomendasi[rand])

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((parseInt(rekomendasi[j].action - cluster[0].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[0].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[0].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[0].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[0].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[0].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[0].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[0].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[0].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[0].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[0].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[0].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[0].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[0].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[0].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[0].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[0].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[0].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[0].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[0].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[0].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[0].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[0].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[0].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[0].magic) ^ 2)
                                                )
                                                c1.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                }
                                                )

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((
                                                    (parseInt(rekomendasi[j].action - cluster[1].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[1].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[1].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[1].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[1].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[1].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[1].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[1].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[1].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[1].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[1].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[1].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[1].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[1].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[1].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[1].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[1].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[1].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[1].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[1].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[1].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[1].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[1].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[1].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[1].magic) ^ 2)
                                                ))
                                                c2.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                })

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((
                                                    (parseInt(rekomendasi[j].action - cluster[2].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[2].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[2].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[2].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[2].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[2].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[2].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[2].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[2].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[2].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[2].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[2].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[2].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[2].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[2].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[2].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[2].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[2].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[2].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[2].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[2].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[2].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[2].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[2].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[2].magic) ^ 2)
                                                ))
                                                c3.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                })

                                            }
                                            for (var i = 0; i < c1.length; i++) {

                                                if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai) {
                                                    naction = parseInt(naction) + parseInt(c1[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c1[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c1[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c1[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c1[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c1[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c1[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c1[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c1[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c1[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c1[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c1[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c1[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c1[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c1[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c1[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c1[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c1[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c1[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c1[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c1[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c1[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c1[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c1[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c1[i].magic)



                                                    anggotac1.push({
                                                        id_anime: c1[i].id_anime,
                                                        nama_anime: c1[i].nama_anime,
                                                        photo_url: c1[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c1[i].nilai


                                                    }
                                                    )
                                                }
                                                else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai) {
                                                    naction = parseInt(naction) + parseInt(c2[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c2[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c2[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c2[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c2[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c2[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c2[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c2[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c2[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c2[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c2[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c2[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c2[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c2[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c2[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c2[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c2[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c2[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c2[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c2[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c2[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c2[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c2[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c2[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c2[i].magic)

                                                    anggotac2.push({
                                                        id_anime: c2[i].id_anime,
                                                        nama_anime: c2[i].nama_anime,
                                                        photo_url: c2[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c2[i].nilai

                                                    })
                                                }
                                                else {
                                                    naction = parseInt(naction) + parseInt(c3[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c3[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c3[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c3[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c3[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c3[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c3[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c3[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c3[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c3[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c3[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c3[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c3[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c3[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c3[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c3[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c3[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c3[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c3[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c3[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c3[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c3[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c3[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c3[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c3[i].magic)

                                                    anggotac3.push({
                                                        id_anime: c3[i].id_anime,
                                                        nama_anime: c3[i].nama_anime,
                                                        photo_url: c3[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c3[i].nilai
                                                    })
                                                }
                                            }
                                            while (iterasi < 100 || (anggotac1.length == anggotac1New && anggotac2.length == anggotac2New && anggotac3.length == anggotac3New)) {
                                                sentroid1.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac1.length,
                                                    adventure: parseInt(nadventure) / anggotac1.length,
                                                    comedy: parseInt(ncomedy) / anggotac1.length,
                                                    scifi: parseInt(nscifi) / anggotac1.length,
                                                    drama: parseInt(ndrama) / anggotac1.length,
                                                    space: parseInt(nspace) / anggotac1.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac1.length,
                                                    thriller: parseInt(nthriller) / anggotac1.length,
                                                    mystery: parseInt(nmystery) / anggotac1.length,
                                                    seinen: parseInt(nseinen) / anggotac1.length,
                                                    school: parseInt(nschool) / anggotac1.length,
                                                    historical: parseInt(nhistorical) / anggotac1.length,
                                                    echi: parseInt(nechi) / anggotac1.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac1.length,
                                                    harem: parseInt(nharem) / anggotac1.length,
                                                    pyschological: parseInt(npyschological) / anggotac1.length,
                                                    superpower: parseInt(nsuperpower) / anggotac1.length,
                                                    fantasy: parseInt(nfantasy) / anggotac1.length,
                                                    mecha: parseInt(nmecha) / anggotac1.length,
                                                    sports: parseInt(nsports) / anggotac1.length,
                                                    romance: parseInt(nromance) / anggotac1.length,
                                                    shounen: parseInt(nshounen) / anggotac1.length,
                                                    horor: parseInt(nhoror) / anggotac1.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac1.length,
                                                    magic: parseInt(nmagic) / anggotac1.length,

                                                })
                                                sentroid2.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac2.length,
                                                    adventure: parseInt(nadventure) / anggotac2.length,
                                                    comedy: parseInt(ncomedy) / anggotac2.length,
                                                    scifi: parseInt(nscifi) / anggotac2.length,
                                                    drama: parseInt(ndrama) / anggotac2.length,
                                                    space: parseInt(nspace) / anggotac2.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac2.length,
                                                    thriller: parseInt(nthriller) / anggotac2.length,
                                                    mystery: parseInt(nmystery) / anggotac2.length,
                                                    seinen: parseInt(nseinen) / anggotac2.length,
                                                    school: parseInt(nschool) / anggotac2.length,
                                                    historical: parseInt(nhistorical) / anggotac2.length,
                                                    echi: parseInt(nechi) / anggotac2.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac2.length,
                                                    harem: parseInt(nharem) / anggotac2.length,
                                                    pyschological: parseInt(npyschological) / anggotac2.length,
                                                    superpower: parseInt(nsuperpower) / anggotac2.length,
                                                    fantasy: parseInt(nfantasy) / anggotac2.length,
                                                    mecha: parseInt(nmecha) / anggotac2.length,
                                                    sports: parseInt(nsports) / anggotac2.length,
                                                    romance: parseInt(nromance) / anggotac2.length,
                                                    shounen: parseInt(nshounen) / anggotac2.length,
                                                    horor: parseInt(nhoror) / anggotac2.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac2.length,
                                                    magic: parseInt(nmagic) / anggotac2.length,


                                                })
                                                sentroid3.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac3.length,
                                                    adventure: parseInt(nadventure) / anggotac3.length,
                                                    comedy: parseInt(ncomedy) / anggotac3.length,
                                                    scifi: parseInt(nscifi) / anggotac3.length,
                                                    drama: parseInt(ndrama) / anggotac3.length,
                                                    space: parseInt(nspace) / anggotac3.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac3.length,
                                                    thriller: parseInt(nthriller) / anggotac3.length,
                                                    mystery: parseInt(nmystery) / anggotac3.length,
                                                    seinen: parseInt(nseinen) / anggotac3.length,
                                                    school: parseInt(nschool) / anggotac3.length,
                                                    historical: parseInt(nhistorical) / anggotac3.length,
                                                    echi: parseInt(nechi) / anggotac3.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac3.length,
                                                    harem: parseInt(nharem) / anggotac3.length,
                                                    pyschological: parseInt(npyschological) / anggotac3.length,
                                                    superpower: parseInt(nsuperpower) / anggotac3.length,
                                                    fantasy: parseInt(nfantasy) / anggotac3.length,
                                                    mecha: parseInt(nmecha) / anggotac3.length,
                                                    sports: parseInt(nsports) / anggotac3.length,
                                                    romance: parseInt(nromance) / anggotac3.length,
                                                    shounen: parseInt(nshounen) / anggotac3.length,
                                                    horor: parseInt(nhoror) / anggotac3.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac3.length,
                                                    magic: parseInt(nmagic) / anggotac3.length,


                                                })
                                                sentroid.push(
                                                    sentroid1,
                                                    sentroid2,
                                                    sentroid3
                                                )

                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt(
                                                        (parseInt(rekomendasi[j].action - sentroid[0].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[0].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[0].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[0].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[0].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[0].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[0].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[0].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[0].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[0].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[0].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[0].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[0].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[0].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[0].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[0].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[0].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[0].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[0].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[0].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[0].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[0].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[0].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[0].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[0].magic) ^ 2)

                                                    )
                                                    c1New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    }
                                                    )

                                                }
                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt((
                                                        (parseInt(rekomendasi[j].action - sentroid[1].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[1].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[1].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[1].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[1].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[1].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[1].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[1].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[1].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[1].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[1].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[1].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[1].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[1].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[1].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[1].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[1].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[1].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[1].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[1].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[1].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[1].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[1].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[1].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[1].magic) ^ 2)

                                                    ))
                                                    c2New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    })

                                                }
                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt((
                                                        (parseInt(rekomendasi[j].action - sentroid[2].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[2].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[2].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[2].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[2].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[2].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[2].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[2].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[2].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[2].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[2].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[2].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[2].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[2].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[2].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[2].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[2].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[2].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[2].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[2].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[2].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[2].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[2].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[2].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[2].magic) ^ 2)

                                                    ))
                                                    c3New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    })

                                                }
                                                for (var i = 0; i < c1.length; i++) {

                                                    if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai) {
                                                        naction = parseInt(naction) + parseInt(c1New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c1New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c1New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c1New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c1New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c1New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c1New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c1New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c1New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c1New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c1New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c1New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c1New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c1New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c1New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c1New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c1New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c1New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c1New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c1New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c1New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c1New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c1New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c1New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c1New[i].magic)




                                                        anggotac1New.push({
                                                            id_anime: c1New[i].id_anime,
                                                            nama_anime: c1New[i].nama_anime,
                                                            photo_url: c1New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic,


                                                        }
                                                        )
                                                    }
                                                    else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai) {
                                                        naction = parseInt(naction) + parseInt(c2New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c2New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c2New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c2New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c2New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c2New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c2New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c2New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c2New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c2New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c2New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c2New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c2New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c2New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c2New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c2New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c2New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c2New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c2New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c2New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c2New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c2New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c2New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c2New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c2New[i].magic)


                                                        anggotac2New.push({
                                                            id_anime: c2New[i].id_anime,
                                                            nama_anime: c2New[i].nama_anime,
                                                            photo_url: c2New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic,

                                                        })
                                                    }
                                                    else {
                                                        naction = parseInt(naction) + parseInt(c3New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c3New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c3New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c3New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c3New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c3New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c3New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c3New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c3New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c3New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c3New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c3New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c3New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c3New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c3New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c3New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c3New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c3New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c3New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c3New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c3New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c3New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c3New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c3New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c3New[i].magic)


                                                        anggotac3New.push({
                                                            id_anime: c3New[i].id_anime,
                                                            nama_anime: c3New[i].nama_anime,
                                                            photo_url: c3New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic
                                                        })
                                                    }
                                                }
                                                iterasi++
                                            }

                                            var ketemu = 0;
                                            var rekom = []
                                            var i = 0


                                            while (ketemu == 0) {
                                                if (anggotac1.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac1.length) {

                                                        if (req.param('id') == anggotac1[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac1.length; j++) {
                                                                if (req.param('id') == anggotac1[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac1[j].id_anime,
                                                                        nama_anime: anggotac1[j].nama_anime,
                                                                        photo_url: anggotac1[j].photo_url,
                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                if (anggotac2.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac2.length) {
                                                        if (req.param('id') == anggotac2[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac2.length; j++) {
                                                                if (req.param('id') == anggotac2[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac2[j].id_anime,
                                                                        nama_anime: anggotac2[j].nama_anime,
                                                                        photo_url: anggotac2[j].photo_url,
                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                if (anggotac3.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac3.length) {
                                                        if (req.param('id') == anggotac3[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac3.length; j++) {
                                                                if (req.param('id') == anggotac3[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac3[j].id_anime,
                                                                        nama_anime: anggotac3[j].nama_anime,
                                                                        photo_url: anggotac3[j].photo_url,

                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                            }


                                            var sum = 0
                                            var sum1 = 0
                                            var sum2 = 0
                                            var c1Max = []
                                            var c2Max = []
                                            var c3Max = []
                                            var prob1 = []
                                            var prob2 = []
                                            var prob3 = []
                                            for (var i = 0; i < c1.length; i++) {

                                                c1Max.push(c1[i].nilai)
                                            }
                                            for (var i = 0; i < c2.length; i++) {

                                                c2Max.push(c2[i].nilai)
                                            }
                                            for (var i = 0; i < c2.length; i++) {

                                                c3Max.push(c3[i].nilai)
                                            }
                                            var max1 = Math.max.apply(Math, c1Max)
                                            var max2 = Math.max.apply(Math, c2Max)
                                            var max3 = Math.max.apply(Math, c3Max)

                                            for (var i = 0; i < c1.length; i++) {
                                                prob1.push(
                                                    1 - (c1[i].nilai / max1)
                                                )
                                                
                                            }
                                            for (var i = 0; i < c2.length; i++) {
                                                prob2.push(
                                                    1 - (c2[i].nilai / max2)
                                                )
                                            }
                                            for (var i = 0; i < c3.length; i++) {
                                                prob3.push(
                                                    1 - (c3[i].nilai / max3)
                                                )
                                            }

                                            for (var i = 0; i < c1.length; i++) {
                                                sum = parseFloat(sum) + parseFloat(prob1[i])
                                            }
                                            for (var i = 0; i < c2.length; i++) {
                                                sum1 = parseFloat(sum1) + parseFloat(prob2[i])
                                            }
                                            for (var i = 0; i < c3.length; i++) {
                                                sum2 = parseFloat(sum2) + parseFloat(prob3[i])
                                            }
                                            var rataC1 = parseFloat(sum) / c1.length
                                            var rataC2 = parseFloat(sum1) / c2.length
                                            var rataC3 = parseFloat(sum2) / c2.length
                                            var groupRating = []

                                            for (var i = 0; i < rekomendasi.length; i++) {
                                                var hSementaraUp = 0
                                                var hSementaraDown = 0
                                                var hasil = 0
                                                for (var j = 0; j < rekomendasi.length; j++) {

                                                    hSementaraUp = hSementaraUp +
                                                        ((parseInt(c1[j].nilai - parseInt(rataC1) * (parseInt(c1[i].nilai) - parseInt(rataC1))))
                                                            + ((parseInt(c2[j].nilai) - parseInt(rataC2)) * (parseInt(c2[i].nilai - parseInt(rataC2))))
                                                            + ((parseInt(c3[j].nilai) - parseInt(rataC3)) * (parseInt(c3[i].nilai - parseInt(rataC3))))
                                                        )
                                                    hSementaraDown = parseInt(hSementaraDown)
                                                        + Math.sqrt((Math.pow(parseInt(c1[j].nilai) - parseInt(rataC1), 2) +
                                                            (Math.pow(parseInt(c2[j].nilai) - parseInt(rataC2), 2)) +
                                                            (Math.pow(parseInt(c3[j].nilai) - parseInt(rataC3), 2))
                                                        )) * Math.sqrt((Math.pow(parseInt(c1[i].nilai) - parseInt(rataC1), 2))
                                                            + (Math.pow(parseInt(c2[i].nilai) - parseInt(rataC2), 2))
                                                            + (Math.pow(parseInt(c3[i].nilai) - parseInt(rataC3), 2)))

                                                    groupRating.push(parseInt(hSementaraUp) / parseInt(hSementaraDown))

                                                }


                                            }
                                            var nativePromise = new Promise(function (resolve, reject) {
                                                Rating.native(function (err, collection) {

                                                    if (err) return res.serverError(err);
                                                    var scoreSem = [1, 3, 4, 6, 3, 1, 2, 9, 3, 1, 3, 2, 4, 6, 3, 5, 2, 9, 3, 9, 1, 3, 4, 6, 3, 10, 2, 7, 6, 3, 7, 3, 5, 7, 3, 10, 2, 9, 2, 5, 7, 4, 4, 8, 3, 1, 2, 9, 3, 8, 5, 6, 8, 1, 3, 7, 2, 7, 3, 10, 8, 9, 1, 6, 3, 1, 2, 8, 4, 10, 7, 3, 4, 6, 3, 3, 2, 6, 5, 10, 2, 3, 4, 9, 3, 1, 2, 9, 3, 1, 10, 6, 5, 7, 5, 2, 8, 9, 2, 2, 5, 7, 9, 8, 4, 5, 3, 7, 4, 10, 7, 5, 4, 6, 3, 7, 2, 7, 3, 7, 5, 8, 3, 1, 10, 5, 3, 7, 8, 9, 6, 4, 5, 7, 8, 10, 2, 9, 8, 9, 6, 3, 4, 7, 0, 8, 3, 7, 5, 4, 7, 4, 5, 9, 8, 5, 2, 9, 3, 3, 7, 3, 4, 7, 5, 1, 2, 9, 3, 9, 5, 5, 4, 3, 1, 2, 9, 3, 5, 5, 8, 4, 5, 7, 8, 10, 6, 8, 4, 10, 10, 9, 5, 4, 3, 2, 1, 1, 5, 4, 10, 5, 4, 7, 9, 6, 4, 8, 7, 6, 5, 4, 7, 8, 6, 4, 4, 3, 2, 1, 5, 3, 4, 5, 6, 7, 1, 2, 3, 9, 6, 4, 2, 1, 3, 5, 6, 3, 2, 1, 2, 3, 5, 7,7,8,9,5,4,2,1,2,3,4,5,6,7,8,9,6,5,3,2,1,3,5,5,2,3,4,6,7,8,9,6,4,2,1,3,1,2,3,4,5,2,1]

                                                    collection.find({}, {
                                                        id_anime: true,
                                                        id_user: true,
                                                        score: true

                                                    }).toArray(function (err, rating) {

                                                        if (err) return res.serverError(err);
                                                        Anime.native(function (err, collection) {
                                                            if (err) return res.serverError(err);
                                                            collection.find({}, {
                                                                id_anime: true,
                                                                type:true,
                                                                nama_anime: true,
                                                                photo_url: true,
                                                                genre: true,
                                                                tahun_terbit: true,
                                                                score: true


                                                            }).toArray(function (err, anime) {

                                                                if (err) return res.serverError(err);
                                                                User.native(function (err, collection) {
                                                                    if (err) return res.serverError(err);
                                                                    collection.find({}, {
                                                                        nama: true,

                                                                    }).toArray(function (err, user) {
                                                                        if (err) return res.serverError(err);
                                                                        var rata2 = []
                                                                        for (var i = 0; i < anime.length; i++) {
                                                                            var total = 0
                                                                            for (var j = 0; j < rating.length; j++) {
                                                                                if (anime[i]._id == rating[j].id_anime) {
                                                                                    total = total + parseInt(rating[j].score)
                                                                                }
                                                                            }
                                                                            var rata = parseInt(total) / user.length
                                                                            rata2.push(rata)
                                                                        }

                                                                        var itemRating = []
                                                                                                    
                                                                        for (var i = 0; i < user.length; i++) {
                                                                            var hSup = 0
                                                                            var hSDown = 0
                                                                            for (var j = 0; j < anime.length; j++) {
                                                                                hSup = hSup + (scoreSem[j] - parseInt(rata2[j]) * (scoreSem[i] - parseInt(rata2[i])))
                                                                                hSDown = hSDown + Math.sqrt((Math.pow(scoreSem[j] - parseInt(rata2[j]), 2)) * Math.pow(scoreSem[i] - parseInt(rata2[i]), 2))
                        
                                                                            }
                                                                            var hasil = parseInt(hSup) / parseInt(hSDown)
                                                                            itemRating.push(hasil)
                                                                        }
                        
                                                                      
                                                                        var c = 0.5
                                                                        var simi = []
                                                                        
                                                                        

                                                                        for (var i = 0; i < groupRating.length; i++) {
                                                                            j = 0
                                                                            if (j == parseInt(user.length)) {
                                                                                simi.push((parseFloat(itemRating[j]) * (1 - c)) + (parseFloat(groupRating[i]) * c))
                                                                                j = j - parseInt(user.length)
                                                                            }
                                                                            else {
                                                                                simi.push((parseFloat(itemRating[j]) * (1 - c)) + (parseFloat(groupRating[i]) * c))
                                                                                j++
                                                                            }
                                                                        }
                        
                                                                        var totalRata = []
                                                                        var bnyk = 0
                                                                        var hsl = 0
                                                                        var x = 199
                                                                       
                                                                        while (bnyk < simi.length ) {
                                                                            hsl = hsl + simi[bnyk]
                                                                            if (bnyk == x) {
                                                                                totalRata.push(hsl)
                                                                                hsl = 0
                                                                                x = x + 200                                          
                                                                            }
                                                                            
                                                                            bnyk++
                                                                        }
                                                                        var arrHasilSementara = []
                                                                       
                        
                                                                        for (var i = 0; i < user.length; i++) {
                                                                            var hasilRateSementara = 0
                        
                                                                            for (var j = 0; j < anime.length; j++) {
                                                                                hasilRateSementara = hasilRateSementara + ((parseInt(scoreSem[j]) - parseInt(rata2[j])) * simi[i])
                                                                            }
                                                                            arrHasilSementara.push(hasilRateSementara)
                                                                        }
                                                                        var hasilRateAkhir = []
                                                                        
                                                                     
                                                                        for (var i = 0; i < anime.length; i++) {
                                                                            var hasilAkhir = 0
                                                                            for (var j = 0; j < user.length; j++) {
                                                                                hasilAkhir = hasilAkhir + ((scoreSem[i] + arrHasilSementara[j]) / totalRata[i])
                                                                                hasilRateAkhir.push(hasilAkhir)
                                                                                hasilAkhir = 0
                                                                            }
                                                                        }
                                                                        var rerataAkhir = []
                                                                                                var banyak = 0
                                                                                                var rerata = 0
                                                                                                var jumlahUser = user.length - 1
                        
                                                                                                while (banyak < hasilRateAkhir.length) {
                                                                                                    rerata = rerata + hasilRateAkhir[banyak]
                                                                                                    if (banyak == jumlahUser) {
                                                                                                        rerata = parseFloat(rerata) / user.length
                                                                                                        rerataAkhir.push(rerata)
                                                                                                        jumlahUser = jumlahUser + user.length
                                                                                                    }
                                                                                                    banyak++
                                                                                                }
                                                                                                var prioritas = []
                        
                                                                                                for (var i = 0; i < anime.length; i++) {
                        
                                                                                                    prioritas.push({
                                                                                                        id_anime: anime[i]._id.toString(),
                                                                                                        photo_url: anime[i].photo_url,
                                                                                                        nama_anime: anime[i].nama_anime,
                                                                                                        type: anime[i].type,
                                                                                                        score: anime[i].score,
                                                                                                        tahun: anime[i].tahun_terbit,
                                                                                                        genre: anime[i].genre,
                                                                                                        rata: rerataAkhir[i]
                                                                                                    })
                                                                                                }

                                                                        var rekomendasiAkhir = []

                                                                        for (var j = 0; j < prioritas.length; j++) {
                                                                            if (req.param('id') == prioritas[j].id_anime) {
                                                                                continue
                                                                            }
                                                                            else {
                                                                                rekomendasiAkhir.push({
                                                                                    id_anime: prioritas[j].id_anime,
                                                                                    nama_anime: prioritas[j].nama_anime,
                                                                                    type: prioritas[j].type,
                                                                                    photo_url: prioritas[j].photo_url,
                                                                                    score: prioritas[j].score,
                                                                                    tahun: prioritas[j].tahun,
                                                                                    genre: prioritas[j].genre,
                                                                                    rata: rerataAkhir[j]

                                                                                })
                                                                            }
                                                                        }

                                                                        return resolve(rekomendasiAkhir)




                                                                    })                                                                                                      
                                                                })

                                                            })

                                                        })


                                                    })

                                                })
                                            })
                                            return nativePromise.then(function (rekomUser) {

                                                async.map(rekomUser, (function (object, callback) {

                                                    Temp.create(object).exec(callback);
                                                }), function (error, createdOrFoundObjects) {
                                                    
                                                });
                                                Genre.find().exec(function (err, genre) {
                                                    if (req.session.User) {
                                                        Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                                                            Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                                                res.view("user/detail-anime/", {
                                                                
                                                                    status: 'OK',
                                                                    notif: notif,
                                                                    rekomUser: rekomUser,
                                                                    title: 'Detail Anime',
                                                                    rekom: rekom,
                                                                    countNotif:countNotif,
                                                                    genre: genre,
                                                                    anime: anime
                                                                })
                                                            })
                                                            
                                                        })
                                                    }
                                                    
                                                    else {
                                                        res.view("user/detail-anime/", {
                                                            
                                                            status: 'OK',
                                                            rekomUser: rekomUser,
                                                            title: 'Detail Anime',
                                                            rekom: rekom,
                                                            genre: genre,
                                                            anime: anime
                                                        })
                                                    }

                                                })


                                            })





                                        })
                                    })


                                }
                            }
                        })

                    }
                })

            }
        })
    },
    rekomendasi: function (req, res, next) {
        perPage = 12
        page = req.param('page')
        Temp
            .find({})
            .sort('rata DESC')
            //.where({ createdAt: { '>=': dateFrom, '<=': dateTo } })
            .skip((perPage * page) - perPage)
            .limit(perPage)
            .populateAll()
            .exec(function (err, temp) {
                Genre.find().exec(function (err, genre) {
                    Temp.count().exec(function (err, count) {
                        if (err) return next(err)
                        if (req.session.User) {
                            Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function (err, notif) {
                                Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                                    res.view('user/rekomendasi/', {
                                        title: "Rekomendasi",
                                        notif: notif,
                                        temp: temp,
                                        genre: genre,
                                        countNotif:countNotif,
                                        current: page,
                                        pages: Math.ceil(count / perPage)
                                    })
                                })
                                
                            })
                        }
                        else {
                            res.view('user/rekomendasi/', {
                                title: "Rekomendasi",
                                temp: temp,
                                genre: genre,
                                current: page,
                                pages: Math.ceil(count / perPage)
                            })
                        }

                    })
                })

            });

    },
    //Mobile
    popularMobile: function (req, res, next) {
        var perPage = 12
        if (!req.params.page) {
            var page = 1
        }
        else {
            var page = req.params.page
        }

        var item_count = req.param('item_count')
        var page_number = req.param('page_number')
        Anime.find()
            .sort("score desc")
            .skip((item_count * page_number) - item_count)
            .limit(item_count)
            .exec(function (err, anime) {
                if (err) {
                    return res.serverError(err);
                }
                else {
                    res.json(anime)

                }

            })
    },
    detailAnimeMobile: function (req, res, next) {

        Temp.destroy().exec(function (deletaAll) {
            
        })

        Anime.findOne(req.param('id')).populateAll().exec(function (err, anime) {
            if (err) {
                return res.serverError(err);
            } else {

                anime.genreStrings = []
                anime.userStrings = []
                async.each(anime.genre_lists, function (genre, callback) {
                    Genre.findOne({ id: genre.id_genre }).exec(function (err, genres) {
                        if (err) {
                            callback(err)
                        } else {

                            anime.genreStrings.push({

                                id: genres.id,
                                nama_genre: genres.nama_genre
                            })
                            callback()
                        }
                    })
                }, function (err) {

                    if (err)
                        return res.serverError(err);
                    else {
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

                            if (err)
                                return res.serverError(err);
                            else {
                                if (err)
                                    return res.serverError(err);
                                else {

                                    Rekomendasi.native(function (err, collection) {
                                        if (err) return res.serverError(err);

                                        collection.find({}, {
                                            id_anime: true,
                                            nama_anime: true,
                                            action: true,
                                            adventure: true,
                                            comedy: true,
                                            scifi: true,
                                            drama: true,
                                            space: true,
                                            supernatural: true,
                                            thriller: true,
                                            mystery: true,
                                            seinen: true,
                                            school: true,
                                            historical: true,
                                            echi: true,
                                            sliceoflife: true,
                                            harem: true,
                                            pyschological: true,
                                            superpower: true,
                                            fantasy: true,
                                            mecha: true,
                                            sports: true,
                                            romance: true,
                                            shounen: true,
                                            horor: true,
                                            martialarts: true,
                                            magic: true,
                                            photo_url: true
                                        }).toArray(function (err, rekomendasi) {
                                            if (err) return res.serverError(err);
                                            var iterasi = 0
                                            var cluster = []
                                            var naction = 0
                                            var nadventure = 0
                                            var ncomedy = 0
                                            var nscifi = 0
                                            var ndrama = 0
                                            var nspace = 0
                                            var nsupernatural = 0
                                            var nthriller = 0
                                            var nmystery = 0
                                            var nseinen = 0
                                            var nschool = 0
                                            var nhistorical = 0
                                            var nechi = 0
                                            var nsliceoflife = 0
                                            var nharem = 0
                                            var npyschological = 0
                                            var nsuperpower = 0
                                            var nfantasy = 0
                                            var nmecha = 0
                                            var nsports = 0
                                            var nromance = 0
                                            var nshounen = 0
                                            var nhoror = 0
                                            var nmartialarts = 0
                                            var nmagic = 0


                                            var c1 = []
                                            var c2 = []
                                            var c3 = []
                                            var c1New = []
                                            var c2New = []
                                            var c3New = []

                                            var sentroid = []
                                            var sentroid1 = []
                                            var sentroid2 = []
                                            var sentroid3 = []
                                            var anggotac1 = []
                                            var anggotac2 = []
                                            var anggotac3 = []
                                            var anggotac1New = []
                                            var anggotac2New = []
                                            var anggotac3New = []
                                            var jarak_terpendek = []
                                            for (var i = 0; i < 3; i++) {
                                                var rand = Math.floor(Math.random() * 200);
                                                cluster.push(rekomendasi[rand])

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((parseInt(rekomendasi[j].action - cluster[0].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[0].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[0].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[0].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[0].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[0].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[0].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[0].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[0].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[0].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[0].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[0].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[0].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[0].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[0].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[0].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[0].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[0].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[0].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[0].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[0].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[0].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[0].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[0].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[0].magic) ^ 2)
                                                )
                                                c1.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                }
                                                )

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((
                                                    (parseInt(rekomendasi[j].action - cluster[1].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[1].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[1].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[1].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[1].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[1].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[1].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[1].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[1].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[1].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[1].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[1].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[1].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[1].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[1].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[1].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[1].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[1].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[1].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[1].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[1].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[1].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[1].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[1].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[1].magic) ^ 2)
                                                ))
                                                c2.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                })

                                            }
                                            for (var j = 0; j < rekomendasi.length; j++) {
                                                nilai = Math.sqrt((
                                                    (parseInt(rekomendasi[j].action - cluster[2].action) ^ 2)
                                                    + (parseInt(rekomendasi[j].adventure - cluster[2].adventure) ^ 2)
                                                    + (parseInt(rekomendasi[j].comedy - cluster[2].comedy) ^ 2)
                                                    + (parseInt(rekomendasi[j].scifi - cluster[2].scifi) ^ 2)
                                                    + (parseInt(rekomendasi[j].drama - cluster[2].drama) ^ 2)
                                                    + (parseInt(rekomendasi[j].space - cluster[2].space) ^ 2)
                                                    + (parseInt(rekomendasi[j].supernatural - cluster[2].supernatural) ^ 2)
                                                    + (parseInt(rekomendasi[j].thriller - cluster[2].thriller) ^ 2)
                                                    + (parseInt(rekomendasi[j].mystery - cluster[2].mystery) ^ 2)
                                                    + (parseInt(rekomendasi[j].seinen - cluster[2].seinen) ^ 2)
                                                    + (parseInt(rekomendasi[j].school - cluster[2].school) ^ 2)
                                                    + (parseInt(rekomendasi[j].historical - cluster[2].historical) ^ 2)
                                                    + (parseInt(rekomendasi[j].echi - cluster[2].echi) ^ 2)
                                                    + (parseInt(rekomendasi[j].sliceoflife - cluster[2].sliceoflife) ^ 2)
                                                    + (parseInt(rekomendasi[j].harem - cluster[2].harem) ^ 2)
                                                    + (parseInt(rekomendasi[j].pyschological - cluster[2].pyschological) ^ 2)
                                                    + (parseInt(rekomendasi[j].superpower - cluster[2].superpower) ^ 2)
                                                    + (parseInt(rekomendasi[j].fantasy - cluster[2].fantasy) ^ 2)
                                                    + (parseInt(rekomendasi[j].mecha - cluster[2].mecha) ^ 2)
                                                    + (parseInt(rekomendasi[j].sports - cluster[2].sports) ^ 2)
                                                    + (parseInt(rekomendasi[j].romance - cluster[2].romance) ^ 2)
                                                    + (parseInt(rekomendasi[j].shounen - cluster[2].shounen) ^ 2)
                                                    + (parseInt(rekomendasi[j].horor - cluster[2].horor) ^ 2)
                                                    + (parseInt(rekomendasi[j].martialarts - cluster[2].martialarts) ^ 2)
                                                    + (parseInt(rekomendasi[j].magic - cluster[2].magic) ^ 2)
                                                ))
                                                c3.push({
                                                    id_anime: rekomendasi[j].id_anime,
                                                    nama_anime: rekomendasi[j].nama_anime,
                                                    photo_url: rekomendasi[j].photo_url,
                                                    action: rekomendasi[j].action,
                                                    adventure: rekomendasi[j].adventure,
                                                    comedy: rekomendasi[j].comedy,
                                                    scifi: rekomendasi[j].scifi,
                                                    drama: rekomendasi[j].drama,
                                                    space: rekomendasi[j].space,
                                                    supernatural: rekomendasi[j].supernatural,
                                                    thriller: rekomendasi[j].thriller,
                                                    mystery: rekomendasi[j].mystery,
                                                    seinen: rekomendasi[j].seinen,
                                                    school: rekomendasi[j].school,
                                                    historical: rekomendasi[j].historical,
                                                    echi: rekomendasi[j].echi,
                                                    sliceoflife: rekomendasi[j].sliceoflife,
                                                    harem: rekomendasi[j].harem,
                                                    pyschological: rekomendasi[j].pyschological,
                                                    superpower: rekomendasi[j].superpower,
                                                    fantasy: rekomendasi[j].fantasy,
                                                    mecha: rekomendasi[j].mecha,
                                                    sports: rekomendasi[j].sports,
                                                    romance: rekomendasi[j].romance,
                                                    shounen: rekomendasi[j].shounen,
                                                    horor: rekomendasi[j].horor,
                                                    martialarts: rekomendasi[j].martialarts,
                                                    magic: rekomendasi[j].magic,
                                                    nilai: nilai
                                                })

                                            }
                                            for (var i = 0; i < c1.length; i++) {

                                                if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai) {
                                                    naction = parseInt(naction) + parseInt(c1[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c1[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c1[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c1[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c1[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c1[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c1[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c1[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c1[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c1[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c1[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c1[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c1[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c1[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c1[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c1[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c1[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c1[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c1[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c1[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c1[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c1[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c1[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c1[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c1[i].magic)



                                                    anggotac1.push({
                                                        id_anime: c1[i].id_anime,
                                                        nama_anime: c1[i].nama_anime,
                                                        photo_url: c1[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c1[i].nilai


                                                    }
                                                    )
                                                }
                                                else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai) {
                                                    naction = parseInt(naction) + parseInt(c2[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c2[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c2[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c2[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c2[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c2[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c2[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c2[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c2[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c2[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c2[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c2[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c2[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c2[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c2[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c2[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c2[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c2[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c2[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c2[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c2[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c2[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c2[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c2[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c2[i].magic)

                                                    anggotac2.push({
                                                        id_anime: c2[i].id_anime,
                                                        nama_anime: c2[i].nama_anime,
                                                        photo_url: c2[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c2[i].nilai

                                                    })
                                                }
                                                else {
                                                    naction = parseInt(naction) + parseInt(c3[i].action)
                                                    nadventure = parseInt(nadventure) + parseInt(c3[i].adventure)
                                                    ncomedy = parseInt(ncomedy) + parseInt(c3[i].comedy)
                                                    nscifi = parseInt(nscifi) + parseInt(c3[i].scifi)
                                                    ndrama = parseInt(ndrama) + parseInt(c3[i].drama)
                                                    nspace = parseInt(nspace) + parseInt(c3[i].space)
                                                    nsupernatural = parseInt(nsupernatural) + parseInt(c3[i].supernatural)
                                                    nthriller = parseInt(nthriller) + parseInt(c3[i].thriller)
                                                    nmystery = parseInt(nmystery) + parseInt(c3[i].mystery)
                                                    nseinen = parseInt(nseinen) + parseInt(c3[i].seinen)
                                                    nschool = parseInt(nschool) + parseInt(c3[i].school)
                                                    nhistorical = parseInt(nhistorical) + parseInt(c3[i].historical)
                                                    nechi = parseInt(nechi) + parseInt(c3[i].echi)
                                                    nsliceoflife = parseInt(nsliceoflife) + parseInt(c3[i].sliceoflife)
                                                    nharem = parseInt(nharem) + parseInt(c3[i].harem)
                                                    npyschological = parseInt(npyschological) + parseInt(c3[i].pyschological)
                                                    nsuperpower = parseInt(nsuperpower) + parseInt(c3[i].superpower)
                                                    nfantasy = parseInt(nfantasy) + parseInt(c3[i].fantasy)
                                                    nmecha = parseInt(nmecha) + parseInt(c3[i].mecha)
                                                    nsports = parseInt(nsports) + parseInt(c3[i].sports)
                                                    nromance = parseInt(nromance) + parseInt(c3[i].romance)
                                                    nshounen = parseInt(nshounen) + parseInt(c3[i].shounen)
                                                    nhoror = parseInt(nhoror) + parseInt(c3[i].horor)
                                                    nmartialarts = parseInt(nmartialarts) + parseInt(c3[i].martialarts)
                                                    nmagic = parseInt(nmagic) + parseInt(c3[i].magic)

                                                    anggotac3.push({
                                                        id_anime: c3[i].id_anime,
                                                        nama_anime: c3[i].nama_anime,
                                                        photo_url: c3[i].photo_url,
                                                        naction: naction,
                                                        nadventure: nadventure,
                                                        ncomedy: ncomedy,
                                                        nscifi: nscifi,
                                                        ndrama: ndrama,
                                                        nspace: nspace,
                                                        nsupernatural: nsupernatural,
                                                        nthriller: nthriller,
                                                        nmystery: nmystery,
                                                        nseinen: nseinen,
                                                        nschool: nschool,
                                                        nhistorical: nhistorical,
                                                        nechi: nechi,
                                                        nsliceoflife: nsliceoflife,
                                                        nharem: nharem,
                                                        npyschological: npyschological,
                                                        nsuperpower: nsuperpower,
                                                        nfantasy: nfantasy,
                                                        nmecha: nmecha,
                                                        nsports: nsports,
                                                        nromance: nromance,
                                                        nshounen: nshounen,
                                                        nhoror: nhoror,
                                                        nmartialarts: nmartialarts,
                                                        nmagic: nmagic,
                                                        nilai: c3[i].nilai
                                                    })
                                                }
                                            }
                                            while (iterasi < 100 || (anggotac1.length == anggotac1New && anggotac2.length == anggotac2New && anggotac3.length == anggotac3New)) {
                                                sentroid1.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac1.length,
                                                    adventure: parseInt(nadventure) / anggotac1.length,
                                                    comedy: parseInt(ncomedy) / anggotac1.length,
                                                    scifi: parseInt(nscifi) / anggotac1.length,
                                                    drama: parseInt(ndrama) / anggotac1.length,
                                                    space: parseInt(nspace) / anggotac1.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac1.length,
                                                    thriller: parseInt(nthriller) / anggotac1.length,
                                                    mystery: parseInt(nmystery) / anggotac1.length,
                                                    seinen: parseInt(nseinen) / anggotac1.length,
                                                    school: parseInt(nschool) / anggotac1.length,
                                                    historical: parseInt(nhistorical) / anggotac1.length,
                                                    echi: parseInt(nechi) / anggotac1.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac1.length,
                                                    harem: parseInt(nharem) / anggotac1.length,
                                                    pyschological: parseInt(npyschological) / anggotac1.length,
                                                    superpower: parseInt(nsuperpower) / anggotac1.length,
                                                    fantasy: parseInt(nfantasy) / anggotac1.length,
                                                    mecha: parseInt(nmecha) / anggotac1.length,
                                                    sports: parseInt(nsports) / anggotac1.length,
                                                    romance: parseInt(nromance) / anggotac1.length,
                                                    shounen: parseInt(nshounen) / anggotac1.length,
                                                    horor: parseInt(nhoror) / anggotac1.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac1.length,
                                                    magic: parseInt(nmagic) / anggotac1.length,

                                                })
                                                sentroid2.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac2.length,
                                                    adventure: parseInt(nadventure) / anggotac2.length,
                                                    comedy: parseInt(ncomedy) / anggotac2.length,
                                                    scifi: parseInt(nscifi) / anggotac2.length,
                                                    drama: parseInt(ndrama) / anggotac2.length,
                                                    space: parseInt(nspace) / anggotac2.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac2.length,
                                                    thriller: parseInt(nthriller) / anggotac2.length,
                                                    mystery: parseInt(nmystery) / anggotac2.length,
                                                    seinen: parseInt(nseinen) / anggotac2.length,
                                                    school: parseInt(nschool) / anggotac2.length,
                                                    historical: parseInt(nhistorical) / anggotac2.length,
                                                    echi: parseInt(nechi) / anggotac2.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac2.length,
                                                    harem: parseInt(nharem) / anggotac2.length,
                                                    pyschological: parseInt(npyschological) / anggotac2.length,
                                                    superpower: parseInt(nsuperpower) / anggotac2.length,
                                                    fantasy: parseInt(nfantasy) / anggotac2.length,
                                                    mecha: parseInt(nmecha) / anggotac2.length,
                                                    sports: parseInt(nsports) / anggotac2.length,
                                                    romance: parseInt(nromance) / anggotac2.length,
                                                    shounen: parseInt(nshounen) / anggotac2.length,
                                                    horor: parseInt(nhoror) / anggotac2.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac2.length,
                                                    magic: parseInt(nmagic) / anggotac2.length,


                                                })
                                                sentroid3.push({
                                                    id_anime: cluster[0].id_anime,
                                                    action: parseInt(naction) / anggotac3.length,
                                                    adventure: parseInt(nadventure) / anggotac3.length,
                                                    comedy: parseInt(ncomedy) / anggotac3.length,
                                                    scifi: parseInt(nscifi) / anggotac3.length,
                                                    drama: parseInt(ndrama) / anggotac3.length,
                                                    space: parseInt(nspace) / anggotac3.length,
                                                    supernatural: parseInt(nsupernatural) / anggotac3.length,
                                                    thriller: parseInt(nthriller) / anggotac3.length,
                                                    mystery: parseInt(nmystery) / anggotac3.length,
                                                    seinen: parseInt(nseinen) / anggotac3.length,
                                                    school: parseInt(nschool) / anggotac3.length,
                                                    historical: parseInt(nhistorical) / anggotac3.length,
                                                    echi: parseInt(nechi) / anggotac3.length,
                                                    sliceoflife: parseInt(nsliceoflife) / anggotac3.length,
                                                    harem: parseInt(nharem) / anggotac3.length,
                                                    pyschological: parseInt(npyschological) / anggotac3.length,
                                                    superpower: parseInt(nsuperpower) / anggotac3.length,
                                                    fantasy: parseInt(nfantasy) / anggotac3.length,
                                                    mecha: parseInt(nmecha) / anggotac3.length,
                                                    sports: parseInt(nsports) / anggotac3.length,
                                                    romance: parseInt(nromance) / anggotac3.length,
                                                    shounen: parseInt(nshounen) / anggotac3.length,
                                                    horor: parseInt(nhoror) / anggotac3.length,
                                                    martialarts: parseInt(nmartialarts) / anggotac3.length,
                                                    magic: parseInt(nmagic) / anggotac3.length,


                                                })
                                                sentroid.push(
                                                    sentroid1,
                                                    sentroid2,
                                                    sentroid3
                                                )

                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt(
                                                        (parseInt(rekomendasi[j].action - sentroid[0].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[0].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[0].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[0].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[0].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[0].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[0].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[0].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[0].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[0].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[0].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[0].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[0].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[0].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[0].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[0].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[0].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[0].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[0].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[0].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[0].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[0].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[0].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[0].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[0].magic) ^ 2)

                                                    )
                                                    c1New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    }
                                                    )

                                                }
                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt((
                                                        (parseInt(rekomendasi[j].action - sentroid[1].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[1].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[1].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[1].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[1].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[1].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[1].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[1].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[1].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[1].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[1].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[1].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[1].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[1].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[1].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[1].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[1].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[1].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[1].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[1].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[1].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[1].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[1].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[1].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[1].magic) ^ 2)

                                                    ))
                                                    c2New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    })

                                                }
                                                for (var j = 0; j < rekomendasi.length; j++) {
                                                    nilai = Math.sqrt((
                                                        (parseInt(rekomendasi[j].action - sentroid[2].action) ^ 2)
                                                        + (parseInt(rekomendasi[j].adventure - sentroid[2].adventure) ^ 2)
                                                        + (parseInt(rekomendasi[j].comedy - sentroid[2].comedy) ^ 2)
                                                        + (parseInt(rekomendasi[j].scifi - sentroid[2].scifi) ^ 2)
                                                        + (parseInt(rekomendasi[j].drama - sentroid[2].drama) ^ 2)
                                                        + (parseInt(rekomendasi[j].space - sentroid[2].space) ^ 2)
                                                        + (parseInt(rekomendasi[j].supernatural - sentroid[2].supernatural) ^ 2)
                                                        + (parseInt(rekomendasi[j].thriller - sentroid[2].thriller) ^ 2)
                                                        + (parseInt(rekomendasi[j].mystery - sentroid[2].mystery) ^ 2)
                                                        + (parseInt(rekomendasi[j].seinen - sentroid[2].seinen) ^ 2)
                                                        + (parseInt(rekomendasi[j].school - sentroid[2].school) ^ 2)
                                                        + (parseInt(rekomendasi[j].historical - sentroid[2].historical) ^ 2)
                                                        + (parseInt(rekomendasi[j].echi - sentroid[2].echi) ^ 2)
                                                        + (parseInt(rekomendasi[j].sliceoflife - sentroid[2].sliceoflife) ^ 2)
                                                        + (parseInt(rekomendasi[j].harem - sentroid[2].harem) ^ 2)
                                                        + (parseInt(rekomendasi[j].pyschological - sentroid[2].pyschological) ^ 2)
                                                        + (parseInt(rekomendasi[j].superpower - sentroid[2].superpower) ^ 2)
                                                        + (parseInt(rekomendasi[j].fantasy - sentroid[2].fantasy) ^ 2)
                                                        + (parseInt(rekomendasi[j].mecha - sentroid[2].mecha) ^ 2)
                                                        + (parseInt(rekomendasi[j].sports - sentroid[2].sports) ^ 2)
                                                        + (parseInt(rekomendasi[j].romance - sentroid[2].romance) ^ 2)
                                                        + (parseInt(rekomendasi[j].shounen - sentroid[2].shounen) ^ 2)
                                                        + (parseInt(rekomendasi[j].horor - sentroid[2].horor) ^ 2)
                                                        + (parseInt(rekomendasi[j].martialarts - sentroid[2].martialarts) ^ 2)
                                                        + (parseInt(rekomendasi[j].magic - sentroid[2].magic) ^ 2)

                                                    ))
                                                    c3New.push({
                                                        id_anime: rekomendasi[j].id_anime,
                                                        nama_anime: rekomendasi[j].nama_anime,
                                                        photo_url: rekomendasi[j].photo_url,
                                                        action: rekomendasi[j].action,
                                                        adventure: rekomendasi[j].adventure,
                                                        comedy: rekomendasi[j].comedy,
                                                        scifi: rekomendasi[j].scifi,
                                                        drama: rekomendasi[j].drama,
                                                        space: rekomendasi[j].space,
                                                        supernatural: rekomendasi[j].supernatural,
                                                        thriller: rekomendasi[j].thriller,
                                                        mystery: rekomendasi[j].mystery,
                                                        seinen: rekomendasi[j].seinen,
                                                        school: rekomendasi[j].school,
                                                        historical: rekomendasi[j].historical,
                                                        echi: rekomendasi[j].echi,
                                                        sliceoflife: rekomendasi[j].sliceoflife,
                                                        harem: rekomendasi[j].harem,
                                                        pyschological: rekomendasi[j].pyschological,
                                                        superpower: rekomendasi[j].superpower,
                                                        fantasy: rekomendasi[j].fantasy,
                                                        mecha: rekomendasi[j].mecha,
                                                        sports: rekomendasi[j].sports,
                                                        romance: rekomendasi[j].romance,
                                                        shounen: rekomendasi[j].shounen,
                                                        horor: rekomendasi[j].horor,
                                                        martialarts: rekomendasi[j].martialarts,
                                                        magic: rekomendasi[j].magic,
                                                        nilai: nilai
                                                    })

                                                }
                                                for (var i = 0; i < c1.length; i++) {

                                                    if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai) {
                                                        naction = parseInt(naction) + parseInt(c1New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c1New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c1New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c1New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c1New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c1New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c1New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c1New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c1New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c1New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c1New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c1New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c1New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c1New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c1New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c1New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c1New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c1New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c1New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c1New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c1New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c1New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c1New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c1New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c1New[i].magic)




                                                        anggotac1New.push({
                                                            id_anime: c1New[i].id_anime,
                                                            nama_anime: c1New[i].nama_anime,
                                                            photo_url: c1New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic,


                                                        }
                                                        )
                                                    }
                                                    else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai) {
                                                        naction = parseInt(naction) + parseInt(c2New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c2New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c2New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c2New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c2New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c2New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c2New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c2New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c2New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c2New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c2New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c2New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c2New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c2New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c2New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c2New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c2New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c2New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c2New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c2New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c2New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c2New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c2New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c2New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c2New[i].magic)


                                                        anggotac2New.push({
                                                            id_anime: c2New[i].id_anime,
                                                            nama_anime: c2New[i].nama_anime,
                                                            photo_url: c2New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic,

                                                        })
                                                    }
                                                    else {
                                                        naction = parseInt(naction) + parseInt(c3New[i].action)
                                                        nadventure = parseInt(nadventure) + parseInt(c3New[i].adventure)
                                                        ncomedy = parseInt(ncomedy) + parseInt(c3New[i].comedy)
                                                        nscifi = parseInt(nscifi) + parseInt(c3New[i].scifi)
                                                        ndrama = parseInt(ndrama) + parseInt(c3New[i].drama)
                                                        nspace = parseInt(nspace) + parseInt(c3New[i].space)
                                                        nsupernatural = parseInt(nsupernatural) + parseInt(c3New[i].supernatural)
                                                        nthriller = parseInt(nthriller) + parseInt(c3New[i].thriller)
                                                        nmystery = parseInt(nmystery) + parseInt(c3New[i].mystery)
                                                        nseinen = parseInt(nseinen) + parseInt(c3New[i].seinen)
                                                        nschool = parseInt(nschool) + parseInt(c3New[i].school)
                                                        nhistorical = parseInt(nhistorical) + parseInt(c3New[i].historical)
                                                        nechi = parseInt(nechi) + parseInt(c3New[i].echi)
                                                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c3New[i].sliceoflife)
                                                        nharem = parseInt(nharem) + parseInt(c3New[i].harem)
                                                        npyschological = parseInt(npyschological) + parseInt(c3New[i].pyschological)
                                                        nsuperpower = parseInt(nsuperpower) + parseInt(c3New[i].superpower)
                                                        nfantasy = parseInt(nfantasy) + parseInt(c3New[i].fantasy)
                                                        nmecha = parseInt(nmecha) + parseInt(c3New[i].mecha)
                                                        nsports = parseInt(nsports) + parseInt(c3New[i].sports)
                                                        nromance = parseInt(nromance) + parseInt(c3New[i].romance)
                                                        nshounen = parseInt(nshounen) + parseInt(c3New[i].shounen)
                                                        nhoror = parseInt(nhoror) + parseInt(c3New[i].horor)
                                                        nmartialarts = parseInt(nmartialarts) + parseInt(c3New[i].martialarts)
                                                        nmagic = parseInt(nmagic) + parseInt(c3New[i].magic)


                                                        anggotac3New.push({
                                                            id_anime: c3New[i].id_anime,
                                                            nama_anime: c3New[i].nama_anime,
                                                            photo_url: c3New[i].photo_url,
                                                            naction: naction,
                                                            nadventure: nadventure,
                                                            ncomedy: ncomedy,
                                                            nscifi: nscifi,
                                                            ndrama: ndrama,
                                                            nspace: nspace,
                                                            nsupernatural: nsupernatural,
                                                            nthriller: nthriller,
                                                            nmystery: nmystery,
                                                            nseinen: nseinen,
                                                            nschool: nschool,
                                                            nhistorical: nhistorical,
                                                            nechi: nechi,
                                                            nsliceoflife: nsliceoflife,
                                                            nharem: nharem,
                                                            npyschological: npyschological,
                                                            nsuperpower: nsuperpower,
                                                            nfantasy: nfantasy,
                                                            nmecha: nmecha,
                                                            nsports: nsports,
                                                            nromance: nromance,
                                                            nshounen: nshounen,
                                                            nhoror: nhoror,
                                                            nmartialarts: nmartialarts,
                                                            nmagic: nmagic
                                                        })
                                                    }
                                                }
                                                iterasi++
                                            }

                                            var ketemu = 0;
                                            var rekom = []
                                            var i = 0


                                            while (ketemu == 0) {
                                                if (anggotac1.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac1.length) {

                                                        if (req.param('id') == anggotac1[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac1.length; j++) {
                                                                if (req.param('id') == anggotac1[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac1[j].id_anime,
                                                                        nama_anime: anggotac1[j].nama_anime,
                                                                        photo_url: anggotac1[j].photo_url,
                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                if (anggotac2.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac2.length) {
                                                        if (req.param('id') == anggotac2[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac2.length; j++) {
                                                                if (req.param('id') == anggotac2[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac2[j].id_anime,
                                                                        nama_anime: anggotac2[j].nama_anime,
                                                                        photo_url: anggotac2[j].photo_url,
                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                                if (anggotac3.length != 0) {
                                                    var i = 0
                                                    while (i < anggotac3.length) {
                                                        if (req.param('id') == anggotac3[i].id_anime) {
                                                            ketemu = 1
                                                            for (var j = 0; j < anggotac3.length; j++) {
                                                                if (req.param('id') == anggotac3[j].id_anime) {
                                                                    continue
                                                                }
                                                                else {
                                                                    rekom.push({
                                                                        ani: anggotac3[j].id_anime,
                                                                        nama_anime: anggotac3[j].nama_anime,
                                                                        photo_url: anggotac3[j].photo_url,

                                                                    })
                                                                }
                                                            }
                                                        }
                                                        i++
                                                    }
                                                }
                                            }


                                            var sum = 0
                                            var sum1 = 0
                                            var sum2 = 0
                                            var c1Max = []
                                            var c2Max = []
                                            var c3Max = []
                                            var prob1 = []
                                            var prob2 = []
                                            var prob3 = []
                                            for (var i = 0; i < c1.length; i++) {

                                                c1Max.push(c1[i].nilai)
                                            }
                                            for (var i = 0; i < c2.length; i++) {

                                                c2Max.push(c2[i].nilai)
                                            }
                                            for (var i = 0; i < c2.length; i++) {

                                                c3Max.push(c3[i].nilai)
                                            }
                                            var max1 = Math.max.apply(Math, c1Max)
                                            var max2 = Math.max.apply(Math, c2Max)
                                            var max3 = Math.max.apply(Math, c3Max)

                                            for (var i = 0; i < c1.length; i++) {
                                                prob1.push(
                                                    1 - (c1[i].nilai / max1)
                                                )
                                            }
                                            for (var i = 0; i < c2.length; i++) {
                                                prob2.push(
                                                    1 - (c2[i].nilai / max2)
                                                )
                                            }
                                            for (var i = 0; i < c3.length; i++) {
                                                prob3.push(
                                                    1 - (c3[i].nilai / max3)
                                                )
                                            }

                                            for (var i = 0; i < c1.length; i++) {
                                                sum = parseFloat(sum) + parseFloat(prob1[i])
                                            }
                                            for (var i = 0; i < c2.length; i++) {
                                                sum1 = parseFloat(sum1) + parseFloat(prob2[i])
                                            }
                                            for (var i = 0; i < c3.length; i++) {
                                                sum2 = parseFloat(sum2) + parseFloat(prob3[i])
                                            }
                                            var rataC1 = parseFloat(sum) / c1.length
                                            var rataC2 = parseFloat(sum1) / c2.length
                                            var rataC3 = parseFloat(sum2) / c2.length
                                            var groupRating = []

                                            for (var i = 0; i < rekomendasi.length; i++) {
                                                var hSementaraUp = 0
                                                var hSementaraDown = 0
                                                var hasil = 0
                                                for (var j = 0; j < rekomendasi.length; j++) {

                                                    hSementaraUp = hSementaraUp +
                                                        ((parseInt(c1[j].nilai - parseInt(rataC1) * (parseInt(c1[i].nilai) - parseInt(rataC1))))
                                                            + ((parseInt(c2[j].nilai) - parseInt(rataC2)) * (parseInt(c2[i].nilai - parseInt(rataC2))))
                                                            + ((parseInt(c3[j].nilai) - parseInt(rataC3)) * (parseInt(c3[i].nilai - parseInt(rataC3))))
                                                        )
                                                    hSementaraDown = parseInt(hSementaraDown)
                                                        + Math.sqrt((Math.pow(parseInt(c1[j].nilai) - parseInt(rataC1), 2) +
                                                            (Math.pow(parseInt(c2[j].nilai) - parseInt(rataC2), 2)) +
                                                            (Math.pow(parseInt(c3[j].nilai) - parseInt(rataC3), 2))
                                                        )) * Math.sqrt((Math.pow(parseInt(c1[i].nilai) - parseInt(rataC1), 2))
                                                            + (Math.pow(parseInt(c2[i].nilai) - parseInt(rataC2), 2))
                                                            + (Math.pow(parseInt(c3[i].nilai) - parseInt(rataC3), 2)))

                                                    groupRating.push(parseInt(hSementaraUp) / parseInt(hSementaraDown))

                                                }


                                            }
                                            var nativePromise = new Promise(function (resolve, reject) {
                                                Rating.native(function (err, collection) {

                                                    if (err) return res.serverError(err);
                                                    var scoreSem = [1, 3, 4, 6, 3, 1, 2, 9, 3, 1, 3, 2, 4, 6, 3, 5, 2, 9, 3, 9, 1, 3, 4, 6, 3, 10, 2, 7, 6, 3, 7, 3, 5, 7, 3, 10, 2, 9, 2, 5, 7, 4, 4, 8, 3, 1, 2, 9, 3, 8, 5, 6, 8, 1, 3, 7, 2, 7, 3, 10, 8, 9, 1, 6, 3, 1, 2, 8, 4, 10, 7, 3, 4, 6, 3, 3, 2, 6, 5, 10, 2, 3, 4, 9, 3, 1, 2, 9, 3, 1, 10, 6, 5, 7, 5, 2, 8, 9, 2, 2, 5, 7, 9, 8, 4, 5, 3, 7, 4, 10, 7, 5, 4, 6, 3, 7, 2, 7, 3, 7, 5, 8, 3, 1, 10, 5, 3, 7, 8, 9, 6, 4, 5, 7, 8, 10, 2, 9, 8, 9, 6, 3, 4, 7, 0, 8, 3, 7, 5, 4, 7, 4, 5, 9, 8, 5, 2, 9, 3, 3, 7, 3, 4, 7, 5, 1, 2, 9, 3, 9, 5, 5, 4, 3, 1, 2, 9, 3, 5, 5, 8, 4, 5, 7, 8, 10, 6, 8, 4, 10, 10, 9, 5, 4, 3, 2, 1, 1, 5, 4, 10, 5, 4, 7, 9, 6, 4, 8, 7, 6, 5, 4, 7, 8, 6, 4, 4, 3, 2, 1, 5, 3, 4, 5, 6, 7, 1, 2, 3, 9, 6, 4, 2, 1, 3, 5, 6, 3, 2, 1, 2, 3, 5, 7]

                                                    collection.find({}, {
                                                        id_anime: true,
                                                        id_user: true,
                                                        score: true

                                                    }).toArray(function (err, rating) {

                                                        if (err) return res.serverError(err);
                                                        Anime.native(function (err, collection) {
                                                            if (err) return res.serverError(err);
                                                            collection.find({}, {
                                                                id_anime: true,
                                                                nama_anime: true,
                                                                photo_url: true,
                                                                score : true,
                                                                genre:true,
                                                                type:true,
                                                                tahun_terbit:true


                                                            }).toArray(function (err, anime) {

                                                                if (err) return res.serverError(err);
                                                                User.native(function (err, collection) {
                                                                    if (err) return res.serverError(err);
                                                                    collection.find({}, {
                                                                        nama: true,

                                                                    }).toArray(function (err, user) {
                                                                        if (err) return res.serverError(err);
                                                                        var rata2 = []
                                                                        for (var i = 0; i < anime.length; i++) {
                                                                            var total = 0
                                                                            for (var j = 0; j < rating.length; j++) {
                                                                                if (anime[i]._id == rating[j].id_anime) {
                                                                                    total = total + parseInt(rating[j].score)
                                                                                }
                                                                            }
                                                                            var rata = parseInt(total) / user.length
                                                                            rata2.push(rata)
                                                                        }

                                                                        var itemRating = []
                                                                                                    
                                                for (var i = 0; i < user.length; i++) {
                                                    var hSup = 0
                                                    var hSDown = 0
                                                    for (var j = 0; j < anime.length; j++) {
                                                        hSup = hSup + (scoreSem[j] - parseInt(rata2[j]) * (scoreSem[i] - parseInt(rata2[i])))
                                                        hSDown = hSDown + Math.sqrt((Math.pow(scoreSem[j] - parseInt(rata2[j]), 2)) * Math.pow(scoreSem[i] - parseInt(rata2[i]), 2))

                                                    }
                                                    var hasil = parseInt(hSup) / parseInt(hSDown)
                                                    itemRating.push(hasil)
                                                }

                                               
                                                var c = 0.5
                                                var simi = []
                                                
                                                

                                                for (var i = 0; i < groupRating.length; i++) {
                                                    j = 0
                                                    if (j == parseInt(user.length)) {
                                                        jsimi.push((parseFloat(itemRating[j]) * (1 - c)) + (parseFloat(groupRating[i]) * c))
                                                        j = j - parseInt(user.length)
                                                    }
                                                    else {
                                                        simi.push((parseFloat(itemRating[j]) * (1 - c)) + (parseFloat(groupRating[i]) * c))
                                                        j++
                                                    }
                                                }

                                                var totalRata = []
                                                var bnyk = 0
                                                var hsl = 0
                                                var x = 199
                                               
                                                while (bnyk < simi.length ) {
                                                    hsl = hsl + simi[bnyk]
                                                    if (bnyk == x) {
                                                        totalRata.push(hsl)
                                                        hsl = 0
                                                        x = x + 200                                          
                                                    }
                                                    
                                                    bnyk++
                                                }
                                                var arrHasilSementara = []
                                               

                                                for (var i = 0; i < user.length; i++) {
                                                    var hasilRateSementara = 0

                                                    for (var j = 0; j < anime.length; j++) {
                                                        hasilRateSementara = hasilRateSementara + ((parseInt(scoreSem[j]) - parseInt(rata2[j])) * simi[i])
                                                    }
                                                    arrHasilSementara.push(hasilRateSementara)
                                                }
                                                var hasilRateAkhir = []
                                                
                                             
                                                for (var i = 0; i < anime.length; i++) {
                                                    var hasilAkhir = 0
                                                    for (var j = 0; j < user.length; j++) {
                                                        hasilAkhir = hasilAkhir + ((scoreSem[i] + arrHasilSementara[j]) / totalRata[i])
                                                        hasilRateAkhir.push(hasilAkhir)
                                                        hasilAkhir = 0
                                                    }
                                                }
                                                var rerataAkhir = []
                                                var banyak = 0
                                                var rerata = 0
                                                var jumlahUser = user.length - 1

                                                while (banyak < hasilRateAkhir.length) {
                                                    rerata = rerata + hasilRateAkhir[banyak]
                                                    if (banyak == jumlahUser) {
                                                        rerata = parseFloat(rerata) / user.length
                                                        rerataAkhir.push(rerata)
                                                        jumlahUser = jumlahUser + user.length
                                                    }
                                                    banyak++
                                                }
                                                var prioritas = []

                                                for (var i = 0; i < anime.length; i++) {

                                                    prioritas.push({
                                                        id_anime: anime[i]._id.toString(),
                                                        photo_url: anime[i].photo_url,
                                                        nama_anime: anime[i].nama_anime,
                                                        type: anime[i].type,
                                                        score: anime[i].score,
                                                        tahun: anime[i].tahun_terbit,
                                                        genre: anime[i].genre,
                                                        rata: rerataAkhir[i]
                                                    })
                                                }var rerataAkhir = []
                                                var banyak = 0
                                                var rerata = 0
                                                var jumlahUser = user.length - 1

                                                while (banyak < hasilRateAkhir.length) {
                                                    rerata = rerata + hasilRateAkhir[banyak]
                                                    if (banyak == jumlahUser) {
                                                        rerata = parseFloat(rerata) / user.length
                                                        rerataAkhir.push(rerata)
                                                        jumlahUser = jumlahUser + user.length
                                                    }
                                                    banyak++
                                                }
                                                var prioritas = []

                                                for (var i = 0; i < anime.length; i++) {

                                                    prioritas.push({
                                                        id_anime: anime[i]._id.toString(),
                                                        photo_url: anime[i].photo_url,
                                                        nama_anime: anime[i].nama_anime,
                                                        type: anime[i].type,
                                                        score: anime[i].score,
                                                        tahun: anime[i].tahun_terbit,
                                                        genre: anime[i].genre,
                                                        rata: rerataAkhir[i]
                                                    })
                                                }

                                                var rekomendasiAkhir = []

                                                for (var j = 0; j < prioritas.length; j++) {
                                                    if (req.param('id') == prioritas[j].id_anime) {
                                                        continue
                                                    }
                                                    else {
                                                        rekomendasiAkhir.push({
                                                            id_anime: prioritas[j].id_anime,
                                                            type:prioritas[j].type,
                                                            nama_anime: prioritas[j].nama_anime,
                                                            photo_url: prioritas[j].photo_url,
                                                            score: prioritas[j].score,
                                                            tahun: prioritas[j].tahun,
                                                            genre: prioritas[j].genre,
                                                            rata: rerataAkhir[j]

                                                        })
                                                    }
                                                }

                                return resolve(rekomendasiAkhir)




                                                                    })
                                                                    


                                                                })

                                                            })

                                                        })


                                                    })

                                                })
                                            })
                                            return nativePromise.then(function (rekomUser) {
                                                async.map(rekomUser, (function (object, callback) {

                                                    Temp.create(object).exec(callback);
                                                }), function (error, createdOrFoundObjects) {
                                                
                                                });
                                                item_count = req.param('item_count')
                                                page = req.param('page')
                                                res.json(paginate(rekomUser.sort(function (a, b) { return b.rata - a.rata }), item_count, page))



                                            })





                                        })
                                    })


                                }
                            }
                        })

                    }
                })

            }
        })
    },
    detailAnimeM: function (req, res, next) {

        Anime.findOne(req.param('id')).populateAll().exec(function (err, anime) {
            if (err) {
                return res.serverError(err);
            } else {

                anime.genreStrings = []
                anime.userStrings = []
                async.each(anime.genre_lists, function (genre, callback) {
                    Genre.findOne({ id: genre.id_genre }).exec(function (err, genres) {
                        if (err) {
                            callback(err)
                        } else {

                            anime.genreStrings.push({
                                id: genres.id,
                                nama_genre: genres.nama_genre
                            })
                            callback()
                        }
                    })
                }, function (err) { // function ini akan jalan bila semua genre_lists telah diproses

                    if (err)
                        return res.serverError(err);
                    else {
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
                                        createdAt: user.createdAt


                                    })
                                    callback()
                                }
                            })
                        }, function (err) { // function ini akan jalan bila semua genre_lists telah diproses

                            if (err)
                                return res.serverError(err);
                            else {
                                if (err)
                                    return res.serverError(err);
                                else {
                                    res.json(anime)

                                }
                            }
                        })

                    }
                })

            }
        })
    },
    rekomendasiMobile: function (req, res, next) {
        item_count = req.param('item_count')
        page = req.param('page')
        Temp
            .find({})
            .sort('rata DESC')
            //.where({ createdAt: { '>=': dateFrom, '<=': dateTo } })
            .skip((item_count * page) - item_count)
            .limit(item_count)
            .populateAll()
            .exec(function (err, temp) {
                res.json(temp)

            });

    },
    daftarAnimeMobile: function (req, res, next) {
        var item_count = req.param('item_count')
        var page_number = req.param('page_number')


        Anime.find()
            .skip((item_count * page_number) - item_count)
            .limit(item_count)
            .exec(function (err, anime) {
                if (err) {
                    return res.serverError(err);
                }
                else {

                    res.json(anime)

                }

            })
    },
    animeTerbaruMobile: function (req, res, next) {
        var page_number = req.param('page_number')
        var item_count = req.param('item_count')
        Episode_anime
            .find({})
            .sort({ createdAt: 'DESC', episode: 'DESC' })
            .skip((item_count * page_number) - item_count)
            .limit(item_count)
            .populateAll()
            .exec(function (err, episode) {
                episode.animeT = []
                for (var i = 0; i < episode.length; i++) {
                    var episodes = episode[i];
                    var animes = episodes.owner_anime
                    episode.animeT.push({
                        id_anime: animes.id,
                        nama_anime: animes.nama_anime,
                        photo_url: animes.photo_url,
                        episode: episodes.episode,
                        type:animes.type
                    })

                }
                res.json(episode.animeT)
            });
    },
    scoreRating: function (req, res, next) {
        Anime.findOne(req.param('id')).populateAll().exec(function (err, anime) {
            if (err) {
                return res.serverError(err);
            } else {
                anime.genreStrings = []
                anime.userStrings = []
                async.each(anime.genre_lists, function (genre, callback) {
                    Genre.findOne({ id: genre.id_genre }).exec(function (err, genres) {
                        if (err) {
                            callback(err)
                        } else {
                            anime.genreStrings.push({
                                id: genres.id,
                                nama_genre: genres.nama_genre
                            })
                            callback()
                        }
                    })
                }, function (err) {
                    if (err)
                        return res.serverError(err);
                    else {
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
                            var dataRating = []
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
                            persenBintang5 = t_score10 / jumlahRating * 100
                            persenBintang4 = (t_score9 + t_score8) / jumlahRating * 100
                            persenBintang3 = (t_score7 + t_score6) / jumlahRating * 100
                            persenBintang2 = (t_score5 + t_score4) / jumlahRating * 100
                            persenBintang1 = (t_score3 + t_score2 + t_score1) / jumlahRating * 100

                            var ratingAkhir = (score / anime.userStrings.length)
                            jlhBintang5 = t_score10
                            jlhBintang4 = t_score9 + t_score8
                            jlhBintang3 = t_score7 + t_score6
                            jlhBintang2 = t_score5 + t_score4
                            jlhBintang1 = t_score3 + t_score2 + t_score1
                            persenBintang5 = persenBintang5
                            persenBintang4 = persenBintang4
                            persenBintang3 = persenBintang3
                            persenBintang2 = persenBintang2
                            persenBintang1 = persenBintang1
                            dataRating = {
                                jlhBintang5: jlhBintang5 + "",
                                jlhBintang4: jlhBintang4 + "",
                                jlhBintang3: jlhBintang3 + "",
                                jlhBintang2: jlhBintang2 + "",
                                jlhBintang1: jlhBintang1 + "",
                                persenBintang5: persenBintang5 + "",
                                persenBintang4: persenBintang4 + "",
                                persenBintang3: persenBintang3 + "",
                                persenBintang2: persenBintang2 + "",
                                persenBintang1: persenBintang1 + "",
                                ratingAkhir: ratingAkhir.toFixed(2) + "",
                                jumlahRating: jumlahRating + ""
                            }
                            if (err)
                                return res.serverError(err);
                            else {
                                if (err)
                                    return res.serverError(err);
                                else {
                                    res.json(dataRating)

                                }
                            }
                        })

                    }
                })

            }
        })
    },


}



