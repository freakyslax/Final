$(document).ready(function(){

  $("#menu a" ).hover(
    function(){
    $(this).addClass("active");
    },
    function(){
    $(this).removeClass("active");
    });
    
$("#slideshow > div:gt(0)").hide();

    setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);
});

