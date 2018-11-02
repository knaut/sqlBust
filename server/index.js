'use strict';

// IMPORTS
import express from 'express';

// SETUP
const app = express();
const port = 3000;

// ROUTES
app.get('/', function(req, res) {
  res.send('hello!!');
}); 

app.listen(port, function() {
  console.log(`sqlBust listening on ${port}`);
});