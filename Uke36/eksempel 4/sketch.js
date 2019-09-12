function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  stroke(255);strokeweight(4);
  noFill();
  rect(100,150,60,100)
  if (mouseX>200){
    fill(255,0,200)
  }
}
