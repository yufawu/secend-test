var express = require('express');
var app = express();

 

 
app.get('/ab-post.html', function (req, res) {
   res.sendFile( __dirname + "/" + "ab-post.html" );
})
 
app.post('/process_post', function (req, res) {
    res.send('666'); 
})
 
var server = app.listen(9090, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})