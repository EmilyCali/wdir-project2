//require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//require garden.. not sure if needed but doesn't hurt
var Garden = require("./gardens.js");

//plant schema
var plantSchema = new Schema({
  gardener: {type: String, required: true},
  img: String, //need to make this required
  color: String,
  likes: [String], //sunlight shade water clay rocks
  description: String, //leaf shape petal shape smell
  type: String //perrenial or annual
});

var Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
