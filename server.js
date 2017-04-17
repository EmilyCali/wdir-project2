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

//declaration for using heroku or local express listener
var port = process.env.PORT || 3000;


var mongoDBURI = process.env.MONGODB_URI || "mongodb://localhost:27017/project2_gardens"


//middleware
//use method override
app.use(methodOverride("_method"));
//use body parser
app.use(bodyParser.urlencoded({extended: false}));
//use stylesheet


//require controllers
var gardensController = require("./controllers/gardens.js");
var plantsController = require("./controllers/plants.js");

//use controllers
app.use("/gardens", gardensController);
app.use("/plants", plantsController);



//index route
app.get("/", function(request, response) {
  response.render("index.ejs");
});


//mongoose open
mongoose.connect(mongoDBURI);
mongoose.connection.once("open", function() {
  console.log("mongoose connected");
});



//listener
app.listen(port, function() {
  console.log("listening");
});
