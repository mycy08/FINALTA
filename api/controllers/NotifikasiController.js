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
    }

};

