//variable for initial sun position
let sunHeight = 900; //point below horizon
let horizon = 450
let counter = 0
let help = 255
let me = 255
let conditionMet = false;
let heldForThreeSeconds = false;
//variables for color change
let redVal = 0;
let greenVal = 0;
let delay = 0;
let startTime;
let counting = false;
let showImage = true;
let mouseTime = 0;
// Load the image.
function preload() {
  god = loadImage('https://miro.medium.com/v2/resize:fit:999/1*Da6xj2FnBYu_B4aCkmdN2Q.jpeg')
  img = loadImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/805d3cf6-7d6e-49e8-94eb-7308079bc696/dhue8bn-0146a67c-c555-4778-9338-1446159fd84e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgwNWQzY2Y2LTdkNmUtNDllOC05NGViLTczMDgwNzliYzY5NlwvZGh1ZThibi0wMTQ2YTY3Yy1jNTU1LTQ3NzgtOTMzOC0xNDQ2MTU5ZmQ4NGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BkphWVzYtgvSI4HsEzVyi2oI782AGD5DwhrJLqAIcKo');
}
//A function to draw trees with different x and y and size
function tree(x, y, size) {
  stroke(0)
  fill(80, 30, 20);
  rect(x - size, y, size * 2, size * 6);
  fill(20, 130, 5);
  triangle(x - size * 3, y, x, y - size * 8, x + size * 3, y)
}
function setup() {
  createCanvas(1600, 900);
  setTimeout(() => {
    conditionMet = true;
  }, 12000);
}
function draw() {
  //fill background based on custom variables
  background(redVal, greenVal, 0);
  image(god, 1500, 0, 50, 30);
  
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
  line(0, horizon, 1600, horizon);

  //grass

  fill("green");
  rect(0, horizon, 1600, 500);
  tree(150, 500, 30)
  tree(500, 500, 30)
  tree(1100, 500, 30)
  tree(1450, 500, 30)
  


  if (conditionMet) {
    stroke('white');
    fill(0);
    textSize(32);
    text('God gets agrivated when you interfere with his world so sit back and enjoy', 290, 40);
    
      if (mouseIsPressed == true && sunHeight === 130 && counting === true) {
        help -= 1;
        me -= 1;
        counter += 1;
        background(help, me, 0)
        image(god, 600, 100, 400, 250)
        let elapsedTime = millis() - startTime;
        let remainingTime = max(0, 6 - elapsedTime / 1000);
        text(floor(remainingTime), width / 2, height / 2);
      } if (counter == 1) {
        let x = random(0, 1600);
        let y = random(900, 0);
        image(img, x, y, 50, 40);
        counter = 0;
        showImage = true;
        setTimeout(3000, clearImage); // Clear image after 3 seconds
      }
      if (mouseIsPressed == false && sunHeight === 130 && counting === false) {
        help = 255;
        me = 255;
        counter = 0;
      }
  } else {
    stroke("white");
    fill(0);
    textSize(32);
    text('loading assets...', 20, 30);
  }

};

function clearImage() {
  showImage = false;
}
function mousePressed() {
  if (!counting) {
    startTime = millis();
    counting = true;
  }
}

function mouseReleased() {
  counting = false;
}

if (sunHeight > 195) {
  sunHeight -= 2;

  //nested condition 
  if (sunHeight < 720) {
    redVal += 4;
    greenVal += 1;
  }
}
