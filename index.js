const http = require("http");

http.createServer(function(req,res){
  console.log(req.url);
  res.write("<h1>My Home Page</h1>");
  res.end();
}).listen(8080);