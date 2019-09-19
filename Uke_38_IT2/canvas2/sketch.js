function setup() {
  // put setup code here
  createCanvas(400, 400);
  frameRate(1);

}

function draw() {
  // put drawing code here

  var d=10;
  stroke(0,225,0);
  background(220);
  while (d <= width) {
    circle(width/2, height/2, d);
    d=d+10; //d+=10;
  }

}
