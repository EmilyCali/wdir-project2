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
  Plant.find({}, function(error, foundPlants) {
    console.log(error);
    response.render("plants/index.ejs", {
      plants: foundPlants
    });
  });
});

//get new
router.get("/new", function(request, response) {
  response.render("plants/new.ejs");
});


//post new
router.post("/", function(request, response) {
  Plant.create(request.body, function(error, createdPlant) {
    console.log(error);
    response.redirect("/plants");
  });
});


//show page
router.get("/:id", function(request, response) {
  Plant.findById(request.params.id, function(error, foundPlant) {
    console.log(error);
    response.render("plants/show.ejs", {
      plant: foundPlant
    });
  });
});



//delete page



//edit page



//post edits





module.exports = router;
