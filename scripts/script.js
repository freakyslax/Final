$(document).ready(function(){

  $("#menu a" ).hover(
    function(){
    $(this).addClass("active");
    },
    function(){
    $(this).removeClass("active");
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
