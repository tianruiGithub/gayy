$("document").ready(function(){
  $(".carousel, .carousel-img").width(window.innerwidth);
  $(".carousel, .carousel-img").height(window.innerHeight);
});
$("document").resize(function(){
  $(".carousel, .carousel-img").width(window.innerwidth);
  $(".carousel, .carousel-img").height(window.innerHeight);
});
