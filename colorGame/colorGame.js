
function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
  var randomColor = Math.floor(Math.random()* colors.length);
  //colorDisplay.textContent = pickedColor;
  return randomColor;
}

function generateRandomColors(num){
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green +", " + blue +")";
}

function reset(){
  colors = generateRandomColors(numsquares);
 pickedColor = colors[pickColor()];
 colorDisplay.textContent = pickedColor;
 for (var i = 0; i < squares.length; i++) {
   if (colors[i]) {
     squares[i].style.display = "block";
     squares[i].style.backgroundColor = colors[i];
   } else {
     squares[i].style.display = "none";
   }

 }
 h1.style.backgroundColor = "steelblue";
 resetButton.textContent = "New Colors";
 messageDisplay.textContent = "";

}

function init(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numsquares = 3;
      }
      else{
        numsquares = 6;
      }
      reset();

    })
  }
  resetButton.addEventListener("click",function(){
    reset()
  });

  for (var i = 0; i < squares.length; i++) {
    //add listeners
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "correct";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
        resetButton.textContent = "play again?";
      }
      else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "try again";
      }

    })
  }
  reset();
}

var numsquares = 6;
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor =colors[pickColor()];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

init();










// easyBtn.addEventListener("click",function(){
//   numsquares=3;
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   colors = generateRandomColors(numsquares);
//   pickedColor = colors[pickColor()];
//   for (var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else {
//       squares[i].style.display = "none";
//     }
//
//   }
// })
//
// hardBtn.addEventListener("click",function(){
//   numsquares = 6;
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   colors = generateRandomColors(numsquares);
//   pickedColor = colors[pickColor()];
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// })
