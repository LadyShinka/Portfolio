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

// NEW ROUTE
// app.get("/blogs/new", function(req,res){
// 	res.render("new");
// })

// CREATE ROUTE
// app.post("/blogs", function(req,res){
// 	// create blog
// 	console.log(req.body);
// 	req.body.blog.body = req.sanitize(req.body.blog.body);
// 	console.log(req.body);
// 	Blog.create(req.body.blog, function(err, newBlog){
// 		if(err){
// 			res.render("new");
// 		} else {
// 			// then, redirect to index
// 			res.redirect("/blogs");
// 		}
// 	})
// });

// SHOW ROUTE
// app.get("/blogs/:id", function(req, res){
// 	Blog.findById(req.params.id, function(err, foundBlog){
// 		if(err) {
// 			res.redirect("/blogs");
// 		} else {
// 			res.render("show", {blog: foundBlog});
// 		}
// 	});
// });

// EDIT ROUTE
// app.get("/blogs/:id/edit", function(req, res){
// 	Blog.findById(req.params.id, function(err, foundBlog){
// 		if(err){
// 			res.redirect("/blogs");
// 		} else {
// 			res.render("edit", {blog: foundBlog});
// 		}
// 	});
// });

// UPDATE ROUTE
// app.put("/blogs/:id", function(req, res){
// 	req.body.blog.body = req.sanitize(req.body.blog.body);
// 	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
// 		if(err) {
// 			res.redirect("/blogs");
// 		} else {
// 			res.redirect("/blogs/" + updatedBlog._id);
// 		}
// 	})
// });

// DELETE ROUTE
// app.delete("/blogs/:id", function(req, res){
// 	// destroy blog
// 	Blog.findByIdAndRemove(req.params.id, function(err){
// 		if(err) {
// 			res.redirect("/blogs");
// 		} else {
// 			res.redirect("/blogs");
// 		}
// 	});
	// redirect somewhere
// });

// On GOORM cannot use process.env.PORT but will need when deploying
app.listen(3000, process.env.IP, function(){
	console.log("SERVER IS RUNNING!");
});