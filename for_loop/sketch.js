function setup() {
  createCanvas(400, 400);
}
let songs = ["Labyrinth", "Altars of Apostasy", "Order", "Time Machine"];
let yVal = 100;
function draw() {
  background(220);
  frameRate(0.01)
  for (song of songs) {
    songLoop(song,yVal);
    yVal+=50;
  }
}
function songLoop(song, yPos) {
  text(song, 150, yPos);
}