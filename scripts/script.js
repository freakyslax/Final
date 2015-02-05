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
    var totalHeader = "......................Welcome To Dino Saddle World!........................";
var viewableTitle;
var placeHolder = 0;
var veiwsize = 20;
document.getElementById("myHeader").style.fontFamily = "Verdana";
document.getElementById("myHeader").style.color = "#593612";
function ticker() {
    viewableTitle = totalHeader.substr(placeHolder,veiwsize)//start at zero ten go to veiwsize.
    document.getElementById("myHeader").innerHTML = viewableTitle;
    placeHolder++;
    if(placeHolder>totalHeader.length-veiwsize)
        placeHolder = 0;
}
ticker();
setInterval(ticker, 100);
});

$("#saddle").MouseRollover function(myImage) {
         myImage.src= "Images/TN_cowboy_saddle_silhouette_crca.jpg";
        }
            function MouseOut(myImage) {
                myImage.src = "Images/cowboy_saddle.jpg";
            }
