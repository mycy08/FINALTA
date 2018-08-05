/**
 * Anime.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type:{
      type:'string',
      required:true
    },
    nama_anime:{
      type:'string',
      required:true
    },
    deskripsi:{
      type:'string'
    },
    tahun_terbit:{
      type:'integer'
    },
    photo_url:{
      type:'string'
    },
    status:{
      type:'string'
    },
    url_anime_english:{
      type:'string'
    },
    url_anime_indo:{
      type:'string'
    },
    genre:{
      type:'string'
    },
    score:{
      type:'float'
    },
    notifikasi:{
      collection:'notifikasi',
      via :'owner_anime'
    },
    episodes:{
      collection:'episode_anime',
      via :'owner_anime'
    },
    anime_favorits:{
      collection:'anime_favorit',
      via :'owner_anime'
    },
    
    ratings:{
      collection:'rating',
      via:'owner_anime'
    }
  },
  connection:'database'
};

