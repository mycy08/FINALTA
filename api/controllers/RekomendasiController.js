/**
 * RekomendasiController
 *
 * @description :: Server-side logic for managing rekomendasis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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

        var tahunAwal
        var tahunAkhir
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
            scoreAwal =1
            scoreAkhir=8
        }
        else{
            scoreAwal =1
            scoreAkhir=10
        }

        if(tahun==1){
            tahunAwal=1996
            tahunAkhir=2000
        }
        else if(tahun==2){
            tahunAwal=2001
            tahunAkhir=2005
        }
        else if(tahun==3){
            tahunAwal=2006
            tahunAkhir=2010
        }
        else if(tahun==4){
            tahunAwal=2011
            tahunAkhir=2015
        }
        else if(tahun==5){
            tahunAwal=2016
            tahunAkhir=2020
        }
        else{
            tahunAwal=1995
            tahunAkhir=2020
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
            // console.log(temp)
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

        var tahunAwal
        var tahunAkhir
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
            scoreAwal =1
            scoreAkhir=8
        }
        else{
            scoreAwal =1
            scoreAkhir=10
        }

        if(tahun==1){
            tahunAwal=1996
            tahunAkhir=2000
        }
        else if(tahun==2){
            tahunAwal=2001
            tahunAkhir=2005
        }
        else if(tahun==3){
            tahunAwal=2006
            tahunAkhir=2010
        }
        else if(tahun==4){
            tahunAwal=2011
            tahunAkhir=2015
        }
        else if(tahun==5){
            tahunAwal=2016
            tahunAkhir=2020
        }
        else{
            tahunAwal=1995
            tahunAkhir=2020
        }
        Temp.find({})
                .sort("rata desc")
                .where({score : {'>=': scoreAwal}},{score : {'<=': scoreAkhir}})
                .where({ tahun :{$gt: tahunAwal, $lt: tahunAkhir} })
                .where({like:{genre:'%' + genres + '%' }})
                
        .exec(function(err,temp){
            
            if(err) return res.serverError(err)
            res.json(temp)
        })
    }

};

