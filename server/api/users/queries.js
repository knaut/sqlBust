// USER API QUERIES
export function anyUsers( db ) {
  return new Promise( function(resolve, reject) {
    const query = `show tables like users`;

    db.query(query, function(error, results) {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve( results );
    })
  });
}

export function getUsers( db ) {
  return new Promise( function(resolve, reject) {
    const query = `select * from users`;

    db.query(query, function(error, results) {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve( results );
    })
  });
}