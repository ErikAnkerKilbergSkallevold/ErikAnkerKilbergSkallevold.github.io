class Boble{
    constructor(){
      this.x=200;
      this.y=200;
      this.r=30;
    }
    move(){
      this.x+=random(-5,5);
      this.y+=random(-5,5);
    }
    draw(){
      circle(this.x,this.y,this.r);
    }
}

let bobler=[];
let antall=100;

for(let i =0; i < antall; i++){
  bobler.push(new Boble);
}


function setup() {
  // put setup code here
  createCanvas(400, 400);

}

function draw() {
  // put drawing code here
  background(220);
  for(let i=0; i<bobler.length; i++){
    bobler[i].draw();
    bobler[i].move();
  }

}
