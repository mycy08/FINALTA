/**
 * NotifikasiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
function paginate(array, perPage, page) {
    --page; // because pages logically start with 1, but technically with 0
    return array.slice(page * perPage, (page + 1) * perPage);
}
module.exports = {
    clickNotifikasi:function(req,res){
        Notifikasi.findOne(req.param('id')).exec(function(err,notif){
            if(err) return res.serverError(err)
            Notifikasi.update({id:notif.id},{status:true}).exec(function(err,updated){
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
    	.sort('updatedAt DESC').exec(function(err,notif){
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
    hitungNotifMobile:function(req,res){
    	var page = req.param('page')
    	var item_count = req.param('item_count')
    	
    	Notifikasi.count({ id_user: req.param('id_user'),status:"false" })
    	.sort('updatedAt DESC').exec(function(err,count){
            if(err) return res.serverError(err)
            res.json({count:count})
    	})
    },
    clickNotifikasiMobile:function(req,res){
        Notifikasi.findOne(req.param('id')).exec(function(err,notif){
            if(err) return res.serverError(err)
            Notifikasi.update({id:notif.id},{status:true}).exec(function(err,updated){
                if(err) return res.serverError(err)
                res.json(notif)
            })
        })
    },

};

