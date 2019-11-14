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

function make2DArray(cols, rows){

  let arr =[

  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0],
  [0,1,0,0,0,0,0,0,0,0]];
  return arr;
}


let grid;
let cols;
let rows;
let resolution = 40;

function setup() {
  createCanvas(400,400);
  cols = width / resolution;
  rows = height / resolution;

   grid = make2DArray(cols, rows)
}
function draw() {
  background(0);
    for(let i =0; i<grid.length; i++) {
      for(let j =0; j<grid[i].length; j++) {
        let x = i * resolution;
        let y = j * resolution;
        if (grid[j][i]==1){
          fill(225);
          stroke(0);
          rect (x, y, resolution-1, resolution-1);
        }
      }
    }
}
