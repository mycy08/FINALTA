module.exports = function(req, res, next) {
    // adopt the User from the socket
  if(req.isSocket && req.socket.User) {
    req.User = req.socket.User;
    return next();
  }

  // get token from header an validate it
  var token = req.headers["x-token"];

  function send401() {
    res.send(401, {err: 'E_LOGIN_REQUIRED', message: 'Login required'});
  }

  // validate we have all params
  if(!token) return send401();

  // validate token and set req.User if we have a valid token
  sails.services.tokenauth.verifyToken(token, function(err, data) {
    if(err) return send401();

    sails.models.user.findOne({id: data.userId}, function(err, User) {
      if(err) send401();
      req.User = User;
      next();
    });
  });
};