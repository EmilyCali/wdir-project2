//require express
var express = require("express");
//call express
var app = express();
//require mongoose
var mongoose = require("mongoose");
//require body parser
var bodyParser = require("body-parser");
//require method override
var methodOverride = require("method-override");



//middleware
//use method override
app.use(methodOverride("_method"));
//use body parser
app.use(bodyParser.urlencoded({extended: false}));
//use stylesheet






//index route
app.get("/", function(request, response) {
  response.render("index.ejs");
});


//mongoose open
mongoose.connect("mongodb://localhost:27017/project2_gardens");
mongoose.connection.once("open", function() {
  console.log("mongoose connected");
});



//listener
app.listen(3000, function() {
  console.log("listening");
});
