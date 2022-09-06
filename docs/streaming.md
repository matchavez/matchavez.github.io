# Proof of Concept - Simple TV Stream

---

### Concept:

I wanted to create a simple streaming service of what I have on my television, and make it available to specific people or myself outside my house.

Success is that you can stream to your device precisely what I'm seeing on my TV.

---

### Gear:

In order to stream a signal, you need to have:

- A clean HDMI
- A device that encodes
- A server
- Bandwidth

First off, we have 300/100 fibre to the house, and wifi that's plenty fast. I'm not doing streams to a bunch of people; this is a personal project, and as such there is no scaling.

Then for the clean signal, I bought a simple HDMI signal splitter. USB power / 5v, and it does one thing -- turns an inbound HDMI into two identical outbound HDMI. I insert this between the TV and the cable box, thus whatever is on TV is what the stream is.

_Note that you'll want a splitter, and not a switch!_

After that, I have an ATEM Mini Pro that doesn't get enough use. Fantastic hardware, and it'll do the encode and stream to your server.

??? to-do
    Add more details here about settings.

Finally, in order to ensure someone can get your stream, they have to be able to log into your location. This was set up with a VirtualBox linux server sitting on my old-as-dirt Mac Mini.

Virtual Box with the latest Ubuntu Server, then install nginx with RTMP.

```terminal
$ sudo apt-get install build-essential libpcre3 libpcre3-dev libssl-dev

$ wget http://nginx.org/download/nginx-1.18.1.tar.gz

// Get the latest; this may be out of date

$ wget https://github.com/sergey-dryabzhinsky/nginx-rtmp-module/archive/dev.zip
$ tar -zxvf nginx-1.18.1.tar.gz
$ unzip dev.zip
$ cd nginx-1.18.1
$ ./configure --with-http_ssl_module --add-module=../nginx-rtmp-module-dev
$ make
$ sudo make install
$ sudo /usr/local/nginx/sbin/nginx
```

Go to: `/usr/local/nginx/conf/nginx.conf` and add this at the end:

```terminal
rtmp {
        server {
                listen 1935;
                chunk_size 4096;

                application live {
                        live on;
                        record off;
                }
        }
}
```

```terminal
$ sudo /usr/local/nginx/sbin/nginx -s stop
$ sudo /usr/local/nginx/sbin/nginx
```

Streaming Service: Custom

Server: rtmp://_your server ip_/live

Play Path/Stream Key: test