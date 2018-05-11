var bubbles = [];


function setup() {
  // put setup code here
   createCanvas(700, 700);
}

function draw() {
  // put drawing code here
  background(22, 81, 175);
  
  for(var i =0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
  
  if (bubbles.length > 70) {
    bubbles.splice(0, 1);
  }
}

function mouseDragged () {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function keyPressed() {
  bubbles.splice(0, 1);
}

function Bubble (x, y) {
  this.x = x;
  this.y = y;
  
  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
  
  this.display = function() {
    stroke(242, 31, 31);
    fill(0);
    ellipse(this.x, this.y, this.x, this.y);

 }

 if(mouseX >100 && mouseX <400 ) {
    fill(255);
  }

  // draw different shapes depending on mouse position
  if (mouseX > 450) {
    ellipse(300, 200, 100, 100);
  } else if (mouseX > 300) {
    rect(300, 200, 100, 100);
  } else if (mouseX > 150) {
    line(0, 0, width, height)
  } else {
    point(200, 200);
  }
  
}