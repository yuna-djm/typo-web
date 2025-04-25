function setup() {
  let canvas = createCanvas(120, 30);
  colorMode(HSB);
  angleMode(DEGREES);
  canvas.parent("canvas-holder"); // 이 div 안에 캔버스를 넣어줌
  canvas.style("display", "block");
  canvas.style("margin-left", "auto");
  canvas.style("margin-right", "0");
}

function draw() {
  //noStroke();
  //fill("#0013de");
  //for (let i = 0; i < width - 50; i++) {
  //  circle(10 + i, height / 2, 15);
  //}
  
  //background("#c1c1c1");
  
  stroke("#000000");
  noFill();
  
  rectMode(CENTER);
  rect(width / 2 - 10, height / 2, 90, 13, 7 );

  let cx = 0;
  let cy = 0;
  let r = 6;

  push();
  translate(width - 10, height / 2 - 1);
  circle(cx, cy, r * 2);

  let angle = 45;
  let x = cx + cos(angle) * r;
  let y = cy + sin(angle) * r;
  line(x, y, x + 5, y + 5);
  pop();
}
