//get about the app link====================
var $openModal= $("#openModal");
//get modal
var $modal = $("#modal");
//get close link
var $closeModal = $("#closeModal");
//get images
var $plantpics = $(".plantpic");
//get watering feature
var $water = $(".water");


//handlers ================================
//when you click on the about this app link open the modal
var openModal = function() {
  $modal.css("display", "block");
};
//when you click on the close link inside the modal close the modal
var closeModal = function() {
  $modal.css("display", "none");
};
//function for fading out images
//keep plant at opacity
var wiltedPlants = function() {
  $plantpics.addClass("wilted");
};
//function for bringing back images when watering happens,
var waterPlants = function() {
  $plantpics.removeClass("wilted");
};



//listeners================================
//grabbing the open to click and run show
$openModal.on("click", openModal);
//grabbing the close to click and hide
$closeModal.on("click", closeModal);

//$plantpics.fadeTo(2000, 0.4).delay(4000);
window.setTimeout(wiltedPlants, 10000);
//watering on click call function
$water.on("click", waterPlants);
