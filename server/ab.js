var express = require('express');
var app = express();
 
app.get('/ab.html', function (req, res) {
   res.sendFile( __dirname + "/" + "ab.html" );
})
app.get('/process_get', function (req, res) {
    res.send('Hello World 12345');
 })
 

 
var server = app.listen(8082, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})
