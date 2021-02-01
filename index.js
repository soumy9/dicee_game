//write js code just like in console


document.querySelector(".btn").addEventListener("click",rollDicee);
function rollDicee(){
  var randomNumber1=Math.floor(Math.random()*6)+1;
  var randomNumber2=Math.floor(Math.random()*6)+1;
  var dice1="images/dice"+randomNumber1+".png";
  var dice2="images/dice"+randomNumber2+".png";

  document.querySelector(".dice .img1").setAttribute("src",dice1);
  document.querySelector(".dice .img2").setAttribute("src",dice2);
  if(randomNumber1===randomNumber2)
  {
    document.querySelector(".container h1").innerHTML="<h1>Draw!</h1>";
    document.querySelector(".flags h1").innerHTML="🏳️";
    document.querySelector(".flags ").style.textAlign="center";
    document.querySelector(".flags ").style.padding="0";


  }
  else if(randomNumber1>randomNumber2)
  {
    document.querySelector(".container h1").innerHTML="Player1 Wins!!";//unicode at theside will be U+1F6A9 remove the u+ and replace it with &#x
    document.querySelector(".flags h1").innerHTML="&#x1F6A9";
    document.querySelector(".flags ").style.textAlign="left";
    document.querySelector(".flags ").style.paddingLeft="17rem";
  }
  else{
    document.querySelector(".container h1").innerHTML="Player2 Wins!!";//unicode at theside will be U+1F6A9 remove the u+ and replace it with &#x
    document.querySelector(".flags h1").innerHTML="&#x1F6A9";
    document.querySelector(".flags ").style.textAlign="right";
    document.querySelector(".flags ").style.paddingRight="13rem";

  }

}
