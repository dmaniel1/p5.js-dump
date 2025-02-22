let futuregood;
let futurebad;
let destroy = 100;
let destroyText = "press d to destroy the bad climate!";
function setup() {
  createCanvas(400, 400);
}
function preload() {
  futuregood = loadImage("https://i.imgflip.com/2ynjel.jpg?a482856");
  futurebad = loadImage("https://images.nationalgeographic.org/image/upload/v1638889896/EducationHub/photos/shanghai-towers-above-the-smog.jpg");
}

function draw() {
  if (destroy <= 0) {
    destroy = 1;
    destroyText = "good job!!!";
  }
  background(220);
  textSize(30)
  text("Stop climate change!!", 53, 50)
  image(futuregood, 10, 100, 150, 100)
  textSize(20)
  text("we want this", 10, 220)
  image(futurebad, 200, 100, 150, destroy)
  text("not this", 200 , 220)
  text(destroyText, 50, 300)
}
function keyPressed() {
  if (key==='d') {
    destroy-=10;
  }
}