//require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//require garden.. not sure if needed but doesn't hurt
var Garden = require("./gardens.js");

//plant schema
var plantSchema = new Schema({
  garden: String,
  name: ({type: String, unique: true, required: true}),
  img: String, //need to make this required or set a default
  color: String,
  likes: String, //sunlight shade water clay rocks
  description: String, //leaf shape petal shape smell
  type: String //perrenial or annual consider using enum
});

var Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;


//gardener: {type: String, required: true},
