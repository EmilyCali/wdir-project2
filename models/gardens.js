//require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//require plants
var Plant = require("./plants.js");

//create schema

var gardenSchema = new Schema({
  name: ({type: String, required: true, unique: true}),
  style: String,
  description: String,
  plants: [Plant.schema]
});

var garden = mongoose.model("Garden", gardenSchema);

module.exports = garden;


//add gardener as user
