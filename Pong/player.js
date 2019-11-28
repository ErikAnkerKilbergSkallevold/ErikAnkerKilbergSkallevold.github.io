function Player() {
  this.w = 15; //Bredden på player
  this.h = 80; //Høyden på player

  this.pos = createVector(this.w*2, height/2-this.h/2); //Paddle er i midten av skjermen og er 2 bredder fra kanten av skjermen.
  this.acc = createVector(0, 0); //Akselarsjonen på Player
  this.spd = 10; //Hastighet på paddle
  this.maxSpd = 10; //Max speed på paddle

  this.show = function(){
    noStroke(); //Jeg vil ikke ha noe kant på paddlen min
    fill(255); //Jeg vil at den skal ha random farger
    rect(this.pos.x, this.pos.y, this.w, this.h); //X, y og størrelsen til paddlen
  }


  this.up = function () {this.acc.y-=this.spd;} //Opp funksjonen som jeg kaller på i sketch.js
  this.down = function () {this.acc.y+=this.spd;} //Down funksjonen som jeg kaller på i sketch.js
  this.stp = function(){this.acc.y=0;} //Stopper paddlen når man slipper kannpen

  this.update = function(){ //Jeg må en update funksjon får å spilleren til å oppdatere seg på brettet.
    this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd); //Limiter akselareasjon, eller så kan jeg gå uendlig fort
    this.pos.add(this.acc);
    this.pos.y = constrain(this.pos.y, 0, height-this.h); //Passer på at hele paddlen kan kollidere, ikke bare toppen, dette trenger jeg for å få toppen og bunnen til å stoppe når den treffer kanten av canvas.
  }
}
