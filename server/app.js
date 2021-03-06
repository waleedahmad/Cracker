let express = require('express');
let app = require('express')();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let port = 9999;

app.use('/assets', express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
    console.log('Running server on 127.0.0.1:' + port);
});

io.on('connection', (socket) => {
    let counter = 0;
    let coords = [
        [74.2722,31.49743],
        [74.27222,31.49747],
        [74.27225,31.49752],
        [74.27227,31.49754],
        [74.2723,31.49756],
        [74.27235,31.49758],
        [74.27247,31.49764],
        [74.27293,31.49781],
        [74.2735,31.49799],
        [74.27365,31.49806],
        [74.27378,31.49811],
        [74.27388,31.49815],
        [74.27399,31.49818],
        [74.27387,31.49874],
        [74.27385,31.49893],
        [74.27384,31.49901],
        [74.27383,31.49915],
        [74.275,31.49961],
        [74.27586,31.49992],
        [74.27651,31.50017],
        [74.27665,31.50022],
        [74.27672,31.50009],
        [74.27676,31.5],
        [74.27657,31.49993],
        [74.27616,31.4998],
        [74.27559,31.49958],
        [74.27508,31.49937],
        [74.27417,31.49903],
        [74.27415,31.49902],
        [74.27385,31.49893],
        [74.27384,31.49901],
        [74.27383,31.49915],
        [74.275,31.49961],
        [74.27586,31.49992],
        [74.27651,31.50017],
        [74.27665,31.50022],
        [74.27672,31.50009],
        [74.27676,31.5],
        [74.27657,31.49993],
        [74.27616,31.4998],
        [74.27559,31.49958],
        [74.27508,31.49937],
        [74.27417,31.49903],
        [74.27415,31.49902],
        [74.27385,31.49893],
        [74.27384,31.49901],
        [74.27383,31.49915],
        [74.275,31.49961],
        [74.27507,31.49948],
        [74.27555,31.49966],
        [74.27587,31.49978],
        [74.27672,31.50009],
        [74.27719,31.50026],
        [74.27793,31.50051],
        [74.27829,31.50063],
        [74.27831,31.50064],
        [74.27857,31.50073],
        [74.27876,31.5008],
        [74.27903,31.50089],
        [74.27989,31.50119],
        [74.28027,31.50132],
        [74.28059,31.50145],
        [74.28097,31.5016],
        [74.28091,31.50173],
        [74.2804,31.50153],
        [74.27993,31.50136],
        [74.27946,31.50119],
        [74.27896,31.501],
        [74.27856,31.50086]
    ];

    setInterval(function(){
        if(coords[counter] !== undefined){
            console.log(coords[counter]);
            socket.emit('location', {
                lat : coords[counter][1],
                lng : coords[counter][0]
            });
            counter++;
        }
    }, 1000);

    socket.on('disconnect', () => {

    });
});
