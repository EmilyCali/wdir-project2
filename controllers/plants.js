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
  response.render("plants/new.ejs");
});


//show page




//delete page



//edit page



//post edits





module.exports = router;
