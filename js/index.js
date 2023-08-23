confirm("GadgetTradeHub.in wants to start sending you push notifications. Click OK to Subscribe.");

var color=["#111111","white"];
var i=0;
document.querySelector("button").addEventListener("click",function(){  

i=i < color.length ? ++i : 0;
document.querySelector(".top-navbar").style.background = color[i];
document.querySelector("#navbar").style.background = color[i];
document.querySelector("button").style.background = color[i];
document.querySelector(".facebook").style.background = color[i];
document.querySelector(".twitter").style.background = color[i];
document.querySelector(".linkedIn").style.background = color[i];

})