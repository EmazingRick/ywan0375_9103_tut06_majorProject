let canvasWidth = 1000;
let canvasHeight = 1000;
let yellowRects = [];

class yellowRect{
  constructor(x,y,width,height,rotation){
    this.x = x ?? 0;
    this.y = y ?? 0;
    this.width = width ?? canvasWidth;
    this.height = height ?? canvasHeight;
    this.rotation = rotation ?? 0;
  }

  draw(){
    push();
    translate(this.x,this.y);
    rotate(this.rotation);

    noStroke();
    fill(255,240,1);
    rect(0,0,this.width,this.height);

    pop();
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  yellowRects.push(new yellowRect(0,20,1000,20));
}

function draw() {
  background(220);

  yellowRects.forEach(r => r.draw());
}
