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
  //find the plants so that they can be on thepage
  Plant.find({}, function(error, foundPlants) {
    console.log(error);
    //render the index page with the plants on them
    response.render("plants/index.ejs", {
      plants: foundPlants
    });
  });
});

//get new
router.get("/new", function(request, response) {
  //find the gardens so they can be selected
  Garden.find({}, function(error, allGardens) {
    console.log(error);
    //render the new page so a new plant can be made
    response.render("plants/new.ejs", {
      gardens: allGardens
    });
  });
});


//post new
router.post("/", function(request, response) {
  //find the garden taht was selected
  Garden.findOne({"name": request.body.garden},
  function(error, foundGarden) {
    //create a plant to the plants array
    Plant.create(request.body, function(error, createdPlant) {
      //trying to determine if the likes array needs a splitter like in teh pokemon app
      //var getLikesArray = function(likesString) {
        //var likesArray = [];
        //likesArray = likesString.split(",");
      //}
      console.log(error);
      //push the newly created plant to the array of plants inside the garden selected
      foundGarden.plants.push(createdPlant);
      //save this so it keeps
      foundGarden.save(function(error, data) {
        //go back to the index page
        response.redirect("/plants");
      });
    });
  });
});


//show page
router.get("/:id", function(request, response) {
  //find the plant based on the link you clicked
  Plant.findById(request.params.id, function(error, foundPlant) {
    console.log(error);
    //find the garden that plant is in
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      //show the show page which is dynamically filled with the information of the things found
      response.render("plants/show.ejs", {
        garden: foundGarden,
        plant: foundPlant
      });
    });
  });
});



//delete page
router.delete("/:id", function(request, response) {
  //find the plant in the plant array and remove it
  Plant.findByIdAndRemove(request.params.id, function(error, foundPlant) {
    console.log(error);
    //find the same plant that is in the array of plants inside the garden
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      //remove the plant
      foundGarden.plants.id(request.params.id).remove();
      //save this
      foundGarden.save(function(error, data) {
        //go back to the index
          response.redirect("/plants");
      });
    });
  });
});


//edit page
router.get("/:id/edit", function(request, response) {
  //find the plant you are trying to edit
  Plant.findById(request.params.id, function(error, foundPlant) {
    console.log(error);
    //find the gardens
    Garden.find({}, function(error, allGardens) {
      console.log(error);
      //find the garden that the plant is in
      Garden.findOne({"plants._id": request.params.id}, function(error, foundPlantGarden) {
        console.log(error);
        //show the edit page
        response.render("plants/edit.ejs", {
          plant: foundPlant,
          gardens: allGardens,
          plantGarden: foundPlantGarden
        });
      });
    });
  });
});



//post edits
router.put("/:id", function(request, response) {
  //find the plant and update it in the plant array
  Plant.findByIdAndUpdate(request.params.id, request.body, {new:true}, function(error, editedPlant) {
    //console.log("this is the request body for edit" + request.body);
    //console.log(error);
    //find the garden that has the plant in it
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      console.log("this is the found garden for edit " + foundGarden);
      console.log(error);
      //if the id of the garden does not match the id of the selected by user garden
      if (foundGarden._id.toString() !== request.body.gardenId) {
        //remove the plant from the garden it was in
        foundGarden.plants.id(request.params.id).remove();
        //save the garden that has the plant removed
        foundGarden.save(function(error, savedFoundGarden) {
          console.log(error);
          //find the garden new garden that doesn't have the plant, the one that plant is going to
          Garden.findById(request.body.gardenId, function(error, newGarden) {
            console.log("this is the new garden in edit " + newGarden);
            console.log(error);
            //add the newly edited plant to the garden
            newGarden.plants.push(editedPlant);
            //save the garden with the edited plant
            newGarden.save(function(error, savedNewGarden) {
              console.log(error);
              console.log("this is the newly saved garden in edit " + savedNewGarden);
              //go back to the plant page
              response.redirect("/plants/" + request.params.id);
            });
          });
        });
      } else {
        //otherwise, if the plant is staying in the same garden, just remove the plant from the garden
        foundGarden.plants.id(request.params.id).remove();
        //push the new plant into the garden
        foundGarden.plants.push(editedPlant);
        //save the garden
        foundGarden.save(function(error, data) {
          console.log(error);
          //go back to the plant page
          response.redirect("/plants/" + request.params.id);
        });
      }
    });
  });
});






module.exports = router;
