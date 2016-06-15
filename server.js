// PACKAGE REQUIRES
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
   
app.set('port', (process.env.PORT || 8888));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', function(req, res){
   res.render('./sasskia');
});

app.listen(app.get('port'), function() {
   console.log('Node app is running on port', app.get('port'));
});