var dns = require('dns'),
    http = require('http'),
    os = require('os'),
    vlc = require('vlc-api'),
    send = require('send');

var v = new vlc({host: '192.168.1.150'});

dns.lookup(os.hostname(), function(err, add, fam) {
    var app = http.createServer(function(req, res) {
        send(req, process.argv[2]).pipe(res);
    }).listen(3000);
    v.status.play('http://' + add + ':3000/', {});
});



