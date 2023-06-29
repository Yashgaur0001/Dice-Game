var x1=Math.floor(Math.random()*6)+1;
var x2=Math.floor(Math.random()*6)+1;

var dno="images/dice"+x1+".png";
var eno="images/dice"+x2+".png";
document.querySelector(".img1").setAttribute("src",dno);
document.querySelector(".img2").setAttribute("src",eno);

if(x1>x2)
{
document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(x1===x2)
{
    document.querySelector("h1").innerHTML="Its a Tie!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}