let canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(51);
  fill(255);
  ellipse(width/2,height/2,100,100);
}

window.onresize = function() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};
