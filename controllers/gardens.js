//require express
var express = require("express");
//name express router
var router = express.Router();
//require garden model
var Garden = require("../models/gardens.js");
//require plant model
var Plant = require("../models/plants.js");

//index route
router.get("/", function(request, response) {
  Garden.find({}, function(error, foundGardens){
    console.log(error);
    response.render("gardens/index.ejs", {
      gardens: foundGardens
    });
  });
});

//get new
router.get("/new", function(request, response) {
  response.render("gardens/new.ejs");
});


//post new
router.post("/", function(request, response) {
  Garden.create(request.body, function(error, createdGarden) {
    console.log(error);
    response.redirect("/gardens");
  });
});


//show page
router.get("/:id", function(request, response) {
  Garden.findById(request.params.id, function(error, foundGarden) {
    console.log(error);
    response.render("gardens/show.ejs", {
      garden: foundGarden
    });
  });
});




//delete page



//edit page



//post edits





module.exports = router;
