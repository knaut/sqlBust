'use strict';

// IMPORTS
require('dotenv').config();
import express from 'express';
import mysql from 'mysql';

// CONFIG
import config from '../config.json';
const platform = config.platforms[ process.env.PLATFORM ];

// MIDDLEWARE
import * as loggers from './middleware/loggers';

// ROUTES
import assets from './api/assets';


// SETUP
const app = express();
const port = 3000;

app.use( loggers.request );

// DB
const pool = mysql.createPool(platform);

function getLessons(db) {
  return new Promise( function( resolve, reject ) {
    var query = `select * from lessons`;
    db.query(query, function(error, results, fields) {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve( results );
    });
  });
}

// STATIC ASSET ROUTES
assets(app);

// API ROUTES
app.post('/', function(req, res) {
  res.send('posted!');
});

// START
app.listen(port, function() {
  loggers.welcome( port, false );
});