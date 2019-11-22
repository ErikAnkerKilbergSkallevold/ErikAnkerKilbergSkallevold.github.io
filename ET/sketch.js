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

let grid;

class Player{
  constructor(x, y){
    this.xPos = x;
    this.yPos = y;
    this.gridXPos = Math.floor(this.xPos/resolution);
    this.gridYPos = Math.floor(this.yPos/resolution);

  }
  draw(){
    fill(255, 0, 0);
    rect(this.xPos, this.yPos, 54, 54);
  }
  move(){
    if (keyCode === LEFT_ARROW) {
    this.xPos-=2;
    }
    if (keyCode === RIGHT_ARROW) {
    this.xPos+=2;
    }
    if (keyCode === DOWN_ARROW) {
    this.yPos+=2;
    }
    if (keyCode === UP_ARROW) {
    this.yPos-=2;
    }
    this.gridXPos = floor(this.xPos/resolution);
    this.gridYPos = floor(this.yPos/resolution);
    console.log(this.gridXPos);
    console.log(this.gridYPos);
    if (grid[this.gridYPos][this.gridXPos]==1){
      console.log("Collision");
    }
    if (grid[this.gridYPos][this.gridXPos]==9){
      let r = data.maps.map2[0];
    }
  }
}


/*let data;
function preload(){
  data = loadJSON("maps.json");
}

function make2DArray(){
  console.log(data.maps);

  let r = data.maps["map1"];

  console.log(r);
  return r;
}*/

let data;
function preload(){
  data = loadJSON("maps.json");
}

function make2DArray(rows, cols){


  console.log(data.maps);

  let r = data.maps.map1[0];

  console.log(r);
  return r;

}

let cols;
let rows;
let resolution = 54;






let player1 = new Player(500, 500);

function setup() {
  createCanvas(1080,1080);
  cols = width / resolution;
  rows = height / resolution;

  grid = make2DArray(rows, cols)

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
