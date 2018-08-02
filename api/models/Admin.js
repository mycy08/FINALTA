/**
 * Admin.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt')
module.exports = {

  attributes: {
    email:{
      type:'string'
    },
    password:{
      type:'string'
    },
    nama_admin:{
      type:'string'
    },
    toJSON: function(){
      var obj = this.toObject();
      delete obj.password;
      delete obj.csrf;
      return obj;

    
    },

  },
  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
          if(err) {
              console.log(err);
              cb(err);
          } else {
              user.password = hash;
              console.log(hash);
              cb(null, user);
          }
        });
    });
},


comparePassword : function (password, user, cb) {
  bcrypt.compare(password, user.password, function (err, match) {

    if(err) cb(err);
    if(match) {
      cb(null, true);
    } else {
      cb(err);
    }
  });
},
  connection:'database'

};

