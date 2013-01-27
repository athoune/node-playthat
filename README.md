Play that
=========

Use VLC as a better mpd alternative. The server will play YOUR music. Be hype, use Rasperry Pi as server.

On the target :

    vlc -I http --http-host=0.0.0.0

You have to hack CLS hosts file.

On the client :

    node lib/playthat.js /path/to/some/mp3

Licence
-------

BSD © 2013 Mathieu Lecarme
