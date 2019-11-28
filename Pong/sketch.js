var player, ball, ai; //Definerer player for å kunne ha spilleren. og ballen

var playerScore = 0;
var AIScore = 0;
var dots = []; //Dottene i midten ligger i et array.
var dSize = 10; //Størrelsen på dottene.
var txtSize = 30

function setup() {
  createCanvas(800, 500); //Lager et tegneområdet på 800px * 500px.

  player = new Player; //Player blir definert som ny Player
  ball = new Ball();
  ai = new AI();
  for(let y =dSize/2; y<height; y+=dSize*2){
    dots.push(createVector(width/2-dSize/2, y)); //Denne lager to firkanter, som er hver side av banen
  }
}

function draw() {
  background(0); //Jeg vil ha en sort bakgrunn

  noStroke(); //Dottene skal ikke ha noe linje
  fill(225, 100); //Dottene skal ha random farger, for å spice det opp
  drawSquares(); //Kaller på funksjonen for å tegne dottene



  ball.edges();
  ball.update();
  ball.show();

  ai.show();
  ai.update();

  player.update(); //Jeg må oppdatere spilleren, eller så kan vi ikke se at den beveger seg
  player.show(); //Jeg må tegne spilleren, eller så kan vi ikke se den i det hele tatt.




  drawScores();
}

function drawScores(){
  let x1 = width/4; //Tegner scoren på første 4-del
  let x2 = width*3/4; //Tegner scoren på 3de 4-del
  let y = txtSize*1.5; //Tegn den 1.5 gang større enn pos.

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(txtSize);
  text(playerScore, x1, y);
  text(AIScore, x2, y);
}

function drawSquares(){ //Denne lager dottene i midten av skjermen
  for(let i = 0; i<dots.length; i++){
    let x = dots[i].x;
    let y = dots[i].y;

    rect(x, y, dSize, dSize); //Dette er dottene sine x, y og størrelse koordinater, de har ikke collision
  }
}
function keyPressed(){
  if(key == 'W' || keyCode==UP_ARROW){ //Kontrollerer med W eller pil opp for opp
    player.up(); //Kaller på funksjonen player.up() i player.js
  }else if (key == 'S' || keyCode ==DOWN_ARROW) { //Kontrollerer spilleren ned med ned pil
    player.down(); //Kaller på funksjonen player.down() i player.js
  }
}

function keyReleased(){ //Det å få spilleren til å stoppe når vi slipper knappen er viktig, dette er et problem med ET spillet også.
  if((key == 'W' || keyCode==UP_ARROW ) || (key == 'S' || keyCode==DOWN_ARROW)){ //når enten opp eller ned blir sluppet skal stoppe koden kjøre
    player.stp(); //Det å kalle på funksjonen stop funker ikke, siden det er en p5.js funksjon
  }
}
