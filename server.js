var http = require('http')
  , fs   = require('fs')
  , url  = require('url')
  , port = 8080;

var server = http.createServer (function (req, res) {
  var uri = url.parse(req.url)

  switch( uri.pathname ) {
    case '/':
      sendFile(res, 'public/index.html')
      break
    case '/index.html':
      sendFile(res, 'public/index.html')
      break
    case '/css/style.css':
      sendFile(res, 'public/css/style.css', 'text/css')
      break
    case '/js/scripts.js':
      sendFile(res, 'public/js/scripts.js', 'text/javascript')
      break
    case '/images/UZI.jpg':
      sendFile(res, 'public/images/UZI.jpg', 'image/jpg')
      break
    case '/images/BIRS.jpg':
      sendFile(res, 'public/images/BIRS.jpg', 'image/jpg')
      break
    case '/images/culture.jpg':
      sendFile(res, 'public/images/culture.jpg', 'image/jpg')
      break
    case '/images/good-kid.jpg':
      sendFile(res, 'public/images/good-kid.jpg', 'image/jpg')
      break
    case '/images/orange.jpg':
      sendFile(res, 'public/images/orange.jpg', 'image/jpg')
      break
    case '/images/tile.jpg':
      sendFile(res, 'public/images/tile.jpg', 'image/jpg')
      break
    case '/images/water.jpg':
      sendFile(res, 'public/images/water.jpg', 'image/jpg')
      break
    case '/images/wave.jpg':
      sendFile(res, 'public/images/wave.jpg', 'image/jpg')
      break
    
    default:
      res.end('404 not found')
  }
})

server.listen(process.env.PORT || port);
console.log('listening on 8080')

// subroutines

function sendFile(res, filename, contentType) {
  contentType = contentType || 'text/html';

  fs.readFile(filename, function(error, content) {
    res.writeHead(200, {'Content-type': contentType})
    res.end(content, 'utf-8')
  })

}