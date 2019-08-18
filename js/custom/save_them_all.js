jQuery(document).ready(function() {
    var element = document.getElementById("required");
    var images = 36;
    for (let index = 1; index <= images; index++) {
         jQuery("#required").append("<a href='images/save/slider_1_"+(index)+".jpg' data-lightbox='mygallery'><img src='images/save/slider_1_"+(index)+".jpg'></a>");
    };  
    var images = 18;
    for (let index = 1; index <= images; index++) {
        jQuery("#wellbeing").append("<a href='images/mission/slider_1_"+(index)+".jpg' data-lightbox='mygallery'><img src='images/mission/slider_1_"+(index)+".jpg'></a>");
   };
   var images = 36;
    for (let index = 19; index <= images; index++) {
        jQuery("#supporting").append("<a href='images/mission/slider_1_"+(index)+".jpg' data-lightbox='mygallery'><img src='images/mission/slider_1_"+(index)+".jpg'></a>");
   };
   var images = 54;
    for (let index = 37; index <= images; index++) {
        jQuery("#vunerable").append("<a href='images/mission/slider_1_"+(index)+".jpg' data-lightbox='mygallery'><img src='images/mission/slider_1_"+(index)+".jpg'></a>");
   };
});


