module.exports={
    sendWelcomeMail : function(objUser) {
    
        sails.hooks.email.send(
        "welcomeEmail", 
        {
        Name: objUser.nama,
        senderName:objUser.kode_verifikasi,
        id:objUser.id
        },
        {
        to: objUser.email,
        subject: "Aktifkan akun Sirine Anda !"
        },
        function(err) {console.log(err || "Mail Sent!");}
        )
    },
    sendKataSandi : function(objUser) {
    
        sails.hooks.email.send(
        "lupaPassword", 
        {
        Name: objUser.nama,
        senderName:objUser.kode_verifikasi,
        id:objUser.id
        },
        {
        to: objUser.email,
        subject: "Reset Password Sirine !"
        },
        function(err) {console.log(err || "Mail Sent!");}
        )
    }

}


