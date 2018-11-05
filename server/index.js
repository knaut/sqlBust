'use strict';

// IMPORTS
require('dotenv').config();
import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import multer from 'multer';

// CONFIG
import config from '../config.json';
const platform = config.platforms[ process.env.PLATFORM ];

// MIDDLEWARE
import * as loggers from './middleware/loggers';

// ROUTES
import assets from './api/assets';
import users from './api/users/routes';

// SETUP
const app = express();
const port = 3000;

app.use( bodyParser.json() ); // for parsing application/json
app.use( bodyParser.urlencoded({ extended: true }) ); // for parsing application/x-www-form-urlencoded
app.use( loggers.request );

// DB
const pool = mysql.createPool(platform);

// STATIC ASSET ROUTES
assets(app);

// APIS
app.use('/api/users', users(pool));

// START
app.listen(port, function() {
  loggers.welcome( port, false );
});