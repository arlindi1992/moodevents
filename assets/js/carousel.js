// function to work in jQuerry
$(function () { 
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  // declaring the variable owl and assigning it the value of the owl carousel
  var owl = $('#owl-carousel');
  owl.owlCarousel({
      items:5, // 3 items visible; we can change that to 2, 4, 5, 6, etc.
      loop:true,  // loop through images
      margin:10, // margin defauld is 0 and we set it to 10px
      autoplay:true,  // we need to declare because default is false
      autoPlay:2000, // auto play we declare in milisecons = 3 seconds
      autoplayHoverPause:true // we need to declare because default is false and I want when mouse is hover to stop
      
  });
});
