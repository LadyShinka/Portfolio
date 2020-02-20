var express = require("express");
expressSnitizer = require("express-sanitizer");
var app         = express();
bodyParser   = require("body-parser");

app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSnitizer());


app.get("/", function(req, res){
	res.redirect("/home");
});


app.get("/home", function(req, res){
	res.render("index");
});


// On GOORM cannot use process.env.PORT but will need when deploying
app.listen(process.end.IP, process.env.IP, function(){
	console.log("SERVER IS RUNNING!");
});
