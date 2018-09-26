const http = require('http');

http.createServer((req,res) =>
{
   res.writeHead(200, {'Content-Type':'text/html'});

}).listen(8080);

