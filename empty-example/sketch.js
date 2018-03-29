// https://workshop.chromeexperiments.com/examples/gui/

var gui;
var radius = 40;
var c;
function setup() {
  createCanvas(800, 600);
  background(255);
  frameRate(10);
  noStroke();
  gui = new dat.GUI();
  gui.add(this, 'radius', 5, 300);
}

function draw(){
  var x=random(10,60);
  var y=random(5,radius)
  stroke(0);
  strokeWeight(1);
  if(mouseX == pmouseX && mouseY == pmouseY){
    fill(random(100),random(100),random(50,100), random(100));
ellipse (mouseX, mouseY, y, y);
}
}
function keyPressed(){
  if (keyCode == 80){
    saveCanvas(c, 'creepy-clown', 'jpg');
  }
}