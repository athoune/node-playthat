var dns = require('dns'),
    http = require('http'),
    os = require('os'),
    vlc = require('vlc-api'),
    nopt = require('nopt'),
    send = require('send');

var knownOpts = {
    vlc: [String, null],
    my_ip: [String, null],
    music: [String, null]
};

var parsed = nopt(knownOpts);

var my_ip;

if (parsed.my_ip === undefined) {
    dns.lookup(os.hostname(), function(err, add, fam) {
        my_ip = add;
        main();
    });
} else {
    my_ip = parsed.my_ip;
    main();
}

function main() {
    var v = new vlc({host: parsed.vlc});
    var port = 3722;

    var app = http.createServer(function(req, res) {
        send(req, parsed.music).pipe(res);
    }).listen(port);
    v.status.play('http://' + my_ip + ':' + port + '/', {});
}
