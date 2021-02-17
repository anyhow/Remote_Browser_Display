// screen/index.html //////////////77

var canvas = document.getElementById('canvas');
canvas.width = 512;
canvas.height = 128;
var context = canvas.getContext('2d');
var x = 16;
var y = 47;
var pacmanMouthCounter = 0;
var pacmanMouthDirectionX = 0;
var pacmanMouthDirectionY = 0;
var pacmanEyePositionX = 0;
var pacmanEyePositionY = 0;
var direction = "top";

  socket.on('go left', function() {
  direction = "left";
  });
  socket.on('go right', function() {
  direction = "right";
  });
  socket.on('go top', function() {
  direction = "top";
  });
  socket.on('go down', function() {
  direction = "down";
  });

  setInterval(draw,10);

  function draw(){
      console.log(direction);
      if (direction == "left") {y = y-1; pacmanMouthDirectionX = 1.75; pacmanMouthDirectionY = 1.25; pacmanEyePositionX = x+5; pacmanEyePositionY = y+2;};
      if (direction == "right") {y = y+1; pacmanMouthDirectionX = 0.75; pacmanMouthDirectionY = 0.25; pacmanEyePositionX = x+5; pacmanEyePositionY = y-2;};
      if (direction == "top") {x = x+1; pacmanMouthDirectionX = 0.2; pacmanMouthDirectionY = 1.8; pacmanEyePositionX = x-1; pacmanEyePositionY = y-6;};
      if (direction == "down") {x = x-1; pacmanMouthDirectionX = 1.25; pacmanMouthDirectionY = 0.75; pacmanEyePositionX = x+1; pacmanEyePositionY = y -6};
      if (x<0) {x=512;};
      if (x>512) {x=0;};
      if (y<0) {y=128;};
      if (y>128) {y=0;};
      context.clearRect(0, 0, 512, 128);

      if (pacmanMouthCounter<=20 && pacmanMouthCounter >= 0){
      context.beginPath();
      context.arc(x, y, 12, pacmanMouthDirectionX * Math.PI, pacmanMouthDirectionY * Math.PI, false);
      context.lineTo(x, y);
      context.closePath();
      context.fillStyle = "yellow";
      context.fill();
      /*context.stroke();*/
      context.beginPath();
      context.arc(pacmanEyePositionX, pacmanEyePositionY, 2, 0, 2 * Math.PI, false);
      context.fillStyle = "rgb(0, 0, 0)";
      context.fill();
      pacmanMouthCounter = pacmanMouthCounter + 1;
      }
      if (pacmanMouthCounter>=21){
        context.beginPath();
        context.arc(x, y, 12, 0 * Math.PI, 2 * Math.PI, false);
        context.fillStyle = "yellow";
        context.fill();
        /*context.stroke();*/
        context.beginPath();
        context.arc(pacmanEyePositionX, pacmanEyePositionY, 2, 0, 2 * Math.PI, false);
        context.fillStyle = "rgb(0, 0, 0)";
        context.fill();
        pacmanMouthCounter = pacmanMouthCounter + 1;
        if (pacmanMouthCounter == 40){pacmanMouthCounter=1}
      }
  }
