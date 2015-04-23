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

function log(msg) {
    var output = "[augur] ";
    if (msg) {
        if (msg.constructor == Object || msg.constructor == Array) {
            output += JSON.stringify(msg, null, 2);
        } else {
            output += msg.toString();
        }
        console.log(output);
    }
}

app.use(express.static(webroot));

app.get('/', function (req, res) {
    res.sendFile(webroot + '/augur.html');
});

io.on('connection', function (socket) {

    function ok(err) {
        if (err) {
            console.error(err);
            socket.emit('not-ok', { error: err });
            return false;
        }
        return true;
    }

    socket.on('load-assets', function (assets) {
        if (assets && assets.account) {
            local.update({ account: assets.account }, assets, { upsert: true }, function (err) {
                if (ok(err)) {
                    log("saved local assets for " + assets.account.toString());
                }
            });
        }
    });

    socket.on('load-markets', function (data) {
        if (data && data.branch) {
            log(data);
            local.update({ branch: data.branch }, data, { upsert: true }, function (err) {
                if (ok(err)) {
                    log("saved market data for branch " + data.branch.toString());
                }
            });
        }
    });

    socket.on('get-assets', function (data) {
        if (data && data.account) {
            local.find({ account: data.account }, function (err, assets) {
                if (ok(err)) {
                    log(assets);
                    socket.emit('got-assets', assets);
                }
            });
        }
    });

    socket.on('get-markets', function (data) {
        if (data && data.branch) {
            local.find({ branch: data.branch }, function (err, markets) {
                if (ok(err)) {
                    log(markets);
                    socket.emit('got-markets', markets);
                }
            });
        }
    });

    socket.on('disconnect', function () {
        log('websocket connection lost');
    });
});

http.listen(port, function () {
    log('http://localhost:' + port.toString());
});
