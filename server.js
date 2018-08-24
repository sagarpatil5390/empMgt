const express = require("express");
var app = express();
var router = express.Router();

app.use(express.static('public'));

router.get('/', function(req, res){
    res.end("Hello Express");
});

router.get('/node', function(req, res){
  res.end("Hello Node!!");
});



var server = app.listen(8080, function(){
  console.log(`server is listing on ${server.address().port}`);
});
