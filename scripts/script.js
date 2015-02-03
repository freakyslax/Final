$(document).ready(function(){

  $("#menu a" ).hover(
    function(){
    $(this).addClass("active");
    },
    function(){
    $(this).removeClass("active");
    });
});