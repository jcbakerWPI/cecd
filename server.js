var http = require('http')
, qs   = require('querystring')
, fs   = require('fs')
, url  = require('url')
, path = require('path')
, port = 8080
, sqlite3 = require('sqlite3')

// Connect to database
var moviesDB = new sqlite3.Database('movies-baker.sqlite');
var movies = [];

var server = http.createServer(function (req, res) {
  movies = [];
  var uri = url.parse(req.url)
  var file = uri.pathname
  // determine path extension
  file = file == '/' ? '/index.html' : file
  filepath = path.join(process.cwd(), file)

  //  determine case based on path
  switch( file ) {
  case '/search': 
  case '/index.html': 

    // handles search / add before loading default page
    if(req.method == 'GET' && uri.query) 
      { 
        handleSearch(res, uri)
      } 
    else if(req.method == 'POST') 
      { 
        handlePost(res, req, uri)
      }

    // default send movies to DB
    else {
      moviesDB.each("SELECT title, rating FROM movieTable", function(err, row) {
        movies.push(row);
        console.log(row)
      }, 
            function() {
              
	            sendFile(res, 'index.html');})
    }
            console.log(movies)
    break

  case '/style.css':
    sendFile(res, 'style.css', 'text/css')
    break

  case '/scripts.js':
    sendFile(res, 'scripts.js', 'text/javascript')
    break

  case '/bg.jpg':
    sendFile(res, 'bg.jpg', 'img/jpg')
    break

  default:
    res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on '+ port);

// SEARCH //
function handleSearch(res, uri) {
  res.writeHead(200, {'Content-type': 'application/json',
         'Cache-Control': 'no-cache'});
              
  // Get query data
  var data = qs.parse(uri.query)
  moviesDB.each("SELECT title, rating FROM movieTable",  function(err, row) {
    
    // if the movie list contains the query data, push the row
    if(row.title.toLowerCase(). includes(data.search.toLowerCase())) {
		     movies.push(row);
		      }}, function() {

		   res.write(JSON.stringify(movies));
       res.end();
          
		 });
}

// ADD / DELETE //
function handlePost(res, req, uri) {

  var movieInfo = ''

  req.on('data', function(d) {
    movieInfo += d
  })

  req.on('end', function editMovieList() {
    var data = qs.parse(movieInfo)

    // Add a movie (REPLACE used to handle duplications)
    if(data.title) {      
      moviesDB.run("INSERT OR REPLACE INTO movieTable VALUES($title, $rating)", {
	      $title: data.title,
	      $rating: data.rating
      });
      console.log('movie was added')
    }

    // Delete a chosen movie
    if(data.del) {
       moviesDB.run("DELETE FROM movieTable WHERE title= ? ", data.del);
    }

    // Show default movies list
    moviesDB.each("SELECT title, rating FROM movieTable", function(err, row) {
      movies.push(row);
    }, function() {
      res.write(JSON.stringify(movies));
      res.end();
    })
  })
}

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html'

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType, 'Cache-Control': 'no-cache'})
    res.end(content, 'utf-8')
  })
}