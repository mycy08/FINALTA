/**
 * Episode_anime.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    owner_anime:{
      model:'anime',
      required:true
    },
    id_anime:{
      type:'string'
    },
    episode:{
      type:'string'
    },
    url_versi_english:{
      type:'string'
    },
    url_versi_indo:{
      type:'string'
    }
  },
  connection:'database'
};

