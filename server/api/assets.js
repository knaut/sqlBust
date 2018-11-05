// STATIC ASSETS
export default function( app ) {
  
  app.get('/', function(req, res) {
    res.sendFile('index.html', {
      root: `${__dirname}/../../build/`
    });
  });

  app.get('/bundle.js', function(req, res) {
    res.sendFile('bundle.js', {
      root: `${__dirname}/../../build/`
    });
  });

};