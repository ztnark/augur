// express server wrapper for augur app

var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    NeDB = require('nedb'),
    util = require('util');

var webroot = __dirname + '/app';
var port = process.env.PORT || 8080;

var local = new NeDB({ filename: 'augur.local', autoload: true });

app.use(express.static(webroot));

app.get('/', function (req, res) {
    res.sendFile(webroot + '/augur.html');
});

io.on('connection', function (socket) {
    socket.on('load-assets', function (assets) {
        var which = { account: assets.account };
        local.update(which, assets, { upsert: true }, function (err) {
            local.find(which, function (err, res) {
                if (err) return console.error(err);
                console.log(res);
            });
        });
    });
    socket.on('disconnect', function () {
        console.log('[augur] websocket connection lost');
    });
});

http.listen(port, function () {
    console.log('[augur] http://localhost:' + port.toString());
});
