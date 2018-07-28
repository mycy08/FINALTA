/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt')
module.exports = {

  attributes: {
    
    email:{
      type:'string',
      email: true,
      required:true,
      unique:true
    },
    password:{
      type:'string',
      required:true
    },
    nama:{
      type:'string',
      required:true
    },
    
    tgl_lahir:{
      type:'string'

    },
    photo_url:{
      type:'string'

    },
    no_hp:{
      type:'string'

    },
    jenis_kelamin:{
      type:'string'
    },
    sukses:{
      type:'integer'
    },
    batal:{
      type:'integer'
    },
    kode_verifikasi:{
      type:"string"
    },
    status:{
      type:"boolean"
    },
    ratings:{
      collection:'rating',
      via:'owner_user'
    },
    
    anime_favorits:{
      collection:'anime_favorit',
      via:'owner_user'
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

