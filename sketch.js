let song;
let playIcon;
let pauseIcon;
let mainFont
let subFont

function preload(){

  mainFont = loadFont('fonts/modeNine.ttf')
  subFont = loadFont('fonts/hacked.ttf')
  playIcon = loadImage('images/icons/playIcon.png');
  pauseIcon = loadImage('images/icons/pauseIcon.png')
  song = loadSound('sounds/fm.mp3');

}

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function duration(){
  return double;
}

function draw() {

  background(0,0,0,.5);


  textFont(mainFont);
  textSize(windowWidth/10)
  fill(255, 255, 255)
  text("feed me", windowWidth*.05, windowHeight*.8-(windowWidth/15));

  textFont(subFont);
  textSize(windowWidth/20)
  fill(128, 128, 128)
  text("pink phantom", windowWidth*.05, windowHeight*.8);

  textFont(subFont);
  textSize(windowWidth/20)
  fill(128, 128, 128)
  text(song.duration(), windowWidth*.05, windowHeight*.85);

  fill(128, 128, 128, .5)
  rect(.05*windowWidth, .81*windowHeight, .9*windowWidth, windowWidth*.015);
// circle()

  if(song.isPlaying()){
    image(pauseIcon, (windowWidth/2)-100, windowHeight-300, 200, 200);
  }else{
    image(playIcon, (windowWidth/2)-100, windowHeight-300, 200, 200);
  }

}


function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}
