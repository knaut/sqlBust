'use strict';

// IMPORTS
import express from 'express';
import chalk from 'chalk';
import mysql from 'mysql';

// SETUP
const app = express();
const port = 3000;

const loggers = [
  function(req, res, next) {
    console.log(
      chalk.green(req.method),
      chalk.gray(req.headers.host),
      chalk.green(req.url),
      chalk.blue('Body:'),
      res.body
    );
    next();
  }
];

app.use(loggers);

const connection = mysql.createConnection({
  host: '0.0.0.0',
  user: 'root',
  password: '',
  database: 'magnitude'
});

function getLessons(connection) {
  return new Promise( function( resolve, reject ) {
    var query = `select * from lessons`;
    connection.connect();
    connection.query(query, function(error, results, fields) {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve( results );
    });
  });
}

// ROUTES
app.get('/', function(req, res) {

  getLessons( connection ).then(results => {
    res.send(results)
  });

});

app.post('/', function(req, res) {
  res.send('posted!');
});

app.listen(port, function() {
  console.log(`sqlBust listening on ${port}`);
});