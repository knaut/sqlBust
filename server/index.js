'use strict';

// IMPORTS
import express from 'express';
import mysql from 'mysql';

// CONFIG
import config from '../config.json';

// MIDDLEWARE
import logger from './middleware/logger';

// SETUP
const app = express();
const port = 3000;

app.use(logger);

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '0.0.0.0',
  user: 'root',
  password: '',
  database: 'sandbox'
});

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

// ROUTES
app.get('/', async function(req, res) {

  // const lessons = await getLessons( pool );

  res.json({
    // lessons,
  });

});

app.post('/', function(req, res) {
  res.send('posted!');
});

app.listen(port, function() {
  console.log(`sqlBust listening on ${port}`);
});