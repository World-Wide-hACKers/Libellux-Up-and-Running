(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{364:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"m-monit-system-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-system-monitoring"}},[t._v("#")]),t._v(" M/Monit System Monitoring")]),t._v(" "),a("TagLinks"),t._v(" "),a("p",[t._v("Monit is a small popular Open Source utility for managing and monitoring Unix systems. M/Monit builds on Monit's capabilities and provides monitoring and management of all your Monit enabled hosts via a modern, clean and well designed user interface which also works on mobile devices.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mmonit.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("M/Monit website"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Setup and configuration has been tested on following OS with version:")]),t._v(" "),a("h3",{attrs:{id:"m-monit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit"}},[t._v("#")]),t._v(" M/Monit")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu- 16.04, 18.04, 20.04")]),t._v(" "),a("li",[t._v("3.6.0 -> 3.7.3")])]),t._v(" "),a("h3",{attrs:{id:"monit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monit"}},[t._v("#")]),t._v(" Monit")]),t._v(" "),a("ul",[a("li",[t._v("Ubuntu- 16.04, 18.04, 20.04")]),t._v(" "),a("li",[t._v("5.16.0 -> 5.27.0")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("M/Monit is a non-free software to montior and manage all Monit enabled hosts.")])]),t._v(" "),a("h2",{attrs:{id:"configuration-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files"}},[t._v("#")]),t._v(" Configuration files")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/featzor/docs/blob/master/conf/mmonit/monitrc",target:"_blank",rel:"noopener noreferrer"}},[t._v("monitrc"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Dependancies when building Monit from source.")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("zlib1g-dev")])]),t._v(" "),a("li",[a("code",[t._v("libssl-dev")])])]),t._v(" "),a("h2",{attrs:{id:"m-monit-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-installation"}},[t._v("#")]),t._v(" M/Monit Installation")]),t._v(" "),a("p",[t._v("To download the latest version of M/Monit visit the "),a("a",{attrs:{href:"https://mmonit.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official website"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("foo@bar:~$ wget https://mmonit.com/dist/mmonit-3.7.3-linux-x64.tar.gz\n")])])]),a("p",[t._v("Proceed to unpack the downloaded tar gzip package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("foo@bar:~$ tar -zxvf mmonit-3.7.3-linux-x64.tar.gz\n")])])]),a("p",[t._v("Now execute the M/Monit program located in the bin directory.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("foo@bar:~$ cd mmonit-3.7.3-linux-x64/bin/\nfoo@bar:~$ sudo ./mmonit\n")])])]),a("p",[t._v("Go to your browser and visit "),a("code",[t._v("http://localhost:8080")]),t._v(". Login using the default credentials user "),a("strong",[t._v("admin")]),t._v(" with password "),a("strong",[t._v("swordfish")]),t._v(".")]),t._v(" "),a("img",{staticClass:"zoom-custom-imgs",attrs:{src:"/img/mmonit/mmonit1.png",alt:"mmonit login"}}),t._v(" "),a("p",[t._v("Click the "),a("strong",[t._v("Admin")]),t._v(" tab select "),a("strong",[t._v("Users")]),t._v(" and edit or add a new user then delete the Administrator account to overwrite the default credentials.")]),t._v(" "),a("h2",{attrs:{id:"monit-installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monit-installation"}},[t._v("#")]),t._v(" Monit Installation")]),t._v(" "),a("p",[t._v("To install the latest version of Monit as an agent for M/Monit enter the commands below.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ wget https://bitbucket.org/tildeslash/monit/downloads/monit-5.27.0.tar.gz\n$ tar -zxvf monit-5.27.0.tar.gz\n$ cd monit-5.27.0/\n$ sudo ./configure --without-pam\n$ sudo make && sudo make install\n$ sudo cp monitrc /usr/local/etc/\n$ cd /usr/local/etc\n$ sudo cp monitrc monitrc_bak\n$ sudo nano monitrc\n$ cd /usr/local/\n$ sudo ./bin/monit\n")])])]),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo openssl req -new -x509 -days 365 -nodes -out /etc/monit/monit.pem -keyout /etc/monit/monit.pem\n$ sudo chmod 700 /etc/monit/monit.pem\n")])])]),a("h2",{attrs:{id:"firewall-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#firewall-settings"}},[t._v("#")]),t._v(" Firewall settings")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('$ sudo ufw allow from M/MONIT to any port 2812 comment "M/Monit"\n')])])]),a("h2",{attrs:{id:"m-monit-behind-nginx-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#m-monit-behind-nginx-proxy"}},[t._v("#")]),t._v(" M/Monit behind NGINX Proxy")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   Host             "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("IP        "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   REMOTE_HOST      "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For  "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v("   X"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("FORWARDED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PROTOCOL")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$scheme")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_redirect")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_cookie_path")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"slack-notifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slack-notifications"}},[t._v("#")]),t._v(" Slack notifications")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("ruby "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v('e "\n    '),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'net/https'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),t._v("\n    uri "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URI")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://hooks.slack.com/services/XXXXXXXXX/YYYYYYYYY/ZZZZZZZZZZZZZZZZZZZZZZZZ'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("use_ssl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Net")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request_uri"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(' \\"channel\\"  '),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(' \\"'),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#general\\", \\"username\\" => \\"mmonit\\", \\"text\\" => \\"[#{ENV[\'MONIT_HOST\']}] #{ENV[\'MONIT_SERVICE\']} - #{ENV[\'MONIT_DESCRIPTION\']}\\" }.to_json')]),t._v("\n    response "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    puts response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v('body\n"\n')])])]),a("p",[t._v("If you do not use M/Monit you can also configure the individual Monit instance to create Slack notifications. Read more at "),a("a",{attrs:{href:"https://mmonit.com/wiki/MMonit/SlackNotification",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tideslash Wiki"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"upgrading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrading"}},[t._v("#")]),t._v(" Upgrading")]),t._v(" "),a("p",[t._v("Upgrading M/Monit without overwriting configuration files and databases can be done using the built-in upgrade command.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ cd /usr/local/\n$ wget https://mmonit.com/dist/mmonit-3.7.0-linux-x64.tar.gz\n$ tar -zxvf mmonit-3.7.0-linux-x64.tar.gz\n$ cd /usr/local/mmonit-3.6.2/bin/\n$ sudo ./mmonit stop\n$ /usr/local/mmonit-3.7.0/upgrade/upgrade -p /usr/local/mmonit-3.6.2/\n$ cd /usr/local/mmonit-3.7.0/bin/\n$ sudo ./mmonit\n")])])]),a("h2",{attrs:{id:"command-line"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line"}},[t._v("#")]),t._v(" Command-line")]),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("OpenVAS reports monit to be using weak ciphers accepted through TLS1.0,1.1,1.2 protocol. Add following lines within the ssl section.")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[t._v("with "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ssl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    pemfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    version"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TLSv12\n    ciphers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-SHA384"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Resolving the issue if libcrypto.so.1.0.x been removed using the auto remove/clean command, is to reinstall the libssl1.0.x and libssl-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt-get install libssl1.0.x libssl-dev --reinstall\n")])])]),a("p",[t._v("If package you get configure: error: libz not found, solve that by installing the zlib1g-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt-get install zlib1g-dev\n")])])]),a("p",[t._v("In case you get the configure error: Couldn’t find your SSL header files. Proceed with install the libssl-dev package.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ sudo apt-get install libssl-dev\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);