function setup() {
  createCanvas(400, 400);
}
function rand(min, max) {
  //return Math.floor(Math.random() * max);
  return Math.floor(random(min, max));
}

function draw() {
  textSize(rand(20, 100))
  frameRate(random(0.1, 60));
  console.log("framerate: " + frameRate());
  
  let circleAmt = [1,2,3,4,5,6,7,8,9,10];
  let contr = rand(0, 50);
  background(220);
  for (circ of circleAmt) {
    let xVals = [rand(0, 400), rand(0, 400), rand(0, 400), rand(0, 400), rand(10, 400)];
  console.log("xVals: " + xVals);
    let yVals = [rand(0, 400), rand(0, 400), rand(0, 400), rand(0, 400), rand(0, 400)];
  console.log("yVals: " + yVals);
    let diam = [rand(10, 50), rand(10, 12), rand(10, 128), rand(10, 389), rand(10, 783)];
    let emoji = ["🙅🏻‍♀️", "🧟", "🥽", "🛟", "🁲", "⎈", "〠", "〄", "🥯"];
    console.log("emoji: " + emoji)
    console.log("iteration: " + circ)
    while (contr > 0) {
      let x,y,d,e;
      for (vals of xVals) {
        x = vals;
      }
      for (yvals of yVals) {
        y = vals;
      }
      for (dam of diam) {
        d = dam;
      }
      e = emoji[rand(0, 9)]
      fill(rand(0, 255),rand(0, 255),rand(0, 255))
      strokeWeight(rand(0, 50))
      circle(x,y,d);
      fill(rand(0, 255),rand(0, 255),rand(0, 255))
      text(e, x, y);
      contr--;
    }
  }
  textSize(20);
  fill(rand(0, 255),rand(0, 255),rand(0, 255))
  text("dont go insane or youll see this constantly",20, 50)
}