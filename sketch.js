let canvasWidth = 1000;
let canvasHeight = 1000;
let yellowRects = [];
let pixelLength = 20;

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
    fill(250,201,1);
    rect(0,0,this.width,this.height);

    pop();
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  yellowRects.push(new yellowRect(0,20,1000,pixelLength));
  yellowRects.push(new yellowRect(120,60,120,pixelLength*2));
  yellowRects.push(new yellowRect(0,140,1000,pixelLength));
  yellowRects.push(new yellowRect(120,220,120,pixelLength*3));
  yellowRects.push(new yellowRect(0,310,1000,pixelLength));
  yellowRects.push(new yellowRect(0,380,1000,pixelLength));
  yellowRects.push(new yellowRect(800,430,150,pixelLength*2));
  yellowRects.push(new yellowRect(0,500,1000,pixelLength));
  yellowRects.push(new yellowRect(0,550,1000,pixelLength));
  yellowRects.push(new yellowRect(0,620,60,pixelLength));
  yellowRects.push(new yellowRect(60,650,460,pixelLength));
  yellowRects.push(new yellowRect(800,650,150,pixelLength*2));
  yellowRects.push(new yellowRect(0,690,60,pixelLength));
  yellowRects.push(new yellowRect(120,690,120,pixelLength*3.5));
  yellowRects.push(new yellowRect(0,760,1000,pixelLength));
  yellowRects.push(new yellowRect(0,790,60,pixelLength));
  yellowRects.push(new yellowRect(0,860,1000,pixelLength));

  yellowRects.push(new yellowRect(20,0,pixelLength,310));
  yellowRects.push(new yellowRect(60,0,pixelLength,1000));
  yellowRects.push(new yellowRect(120,0,pixelLength,860));
  yellowRects.push(new yellowRect(170,310,pixelLength*2,70));
  yellowRects.push(new yellowRect(240,0,pixelLength,1000));
  yellowRects.push(new yellowRect(290,380,pixelLength*3,120));
  yellowRects.push(new yellowRect(390,310,pixelLength*3,190));
  yellowRects.push(new yellowRect(480,0,pixelLength,1000));
  yellowRects.push(new yellowRect(520,0,pixelLength,310));
  yellowRects.push(new yellowRect(520,380,pixelLength,620));
  yellowRects.push(new yellowRect(600,380,pixelLength,170));
  yellowRects.push(new yellowRect(800,0,pixelLength,1000));
  yellowRects.push(new yellowRect(850,0,pixelLength,310));
  yellowRects.push(new yellowRect(900,0,pixelLength,380));
  yellowRects.push(new yellowRect(900,550,pixelLength,210));
  yellowRects.push(new yellowRect(950,0,pixelLength,1000));
}

function draw() {
  background(249);

  yellowRects.forEach(r => r.draw());
}
