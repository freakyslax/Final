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
var totalHeader = "---------------------Welcome To Dino Saddle World!---------------------";
var viewableTitle;
var placeHolder = 0;
var viewSize = 20;

document.getElementById("myHeader").style.fontFamily = "Verdana";
document.getElementById("myHeader").style.color = "#593612";

function ticker() {
    viewableTitle = totalHeader.substr(placeHolder, viewSize);
    document.getElementById("myHeader").innerHTML = viewableTitle;
    placeHolder++;
    if (placeHolder > totalHeader.length - viewSize) {
        placeHolder = 0;
    }
}
setInterval(ticker, 100);
ticker;

$("#saddle").MouseRollover function(myImage) {
         myImage.src= "Images/TN_cowboy_saddle_silhouette_crca.jpg";
        }
            function MouseOut(myImage) {
                myImage.src = "Images/cowboy_saddle.jpg";
            }
