FROM caddy:2-alpine

MAINTAINER Torgny Bjers <torgny@bjers.org>

COPY Caddyfile /etc/caddy/Caddyfile
COPY site /srv
