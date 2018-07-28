/**
 * Rating.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    owner_user:{
      model:'user',
      required:true
    },
    owner_anime:{
      model:'anime',
      required:'string'
    },
    id_user:{
      type:'string'
    },
    id_anime:{
      type:'string'
    },
    score:{
      type:'string'
    },
    review:{
      type:'string'
    }
  },
  connection:'database',
};

