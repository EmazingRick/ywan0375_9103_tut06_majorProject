let canvasSize = 800;
let canvasWidth = canvasSize;
let canvasHeight = canvasSize;
let segmentNum = 50;
let pixelLength = canvasSize / segmentNum;
let randomBlockNum = 10;

let yellowRects = [];
let blueRects = [];
let redRects = [];
let grayRects = [];
let extraYellowRects = [];
let yellowRegions = [];
let randomBlocks1 = [];
let randomBlocks2 = [];

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

class randomBlock{
    constructor(x,y,minPoint,maxPoint,rotation){
      this.x = x;
      this.y = y;
      this.minPoint = minPoint;
      this.maxPoint = maxPoint;
      this.width = pixelLength;
      this.height = pixelLength;
      this.rotation = rotation ?? 0;
      this.xSpeed = random(3,7);
      this.ySpeed = random(3,7);
      this.xDirection = 1;
      this.yDirection = 1;

      let colors = ["#225095","#dd0100","#c8c8c8"];
      let colorIndex = floor(random(colors.length));
      this.color = colors[colorIndex];

      if(this.y + pixelLength > canvasHeight || this.y < pixelLength){
        this.yDirection *= -1;
      }
    }
  
    draw(){
      push();
      translate(this.x,this.y);
      rotate(this.rotation);
  
      noStroke();
      fill(this.color);
      rect(0,0,this.width,this.height);
  
      pop();
    }
  }

