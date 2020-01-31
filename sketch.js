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

    img = loadImage('images/pinkphantoms.png')
    vid = createVideo('images/particle1.mov')
    song = loadSound("images/thisdot.mp3")

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

strokeWeight(0)

background(0)
  texture(vid);
// translate(0,0,900)
  plane(1600,1600)

// translate(0,0,-900)
  texture(vid);

  rotateX(millis()/10000)
  rotateY(millis()/10000)
box(300);


// sphere(1000)  



  // graphics.background(vid);

  xoff = xoff + 0.02;
  let n = noise(xoff) * (100);
  rotateX(millis()/10000000)
    rotateZ(millis()/10000000)
    // translate(n,n-mouseY,n+mouseY)
translate(0,0,n)

    rotateY(millis()/10000000)
    rotateZ(millis()/10000000)
    translate(0,0,400)
  box(100);
    translate(0,0,-800)

  translate(0,0,-2*n)

    box(100);


        translate(0,400,0)
  cone(100, 100);
    translate(0,-800,0)
    rotateX(millis()/10000000)

  translate(0,-2*n,-4*n)

    cylinder(100,100);


        translate(400,0,0)
  sphere(100);
    translate(-800,0,0)
    rotateY(millis()/10000000)

  translate(-4*n,0,-2*n)

    sphere(100);



  //   for (let x=0; x < width; x++) {
  //   let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
  //   stroke(noiseVal*255);
  //   line(x, mouseY+noiseVal*80, x, height);
  // }
}
}

function mousePressed() {
  value = true;
  vid.play()
  if(value==true && dontloop == true){
    song.stop()
    value = false;
    dontloop = false;
    background(0)
    vid.stop()
  }
}