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

//get open second modal on plant show pages
var $openPlantModal = $("#openPlantModal");
//get modal on plant show pages
var $plantModal = $("#plantModal");
//get close button on plant show pages
var $closePlantModal = $("#closePlantModal");


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


//function for plant modal open
var openPlantModal = function() {
  $plantModal.css("display","block");
};
//function for plant modal close
var closePlantModal = function() {
  $plantModal.css("display", "none");
};


//listeners================================
//grabbing the open to click and run show
$openModal.on("click", openModal);
//grabbing the close to click and hide
$closeModal.on("click", closeModal);

//$plantpics.fadeTo(2000, 0.4).delay(4000);
window.setTimeout(wiltedPlants, 3000);
//watering on click call function
$water.on("click", waterPlants);

//grabbing open plant modal click to show
$openPlantModal.on("click", openPlantModal);
//grabbing close plant modal click to hide
$closePlantModal.on("click", closePlantModal);
