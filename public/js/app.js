//get about the app link
var $openModal= $("#openModal");
//get modal
var $modal = $("#modal");
//get close link
var $closeModal = $("#closeModal");

//handlers
var openModal = function() {
  $modal.css("display", "block");
};

var closeModal = function() {
  $modal.css("display", "none");
};

//listeners
$openModal.on("click", openModal);
$closeModal.on("click", closeModal);
