var express = require('express');
var bodyParser = require('body-parser');
var Dbconnection = require('./dbConnect');
var connectDb = new Dbconnection();
var app = express();
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({
    extended:true
}));
exports.start = function(){
	app.get('/', function(req, res){
		console.log("pathname:/");
		res.send("/");
		connectDb.createConnect();
		connectDb.getEmpInfo('70002');
		connectDb.stopConnect();
	});
	app.post('/login', function(req, res){
		console.log(req.body);
		res.end(JSON.stringify({result: "true"}));
	});
	app.listen(8080);
	console.log('server start！')
}