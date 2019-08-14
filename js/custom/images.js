jQuery(document).ready(function() {
    var element = document.getElementById("required");
    var images = 36;
    for (let index = 1; index <= images; index++) {
         jQuery("#required").append("<a href='images/event1/slider_1_"+(index)+".jpg' data-lightbox='mygallery'><img src='images/event1/slider_1_"+(index)+".jpg'></a>");
    };

});