FROM caddy:2-alpine

MAINTAINER Torgny Bjers <torgny@bjers.org>
LABEL org.opencontainers.image.description "Vanity URL caddy server for Go packages."

COPY Caddyfile /etc/caddy/Caddyfile
COPY site /usr/share/caddy
