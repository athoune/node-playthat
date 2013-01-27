Play that
=========

Use VLC as a better mpd alternative. The server will play YOUR music.
Be hype, use Rasperry Pi as a server.

On the target :

    vlc -I http --http-host=0.0.0.0

You have to hack VLC hosts file : _/usr/share/vlc/lua/http/.hosts_

On the client :

    node lib/playthat.js /path/to/some/mp3

Anybody can fight and suggest its own music. One server plugged to a loudspeaker, many clients.

Licence
-------

BSD © 2013 Mathieu Lecarme
