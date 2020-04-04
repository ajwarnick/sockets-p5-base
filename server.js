let express = require('express');
let app = express();
let host = 3000
let server = app.listen(host)

app.use(express.static('public'));

console.log("Socket server is running. localhost:" + host)

let socket = require('socket.io')
let io = socket(server);

io.sockets.on('connection', newConnection)

function newConnection(socket){
	console.log('connection:',	socket.id);
	socket.on('snake', mouseMsg);
	
	function mouseMsg(data) {
		socket.broadcast.emit('snake', data)
		console.log(data)
	}
}