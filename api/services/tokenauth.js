var jwt = require('jsonwebtoken');

var tokenauth = {

  generateToken: function(payload) {
    return jwt.sign(payload, jwToken.tokenSecret);
  },

  verifyToken: function(token, cb) {
    return jwt.verify(token, jwToken.tokenSecret, {}, cb);
  },

  getUser: function(token, cb) {
    tokenauth.verifyToken(token, function(err, data) {
      if(err) return cb(err);
      sails.models.user.findOne({id: data.userId}, function(err, User) {
        if(err) return cb(err);
        cb(null, User);
      });
    });
  }
};


module.exports = tokenauth;