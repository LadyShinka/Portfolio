var express = require("express");
expressSnitizer = require("express-sanitizer");
var app         = express();
bodyParser   = require("body-parser");
// mongoose    = require("mongoose");

// APP CONFIG
// mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('useNewUrlParser', true);
app.set("view engine", "ejs");
// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
// app.use("/route", express.static("foldername"));
// app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSnitizer());
// mongoose.set('useFindAndModify', false);

// MONGOOSE/MODEL CONFIG

// var homeSchema = new mongoose.Schema({
// 	title: String,
// 	image: String,
// 	body: String,
// 	created: 
// 	{type: Date, default: Date.now}
// });
// var Home = mongoose.model("Home", homeSchema);

// RESTFUL ROUTES

app.get("/", function(req, res){
	res.redirect("/home");
});

// INDEX ROUTE
app.get("/home", function(req, res){
	// Home.find({}, function(err, homePage){
	// 	if(err){
	// 		console.log("ERROR!");
	// 	} else {
	// 		res.render("index", {home: homePage});
	// 	}
	// })
	res.render("index");
});


// On GOORM cannot use process.env.PORT but will need when deploying
app.listen(process.end.IP, process.env.IP, function(){
	console.log("SERVER IS RUNNING!");
});
