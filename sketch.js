
//The draw function happens over and over again
let ellipse_x, ellipse_y;
function setup() {
  createCanvas(400, 400);
  ellipse_x = 200;
  ellipse_y = 200;
  rect_x=100;
  rect_y=100;
}

function draw() {
  background(10, 120, 130);
let x = map(mouseX, 0, width, 0, 255);
background(x,0,255);
  
  noStroke();
  fill(200,40, 250);
  ellipse(ellipse_x, ellipse_y, 40, 30);
  ellipse_x = ellipse_x + (mouseX - ellipse_x);
  ellipse_y = ellipse_x + (mouseY - ellipse_y);
  rect(rect_x, rect_y, 30, 30);
  rect_x = rect_x + (mouseX - rect_x)/20
  rect_y = rect_y + (mouseY - rect_y)/20;
}
let x = map(mouseX, 0, width, 0, 255);
background(x,0,255);