function setup() {
  createCanvas(canvasWidth, canvasHeight);

  //make all the blocks flexible

  //draw all the horizontal yellow lines
  yellowRects.push(new yellowRect(0,pixelLength,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*7,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*16,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*19,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*25,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*28,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*31,pixelLength*3,pixelLength));
  yellowRects.push(new yellowRect(pixelLength*3,pixelLength*33,pixelLength*23,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*35,pixelLength*3,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*28,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*40,pixelLength*3,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*43,canvasWidth,pixelLength));
  yellowRects.push(new yellowRect(0,pixelLength*48,canvasWidth,pixelLength));

  //draw all the vertical yellow lines
  yellowRects.push(new yellowRect(pixelLength,0,pixelLength,pixelLength*16));
  yellowRects.push(new yellowRect(pixelLength*3,0,pixelLength,canvasHeight));
  yellowRects.push(new yellowRect(pixelLength*6,0,pixelLength,pixelLength*43));
  yellowRects.push(new yellowRect(pixelLength*12,0,pixelLength,canvasHeight));
  yellowRects.push(new yellowRect(pixelLength*24,0,pixelLength,canvasHeight));
  yellowRects.push(new yellowRect(pixelLength*26,0,pixelLength,pixelLength*16));
  yellowRects.push(new yellowRect(pixelLength*26,pixelLength*19,pixelLength,pixelLength*31));
  yellowRects.push(new yellowRect(pixelLength*30,pixelLength*19,pixelLength,pixelLength*9));
  yellowRects.push(new yellowRect(pixelLength*40,0,pixelLength,canvasHeight));
  yellowRects.push(new yellowRect(pixelLength*43,0,pixelLength,pixelLength*16));
  yellowRects.push(new yellowRect(pixelLength*45,0,pixelLength,pixelLength*19));
  yellowRects.push(new yellowRect(pixelLength*45,pixelLength*28,pixelLength,pixelLength*15));
  yellowRects.push(new yellowRect(pixelLength*48,0,pixelLength,canvasHeight));

  //draw the extra yellow blocks
  extraYellowRects.push(new yellowRect(pixelLength*6,pixelLength*3,pixelLength*6,pixelLength*2));
  extraYellowRects.push(new yellowRect(pixelLength*6,pixelLength*12,pixelLength*6,pixelLength*3));
  extraYellowRects.push(new yellowRect(pixelLength*40,pixelLength*21,pixelLength*8,pixelLength*3));
  extraYellowRects.push(new yellowRect(pixelLength*40,pixelLength*33,pixelLength*8,pixelLength*2));
  extraYellowRects.push(new yellowRect(pixelLength*6,pixelLength*35,pixelLength*6,pixelLength*3));
  extraYellowRects.push(new yellowRect(pixelLength*8,pixelLength*16,pixelLength*3,pixelLength*4));
  extraYellowRects.push(new yellowRect(pixelLength*15,pixelLength*19,pixelLength*3,pixelLength*6));
  extraYellowRects.push(new yellowRect(pixelLength*20,pixelLength*16,pixelLength*3,pixelLength*10));

  //draw the extra blue blocks
  blueRects.push(new blueRect(pixelLength*4,pixelLength*9,pixelLength*3,pixelLength*3));
  blueRects.push(new blueRect(pixelLength*4,pixelLength*30,pixelLength*3,pixelLength*3));
  blueRects.push(new blueRect(pixelLength*15,pixelLength*21,pixelLength*3,pixelLength*4));
  blueRects.push(new blueRect(pixelLength*30,pixelLength*8,pixelLength*5,pixelLength*8));
  blueRects.push(new blueRect(pixelLength*44,pixelLength*5,pixelLength*4,pixelLength*2));
  blueRects.push(new blueRect(pixelLength*41,pixelLength*30,pixelLength*4,pixelLength*3));

  //draw the extra red blocks
  redRects.push(new redRect(pixelLength*8,pixelLength*2,pixelLength*3,pixelLength*5));
  redRects.push(new redRect(pixelLength*7,pixelLength*22,pixelLength*5,pixelLength*3));
  redRects.push(new redRect(pixelLength*14,pixelLength*2,pixelLength*4,pixelLength*5));
  redRects.push(new redRect(pixelLength*20,pixelLength*43,pixelLength*3,pixelLength*7));
  redRects.push(new redRect(pixelLength*30,pixelLength*10,pixelLength*5,pixelLength*4));
  redRects.push(new redRect(pixelLength*43,pixelLength*9,pixelLength*3,pixelLength*3));
  redRects.push(new redRect(pixelLength*32,pixelLength*20,pixelLength*5,pixelLength*8));
  redRects.push(new redRect(pixelLength*44,pixelLength*21,pixelLength,pixelLength*3));
  redRects.push(new redRect(pixelLength*41,pixelLength*35,pixelLength*4,pixelLength*3));

  //draw the extra gray blocks
  grayRects.push(new grayRect(pixelLength*8,pixelLength*5,pixelLength*3,pixelLength));
  grayRects.push(new grayRect(pixelLength*8,pixelLength*13,pixelLength*3,pixelLength));
  grayRects.push(new grayRect(pixelLength*9,pixelLength*17,pixelLength,pixelLength*2));
  grayRects.push(new grayRect(pixelLength*9,pixelLength*36,pixelLength*2,pixelLength));
  grayRects.push(new grayRect(pixelLength*15,pixelLength*3,pixelLength*2,pixelLength*2));
  grayRects.push(new grayRect(pixelLength*14,pixelLength*6,pixelLength*4,pixelLength));
  grayRects.push(new grayRect(pixelLength*20,pixelLength*19,pixelLength*3,pixelLength));
  grayRects.push(new grayRect(pixelLength*20,pixelLength*21,pixelLength*3,pixelLength*3));
  grayRects.push(new grayRect(pixelLength*20,pixelLength*45,pixelLength*3,pixelLength*3));
  grayRects.push(new grayRect(pixelLength*33,pixelLength*21,pixelLength*3,pixelLength*3));
  grayRects.push(new grayRect(pixelLength*32,pixelLength*27,pixelLength*5,pixelLength));


  for(let i = 0; i < yellowRects.length; i++){
    //create ramdom blocks in the horizontal yellow lines
    if((yellowRects[i].width > yellowRects[i].height) && yellowRects[i].width > 100){
        for(let j = 0; j < floor(random(5,randomBlockNum)); j++){
            randomBlocks1.push(new randomBlock(random((yellowRects[i].x),(yellowRects[i].x+yellowRects[i].width-pixelLength)),yellowRects[i].y,yellowRects[i].x,yellowRects[i].x+yellowRects[i].width-pixelLength));
        }
    }
    //create ramdom blocks in the vertical yellow lines
    if((yellowRects[i].width < yellowRects[i].height) && yellowRects[i].height > 100){
        for(let j = 0; j < floor(random(5,randomBlockNum)); j++){
            randomBlocks2.push(new randomBlock(yellowRects[i].x,random((yellowRects[i].y),(yellowRects[i].y+yellowRects[i].height-pixelLength)),yellowRects[i].y,yellowRects[i].y+yellowRects[i].height-pixelLength));
        }
    }
  }
}

function draw() {
    background(240);

    yellowRects.forEach(r => r.draw());


    randomBlocks1.forEach(r => r.draw());
    randomBlocks2.forEach(r => r.draw());

    for(let i = 0; i < randomBlocks1.length; i++){
        randomBlocks1[i].x = randomBlocks1[i].x + randomBlocks1[i].xSpeed * randomBlocks1[i].xDirection;

        if(randomBlocks1[i].x > randomBlocks1[i].maxPoint || randomBlocks1[i].x < randomBlocks1[i].minPoint){
            randomBlocks1[i].xDirection *= -1;
          }
    }

    for(let i = 0; i < randomBlocks2.length; i++){
        randomBlocks2[i].y = randomBlocks2[i].y + randomBlocks2[i].ySpeed * randomBlocks2[i].yDirection;

        if(randomBlocks2[i].y > randomBlocks2[i].maxPoint || randomBlocks2[i].y < randomBlocks2[i].minPoint){
            randomBlocks2[i].yDirection *= -1;
          }
    }
    
    extraYellowRects.forEach(r => r.draw());
    blueRects.forEach(r => r.draw());
    redRects.forEach(r => r.draw());
    grayRects.forEach(r => r.draw());
}

//search for all the yellow region and store them into an array
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