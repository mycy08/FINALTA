module.exports = {
  
    itemRating:function(req,res){
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
                    cluster.push(rekomendasi[i+10])
    
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
                var rataC3 = parseFloat(sum2) / c3.length

                var groupRating = []

                                            for (var i = 0; i < rekomendasi.length; i++) {
                                                var hSementaraUp = 0
                                                var hSementaraDown = 0
                                                var hasil = 0
                                                for (var j = 0; j < rekomendasi.length; j++) {

                                                    hSementaraUp = hSementaraUp +
                                                        ((parseFloat(c1[j].nilai - parseFloat(rataC1) * (parseFloat(c1[i].nilai) - parseFloat(rataC1))))
                                                            + ((parseFloat(c2[j].nilai) - parseFloat(rataC2)) * (parseFloat(c2[i].nilai - parseFloat(rataC2))))
                                                            + ((parseFloat(c3[j].nilai) - parseFloat(rataC3)) * (parseFloat(c3[i].nilai - parseFloat(rataC3))))
                                                        )
                                                    hSementaraDown = parseFloat(hSementaraDown)
                                                        + Math.sqrt((Math.pow(parseFloat(c1[j].nilai) - parseFloat(rataC1), 2) +
                                                            (Math.pow(parseFloat(c2[j].nilai) - parseFloat(rataC2), 2)) +
                                                            (Math.pow(parseFloat(c3[j].nilai) - parseFloat(rataC3), 2))
                                                        )) * Math.sqrt((Math.pow(parseInt(c1[i].nilai) - parseInt(rataC1), 2))
                                                            + (Math.pow(parseFloat(c2[i].nilai) - parseFloat(rataC2), 2))
                                                            + (Math.pow(parseFloat(c3[i].nilai) - parseFloat(rataC3), 2)))

                                                    groupRating.push(parseFloat(hSementaraUp) / parseFloat(hSementaraDown))

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















































                                                
                                                var itemRatings = []
                                                var item ;
                                                for(var i = 0 ;i<anime.length;i++)
                                                {
                                                    for(var j = 0 ; j< anime.length ; j++)
                                                    {
                                                        var random = Math.floor(Math.random()*200)
                                                        item = itemRating[random]
                                                        if(item == Infinity)
                                                        {
                                                            itemRatings.push(itemRating[10])
                                                        }
                                                        else
                                                        {
                                                            itemRatings.push(item)
                                                        }

                                                    }
                                                }

                                                User.find().exec(function(err,user){
                                                    res.view("admin/algoritma/item-rating",{
                                                        layout:false,
                                                        title:"Item Rating",
                                                        user:user,
                                                        itemRating:itemRatings,
                                                        anime:anime
                                                    })
                                                })




                                            })                                                                                                      
                                        })

                                    })

                                })


                            })

                        })
                    })
                  
               
                
                
    
    
    
    
    
            })
        })
    }
};