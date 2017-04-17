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
  Garden.find({}, function(error, allGardens) {
    console.log(error);
    response.render("plants/new.ejs", {
      gardens: allGardens
    });
  });
});


//post new
router.post("/", function(request, response) {
  Garden.findOne({"name": request.body.garden},
  function(error, foundGarden) {
    Plant.create(request.body, function(error, createdPlant) {
      console.log(error);
      foundGarden.plants.push(createdPlant);
      foundGarden.save(function(error, data) {
        response.redirect("/plants");
      });
    });
  });
});


//show page
router.get("/:id", function(request, response) {
  Plant.findById(request.params.id, function(error, foundPlant) {
    console.log(error);
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      response.render("plants/show.ejs", {
        garden: foundGarden,
        plant: foundPlant
      });
    });
  });
});



//delete page
router.delete("/:id", function(request, response) {
  Plant.findByIdAndRemove(request.params.id, function(error, foundPlant) {
    console.log(error);
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      foundGarden.plants.id(request.params.id).remove();
      foundGarden.save(function(error, data) {
          response.redirect("/plants");
      });
    });
  });
});


//edit page
router.get("/:id/edit", function(request, response) {
  Plant.findById(request.params.id, function(error, foundPlant) {
    console.log(error);
    Garden.find({}, function(error, allGardens) {
      console.log(error);
      Garden.findOne({"plants._id": request.params.id}, function(error, foundPlantGarden) {
        console.log(error);
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
  Plant.findByIdAndUpdate(request.params.id, request.body, {new:true}, function(error, editedPlant) {
    //console.log("this is the request body for edit" + request.body);
    //console.log(error);
    Garden.findOne({"plants._id":request.params.id}, function(error, foundGarden) {
      console.log("this is the found garden for edit " + foundGarden);
      console.log(error);
      if (foundGarden._id.toString() !== request.body.gardenId) {
        foundGarden.plants.id(request.params.id).remove();
        foundGarden.save(function(error, savedFoundGarden) {
          console.log(error);
          Garden.findById(request.body.gardenId, function(error, newGarden) {
            console.log("this is the new garden in edit " + newGarden);
            console.log(error);
            newGarden.plants.push(editedPlant);
            newGarden.save(function(error, savedNewGarden) {
              console.log(error);
              console.log("this is the newly saved garden in edit " + savedNewGarden);
              response.redirect("/plants/" + request.params.id);
            });
          });
        });
      } else {
        foundGarden.plants.id(request.params.id).remove();
        foundGarden.plants.push(editedPlant);
        foundGarden.save(function(error, data) {
          console.log(error);
          response.redirect("/plants/" + request.params.id);
        });
      }
    });
  });
});






module.exports = router;
