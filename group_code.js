let canvasWidth = 1000;
let canvasHeight = 1000;
let yellowRects = [];
let blueRects = [];
let redRects = [];
let grayRects = [];
let extraYellowRects = [];
let pixelLength = 20;
let yellowRegions = [];



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

class blueRect{
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
    fill(34,80,149);
    rect(0,0,this.width,this.height);

    pop();
  }
}

class redRect{
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
    fill(221,1,0);
    rect(0,0,this.width,this.height);

    pop();
  }
}

class grayRect{
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
    fill(200);
    rect(0,0,this.width,this.height);

    pop();
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  yellowRects.push(new yellowRect(0,20,1000,pixelLength));
  yellowRects.push(new yellowRect(0,140,1000,pixelLength));
  yellowRects.push(new yellowRect(0,320,1000,pixelLength));
  yellowRects.push(new yellowRect(0,380,1000,pixelLength));
  yellowRects.push(new yellowRect(0,500,1000,pixelLength));
  yellowRects.push(new yellowRect(0,560,1000,pixelLength));
  yellowRects.push(new yellowRect(0,620,60,pixelLength));
  yellowRects.push(new yellowRect(60,660,460,pixelLength));
  yellowRects.push(new yellowRect(0,700,60,pixelLength));
  yellowRects.push(new yellowRect(0,760,1000,pixelLength));
  yellowRects.push(new yellowRect(0,800,60,pixelLength));
  yellowRects.push(new yellowRect(0,860,1000,pixelLength));
  yellowRects.push(new yellowRect(0,960,1000,pixelLength));

  yellowRects.push(new yellowRect(20,0,pixelLength,320));
  yellowRects.push(new yellowRect(60,0,pixelLength,1000));
  yellowRects.push(new yellowRect(120,0,pixelLength,860));
  yellowRects.push(new yellowRect(240,0,pixelLength,1000));
  yellowRects.push(new yellowRect(480,0,pixelLength,1000));
  yellowRects.push(new yellowRect(520,0,pixelLength,320));
  yellowRects.push(new yellowRect(520,380,pixelLength,620));
  yellowRects.push(new yellowRect(600,380,pixelLength,180));
  yellowRects.push(new yellowRect(800,0,pixelLength,1000));
  yellowRects.push(new yellowRect(860,0,pixelLength,320));
  yellowRects.push(new yellowRect(900,0,pixelLength,380));
  yellowRects.push(new yellowRect(900,560,pixelLength,220));
  yellowRects.push(new yellowRect(960,0,pixelLength,1000));

  extraYellowRects.push(new yellowRect(120,60,120,pixelLength*2));
  extraYellowRects.push(new yellowRect(120,240,120,pixelLength*3));
  extraYellowRects.push(new yellowRect(800,420,160,pixelLength*3));
  extraYellowRects.push(new yellowRect(800,660,160,pixelLength*2));
  extraYellowRects.push(new yellowRect(120,700,120,pixelLength*3));
  extraYellowRects.push(new yellowRect(160,320,pixelLength*3,80));
  extraYellowRects.push(new yellowRect(300,380,pixelLength*3,120));
  extraYellowRects.push(new yellowRect(400,320,pixelLength*3,200));

  blueRects.push(new blueRect(80,180,pixelLength*3,60));
  blueRects.push(new blueRect(80,600,pixelLength*3,60));
  blueRects.push(new blueRect(300,420,pixelLength*3,80));
  blueRects.push(new blueRect(600,160,pixelLength*5,160));
  blueRects.push(new blueRect(880,100,pixelLength*4,40));
  blueRects.push(new blueRect(820,600,pixelLength*4,60));

  redRects.push(new redRect(160,40,pixelLength*3,100));
  redRects.push(new redRect(140,440,pixelLength*5,60));
  redRects.push(new redRect(280,40,pixelLength*4,100));
  redRects.push(new redRect(400,860,pixelLength*3,140));
  redRects.push(new redRect(600,200,pixelLength*5,80));
  redRects.push(new redRect(860,180,pixelLength*3,60));
  redRects.push(new redRect(640,400,pixelLength*5,160));
  redRects.push(new redRect(880,420,pixelLength,60));
  redRects.push(new redRect(820,700,pixelLength*4,60));

  grayRects.push(new grayRect(160,100,pixelLength*3,20));
  grayRects.push(new grayRect(160,260,pixelLength*3,20));
  grayRects.push(new grayRect(180,340,pixelLength,40));
  grayRects.push(new grayRect(180,720,pixelLength*2,20));
  grayRects.push(new grayRect(300,60,pixelLength*2,40));
  grayRects.push(new grayRect(280,120,pixelLength*4,20));
  grayRects.push(new grayRect(400,380,pixelLength*3,20));
  grayRects.push(new grayRect(400,420,pixelLength*3,60));
  grayRects.push(new grayRect(400,900,pixelLength*3,60));
  grayRects.push(new grayRect(660,420,pixelLength*3,60));
  grayRects.push(new grayRect(640,540,pixelLength*5,20));

  
}

function draw() {
  background(240);

  yellowRects.forEach(r => r.draw());

  detectYellowRegions();
  generateRandomRectangles();

  extraYellowRects.forEach(r => r.draw());
  blueRects.forEach(r => r.draw());
  redRects.forEach(r => r.draw());
  grayRects.forEach(r => r.draw());


}

function detectYellowRegions() {
  loadPixels();
  for (let x = 0; x < canvasWidth; x += pixelLength) {
    for (let y = 0; y < canvasHeight; y += pixelLength) {
      let col = get(x, y);
      if (col[0] === 250 && col[1] === 201 && col[2] === 1) {
        yellowRegions.push({ x, y });
      }
    }
  }
  updatePixels();
}

function generateRandomRectangles() {
  noLoop();
  let colors = ["#225095","#dd0100","#c8c8c8"];

  for (let i = 0; i < 300; i++) {
    let region = random(yellowRegions);
    let colorIndex = floor(random(colors.length));

    noStroke();
    fill(colors[colorIndex]);
    rect(region.x, region.y, pixelLength, pixelLength);
  }
}
