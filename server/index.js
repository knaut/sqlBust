'use strict';

// IMPORTS
import express from 'express';
import chalk from 'chalk';

// SETUP
const app = express();
const port = 3000;

// ROUTER
const router = express.Router();

const loggers = [
  function(req, res, next) {
    console.log(
      chalk.green(req.method),
      chalk.gray(req.headers.host),
      chalk.green(req.url),
      chalk.blue('Body:', req.body)
    );
    next();
  }
];

app.use(loggers);

// ROUTES
app.use('/', function(req, res) {
  res.send('hello!');
});

app.listen(port, function() {
  console.log(`sqlBust listening on ${port}`);
});