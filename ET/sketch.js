/*let map1=[
  [0,1,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
];

let cell = map1[0][1];
if(cell==0){
  //ingen kollisjon
}else {
  kollisjon()
}

function kollisjon(){

}


class ET(){
  constructor{
    this.xPos = 0;
    this.yPos = 0;
  }
}

*/

let player1;

class Player{
  constructor(x, y){
    this.xPos = x;
    this.yPos = y;
  }
  draw(){
    fill(255, 0, 0);
    rect(this.xPos, this.yPos, 100, 100);
  }
  move(){
    if (keyCode === LEFT_ARROW) {
    this.xPos-=1;
    }
    if (keyCode === RIGHT_ARROW) {
    this.xPos+=1;
    }
    if (keyCode === DOWN_ARROW) {
    this.yPos+=1;
    }
    if (keyCode === UP_ARROW) {
    this.yPos-=1;
    }

  }
}


function make2DArray(cols, rows){

  let arr =[

  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0],
  [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0],
  [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];
  return arr;
}


let grid;
let cols;
let rows;
let resolution = 54;


function new_map(){

}

function cave(){

}

function setup() {
  createCanvas(1080,1080);
  cols = width / resolution;
  rows = height / resolution;
  player1 = new Player(500, 500);
   grid = make2DArray(cols, rows)

}
function draw() {
  background(21, 232, 21);
    for(let i =0; i<grid.length; i++) {
      for(let j =0; j<grid[i].length; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[j][i]==1){
          fill(61, 128, 61);
          stroke(61, 128, 61);
          rect (x, y, resolution, resolution);
        }
      }
    }
    player1.move();
    player1.draw();
}
