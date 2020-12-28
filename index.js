var random1=Math.floor((Math.random()*6))+1;
var randomimg="images/dice"+random1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg);

var random2=Math.floor((Math.random()*6))+1;
var randomimg2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimg2);

if(random1>random2){
  document.querySelector("h1").innerHTML="Player one wins!";
}
else if (random1<random2) {
  document.querySelector("h1").innerHTML="Player two wins!";
}
else{
  document.querySelector("h1").innerHTML="DRAW!";
}
