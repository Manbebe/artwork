//variable for initial sun position
let sunHeight = 900; //point below horizon
let isVisible = false;
let horizon = 450
let timer = 0;
let duration = 2000

//variables for color change
let redVal = 0;
let greenVal = 0;


function setup() {
  createCanvas(1600, 900);
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
  if (isVisible) {
    ellipse(width / 2, height / 2, 50, 50);
    if (millis() - timer > duration) {
      isVisible = false;
    }
  }
  if (mouseIsPressed == true && sunHeight === 130) {
    isVisible = true;
    timer = millis();
    let x = random(0, 1600);
    let y = random(900, 0);
    fill(0)
    square(x,y,20)

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