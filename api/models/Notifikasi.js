/**
 * Notifikasi.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_anime:{
      type:'string'
    },
    owner_anime:{
      model:'anime',
      required:true
    },
    owner_user:{
      model:'user',
      required:true
    },
    id_user:{
      type:'string'
    },
    nama_anime:{
      type:'string'
    },
    episode:{
      type:'string'
    },
    bahasa:{
      type:'string'
    },
    url:{
      type:'string'
    },
    status:{
      type:'boolean'
    }

  },
  connection:"database"

};

