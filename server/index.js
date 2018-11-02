'use strict';

// IMPORTS
import express from 'express';

// SETUP
const app = express();
const port = 3000;

// ROUTER
const router = express.Router();

const handlers = [
  function(req, res, next) {
    console.log('this is another message of some kind');

    next();
  },
  function(req, res, next) {
    console.log('this is a route with multiple callbacks');

    next();
  },
];

router.use(handlers);

router.get('/', function(req, res) {
  res.send('hello!!');
});

router.get('/test', function(req, res) {
  res.send('random test');
});

// ROUTES
app.use('/home', router);

app.listen(port, function() {
  console.log(`sqlBust listening on ${port}`);
});