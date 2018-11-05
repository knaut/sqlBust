import express from 'express';

import * as queries from './queries';

// USER ROUTES
export default function( db ) {
  const router = express.Router();

  router.get('/', async function(req, res, next) {

    try {

      const users = await queries.getUsers( db );

      res.send({
        test: 'hello',
        users
      });

    } catch (error) {
      console.log(error);
    }

  });

  router.post('/', function(req, res, next) {
  });

  router.put('/', function(req, res, next) {

  });

  router.delete('/', function(req, res, next) {

  });

  return router;

}