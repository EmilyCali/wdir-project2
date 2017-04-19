//get about the app link====================
var $openModal= $("#openModal");
//get modal
var $modal = $("#modal");
//get close link
var $closeModal = $("#closeModal");
//get images
var $plantpics = $(".plantpic");
//get watering feature

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
$plantpics.fadeTo(2000, 0.4).delay(4000);
//function for bringing back images when watering happens,



//listeners================================
//grabbing the open to click and run show
$openModal.on("click", openModal);
//grabbing the close to click and hide
$closeModal.on("click", closeModal);

//watering on click call function
