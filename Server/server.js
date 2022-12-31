const { WebSocketServer } = require('ws');
const webSocket = require('ws');

const PORT = 5000;

const wsServer = new webSocket.Server({
    port: PORT
});

wsServer.on('connection', (socket) => {
    console.log("A client just connnected!")

    socket.on('message', function(msg) {
        console.log("Recived message from client: " + msg);
        //socket.send("Take this back: " + msg);

        wsServer.clients.forEach((client) => {
            client.send("Someone said: " + msg);
        })
    });
});

// Attach some behavior to the incoming socket


console.log((new Date()) + "Server is listening on port " + PORT);

