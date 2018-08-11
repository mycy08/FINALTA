/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // Routes Website
  '/': {
    controller: 'anime',
    action: "animeTerbaru",
  },
  'GET /register': {
    controller: 'session',
    action: "daftar",
  },
  
  'GET /login': {
    controller: 'session',
    action: "login",
  },
  'POST /lupa-sandi':{
    controller:"session",
    action:"lupaSandi"
  } ,
  'POST /validasi/':{
    controller:"session",
    action:"validasiLupaSandi"
  } ,
  'POST /ganti-sandi/':{
    controller:"user",
    action:"gantiPassword"
  } ,
  'GET /lupa-password':{
    controller:"session",
    action:"lupaPassword"
  } ,
  'GET /popular/:page':{
    controller:"anime",
    action:"popular"
  } ,
  'GET /anime-terbaru/:page': {
    controller: 'anime',
    action: "animeTerbaru",
  },
  'POST /search/':{
    controller:"anime",
    action:"search"
 } ,
 'POST /aktivasi-akun/':{
  controller:"session",
  action:"create"
} ,
'POST /aktivasi/':{
  controller:"session",
  action:"create"
} ,
'GET /akun-aktivasi/:id/:kode_verifikasi':{
  controller:"session",
  action:"akunAktif"
} ,
'POST /akun-aktivasi/':{
  controller:"session",
  action:"akunAktif"
} ,
 'GET /daftar-anime/:page':{
  controller:"anime",
  action:"daftarAnime"
} ,
'GET /genre/:nama_genre':{
  controller:"genre",
  action:"tampilGenre"
} ,
  'GET /detail-anime/:id':{
    controller:"anime",
    action:"detailAnime"
 } ,

 
 'GET /rekomendasi/:id/:page':{
  controller:"anime",
  action:"rekomendasi"
} ,
 'GET /user/anime-terbaru/':{
  controller:"anime",
  action:"animeTerbaru"
} ,
  
 'GET /profile/:id': {
  controller: 'user',
  action: "userProfile",
},
'GET /edit-profile/:id': {
  controller: 'user',
  action: "editProfile",
},

//routes admin
'GET /algoritma':{
  controller:"admin",
  action:"algo"
},
'GET /admin':{
  controller:"admin",
  action:"dash"
},
'POST /hasil-search/':{
  controller:"admin",
  action:"search"
} ,
'POST /hasil-search-user/':{
  controller:"admin",
  action:"searchUser"
} ,
'GET /login-admin':{
  controller:'admin',
  action:'login'
},
'GET /data-anime/:page':{
  controller:'admin',
  action:'dataAnime'
},
'GET /data-user/:page':{
  controller:'admin',
  action:'dataUser'
},
'GET /tambah-anime':{
  controller:'admin',
  action:'addAnime'
},
'GET /edit-anime/:id':{
  controller:'admin',
  action:'editAnime'
},

  //routes mobile
  'POST /masuk':{
    controller :'AuthMobile',
    action:'process'
  },
  
 
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
