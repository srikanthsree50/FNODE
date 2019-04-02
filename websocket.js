const Websocket = require('ws').Server;

const ws = new Websocket({port:8080});

ws.on('connection', (ws) => {

console.log('connecton established');

});

