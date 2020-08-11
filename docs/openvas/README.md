---
title: OpenVAS Vulnerability Assessment Scanner
tags: ["openvas", "vulnerability", "scanner", "security"]
---

# OpenVAS Vulnerability Assessment Scanner

<TagLinks />

OpenVAS is a full-featured vulnerability scanner. Its capabilities include unauthenticated testing, authenticated testing, various high level and low level Internet and industrial protocols, performance tuning for large-scale scans and a powerful internal programming language to implement any type of vulnerability test.

[OpenVAS website](https://www.openvas.org/) [GitHub](https://github.com/greenbone/openvas)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, 18.04, 20.04
* GVM-9 (OpenVAS-9), GVM-11 (source edition), GCE 6.0.7 (Virtual Appliance, ESXi) 

::: warning NOTE
GVM-9 (OpenVAS-9) reached end-of-life support.
:::

## Configuration files

## Prerequisites

## Install from source

First add the OpenVAS PPA repository to our server.

    $ sudo add-apt-repository ppa:mrazavi/openvas

Next we need to update and install the main packages.

    $ sudo apt-get update
    $ sudo apt-get install openvas9

We will also install the OpenVAS9 dev package so we can run single OpenVAS nasl scripts, for fast troubleshooting. Additionaly we will also be adding the vulnerability data by syncing with the Greenbone feeds.

    $ sudo apt-get install libopenvas9-dev
    $ sudo greenbone-nvt-sync
    $ sudo greenbone-scapdata-sync
    $ sudo greenbone-certdata-sync

To keep OpenVAS up-to-date to run the latest tests, we need to sync the nvt, scap and cert data regularly. To achieve this we will create a script and add it to our cron.

    $ sudo nano /usr/local/bin/openvas-update

Add the following content to the file.

    /usr/sbin/greenbone-nvt-sync
    /usr/sbin/greenbone-certdata-sync
    /usr/sbin/greenbone-scapdata-sync
    /usr/sbin/openvasmd --update --verbose --progress
    /etc/init.d/openvas-manager restart
    /etc/init.d/openvas-scanner restart

Save the file and make it executable.

    $ sudo chmod a+x /usr/local/bin/openvas-update

We will add the update script to cron with a nightly frequency.

    Nightly 0 0 * * * root /usr/local/bin/openvas-update

## OpenVAS behind NGINX Proxy

    $ sudo nano /etc/default/openvas-gsa

    # Defaults for Greenbone Security Assistant initscript
    # sourced by /etc/init.d/openvas-gsa
    # installed at /etc/default/openvas-gsa by the maintainer scripts

    # To disable HTTPS:
    #
    #HTTP_ONLY=1

    # To allow <host> as hostname/address part of a Host header:
    #
    ALLOW_HEADER_HOST=openvas.example.com

    # To enable http redirection:
    #
    HTTP_REDIRECT=1

    # To set listening address:
    #
    LISTEN_ADDRESS="127.0.0.1"

    # To set listening port number:
    #
    PORT_NUMBER=4000

Restart openvas-gsa `sudo systemctl restart openvas-gsa`. Edit the NGINX configuration to fit the environment.

``` nginx
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name openvas.example.com;

    # SSL CERTIFICATES
    ssl_certificate /etc/nginx/ssl/openvas.example.com/server.crt;
    ssl_certificate_key /etc/nginx/ssl/openvas.example.com/server.key;

    ssl_protocols TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384;
    ssl_prefer_server_ciphers on;
    ssl_dhparam /etc/nginx/dhparams.pem;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.htm index.php;

    charset utf-8;

    location / {
        proxy_set_header   Host             $http_host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   REMOTE_HOST      $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_set_header   X-FORWARDED-PROTOCOL $scheme;  
        proxy_pass https://127.0.0.1:4000;
    }

   location = /favicon.ico { access_log off; log_not_found off; }
   location = /robots.txt  { access_log off; log_not_found off; }

   access_log off;
   error_log  /var/log/nginx/openvas.example.com-error.log error;

   location ~ /\.(?!well-known).* {
       deny all;
    }
}
```

    $ sudo systemctl reload nginx.service
