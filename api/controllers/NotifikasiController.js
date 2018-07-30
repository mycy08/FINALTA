/**
 * NotifikasiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    clickNotifikasi:function(req,res){
        Notifikasi.findOne(req.param('id')).exec(function(err,notif){
            if(err) return res.serverError(err)
            Notifikasi.destroy({id:notif.id}).exec(function(err,updated){
                if(err) return res.serverError(err)
                res.redirect(notif.url)
            })
        })
    },
    //mobile
    notifikasiMobile:function(req,res){
    	var page = req.param('page')
    	var item_count = req.param('item_count')
    	
    	Notifikasi.find({ id_user: req.param('id_user') })
    	.sort('updateAt DESC').exec(function(err,notif){
    		var data=[]

    		
    		for(var i=0;i<notif.length;i++){
    			data.push({
	    			id:notif[i].id,
	    			nama_anime:notif[i].nama_anime,
	    			bahasa:notif[i].bahasa,
	    			episode:notif[i].episode,
	    			url:notif[i].url,
	    			status:notif[i].status,
    			})
    		}
    	
    		
    		
    		res.json(paginate(data,item_count,page))
    	})
    },
    clickNotifikasiMobile:function(req,res){
        Notifikasi.findOne(req.param('id')).exec(function(err,notif){
            if(err) return res.serverError(err)
            Notifikasi.update({id:notif.id},{status:'1'}).exec(function(err,updated){
                if(err) return res.serverError(err)
                res.json(notif)
            })
        })
    },

};

