/**
 * RekomendasiController
 *
 * @description :: Server-side logic for managing rekomendasis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Promise = require('bluebird');
module.exports = {
    add : function(req,res){
        res.view('admin/addRekomendasi',{
            layout:false
        })
    },

    tampilTemp:function(req,res) {
        Temp.find().sort('rata Desc').exec(function(err,temp){
            if(err) return res.serverError(err)
                res.json(temp)
        })
    },

    
    filterRekomendasi: function (req, res) {
        var genre,genres
        var tahunAwal
        var tahunAkhir
        var Taw = req.param('tahun_awal')
        var Tak = req.param('tahun_akhir')
        if(Taw>Tak){
            tahunAwal =parseInt(Tak)-1
            tahunAkhir=parseInt(Taw)+1
        }
        else{
            tahunAwal =parseInt(Taw)-1
            tahunAkhir=parseInt(Tak)+1
        }

        
        if(req.param('genre')==undefined){
             genres = ""
        }
        else{
             genre = req.param('genre')+""
             genres = genre.replace(/,/g,", ")
        }
        
        var star = req.param('star')
        var tahun = req.param('tahun')
       
        
        
        var scoreAwal
        var scoreAkhir

        
        if(star==5){
            scoreAwal =10
            scoreAkhir=10
        }
        else if(star==4){
            scoreAwal =8
            scoreAkhir=9
        } 
        else if(star==3){
            scoreAwal =6
            scoreAkhir=7
        } 
        else if(star==2){
            scoreAwal =4
            scoreAkhir=5
        }
        else{
            scoreAwal =1
            scoreAkhir=3
        }

        var page = req.param('page')
        var perPage=12
        Temp.find({})
                .sort("rata desc")
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .where({score : {'>=': scoreAwal}},{score : {'<=': scoreAkhir}})
                .where({ tahun :{$gt: tahunAwal, $lt: tahunAkhir} })
                .where({like:{genre:'%' + genres + '%' }})
                
        .exec(function(err,temp){
            
            if(err) return res.serverError(err)
            Temp.count({})
                .sort("rata desc")
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .where({score : {'>=': scoreAwal}},{score : {'<=': scoreAkhir}})
                .where({ tahun :{$gt: tahunAwal, $lt: tahunAkhir} })
                .where({like:{genre:'%' + genres + '%' }})
                
        .exec(function(err,count){
            Genre.find().exec(function (err, genre) {
                if (req.session.User) {
                    Notifikasi.find({ id_user: req.session.User.id }).sort('updatedAt DESC').exec(function(err,notif){
                        Notifikasi.count({ id_user: req.session.User.id, status:"false" }).sort('updatedAt DESC').exec(function(err,countNotif){
                            res.view("user/filter-rekomendasi/", {
                                status: 'OK',
                                notif:notif,
                                title: 'Filter Rekomendasi',
                                countNotif:countNotif,
                                genre: genre,
                                temp: temp,
                                current: page,
                                pages: Math.ceil(count / perPage)
                            })
                        })
                        
                    })
                  }
                  else{
                    res.view("user/filter-rekomendasi/", {
                        status: 'OK',
                        title: 'Filter Rekomendasi',
                        genre: genre,
                        temp: temp,
                        current: page,
                        pages: Math.ceil(count / perPage)
                    })
                  }
                
            })
        })
            
        })
    },

    //mobile
    filterRekomendasiMobile: function (req, res) {
        var genre,genres
        var tahunAwal
        var tahunAkhir
        var Taw = req.param('tahun_awal')
        var Tak = req.param('tahun_akhir')

        
        if(Taw>Tak){
            tahunAwal =parseInt(Tak)-1
            tahunAkhir=parseInt(Taw)+1
        }
        else if(Taw==undefined && Tak==undefined){
            tahunAwal=1995
            tahunAkhir=2019
        }
        else{
            tahunAwal =parseInt(Taw)-1
            tahunAkhir=parseInt(Tak)+1
        }

        console.log("TAawl : " +tahunAwal)
        console.log("TAHIR :" +tahunAkhir)

        
        if(req.param('genre')==undefined){
             genres = ""
        }
        else{
             genre = req.param('genre')+""
             genres = genre.replace(/,/g,", ")
        }
        
        var star = req.param('star')
        
        console.log(star);      
       
        
        
        var scoreAwal
        var scoreAkhir

        
        if(star==5){
            scoreAwal =10
            scoreAkhir=10
        }
        else if(star==4){
            scoreAwal =8
            scoreAkhir=9
        } 
        else if(star==3){
            scoreAwal =6
            scoreAkhir=7
        } 
        else if(star==2){
            scoreAwal =4
            scoreAkhir=5
        }
        else{
            scoreAwal =1
            scoreAkhir=3
        }
        console.log(scoreAwal)
        console.log(scoreAkhir)

        var page = req.param('page')
        var perPage=req.param('item_count')
        Temp.find({})
                .sort("rata desc")
                .skip((perPage * page) - perPage)
                .limit(perPage)
                .where({score : {'>=': scoreAwal}},{score : {'<=': scoreAkhir}})
                .where({ tahun :{$gt: tahunAwal, $lt: tahunAkhir} })
                .where({like:{genre:'%' + genres + '%' }})
                
        .exec(function(err,temp){
            console.log(temp);
            if(err) return res.serverError(err)
            res.json(temp)
            
        })
    }

};

