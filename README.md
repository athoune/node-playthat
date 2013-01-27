Play that
=========

Use VLC as a better mpd alternative. The server will play YOUR music.
Be hype, use Rasperry Pi as a server.

On the target :

    vlc -I http --http-host=0.0.0.0

You have to hack VLC hosts file : _/usr/share/vlc/lua/http/.hosts_

Beware, VLC http interface is just broken on Mac, and Ubuntu can't play sound without X11 application, _vlc-nox_ is unusable out of the box.

On the client :

    node lib/playthat.js /path/to/some/mp3

Anybody can fight and suggest its own music. One server plugged to a loudspeaker, many clients.

_playthat_ build a small http server used by distant VLC, first network card is used.

Licence
-------

BSD © 2013 Mathieu Lecarme
