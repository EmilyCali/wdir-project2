//this file is an attempt to attach an api to the show page for each plant

//if else statements for images to say hey of the image is this then show the info on this page?

//get image
var $image= $(".plantpic");
var $body = $("body");

var setUSDA = function() {
  if ($image.src == "/assets/yellow_tulip.gif" || $image.srcs== "/assets/red_tulip.gif" || $image.src == "/assets/pink_tulip.gif") {
    $.ajax("https://plants.usda.gov/core/profile?symbol=").done(function(data) {
      var $iframe = $("<iframe />");
      $iframe.attr("src", "https://plants.usda.gov/core/profile?symbol=TULIP").appendTo($body);
    }
  );}
};


setUSDA();

//main page
//https://plants.usda.gov/java/


//poppies need twice ----------------------
//https://plants.usda.gov/core/profile?symbol=ESCA2#

//tulips need three times -----------------
//https://plants.usda.gov/core/profile?symbol=TULIP

//lavender ---------------------------------
//https://plants.usda.gov/core/profile?symbol=LAAN81

//pansy ------------------------------------
//https://plants.usda.gov/core/profile?symbol=VIBI

//forget-me-not ---------------------------
//https://plants.usda.gov/core/profile?symbol=MYSC

//lily of the valley -----------------------
//https://plants.usda.gov/core/profile?symbol=COMA7

//ranunculus -------------------------------
//https://plants.usda.gov/core/profile?symbol=RASU4&photoID=rasu4_001_ahp.tif

//morning glory
//https://plants.usda.gov/core/profile?symbol=IPJA

//blackeyed susan --------------------------
//https://plants.usda.gov/core/profile?symbol=RUHI2

//daffodil
//https://plants.usda.gov/core/profile?symbol=NARCI
