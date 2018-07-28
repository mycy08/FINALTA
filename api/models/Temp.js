/**
 * Temp.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id_anime :{
      type:'string'
    },
    nama_anime :{
      type:'string'
    },
    photo_url :{
      type:'string'
    },
  },
  connection:'database'
};

