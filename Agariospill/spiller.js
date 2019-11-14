let spiller;
let matbiter=[];
let antall=50;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  spiller =new Spiller (100,100);
  for (let i=0; i<antall; i++){
    matbiter[i]=new Matbit;
  }
}

function draw() {
  // put drawing code here
  background(220);
  for (let i = matbiter.length-1;i=0;i--){
    let avstand =dist(spiller.x, spiller.y, matbiter[i].x, matbiter[i].y);
    if (avstand<(spiller.r+matbiter[i].r)/2){
      spiller.spis();
      matbiter.splice(i,1);
    }else {
        matbiter[i].tegn();
    }
  }
  spiller.move();
  spiller.draw();
}
