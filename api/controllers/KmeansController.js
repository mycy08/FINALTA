/**
 * KmeansController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var Promise = require('bluebird');
module.exports = {
    add:function(req,res){
        res.view('admin/k-means',{
            layout:false
        })
    },
    kmeans: function (req, res) {
        if(req.param('cluss')==undefined){
            res.view('admin/algoritma/k-means',{
                title:'K-Means',
                layout:false,
                clus:0
            })
        }
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
                var c4 = []
                var c5 = []
                var c6 = []
                var c7 = []
                var c8 = []
                var c9 = []
                var c1New = []
                var c2New = []
                var c3New = []
                var c4New = []
                var c5New = []
                var c6New = []
                var c7New = []
                var c8New = []
                var c9New = []

                var sentroid = []
                var sentroid1 = []
                var sentroid2 = []
                var sentroid3 = []
                var sentroid4 = []
                var sentroid5 = []
                var sentroid6 = []
                var sentroid7 = []
                var sentroid8 = []
                var sentroid9 = []
                
                var anggotac1 = []
                var anggotac2 = []
                var anggotac3 = []
                var anggotac4 = []
                var anggotac5 = []
                var anggotac6 = []
                var anggotac7 = []
                var anggotac8 = []
                var anggotac9 = []
                

                var anggotac1New = []
                var anggotac2New = []
                var anggotac3New = []
                var anggotac4New = []
                var anggotac5New = []
                var anggotac6New = []
                var anggotac7New = []
                var anggotac8New = []
                var anggotac9New = []
                var jarak_terpendek = []
                var clus = req.param('cluss')
                for (var i = 0; i < clus; i++) {
                    // var rand = Math.floor(Math.random() * 200);
                    cluster.push(rekomendasi[i+10])

                }
            if(clus==2){
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
                    for (var i = 0; i < c1.length; i++) {
            
                        if (c1[i].nilai <= c2[i].nilai) {
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
                        else if (c2[i].nilai < c1[i].nilai) {
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
                        for (var i = 0; i < c1.length; i++) {
            
                            if (c1New[i].nilai < c2New[i].nilai) {
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
                            else  {
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
                            
                        }
                        iterasi++
                }
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,    
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==3){
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
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length)) {
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==4){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
            
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai) {
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
            
                        anggotac4.push({
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
                    else {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length )) {
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
                    sentroid4.push({
                        id_anime: cluster[0].id_anime,
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4
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
                    for (var j = 0; j < rekomendasi.length; j++) {
                        nilai = Math.sqrt((
                            (parseInt(rekomendasi[j].action - sentroid[3].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[3].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[3].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[3].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[3].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[3].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[3].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[3].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[3].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[3].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[3].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[3].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[3].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[3].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[3].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[3].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[3].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[3].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[3].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[3].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[3].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[3].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[3].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[3].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[3].magic) ^ 2)
            
            
                        ))
                        c4New.push({
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
            
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai) {
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
                        
                        else if(c3New[i].nilai < c1New[i].nilai && c3New[i].nilai < c2New[i].nilai && c3New[i].nilai < c4New[i].nilai) {
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
                        else{
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac4New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==5){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
                        (parseInt(rekomendasi[j].action - cluster[4].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[4].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[4].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[4].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[4].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[4].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[4].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[4].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[4].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[4].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[4].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[4].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[4].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[4].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[4].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[4].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[4].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[4].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[4].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[4].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[4].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[4].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[4].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[4].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[4].magic) ^ 2)
                        ))
            
                        
                    c5.push({
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
            
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai && c1[i].nilai < c5[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai && c2[i].nilai < c5[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai && c3[i].nilai < c5[i].nilai) {
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
            
                        anggotac4.push({
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
                    
                    else if (c4[i].nilai < c1[i].nilai && c4[i].nilai < c2[i].nilai && c4[i].nilai < c4[i].nilai && c4[i].nilai < c5[i].nilai) {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
            
                    else{
                        naction = parseInt(naction) + parseInt(c5[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c5[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c5[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c5[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c5[i].drama)
                        nspace = parseInt(nspace) + parseInt(c5[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c5[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c5[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c5[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c5[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c5[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c5[i].historical)
                        nechi = parseInt(nechi) + parseInt(c5[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c5[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c5[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c5[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c5[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c5[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c5[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c5[i].sports)
                        nromance = parseInt(nromance) + parseInt(c5[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c5[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c5[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c5[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c5[i].magic)
            
            
                        anggotac5.push({
                            id_anime: c5[i].id_anime,
                            nama_anime: c5[i].nama_anime,
                            photo_url: c5[i].photo_url,
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
                            nilai: c5[i].nilai
                        })
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length && anggotac5.length == anggotac5New.length )) {
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
                    sentroid4.push({
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid5.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4.
                        sentroid5
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
            
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai && c1New[i].nilai < c5New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai && c2New[i].nilai < c5New[i].nilai) {
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    c5:c5,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    anggotac5:anggotac5,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==6){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
                        (parseInt(rekomendasi[j].action - cluster[4].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[4].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[4].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[4].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[4].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[4].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[4].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[4].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[4].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[4].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[4].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[4].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[4].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[4].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[4].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[4].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[4].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[4].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[4].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[4].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[4].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[4].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[4].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[4].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[4].magic) ^ 2)
                        ))
            
                        
                    c5.push({
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
                        (parseInt(rekomendasi[j].action - cluster[5].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[5].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[5].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[5].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[5].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[5].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[5].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[5].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[5].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[5].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[5].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[5].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[5].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[5].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[5].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[5].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[5].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[5].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[5].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[5].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[5].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[5].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[5].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[5].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[5].magic) ^ 2)
            
                        ))
            
                        
                    c6.push({
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
            
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai && c1[i].nilai < c5[i].nilai && c1[i].nilai < c6[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai && c2[i].nilai < c5[i].nilai && c2[i].nilai < c6[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai && c3[i].nilai < c5[i].nilai && c3[i].nilai < c6[i].nilai) {
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
            
                        anggotac4.push({
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
                    
                    else if (c4[i].nilai < c1[i].nilai && c4[i].nilai < c2[i].nilai && c4[i].nilai < c4[i].nilai && c4[i].nilai < c5[i].nilai && c4[i].nilai < c6[i].nilai) {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
            
                    else if (c5[i].nilai < c1[i].nilai && c5[i].nilai < c2[i].nilai && c5[i].nilai < c3[i].nilai && c5[i].nilai < c4[i].nilai && c5[i].nilai < c6[i].nilai){
                        naction = parseInt(naction) + parseInt(c5[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c5[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c5[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c5[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c5[i].drama)
                        nspace = parseInt(nspace) + parseInt(c5[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c5[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c5[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c5[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c5[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c5[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c5[i].historical)
                        nechi = parseInt(nechi) + parseInt(c5[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c5[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c5[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c5[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c5[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c5[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c5[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c5[i].sports)
                        nromance = parseInt(nromance) + parseInt(c5[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c5[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c5[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c5[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c5[i].magic)
            
            
                        anggotac5.push({
                            id_anime: c5[i].id_anime,
                            nama_anime: c5[i].nama_anime,
                            photo_url: c5[i].photo_url,
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
                            nilai: c5[i].nilai
                        })
                    }
                    else{
                        naction = parseInt(naction) + parseInt(c6[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c6[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c6[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c6[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c6[i].drama)
                        nspace = parseInt(nspace) + parseInt(c6[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c6[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c6[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c6[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c6[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c6[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c6[i].historical)
                        nechi = parseInt(nechi) + parseInt(c6[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c6[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c6[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c6[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c6[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c6[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c6[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c6[i].sports)
                        nromance = parseInt(nromance) + parseInt(c6[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c6[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c6[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c6[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c6[i].magic)
                        anggotac6.push({
                            id_anime: c6[i].id_anime,
                            nama_anime: c6[i].nama_anime,
                            photo_url: c6[i].photo_url,
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
                            nilai: c6[i].nilai
                        })
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length && anggotac5.length == anggotac5New.length && anggotac6.length == anggotac6New.length)) {
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
                    sentroid4.push({
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid5.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid6.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4,
                        sentroid5,
                        sentroid6
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
                    for (var j = 0; j < rekomendasi.length; j++) {
                        nilai = Math.sqrt((
                            (parseInt(rekomendasi[j].action - sentroid[3].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[3].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[3].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[3].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[3].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[3].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[3].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[3].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[3].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[3].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[3].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[3].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[3].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[3].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[3].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[3].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[3].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[3].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[3].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[3].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[3].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[3].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[3].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[3].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[3].magic) ^ 2)
            
            
                        ))
                        c4New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[4].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[4].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[4].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[4].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[4].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[4].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[4].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[4].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[4].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[4].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[4].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[4].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[4].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[4].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[4].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[4].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[4].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[4].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[4].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[4].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[4].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[4].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[4].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[4].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[4].magic) ^ 2)
            
            
            
                        ))
                        c5New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[5].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[5].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[5].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[5].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[5].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[5].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[5].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[5].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[5].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[5].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[5].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[5].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[5].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[5].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[5].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[5].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[5].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[5].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[5].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[5].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[5].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[5].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[5].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[5].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[5].magic) ^ 2)

            
            
            
            
                        ))
                        c6New.push({
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
            
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai && c1New[i].nilai < c5New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai && c2New[i].nilai < c5New[i].nilai) {
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
                        
                        else if(c3New[i].nilai < c1New[i].nilai && c3New[i].nilai < c2New[i].nilai && c3New[i].nilai < c4New[i].nilai && c3New[i].nilai < c5New[i].nilai) {
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
                        else if(c4New[i].nilai < c1New[i].nilai && c4New[i].nilai < c2New[i].nilai && c4New[i].nilai < c3New[i].nilai && c4New[i].nilai < c5New[i].nilai){
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac4New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c5New[i].nilai < c1New[i].nilai && c5New[i].nilai < c2New[i].nilai && c5New[i].nilai < c3New[i].nilai && c5New[i].nilai < c6New[i].nilai){
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac5New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else{
                            action = parseInt(naction) + parseInt(c6New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c6New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c6New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c6New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c6New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c6New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c6New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c6New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c6New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c6New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c6New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c6New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c6New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c6New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c6New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c6New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c6New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c6New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c6New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c6New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c6New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c6New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c6New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c6New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c6New[i].magic)
            
            
            
                            anggotac6New.push({
                            id_anime: c6New[i].id_anime,
                            nama_anime: c6New[i].nama_anime,
                            photo_url: c6New[i].photo_url,
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    c5:c5,
                    c6:c6,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    anggotac5:anggotac5,
                    anggotac6:anggotac6,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==7){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
                        (parseInt(rekomendasi[j].action - cluster[4].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[4].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[4].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[4].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[4].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[4].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[4].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[4].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[4].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[4].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[4].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[4].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[4].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[4].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[4].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[4].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[4].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[4].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[4].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[4].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[4].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[4].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[4].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[4].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[4].magic) ^ 2)
                        ))
            
                        
                    c5.push({
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
                        (parseInt(rekomendasi[j].action - cluster[5].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[5].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[5].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[5].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[5].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[5].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[5].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[5].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[5].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[5].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[5].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[5].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[5].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[5].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[5].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[5].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[5].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[5].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[5].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[5].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[5].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[5].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[5].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[5].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[5].magic) ^ 2)
            
                        ))
            
                        
                    c6.push({
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
                        (parseInt(rekomendasi[j].action - cluster[6].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[6].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[6].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[6].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[6].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[6].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[6].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[6].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[6].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[6].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[6].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[6].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[6].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[6].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[6].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[6].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[6].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[6].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[6].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[6].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[6].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[6].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[6].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[6].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[6].magic) ^ 2)
            
            
                        ))
            
                        
                    c7.push({
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
            
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai && c1[i].nilai < c5[i].nilai && c1[i].nilai < c6[i].nilai && c1[i].nilai < c7[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai && c2[i].nilai < c5[i].nilai && c2[i].nilai < c6[i].nilai && c2[i].nilai < c7[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai && c3[i].nilai < c5[i].nilai && c3[i].nilai < c6[i].nilai && c3[i].nilai < c7[i].nilai) {
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
            
                        anggotac4.push({
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
                    
                    else if (c4[i].nilai < c1[i].nilai && c4[i].nilai < c2[i].nilai && c4[i].nilai < c4[i].nilai && c4[i].nilai < c5[i].nilai && c4[i].nilai < c6[i].nilai && c4[i].nilai < c7[i].nilai) {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
            
                    else if (c5[i].nilai < c1[i].nilai && c5[i].nilai < c2[i].nilai && c5[i].nilai < c3[i].nilai && c5[i].nilai < c4[i].nilai && c5[i].nilai < c6[i].nilai && c5[i].nilai < c7[i].nilai){
                        naction = parseInt(naction) + parseInt(c5[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c5[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c5[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c5[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c5[i].drama)
                        nspace = parseInt(nspace) + parseInt(c5[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c5[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c5[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c5[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c5[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c5[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c5[i].historical)
                        nechi = parseInt(nechi) + parseInt(c5[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c5[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c5[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c5[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c5[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c5[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c5[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c5[i].sports)
                        nromance = parseInt(nromance) + parseInt(c5[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c5[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c5[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c5[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c5[i].magic)
            
            
                        anggotac5.push({
                            id_anime: c5[i].id_anime,
                            nama_anime: c5[i].nama_anime,
                            photo_url: c5[i].photo_url,
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
                            nilai: c5[i].nilai
                        })
                    }
                    else if (c6[i].nilai < c1[i].nilai && c6[i].nilai < c2[i].nilai && c6[i].nilai < c3[i].nilai && c6[i].nilai < c4[i].nilai && c6[i].nilai < c5[i].nilai && c6[i].nilai < c7[i].nilai){
                        naction = parseInt(naction) + parseInt(c6[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c6[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c6[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c6[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c6[i].drama)
                        nspace = parseInt(nspace) + parseInt(c6[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c6[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c6[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c6[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c6[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c6[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c6[i].historical)
                        nechi = parseInt(nechi) + parseInt(c6[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c6[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c6[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c6[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c6[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c6[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c6[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c6[i].sports)
                        nromance = parseInt(nromance) + parseInt(c6[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c6[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c6[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c6[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c6[i].magic)
                        anggotac6.push({
                            id_anime: c6[i].id_anime,
                            nama_anime: c6[i].nama_anime,
                            photo_url: c6[i].photo_url,
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
                            nilai: c6[i].nilai
                        })
                    }
                    else{
                        naction = parseInt(naction) + parseInt(c7[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c7[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c7[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c7[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c7[i].drama)
                        nspace = parseInt(nspace) + parseInt(c7[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c7[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c7[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c7[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c7[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c7[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c7[i].historical)
                        nechi = parseInt(nechi) + parseInt(c7[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c7[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c7[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c7[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c7[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c7[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c7[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c7[i].sports)
                        nromance = parseInt(nromance) + parseInt(c7[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c7[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c7[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c7[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c7[i].magic)
                        anggotac7.push({
                        id_anime: c7[i].id_anime,
                        nama_anime: c7[i].nama_anime,
                        photo_url: c7[i].photo_url,
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
                        nilai: c7[i].nilai
                        })
                         
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length && anggotac5.length == anggotac5New.length && anggotac6.length == anggotac6New.length && anggotac7.length == anggotac7New.length )) {
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
                    sentroid4.push({
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid5.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid6.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid7.push({
                        action: parseInt(naction) / anggotac7.length,
                        adventure: parseInt(nadventure) / anggotac7.length,
                        comedy: parseInt(ncomedy) / anggotac7.length,
                        scifi: parseInt(nscifi) / anggotac7.length,
                        drama: parseInt(ndrama) / anggotac7.length,
                        space: parseInt(nspace) / anggotac7.length,
                        supernatural: parseInt(nsupernatural) / anggotac7.length,
                        thriller: parseInt(nthriller) / anggotac7.length,
                        mystery: parseInt(nmystery) / anggotac7.length,
                        seinen: parseInt(nseinen) / anggotac7.length,
                        school: parseInt(nschool) / anggotac7.length,
                        historical: parseInt(nhistorical) / anggotac7.length,
                        echi: parseInt(nechi) / anggotac7.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac7.length,
                        harem: parseInt(nharem) / anggotac7.length,
                        pyschological: parseInt(npyschological) / anggotac7.length,
                        superpower: parseInt(nsuperpower) / anggotac7.length,
                        fantasy: parseInt(nfantasy) / anggotac7.length,
                        mecha: parseInt(nmecha) / anggotac7.length,
                        sports: parseInt(nsports) / anggotac7.length,
                        romance: parseInt(nromance) / anggotac7.length,
                        shounen: parseInt(nshounen) / anggotac7.length,
                        horor: parseInt(nhoror) / anggotac7.length,
                        martialarts: parseInt(nmartialarts) / anggotac7.length,
                        magic: parseInt(nmagic) / anggotac7.length,
            
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4,
                        sentroid5,
                        sentroid6,
                        sentroid7
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
                    for (var j = 0; j < rekomendasi.length; j++) {
                        nilai = Math.sqrt((
                            (parseInt(rekomendasi[j].action - sentroid[3].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[3].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[3].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[3].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[3].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[3].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[3].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[3].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[3].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[3].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[3].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[3].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[3].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[3].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[3].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[3].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[3].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[3].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[3].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[3].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[3].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[3].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[3].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[3].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[3].magic) ^ 2)
            
            
                        ))
                        c4New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[4].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[4].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[4].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[4].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[4].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[4].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[4].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[4].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[4].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[4].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[4].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[4].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[4].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[4].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[4].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[4].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[4].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[4].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[4].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[4].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[4].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[4].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[4].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[4].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[4].magic) ^ 2)
            
            
            
                        ))
                        c5New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c6New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c7New.push({
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
            
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai && c1New[i].nilai < c5New[i].nilai && c1New[i].nilai < c7New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai && c2New[i].nilai < c5New[i].nilai && c2New[i].nilai < c7New[i].nilai) {
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
                        
                        else if(c3New[i].nilai < c1New[i].nilai && c3New[i].nilai < c2New[i].nilai && c3New[i].nilai < c4New[i].nilai && c3New[i].nilai < c5New[i].nilai && c3New[i].nilai < c7New[i].nilai) {
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
                        else if(c4New[i].nilai < c1New[i].nilai && c4New[i].nilai < c2New[i].nilai && c4New[i].nilai < c3New[i].nilai && c4New[i].nilai < c5New[i].nilai && c4New[i].nilai < c7New[i].nilai){
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac4New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c5New[i].nilai < c1New[i].nilai && c5New[i].nilai < c2New[i].nilai && c5New[i].nilai < c3New[i].nilai && c5New[i].nilai < c6New[i].nilai && c5New[i].nilai < c7New[i].nilai){
                            naction = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac5New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c6New[i].nilai < c1New[i].nilai && c6New[i].nilai < c2New[i].nilai && c6New[i].nilai < c3New[i].nilai && c6New[i].nilai < c4New[i].nilai && c6New[i].nilai < c5New[i].nilai){
                            action = parseInt(naction) + parseInt(c6New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c6New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c6New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c6New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c6New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c6New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c6New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c6New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c6New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c6New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c6New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c6New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c6New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c6New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c6New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c6New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c6New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c6New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c6New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c6New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c6New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c6New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c6New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c6New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c6New[i].magic)
            
            
            
                            anggotac6New.push({
                            id_anime: c6New[i].id_anime,
                            nama_anime: c6New[i].nama_anime,
                            photo_url: c6New[i].photo_url,
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
                        else
                        {
                            naction = parseInt(naction) + parseInt(c7New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c7New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c7New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c7New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c7New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c7New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c7New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c7New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c7New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c7New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c7New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c7New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c7New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c7New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c7New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c7New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c7New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c7New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c7New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c7New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c7New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c7New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c7New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c7New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c7New[i].magic)
            
            
            
                            anggotac7New.push({
                            id_anime: c7New[i].id_anime,
                            nama_anime: c7New[i].nama_anime,
                            photo_url: c7New[i].photo_url,
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    c5:c5,
                    c6:c6,
                    c7:c7,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    anggotac5:anggotac5,
                    anggotac6:anggotac6,
                    anggotac7:anggotac7,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==8){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
                        (parseInt(rekomendasi[j].action - cluster[4].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[4].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[4].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[4].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[4].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[4].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[4].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[4].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[4].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[4].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[4].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[4].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[4].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[4].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[4].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[4].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[4].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[4].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[4].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[4].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[4].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[4].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[4].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[4].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[4].magic) ^ 2)
                        ))
            
                        
                    c5.push({
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
                        (parseInt(rekomendasi[j].action - cluster[5].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[5].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[5].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[5].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[5].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[5].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[5].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[5].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[5].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[5].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[5].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[5].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[5].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[5].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[5].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[5].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[5].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[5].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[5].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[5].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[5].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[5].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[5].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[5].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[5].magic) ^ 2)
            
                        ))
            
                        
                    c6.push({
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
                        (parseInt(rekomendasi[j].action - cluster[6].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[6].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[6].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[6].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[6].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[6].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[6].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[6].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[6].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[6].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[6].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[6].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[6].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[6].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[6].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[6].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[6].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[6].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[6].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[6].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[6].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[6].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[6].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[6].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[6].magic) ^ 2)
            
            
                        ))
            
                        
                    c7.push({
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
                        (parseInt(rekomendasi[j].action - cluster[7].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[7].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[7].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[7].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[7].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[7].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[7].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[7].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[7].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[7].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[7].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[7].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[7].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[7].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[7].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[7].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[7].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[7].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[7].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[7].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[7].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[7].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[7].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[7].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[7].magic) ^ 2)
            
            
                        ))
            
                        
                    c8.push({
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
            
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai && c1[i].nilai < c5[i].nilai && c1[i].nilai < c6[i].nilai && c1[i].nilai < c7[i].nilai && c1[i].nilai < c8[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai && c2[i].nilai < c5[i].nilai && c2[i].nilai < c6[i].nilai && c2[i].nilai < c7[i].nilai && c2[i].nilai < c8[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai && c3[i].nilai < c5[i].nilai && c3[i].nilai < c6[i].nilai && c3[i].nilai < c7[i].nilai && c3[i].nilai < c8[i].nilai) {
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
            
                        anggotac4.push({
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
                    else if (c4[i].nilai < c1[i].nilai && c4[i].nilai < c2[i].nilai && c4[i].nilai < c4[i].nilai && c4[i].nilai < c5[i].nilai && c4[i].nilai < c6[i].nilai && c4[i].nilai < c7[i].nilai && c4[i].nilai < c8[i].nilai) {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
                    else if (c5[i].nilai < c1[i].nilai && c5[i].nilai < c2[i].nilai && c5[i].nilai < c3[i].nilai && c5[i].nilai < c4[i].nilai && c5[i].nilai < c6[i].nilai && c5[i].nilai < c7[i].nilai && c5[i].nilai < c8[i].nilai){
                        naction = parseInt(naction) + parseInt(c5[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c5[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c5[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c5[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c5[i].drama)
                        nspace = parseInt(nspace) + parseInt(c5[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c5[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c5[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c5[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c5[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c5[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c5[i].historical)
                        nechi = parseInt(nechi) + parseInt(c5[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c5[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c5[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c5[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c5[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c5[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c5[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c5[i].sports)
                        nromance = parseInt(nromance) + parseInt(c5[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c5[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c5[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c5[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c5[i].magic)
            
            
                        anggotac5.push({
                            id_anime: c5[i].id_anime,
                            nama_anime: c5[i].nama_anime,
                            photo_url: c5[i].photo_url,
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
                            nilai: c5[i].nilai
                        })
                    }
                    else if (c6[i].nilai < c1[i].nilai && c6[i].nilai < c2[i].nilai && c6[i].nilai < c3[i].nilai && c6[i].nilai < c4[i].nilai && c6[i].nilai < c5[i].nilai && c6[i].nilai < c7[i].nilai && c6[i].nilai < c8[i].nilai){
                        naction = parseInt(naction) + parseInt(c6[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c6[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c6[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c6[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c6[i].drama)
                        nspace = parseInt(nspace) + parseInt(c6[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c6[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c6[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c6[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c6[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c6[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c6[i].historical)
                        nechi = parseInt(nechi) + parseInt(c6[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c6[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c6[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c6[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c6[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c6[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c6[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c6[i].sports)
                        nromance = parseInt(nromance) + parseInt(c6[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c6[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c6[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c6[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c6[i].magic)
                        anggotac6.push({
                            id_anime: c6[i].id_anime,
                            nama_anime: c6[i].nama_anime,
                            photo_url: c6[i].photo_url,
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
                            nilai: c6[i].nilai
                        })
                    }
                    else if (c7[i].nilai < c1[i].nilai && c7[i].nilai < c2[i].nilai && c7[i].nilai < c3[i].nilai && c7[i].nilai < c4[i].nilai && c7[i].nilai < c5[i].nilai && c7[i].nilai < c6[i].nilai && c7[i].nilai < c8[i].nilai){
                        naction = parseInt(naction) + parseInt(c7[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c7[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c7[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c7[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c7[i].drama)
                        nspace = parseInt(nspace) + parseInt(c7[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c7[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c7[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c7[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c7[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c7[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c7[i].historical)
                        nechi = parseInt(nechi) + parseInt(c7[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c7[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c7[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c7[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c7[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c7[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c7[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c7[i].sports)
                        nromance = parseInt(nromance) + parseInt(c7[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c7[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c7[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c7[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c7[i].magic)
                        anggotac7.push({
                        id_anime: c7[i].id_anime,
                        nama_anime: c7[i].nama_anime,
                        photo_url: c7[i].photo_url,
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
                        nilai: c7[i].nilai
                        })
                         
                    }
                    else{
                        naction = parseInt(naction) + parseInt(c8[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c8[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c8[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c8[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c8[i].drama)
                        nspace = parseInt(nspace) + parseInt(c8[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c8[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c8[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c8[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c8[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c8[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c8[i].historical)
                        nechi = parseInt(nechi) + parseInt(c8[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c8[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c8[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c8[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c8[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c8[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c8[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c8[i].sports)
                        nromance = parseInt(nromance) + parseInt(c8[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c8[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c8[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c8[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c8[i].magic)
            
                        anggotac8.push({
                        id_anime: c8[i].id_anime,
                        nama_anime: c8[i].nama_anime,
                        photo_url: c8[i].photo_url,
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
                        nilai: c8[i].nilai
                        })
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length && anggotac5.length == anggotac5New.length && anggotac6.length == anggotac6New.length && anggotac7.length == anggotac7New.length && anggotac8.length == anggotac8New.length )) {
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
                    sentroid4.push({
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid5.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid6.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid7.push({
                        action: parseInt(naction) / anggotac7.length,
                        adventure: parseInt(nadventure) / anggotac7.length,
                        comedy: parseInt(ncomedy) / anggotac7.length,
                        scifi: parseInt(nscifi) / anggotac7.length,
                        drama: parseInt(ndrama) / anggotac7.length,
                        space: parseInt(nspace) / anggotac7.length,
                        supernatural: parseInt(nsupernatural) / anggotac7.length,
                        thriller: parseInt(nthriller) / anggotac7.length,
                        mystery: parseInt(nmystery) / anggotac7.length,
                        seinen: parseInt(nseinen) / anggotac7.length,
                        school: parseInt(nschool) / anggotac7.length,
                        historical: parseInt(nhistorical) / anggotac7.length,
                        echi: parseInt(nechi) / anggotac7.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac7.length,
                        harem: parseInt(nharem) / anggotac7.length,
                        pyschological: parseInt(npyschological) / anggotac7.length,
                        superpower: parseInt(nsuperpower) / anggotac7.length,
                        fantasy: parseInt(nfantasy) / anggotac7.length,
                        mecha: parseInt(nmecha) / anggotac7.length,
                        sports: parseInt(nsports) / anggotac7.length,
                        romance: parseInt(nromance) / anggotac7.length,
                        shounen: parseInt(nshounen) / anggotac7.length,
                        horor: parseInt(nhoror) / anggotac7.length,
                        martialarts: parseInt(nmartialarts) / anggotac7.length,
                        magic: parseInt(nmagic) / anggotac7.length,
            
                    })
                    sentroid8.push({
                        action: parseInt(naction) / anggotac8.length,
                        adventure: parseInt(nadventure) / anggotac8.length,
                        comedy: parseInt(ncomedy) / anggotac8.length,
                        scifi: parseInt(nscifi) / anggotac8.length,
                        drama: parseInt(ndrama) / anggotac8.length,
                        space: parseInt(nspace) / anggotac8.length,
                        supernatural: parseInt(nsupernatural) / anggotac8.length,
                        thriller: parseInt(nthriller) / anggotac8.length,
                        mystery: parseInt(nmystery) / anggotac8.length,
                        seinen: parseInt(nseinen) / anggotac8.length,
                        school: parseInt(nschool) / anggotac8.length,
                        historical: parseInt(nhistorical) / anggotac8.length,
                        echi: parseInt(nechi) / anggotac8.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac8.length,
                        harem: parseInt(nharem) / anggotac8.length,
                        pyschological: parseInt(npyschological) / anggotac8.length,
                        superpower: parseInt(nsuperpower) / anggotac8.length,
                        fantasy: parseInt(nfantasy) / anggotac8.length,
                        mecha: parseInt(nmecha) / anggotac8.length,
                        sports: parseInt(nsports) / anggotac8.length,
                        romance: parseInt(nromance) / anggotac8.length,
                        shounen: parseInt(nshounen) / anggotac8.length,
                        horor: parseInt(nhoror) / anggotac8.length,
                        martialarts: parseInt(nmartialarts) / anggotac8.length,
                        magic: parseInt(nmagic) / anggotac8.length,
            
            
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4,
                        sentroid5,
                        sentroid6,
                        sentroid7,
                        sentroid8
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
                    for (var j = 0; j < rekomendasi.length; j++) {
                        nilai = Math.sqrt((
                            (parseInt(rekomendasi[j].action - sentroid[3].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[3].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[3].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[3].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[3].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[3].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[3].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[3].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[3].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[3].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[3].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[3].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[3].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[3].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[3].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[3].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[3].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[3].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[3].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[3].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[3].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[3].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[3].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[3].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[3].magic) ^ 2)
            
            
                        ))
                        c4New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[4].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[4].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[4].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[4].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[4].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[4].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[4].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[4].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[4].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[4].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[4].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[4].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[4].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[4].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[4].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[4].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[4].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[4].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[4].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[4].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[4].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[4].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[4].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[4].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[4].magic) ^ 2)
            
            
            
                        ))
                        c5New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c6New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c7New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[7].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[7].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[7].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[7].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[7].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[7].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[7].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[7].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[7].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[7].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[7].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[7].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[7].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[7].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[7].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[7].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[7].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[7].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[7].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[7].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[7].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[7].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[7].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[7].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[7].magic) ^ 2)
            
            
            
            
                        ))
                        c8New.push({
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
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai && c1New[i].nilai < c5New[i].nilai && c1New[i].nilai < c7New[i].nilai  && c1New[i].nilai < c8New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai && c2New[i].nilai < c5New[i].nilai && c2New[i].nilai < c7New[i].nilai && c2New[i].nilai < c8New[i].nilai) {
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
                        else if(c3New[i].nilai < c1New[i].nilai && c3New[i].nilai < c2New[i].nilai && c3New[i].nilai < c4New[i].nilai && c3New[i].nilai < c5New[i].nilai && c3New[i].nilai < c7New[i].nilai && c3New[i].nilai < c8New[i].nilai) {
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
                        else if(c4New[i].nilai < c1New[i].nilai && c4New[i].nilai < c2New[i].nilai && c4New[i].nilai < c3New[i].nilai && c4New[i].nilai < c5New[i].nilai && c4New[i].nilai < c7New[i].nilai && c4New[i].nilai < c8New[i].nilai){
                            naction = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac4New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c5New[i].nilai < c1New[i].nilai && c5New[i].nilai < c2New[i].nilai && c5New[i].nilai < c3New[i].nilai && c5New[i].nilai < c6New[i].nilai && c5New[i].nilai < c7New[i].nilai && c5New[i].nilai < c8New[i].nilai){
                            naction = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac5New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c6New[i].nilai < c1New[i].nilai && c6New[i].nilai < c2New[i].nilai && c6New[i].nilai < c3New[i].nilai && c6New[i].nilai < c4New[i].nilai && c6New[i].nilai < c5New[i].nilai && c6New[i].nilai < c8New[i].nilai){
                            naction = parseInt(naction) + parseInt(c6New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c6New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c6New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c6New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c6New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c6New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c6New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c6New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c6New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c6New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c6New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c6New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c6New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c6New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c6New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c6New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c6New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c6New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c6New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c6New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c6New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c6New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c6New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c6New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c6New[i].magic)
            
            
            
                            anggotac6New.push({
                            id_anime: c6New[i].id_anime,
                            nama_anime: c6New[i].nama_anime,
                            photo_url: c6New[i].photo_url,
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
                        else if(c7New[i].nilai < c1New[i].nilai && c7New[i].nilai < c2New[i].nilai && c7New[i].nilai < c3New[i].nilai && c7New[i].nilai < c4New[i].nilai && c7New[i].nilai < c5New[i].nilai && c7New[i].nilai < c8New[i].nilai)
                        {
                            naction = parseInt(naction) + parseInt(c7New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c7New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c7New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c7New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c7New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c7New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c7New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c7New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c7New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c7New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c7New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c7New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c7New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c7New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c7New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c7New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c7New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c7New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c7New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c7New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c7New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c7New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c7New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c7New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c7New[i].magic)
            
                            anggotac7New.push({
                            id_anime: c7New[i].id_anime,
                            nama_anime: c7New[i].nama_anime,
                            photo_url: c7New[i].photo_url,
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
                        else
                        {
                            naction = parseInt(naction) + parseInt(c8New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c8New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c8New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c8New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c8New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c8New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c8New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c8New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c8New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c8New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c8New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c8New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c8New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c8New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c8New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c8New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c8New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c8New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c8New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c8New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c8New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c8New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c8New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c8New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c8New[i].magic)
            
                            anggotac8New.push({
                                id_anime: c8New[i].id_anime,
                                nama_anime: c8New[i].nama_anime,
                                photo_url: c8New[i].photo_url,
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    c5:c5,
                    c6:c6,
                    c7:c7,
                    c8:c8,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    anggotac5:anggotac5,
                    anggotac6:anggotac6,
                    anggotac7:anggotac7,
                    anggotac8:anggotac8,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }
            else if(clus==9){
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
                for (var j = 0; j < rekomendasi.length; j++) {
                    nilai = Math.sqrt((
                        (parseInt(rekomendasi[j].action - cluster[3].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[3].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[3].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[3].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[3].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[3].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[3].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[3].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[3].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[3].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[3].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[3].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[3].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[3].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[3].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[3].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[3].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[3].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[3].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[3].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[3].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[3].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[3].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[3].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[3].magic) ^ 2)
                        ))
                        
                    c4.push({
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
                        (parseInt(rekomendasi[j].action - cluster[4].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[4].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[4].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[4].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[4].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[4].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[4].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[4].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[4].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[4].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[4].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[4].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[4].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[4].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[4].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[4].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[4].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[4].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[4].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[4].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[4].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[4].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[4].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[4].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[4].magic) ^ 2)
                        ))
            
                        
                    c5.push({
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
                        (parseInt(rekomendasi[j].action - cluster[5].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[5].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[5].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[5].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[5].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[5].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[5].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[5].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[5].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[5].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[5].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[5].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[5].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[5].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[5].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[5].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[5].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[5].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[5].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[5].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[5].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[5].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[5].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[5].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[5].magic) ^ 2)
            
                        ))
            
                        
                    c6.push({
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
                        (parseInt(rekomendasi[j].action - cluster[6].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[6].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[6].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[6].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[6].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[6].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[6].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[6].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[6].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[6].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[6].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[6].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[6].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[6].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[6].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[6].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[6].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[6].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[6].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[6].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[6].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[6].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[6].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[6].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[6].magic) ^ 2)
            
            
                        ))
            
                        
                    c7.push({
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
                        (parseInt(rekomendasi[j].action - cluster[7].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[7].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[7].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[7].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[7].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[7].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[7].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[7].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[7].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[7].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[7].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[7].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[7].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[7].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[7].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[7].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[7].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[7].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[7].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[7].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[7].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[7].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[7].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[7].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[7].magic) ^ 2)
            
            
                        ))
            
                        
                    c8.push({
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
                        (parseInt(rekomendasi[j].action - cluster[8].action) ^ 2)
                        + (parseInt(rekomendasi[j].adventure - cluster[8].adventure) ^ 2)
                        + (parseInt(rekomendasi[j].comedy - cluster[8].comedy) ^ 2)
                        + (parseInt(rekomendasi[j].scifi - cluster[8].scifi) ^ 2)
                        + (parseInt(rekomendasi[j].drama - cluster[8].drama) ^ 2)
                        + (parseInt(rekomendasi[j].space - cluster[8].space) ^ 2)
                        + (parseInt(rekomendasi[j].supernatural - cluster[8].supernatural) ^ 2)
                        + (parseInt(rekomendasi[j].thriller - cluster[8].thriller) ^ 2)
                        + (parseInt(rekomendasi[j].mystery - cluster[8].mystery) ^ 2)
                        + (parseInt(rekomendasi[j].seinen - cluster[8].seinen) ^ 2)
                        + (parseInt(rekomendasi[j].school - cluster[8].school) ^ 2)
                        + (parseInt(rekomendasi[j].historical - cluster[8].historical) ^ 2)
                        + (parseInt(rekomendasi[j].echi - cluster[8].echi) ^ 2)
                        + (parseInt(rekomendasi[j].sliceoflife - cluster[8].sliceoflife) ^ 2)
                        + (parseInt(rekomendasi[j].harem - cluster[8].harem) ^ 2)
                        + (parseInt(rekomendasi[j].pyschological - cluster[8].pyschological) ^ 2)
                        + (parseInt(rekomendasi[j].superpower - cluster[8].superpower) ^ 2)
                        + (parseInt(rekomendasi[j].fantasy - cluster[8].fantasy) ^ 2)
                        + (parseInt(rekomendasi[j].mecha - cluster[8].mecha) ^ 2)
                        + (parseInt(rekomendasi[j].sports - cluster[8].sports) ^ 2)
                        + (parseInt(rekomendasi[j].romance - cluster[8].romance) ^ 2)
                        + (parseInt(rekomendasi[j].shounen - cluster[8].shounen) ^ 2)
                        + (parseInt(rekomendasi[j].horor - cluster[8].horor) ^ 2)
                        + (parseInt(rekomendasi[j].martialarts - cluster[8].martialarts) ^ 2)
                        + (parseInt(rekomendasi[j].magic - cluster[8].magic) ^ 2)            
                        ))  
                    c9.push({
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
                    if (c1[i].nilai < c2[i].nilai && c1[i].nilai < c3[i].nilai && c1[i].nilai < c4[i].nilai && c1[i].nilai < c5[i].nilai && c1[i].nilai < c6[i].nilai && c1[i].nilai < c7[i].nilai && c1[i].nilai < c8[i].nilai && c1[i].nilai < c9[i].nilai) {
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
                    else if (c2[i].nilai < c1[i].nilai && c2[i].nilai < c3[i].nilai && c2[i].nilai < c4[i].nilai && c2[i].nilai < c5[i].nilai && c2[i].nilai < c6[i].nilai && c2[i].nilai < c7[i].nilai && c2[i].nilai < c8[i].nilai && c2[i].nilai < c9[i].nilai) {
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
                    else if (c3[i].nilai < c1[i].nilai && c3[i].nilai < c2[i].nilai && c3[i].nilai < c4[i].nilai && c3[i].nilai < c5[i].nilai && c3[i].nilai < c6[i].nilai && c3[i].nilai < c7[i].nilai && c3[i].nilai < c8[i].nilai && c3[i].nilai < c9[i].nilai) {
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
            
                        anggotac4.push({
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
                    else if (c4[i].nilai < c1[i].nilai && c4[i].nilai < c2[i].nilai && c4[i].nilai < c4[i].nilai && c4[i].nilai < c5[i].nilai && c4[i].nilai < c6[i].nilai && c4[i].nilai < c7[i].nilai && c4[i].nilai < c8[i].nilai && c4[i].nilai < c9[i].nilai) {
                        naction = parseInt(naction) + parseInt(c4[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c4[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c4[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c4[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c4[i].drama)
                        nspace = parseInt(nspace) + parseInt(c4[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c4[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c4[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c4[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c4[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c4[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c4[i].historical)
                        nechi = parseInt(nechi) + parseInt(c4[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c4[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c4[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c4[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c4[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c4[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c4[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c4[i].sports)
                        nromance = parseInt(nromance) + parseInt(c4[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c4[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c4[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c4[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c4[i].magic)
            
                        anggotac4.push({
                            id_anime: c4[i].id_anime,
                            nama_anime: c4[i].nama_anime,
                            photo_url: c4[i].photo_url,
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
                            nilai: c4[i].nilai
                        })
                    }
                    else if (c5[i].nilai < c1[i].nilai && c5[i].nilai < c2[i].nilai && c5[i].nilai < c3[i].nilai && c5[i].nilai < c4[i].nilai && c5[i].nilai < c6[i].nilai && c5[i].nilai < c7[i].nilai && c5[i].nilai < c8[i].nilai && c5[i].nilai < c9[i].nilai){
                        naction = parseInt(naction) + parseInt(c5[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c5[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c5[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c5[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c5[i].drama)
                        nspace = parseInt(nspace) + parseInt(c5[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c5[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c5[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c5[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c5[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c5[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c5[i].historical)
                        nechi = parseInt(nechi) + parseInt(c5[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c5[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c5[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c5[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c5[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c5[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c5[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c5[i].sports)
                        nromance = parseInt(nromance) + parseInt(c5[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c5[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c5[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c5[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c5[i].magic)
            
            
                        anggotac5.push({
                            id_anime: c5[i].id_anime,
                            nama_anime: c5[i].nama_anime,
                            photo_url: c5[i].photo_url,
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
                            nilai: c5[i].nilai
                        })
                    }
                    else if (c6[i].nilai < c1[i].nilai && c6[i].nilai < c2[i].nilai && c6[i].nilai < c3[i].nilai && c6[i].nilai < c4[i].nilai && c6[i].nilai < c5[i].nilai && c6[i].nilai < c7[i].nilai && c6[i].nilai < c8[i].nilai && c6[i].nilai < c9[i].nilai){
                        naction = parseInt(naction) + parseInt(c6[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c6[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c6[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c6[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c6[i].drama)
                        nspace = parseInt(nspace) + parseInt(c6[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c6[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c6[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c6[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c6[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c6[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c6[i].historical)
                        nechi = parseInt(nechi) + parseInt(c6[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c6[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c6[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c6[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c6[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c6[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c6[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c6[i].sports)
                        nromance = parseInt(nromance) + parseInt(c6[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c6[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c6[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c6[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c6[i].magic)
                        anggotac6.push({
                            id_anime: c6[i].id_anime,
                            nama_anime: c6[i].nama_anime,
                            photo_url: c6[i].photo_url,
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
                            nilai: c6[i].nilai
                        })
                    }
                    else if (c7[i].nilai < c1[i].nilai && c7[i].nilai < c2[i].nilai && c7[i].nilai < c3[i].nilai && c7[i].nilai < c4[i].nilai && c7[i].nilai < c5[i].nilai && c7[i].nilai < c6[i].nilai && c7[i].nilai < c8[i].nilai && c7[i].nilai < c9[i].nilai){
                        naction = parseInt(naction) + parseInt(c7[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c7[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c7[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c7[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c7[i].drama)
                        nspace = parseInt(nspace) + parseInt(c7[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c7[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c7[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c7[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c7[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c7[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c7[i].historical)
                        nechi = parseInt(nechi) + parseInt(c7[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c7[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c7[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c7[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c7[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c7[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c7[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c7[i].sports)
                        nromance = parseInt(nromance) + parseInt(c7[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c7[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c7[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c7[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c7[i].magic)
                        anggotac7.push({
                        id_anime: c7[i].id_anime,
                        nama_anime: c7[i].nama_anime,
                        photo_url: c7[i].photo_url,
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
                        nilai: c7[i].nilai
                        })
                         
                    }
                    else if (c8[i].nilai < c1[i].nilai && c8[i].nilai < c2[i].nilai && c8[i].nilai < c3[i].nilai && c8[i].nilai < c4[i].nilai && c8[i].nilai < c5[i].nilai && c8[i].nilai < c6[i].nilai && c8[i].nilai < c7[i].nilai && c8[i].nilai < c9[i].nilai){
                        naction = parseInt(naction) + parseInt(c8[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c8[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c8[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c8[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c8[i].drama)
                        nspace = parseInt(nspace) + parseInt(c8[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c8[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c8[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c8[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c8[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c8[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c8[i].historical)
                        nechi = parseInt(nechi) + parseInt(c8[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c8[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c8[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c8[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c8[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c8[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c8[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c8[i].sports)
                        nromance = parseInt(nromance) + parseInt(c8[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c8[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c8[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c8[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c8[i].magic)
            
                        anggotac8.push({
                        id_anime: c8[i].id_anime,
                        nama_anime: c8[i].nama_anime,
                        photo_url: c8[i].photo_url,
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
                        nilai: c8[i].nilai
                        })
                    }
                    else{
                        naction = parseInt(naction) + parseInt(c9[i].action)
                        nadventure = parseInt(nadventure) + parseInt(c9[i].adventure)
                        ncomedy = parseInt(ncomedy) + parseInt(c9[i].comedy)
                        nscifi = parseInt(nscifi) + parseInt(c9[i].scifi)
                        ndrama = parseInt(ndrama) + parseInt(c9[i].drama)
                        nspace = parseInt(nspace) + parseInt(c9[i].space)
                        nsupernatural = parseInt(nsupernatural) + parseInt(c9[i].supernatural)
                        nthriller = parseInt(nthriller) + parseInt(c9[i].thriller)
                        nmystery = parseInt(nmystery) + parseInt(c9[i].mystery)
                        nseinen = parseInt(nseinen) + parseInt(c9[i].seinen)
                        nschool = parseInt(nschool) + parseInt(c9[i].school)
                        nhistorical = parseInt(nhistorical) + parseInt(c9[i].historical)
                        nechi = parseInt(nechi) + parseInt(c9[i].echi)
                        nsliceoflife = parseInt(nsliceoflife) + parseInt(c9[i].sliceoflife)
                        nharem = parseInt(nharem) + parseInt(c9[i].harem)
                        npyschological = parseInt(npyschological) + parseInt(c9[i].pyschological)
                        nsuperpower = parseInt(nsuperpower) + parseInt(c9[i].superpower)
                        nfantasy = parseInt(nfantasy) + parseInt(c9[i].fantasy)
                        nmecha = parseInt(nmecha) + parseInt(c9[i].mecha)
                        nsports = parseInt(nsports) + parseInt(c9[i].sports)
                        nromance = parseInt(nromance) + parseInt(c9[i].romance)
                        nshounen = parseInt(nshounen) + parseInt(c9[i].shounen)
                        nhoror = parseInt(nhoror) + parseInt(c9[i].horor)
                        nmartialarts = parseInt(nmartialarts) + parseInt(c9[i].martialarts)
                        nmagic = parseInt(nmagic) + parseInt(c9[i].magic)            
            
                        anggotac9.push({
                        id_anime: c9[i].id_anime,
                        nama_anime: c9[i].nama_anime,
                        photo_url: c9[i].photo_url,
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
                        nilai: c9[i].nilai
                        })
                    }
                }
                while (iterasi < 100 || (anggotac1.length == anggotac1New.length && anggotac2.length == anggotac2New.length && anggotac3.length == anggotac3New.length && anggotac4.length == anggotac4New.length && anggotac5.length == anggotac5New.length && anggotac6.length == anggotac6New.length && anggotac7.length == anggotac7New.length && anggotac8.length == anggotac8New.length && anggotac9.length == anggotac9New.length )) {
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
                    sentroid4.push({
                        action: parseInt(naction) / anggotac4.length,
                        adventure: parseInt(nadventure) / anggotac4.length,
                        comedy: parseInt(ncomedy) / anggotac4.length,
                        scifi: parseInt(nscifi) / anggotac4.length,
                        drama: parseInt(ndrama) / anggotac4.length,
                        space: parseInt(nspace) / anggotac4.length,
                        supernatural: parseInt(nsupernatural) / anggotac4.length,
                        thriller: parseInt(nthriller) / anggotac4.length,
                        mystery: parseInt(nmystery) / anggotac4.length,
                        seinen: parseInt(nseinen) / anggotac4.length,
                        school: parseInt(nschool) / anggotac4.length,
                        historical: parseInt(nhistorical) / anggotac4.length,
                        echi: parseInt(nechi) / anggotac4.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac4.length,
                        harem: parseInt(nharem) / anggotac4.length,
                        pyschological: parseInt(npyschological) / anggotac4.length,
                        superpower: parseInt(nsuperpower) / anggotac4.length,
                        fantasy: parseInt(nfantasy) / anggotac4.length,
                        mecha: parseInt(nmecha) / anggotac4.length,
                        sports: parseInt(nsports) / anggotac4.length,
                        romance: parseInt(nromance) / anggotac4.length,
                        shounen: parseInt(nshounen) / anggotac4.length,
                        horor: parseInt(nhoror) / anggotac4.length,
                        martialarts: parseInt(nmartialarts) / anggotac4.length,
                        magic: parseInt(nmagic) / anggotac4.length,
            
            
            
                    })
                    sentroid5.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid6.push({
                        action: parseInt(naction) / anggotac5.length,
                        adventure: parseInt(nadventure) / anggotac5.length,
                        comedy: parseInt(ncomedy) / anggotac5.length,
                        scifi: parseInt(nscifi) / anggotac5.length,
                        drama: parseInt(ndrama) / anggotac5.length,
                        space: parseInt(nspace) / anggotac5.length,
                        supernatural: parseInt(nsupernatural) / anggotac5.length,
                        thriller: parseInt(nthriller) / anggotac5.length,
                        mystery: parseInt(nmystery) / anggotac5.length,
                        seinen: parseInt(nseinen) / anggotac5.length,
                        school: parseInt(nschool) / anggotac5.length,
                        historical: parseInt(nhistorical) / anggotac5.length,
                        echi: parseInt(nechi) / anggotac5.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac5.length,
                        harem: parseInt(nharem) / anggotac5.length,
                        pyschological: parseInt(npyschological) / anggotac5.length,
                        superpower: parseInt(nsuperpower) / anggotac5.length,
                        fantasy: parseInt(nfantasy) / anggotac5.length,
                        mecha: parseInt(nmecha) / anggotac5.length,
                        sports: parseInt(nsports) / anggotac5.length,
                        romance: parseInt(nromance) / anggotac5.length,
                        shounen: parseInt(nshounen) / anggotac5.length,
                        horor: parseInt(nhoror) / anggotac5.length,
                        martialarts: parseInt(nmartialarts) / anggotac5.length,
                        magic: parseInt(nmagic) / anggotac5.length,
                    })
                    sentroid7.push({
                        action: parseInt(naction) / anggotac7.length,
                        adventure: parseInt(nadventure) / anggotac7.length,
                        comedy: parseInt(ncomedy) / anggotac7.length,
                        scifi: parseInt(nscifi) / anggotac7.length,
                        drama: parseInt(ndrama) / anggotac7.length,
                        space: parseInt(nspace) / anggotac7.length,
                        supernatural: parseInt(nsupernatural) / anggotac7.length,
                        thriller: parseInt(nthriller) / anggotac7.length,
                        mystery: parseInt(nmystery) / anggotac7.length,
                        seinen: parseInt(nseinen) / anggotac7.length,
                        school: parseInt(nschool) / anggotac7.length,
                        historical: parseInt(nhistorical) / anggotac7.length,
                        echi: parseInt(nechi) / anggotac7.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac7.length,
                        harem: parseInt(nharem) / anggotac7.length,
                        pyschological: parseInt(npyschological) / anggotac7.length,
                        superpower: parseInt(nsuperpower) / anggotac7.length,
                        fantasy: parseInt(nfantasy) / anggotac7.length,
                        mecha: parseInt(nmecha) / anggotac7.length,
                        sports: parseInt(nsports) / anggotac7.length,
                        romance: parseInt(nromance) / anggotac7.length,
                        shounen: parseInt(nshounen) / anggotac7.length,
                        horor: parseInt(nhoror) / anggotac7.length,
                        martialarts: parseInt(nmartialarts) / anggotac7.length,
                        magic: parseInt(nmagic) / anggotac7.length,
            
                    })
                    sentroid8.push({
                        action: parseInt(naction) / anggotac8.length,
                        adventure: parseInt(nadventure) / anggotac8.length,
                        comedy: parseInt(ncomedy) / anggotac8.length,
                        scifi: parseInt(nscifi) / anggotac8.length,
                        drama: parseInt(ndrama) / anggotac8.length,
                        space: parseInt(nspace) / anggotac8.length,
                        supernatural: parseInt(nsupernatural) / anggotac8.length,
                        thriller: parseInt(nthriller) / anggotac8.length,
                        mystery: parseInt(nmystery) / anggotac8.length,
                        seinen: parseInt(nseinen) / anggotac8.length,
                        school: parseInt(nschool) / anggotac8.length,
                        historical: parseInt(nhistorical) / anggotac8.length,
                        echi: parseInt(nechi) / anggotac8.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac8.length,
                        harem: parseInt(nharem) / anggotac8.length,
                        pyschological: parseInt(npyschological) / anggotac8.length,
                        superpower: parseInt(nsuperpower) / anggotac8.length,
                        fantasy: parseInt(nfantasy) / anggotac8.length,
                        mecha: parseInt(nmecha) / anggotac8.length,
                        sports: parseInt(nsports) / anggotac8.length,
                        romance: parseInt(nromance) / anggotac8.length,
                        shounen: parseInt(nshounen) / anggotac8.length,
                        horor: parseInt(nhoror) / anggotac8.length,
                        martialarts: parseInt(nmartialarts) / anggotac8.length,
                        magic: parseInt(nmagic) / anggotac8.length,
            
            
                    })
                    sentroid9.push({
                        action: parseInt(naction) / anggotac9.length,
                        adventure: parseInt(nadventure) / anggotac9.length,
                        comedy: parseInt(ncomedy) / anggotac9.length,
                        scifi: parseInt(nscifi) / anggotac9.length,
                        drama: parseInt(ndrama) / anggotac9.length,
                        space: parseInt(nspace) / anggotac9.length,
                        supernatural: parseInt(nsupernatural) / anggotac9.length,
                        thriller: parseInt(nthriller) / anggotac9.length,
                        mystery: parseInt(nmystery) / anggotac9.length,
                        seinen: parseInt(nseinen) / anggotac9.length,
                        school: parseInt(nschool) / anggotac9.length,
                        historical: parseInt(nhistorical) / anggotac9.length,
                        echi: parseInt(nechi) / anggotac9.length,
                        sliceoflife: parseInt(nsliceoflife) / anggotac9.length,
                        harem: parseInt(nharem) / anggotac9.length,
                        pyschological: parseInt(npyschological) / anggotac9.length,
                        superpower: parseInt(nsuperpower) / anggotac9.length,
                        fantasy: parseInt(nfantasy) / anggotac9.length,
                        mecha: parseInt(nmecha) / anggotac9.length,
                        sports: parseInt(nsports) / anggotac9.length,
                        romance: parseInt(nromance) / anggotac9.length,
                        shounen: parseInt(nshounen) / anggotac9.length,
                        horor: parseInt(nhoror) / anggotac9.length,
                        martialarts: parseInt(nmartialarts) / anggotac9.length,
                        magic: parseInt(nmagic) / anggotac9.length,
            
            
            
                    })
                    sentroid.push(
                        sentroid1,
                        sentroid2,
                        sentroid3,
                        sentroid4,
                        sentroid5,
                        sentroid6,
                        sentroid7,
                        sentroid8,
                        sentroid9
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
                    for (var j = 0; j < rekomendasi.length; j++) {
                        nilai = Math.sqrt((
                            (parseInt(rekomendasi[j].action - sentroid[3].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[3].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[3].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[3].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[3].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[3].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[3].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[3].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[3].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[3].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[3].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[3].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[3].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[3].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[3].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[3].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[3].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[3].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[3].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[3].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[3].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[3].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[3].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[3].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[3].magic) ^ 2)
            
            
                        ))
                        c4New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[4].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[4].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[4].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[4].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[4].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[4].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[4].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[4].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[4].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[4].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[4].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[4].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[4].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[4].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[4].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[4].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[4].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[4].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[4].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[4].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[4].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[4].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[4].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[4].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[4].magic) ^ 2)
            
            
            
                        ))
                        c5New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c6New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[6].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[6].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[6].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[6].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[6].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[6].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[6].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[6].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[6].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[6].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[6].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[6].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[6].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[6].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[6].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[6].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[6].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[6].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[6].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[6].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[6].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[6].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[6].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[6].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[6].magic) ^ 2)
            
            
            
            
                        ))
                        c7New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[7].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[7].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[7].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[7].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[7].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[7].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[7].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[7].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[7].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[7].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[7].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[7].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[7].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[7].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[7].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[7].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[7].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[7].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[7].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[7].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[7].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[7].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[7].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[7].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[7].magic) ^ 2)
            
            
            
            
                        ))
                        c8New.push({
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
                            (parseInt(rekomendasi[j].action - sentroid[8].action) ^ 2)
                            + (parseInt(rekomendasi[j].adventure - sentroid[8].adventure) ^ 2)
                            + (parseInt(rekomendasi[j].comedy - sentroid[8].comedy) ^ 2)
                            + (parseInt(rekomendasi[j].scifi - sentroid[8].scifi) ^ 2)
                            + (parseInt(rekomendasi[j].drama - sentroid[8].drama) ^ 2)
                            + (parseInt(rekomendasi[j].space - sentroid[8].space) ^ 2)
                            + (parseInt(rekomendasi[j].supernatural - sentroid[8].supernatural) ^ 2)
                            + (parseInt(rekomendasi[j].thriller - sentroid[8].thriller) ^ 2)
                            + (parseInt(rekomendasi[j].mystery - sentroid[8].mystery) ^ 2)
                            + (parseInt(rekomendasi[j].seinen - sentroid[8].seinen) ^ 2)
                            + (parseInt(rekomendasi[j].school - sentroid[8].school) ^ 2)
                            + (parseInt(rekomendasi[j].historical - sentroid[8].historical) ^ 2)
                            + (parseInt(rekomendasi[j].echi - sentroid[8].echi) ^ 2)
                            + (parseInt(rekomendasi[j].sliceoflife - sentroid[8].sliceoflife) ^ 2)
                            + (parseInt(rekomendasi[j].harem - sentroid[8].harem) ^ 2)
                            + (parseInt(rekomendasi[j].pyschological - sentroid[8].pyschological) ^ 2)
                            + (parseInt(rekomendasi[j].superpower - sentroid[8].superpower) ^ 2)
                            + (parseInt(rekomendasi[j].fantasy - sentroid[8].fantasy) ^ 2)
                            + (parseInt(rekomendasi[j].mecha - sentroid[8].mecha) ^ 2)
                            + (parseInt(rekomendasi[j].sports - sentroid[8].sports) ^ 2)
                            + (parseInt(rekomendasi[j].romance - sentroid[8].romance) ^ 2)
                            + (parseInt(rekomendasi[j].shounen - sentroid[8].shounen) ^ 2)
                            + (parseInt(rekomendasi[j].horor - sentroid[8].horor) ^ 2)
                            + (parseInt(rekomendasi[j].martialarts - sentroid[8].martialarts) ^ 2)
                            + (parseInt(rekomendasi[j].magic - sentroid[8].magic) ^ 2)
                        ))
                        c9New.push({
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
                        if (c1New[i].nilai < c2New[i].nilai && c1New[i].nilai < c3New[i].nilai && c1New[i].nilai < c4New[i].nilai && c1New[i].nilai < c5New[i].nilai && c1New[i].nilai < c7New[i].nilai  && c1New[i].nilai < c8New[i].nilai && c1New[i].nilai < c9New[i].nilai) {
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
                        else if (c2New[i].nilai < c1New[i].nilai && c2New[i].nilai < c3New[i].nilai && c2New[i].nilai < c4New[i].nilai && c2New[i].nilai < c5New[i].nilai && c2New[i].nilai < c7New[i].nilai && c2New[i].nilai < c8New[i].nilai && c2New[i].nilai < c9New[i].nilai) {
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
                        else if(c3New[i].nilai < c1New[i].nilai && c3New[i].nilai < c2New[i].nilai && c3New[i].nilai < c4New[i].nilai && c3New[i].nilai < c5New[i].nilai && c3New[i].nilai < c7New[i].nilai && c3New[i].nilai < c8New[i].nilai && c3New[i].nilai < c9New[i].nilai) {
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
                        else if(c4New[i].nilai < c1New[i].nilai && c4New[i].nilai < c2New[i].nilai && c4New[i].nilai < c3New[i].nilai && c4New[i].nilai < c5New[i].nilai && c4New[i].nilai < c7New[i].nilai && c4New[i].nilai < c8New[i].nilai && c4New[i].nilai < c9New[i].nilai){
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac4New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c5New[i].nilai < c1New[i].nilai && c5New[i].nilai < c2New[i].nilai && c5New[i].nilai < c3New[i].nilai && c5New[i].nilai < c6New[i].nilai && c5New[i].nilai < c7New[i].nilai && c5New[i].nilai < c8New[i].nilai && c5New[i].nilai < c9New[i].nilai){
                            action = parseInt(naction) + parseInt(c4New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c4New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c4New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c4New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c4New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c4New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c4New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c4New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c4New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c4New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c4New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c4New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c4New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c4New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c4New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c4New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c4New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c4New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c4New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c4New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c4New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c4New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c4New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c4New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c4New[i].magic)
            
            
                            anggotac5New.push({
                            id_anime: c4New[i].id_anime,
                            nama_anime: c4New[i].nama_anime,
                            photo_url: c4New[i].photo_url,
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
                        else if(c6New[i].nilai < c1New[i].nilai && c6New[i].nilai < c2New[i].nilai && c6New[i].nilai < c3New[i].nilai && c6New[i].nilai < c4New[i].nilai && c6New[i].nilai < c5New[i].nilai && c6New[i].nilai < c8New[i].nilai && c6New[i].nilai < c9New[i].nilai){
                            action = parseInt(naction) + parseInt(c6New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c6New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c6New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c6New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c6New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c6New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c6New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c6New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c6New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c6New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c6New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c6New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c6New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c6New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c6New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c6New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c6New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c6New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c6New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c6New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c6New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c6New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c6New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c6New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c6New[i].magic)
            
            
            
                            anggotac6New.push({
                            id_anime: c6New[i].id_anime,
                            nama_anime: c6New[i].nama_anime,
                            photo_url: c6New[i].photo_url,
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
                        else if(c7New[i].nilai < c1New[i].nilai && c7New[i].nilai < c2New[i].nilai && c7New[i].nilai < c3New[i].nilai && c7New[i].nilai < c4New[i].nilai && c7New[i].nilai < c5New[i].nilai && c7New[i].nilai < c8New[i].nilai && c7New[i].nilai < c9New[i].nilai)
                        {
                            naction = parseInt(naction) + parseInt(c7New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c7New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c7New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c7New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c7New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c7New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c7New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c7New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c7New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c7New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c7New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c7New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c7New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c7New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c7New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c7New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c7New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c7New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c7New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c7New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c7New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c7New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c7New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c7New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c7New[i].magic)
            
                            anggotac7New.push({
                            id_anime: c7New[i].id_anime,
                            nama_anime: c7New[i].nama_anime,
                            photo_url: c7New[i].photo_url,
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
                        else if(c8New[i].nilai < c1New[i].nilai && c8New[i].nilai < c2New[i].nilai && c8New[i].nilai < c3New[i].nilai && c8New[i].nilai < c4New[i].nilai && c8New[i].nilai < c5New[i].nilai && c8New[i].nilai < c7New[i].nilai && c8New[i].nilai < c9New[i].nilai)
                        {
                            naction = parseInt(naction) + parseInt(c9New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c9New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c9New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c9New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c9New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c9New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c9New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c9New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c9New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c9New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c9New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c9New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c9New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c9New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c9New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c9New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c9New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c9New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c9New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c9New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c9New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c9New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c9New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c9New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c9New[i].magic)
                            
                            anggotac8New.push({
                                id_anime: c8New[i].id_anime,
                                nama_anime: c8New[i].nama_anime,
                                photo_url: c8New[i].photo_url,
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
                        else
                        {
                            naction = parseInt(naction) + parseInt(c9New[i].action)
                            nadventure = parseInt(nadventure) + parseInt(c9New[i].adventure)
                            ncomedy = parseInt(ncomedy) + parseInt(c9New[i].comedy)
                            nscifi = parseInt(nscifi) + parseInt(c9New[i].scifi)
                            ndrama = parseInt(ndrama) + parseInt(c9New[i].drama)
                            nspace = parseInt(nspace) + parseInt(c9New[i].space)
                            nsupernatural = parseInt(nsupernatural) + parseInt(c9New[i].supernatural)
                            nthriller = parseInt(nthriller) + parseInt(c9New[i].thriller)
                            nmystery = parseInt(nmystery) + parseInt(c9New[i].mystery)
                            nseinen = parseInt(nseinen) + parseInt(c9New[i].seinen)
                            nschool = parseInt(nschool) + parseInt(c9New[i].school)
                            nhistorical = parseInt(nhistorical) + parseInt(c9New[i].historical)
                            nechi = parseInt(nechi) + parseInt(c9New[i].echi)
                            nsliceoflife = parseInt(nsliceoflife) + parseInt(c9New[i].sliceoflife)
                            nharem = parseInt(nharem) + parseInt(c9New[i].harem)
                            npyschological = parseInt(npyschological) + parseInt(c9New[i].pyschological)
                            nsuperpower = parseInt(nsuperpower) + parseInt(c9New[i].superpower)
                            nfantasy = parseInt(nfantasy) + parseInt(c9New[i].fantasy)
                            nmecha = parseInt(nmecha) + parseInt(c9New[i].mecha)
                            nsports = parseInt(nsports) + parseInt(c9New[i].sports)
                            nromance = parseInt(nromance) + parseInt(c9New[i].romance)
                            nshounen = parseInt(nshounen) + parseInt(c9New[i].shounen)
                            nhoror = parseInt(nhoror) + parseInt(c9New[i].horor)
                            nmartialarts = parseInt(nmartialarts) + parseInt(c9New[i].martialarts)
                            nmagic = parseInt(nmagic) + parseInt(c9New[i].magic)
                            
                            anggotac9New.push({
                                id_anime: c9New[i].id_anime,
                                nama_anime: c9New[i].nama_anime,
                                photo_url: c9New[i].photo_url,
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
                res.view("admin/algoritma/k-means",{
                    title:"K-Means",
                    clus : clus,
                    c1:c1,
                    c2:c2,
                    c3:c3,
                    c4:c4,
                    c5:c5,
                    c6:c6,
                    c7:c7,
                    c8:c8,
                    c9:c9,
                    anggotac1:anggotac1,
                    anggotac2:anggotac2,
                    anggotac3:anggotac3,
                    anggotac4:anggotac4,
                    anggotac5:anggotac5,
                    anggotac6:anggotac6,
                    anggotac7:anggotac7,
                    anggotac8:anggotac8,
                    anggotac9:anggotac9,
                    layout:false,
                    rekomendasi:rekomendasi
                })
            }

            
                      
            
            })

        })
    },
    
    
};

