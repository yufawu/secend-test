let express = require("express");
let app = express()



app.get("/api", function(req, res) {
    res.send({
        a: "hello expresdds",
        b:"hello express"
    });
});
app.get("/abc", function(req, res) {
    res.send({
        b:"hello express"
    });
});
app.post("/abc", function(req, res) {
    res.send('this is a post action: ' + req.query.xx);
});
app.post("/123", function(req, res) {
    res.send({
        b:"hello 123" 
    });
});


app.post("/api", function(req, res) {
    res.send('this is a post action: ' + req.query.xx);
});

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
