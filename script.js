//variable for initial sun position
let sunHeight = 900; //point below horizon
let horizon = 450
let counter = 0
let help = 255
let me = 255
let conditionMet = false;
//variables for color change
let redVal = 0;
let greenVal = 0;
let delay = 0;
let showImage = true;
// Load the image.
function preload() {
  img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/805d3cf6-7d6e-49e8-94eb-7308079bc696/dhue8bn-0146a67c-c555-4778-9338-1446159fd84e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwNWQzY2Y2LTdkNmUtNDllOC05NGViLTczMDgwNzliYzY5NlwvZGh1ZThibi0wMTQ2YTY3Yy1jNTU1LTQ3NzgtOTMzOC0xNDQ2MTU5ZmQ4NGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BkphWVzYtgvSI4HsEzVyi2oI782AGD5DwhrJLqAIcKo');
}

function setup() {
  createCanvas(1600, 900);
  setTimeout(() => {
    conditionMet = true;
  }, 20000);
}
function draw() {
  //fill background based on custom variables
  background(redVal, greenVal, 0);
  
  //sun
  fill(255, 135, 5, 60);
  circle(800, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(800, sunHeight, 140);

  
 
  // reduce sunHeight by 2 until it reaches 130
  if (sunHeight > 130) {
    sunHeight -= 2;
  }
   
  // increase color variables by 4 or 1 during sunrise 
  if (sunHeight < 480) {
    redVal += 4;
    greenVal += 1;
  } 
  stroke('green');
  line(0,horizon,1600,horizon);

  //grass

  fill("green");

  rect(0, horizon, 1600, 500);
  if (conditionMet) {
    fill(0);
    textSize(32);
    text('Condition Met!', 100, 200);
  if (mouseIsPressed == true && sunHeight === 130) {
    help -=1;
    me -= 1;
    counter += 1;
    background(help, me, 0)
  }if (counter == 1) {
    let x = random(0, 1600);
    let y = random(900, 0);
    image(img, x, y, 30,20);
    counter = 0;
    showImage = true;
    setTimeout(3000,clearImage); // Clear image after 3 seconds
  }
   if (mouseIsPressed == false && sunHeight === 130){
    help = 255;
    me = 255;
    counter = 0;
  }
  function clearImage() {
    showImage = false;
  }
  }
};



if (sunHeight > 195) {
  sunHeight -=2;

  //nested condition 
  if (sunHeight < 720) {
    redVal +=4;    
    greenVal +=1;
  }
}