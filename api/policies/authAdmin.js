module.exports = function(req, res, ok) {
if(req.session.Admin){
    return ok();
  }
  else{
    var requireLoginError = ['Harus login terlebih dahulu']
    req.session.flash = {
        err: requireLoginError
    }
    res.redirect('/admin/login');
      return;

  }
}