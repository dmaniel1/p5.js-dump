let randomImg;
let health = 100;
let healthColor = "green";
let textColor = "white";
let textWords = "";

function preload() {
  randomImg = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4xS6QA5sYEOa_mw649q2ZtD1ppGaDiAnjXw&s")
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (health > 70) {
    healthColor = "green";
    textColor = "white";
  }
  else if (health > 30 && health <= 70) {
    healthColor = "yellow";
    textColor = "gray";
  }
  else if (health > 0 && health <= 30) {
    healthColor = "red";
    textColor = "black";
    textWords = "";
  }
  else if (health == 0) {
    textWords = "you. are. dead..."
  }
  if (health > 100) {
    health=100;
  }
  if (health < 0) {
    health=0;
  }
  background(220);
  fill("white");
  if (mouseIsPressed) {
    background("blue")
  }
  else {
    background("white")
  }
  stroke(0);
  rect(100, 200, 200, 50);
  textSize(70);
  noStroke();
  fill(healthColor);
  rect(100, 200, health*2, 50);
  text('❤️', 65, 244);
  fill(textColor)
  textSize(25)
  text(health, 135, 233)
  text(textWords, 120, 150)
}
function keyPressed() {
  if (key === 'h') {
    health += 10;
  }
  else if (key === 'a') {
    health -= 10;
  }
}
function draw() {
  image(randomImg, 10, 10, 100, 150);
}