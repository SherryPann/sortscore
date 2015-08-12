var express = require('express');
var app = express();;
app.use(express.static('public'));
app.use(express.static('bower_components'));
app.set("view engine", "html");
app.get('/', function(req, res) {
  res.sendfile('./views/index.html')
  });
app.listen(3000);
console.log('Listening on port http://locallhost:3000');
