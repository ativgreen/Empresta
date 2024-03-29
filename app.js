var express = require("express");

var app = express();

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
})

app.get('/', function(req, res){
	res.render('index.jade');
});

app.listen(8080);
console.log('listening on 8080');