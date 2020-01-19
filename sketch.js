let xoff = 0.0;
let noiseScale=0.02;
let img;
let graphics;


function preload(){

      img = loadImage('images/tgc.jpg')
}


function setup() {
  var canvas = createCanvas(windowWidth, windowWidth, WEBGL);

  graphics = createGraphics(200,200);


}
function draw() {

    graphics.background(img)

   background(0)
  xoff = xoff + 0.02;
  let n = noise(xoff) * mouseX;
  texture(graphics)
  rotateX(millis()/1000000*n)
    rotateZ(millis()/1000000*n)
    // translate(n,n-mouseY,n+mouseY)

  box(300);

    rotateX(millis()/1000000*n/3)
    rotateZ(millis()/1000000*n/2)
    // translate(n+mouseX,n+mouseY,n-mouseY)
  box(300);
    rotateX(millis()/1000000*n/3)
    rotateZ(millis()/1000000*n/2)
    // translate(n+mouseY,n+mouseX,n-mouseX)
    box(300);



    for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    // line(x, mouseY+noiseVal*80, x, height);
  }
}