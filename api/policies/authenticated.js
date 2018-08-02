/**
 * Allow any authenticated user.
 */
module.exports = function(req, res, ok) {

    // User is allowed, proceed to controller
    

    if (req.session.User) {
      return ok();
    }
  
    // User is not allowed
    else {
      	var requireLoginError = ['Harus login terlebih dahulu']
      req.session.flash = {
      	err: requireLoginError
      }
      res.redirect('/login');
        return;
      
    }
  };