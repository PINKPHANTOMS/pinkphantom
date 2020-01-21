let xoff = 0.0;
let noiseScale=0.02;
let img;
let canvas;
var graphics;
let vid;
let x = 0
let value = false;
var song;
let dontloop = false;


function preload(){



    img = loadImage('images/pinkphantoms.PNG')
    vid = createVideo('images/glitch1.MP4')
    song = loadSound("images/thisdot.MP3")

}


function setup() {

  vid.hide()
  vid.loop()



  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  graphics = createGraphics(675,675)
}


function draw() {

  if(value == true){
if(dontloop ==false){
  dontloop = true;
      song.play();
}

  texture(vid);
  rotateX(.4)
image(vid,-1*(width), -1*(height))  
box(300);


  // graphics.background(vid);

  xoff = xoff + 0.02;
  let n = noise(xoff) * (mouseX);
  rotateX(millis()/1000000)
    rotateZ(millis()/1000000)
    // translate(n,n-mouseY,n+mouseY)


    rotateY(millis()/1000000)
    rotateZ(millis()/1000000)
    translate(34,34,34)
    // translate(n+mouseX,n+mouseY,n-mouseY)
  box(100, 60);
    rotateX(millis()/1000000)
    rotateY(millis()/1000000)
    // translate(n+mouseY,n+mouseX,n-mouseX)
    box(200);



    for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*80, x, height);
  }
}
}

function mousePressed() {
  value = true;
  vid.play()
  if(value==true && dontloop == true){
    song.stop()
    value = false;
    dontloop = false;
  }
}