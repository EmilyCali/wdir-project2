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
    //render garden page
    response.render("gardens/index.ejs", {
      gardens: foundGardens
    });
  });
});

//get new
router.get("/new", function(request, response) {
  //render new page that lets you create a new garden
  response.render("gardens/new.ejs");
});


//post new
router.post("/", function(request, response) {
  //add this thing to the garden item
  Garden.create(request.body, function(error, createdGarden) {
    console.log(error);
    //go back to the gardens index
    response.redirect("/gardens");
  });
});


//show page
router.get("/:id", function(request, response) {
  //find the garden that you clicked on
  Garden.findById(request.params.id, function(error, foundGarden) {
    console.log(error);
    //go to the show page and have the content come from the id item
    response.render("gardens/show.ejs", {
      garden: foundGarden
    });
  });
});


//delete
router.delete("/:id", function(request, response) {
  Garden.findByIdAndRemove(request.params.id, function(error, foundGarden) {
    //make place to push plants to
    var plantIds = [];
    //for each plant in the garden
    for (var i = 0; i < foundGarden.plants.length; i++) {
      //put them into this array so they can be taken out
      plantsIds.push(foundGarden.plants[i]._id);
    }
    //remove them from the original plants array
    Plant.remove(
      {
        _id: {
          $in: plantsIds
        }
      },
      function(error, data) {
        console.log(error);
        //go back to the index for gardens
        response.redirect("/gardens");
      }
    );
  });
});



//edit page
router.get("/:id/edit", function(request, response) {
  //enable the edit page to know which thing it is editing
  Garden.findById(request.params.id, function(error, foundGarden) {
    console.log(error);
    //render the edit page
    response.render("gardens/edit.ejs", {
      garden: foundGarden
    });
  });
});



//post edits





module.exports = router;
