let value = 0;

let socket;

function setup() {
  // put setup code here
  console.log("### Sketch Started ###");

  createCanvas(windowWidth, windowHeight);
  socket = io.connect('http://localhost:3000')
  socket.on('snake', function(data) {
    // Multiple event handlers on the same event
    console.log(data);
    console.log("Message!")
  });

}

function draw() {
  // put drawing code here
  background(value);
}



function keyReleased() {
  if (keyCode === UP_ARROW || key === 'W' || key === 'w') {
    console.log("UP");
    let data = {
      message: "up"
    }
    socket.emit('snake', data);
  } else if (keyCode === DOWN_ARROW || key === 'S' || key === 's') {
    console.log("DOWN");
    let data = {
      message: "down"
    }
    socket.emit('snake', data);
  } else if (keyCode === RIGHT_ARROW || key === 'D' || key === 'd') {
    console.log("RIGHT");
    let data = {
      message: "right"
    }
    socket.emit('snake', data);
  } else if (keyCode === LEFT_ARROW || key === 'A' || key === 'a') {
    console.log("LEFT");
    let data = {
      message: "left"
    }
    socket.emit('snake', data);
  } else {
    
  }
  return false; // prevent any default behavior
}