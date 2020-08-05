---
title: OSSEC Host Intrusion Detection System
tags: ["intrusion", "detection", "hids", "security"]
---

# OSSEC Host Intrusion Detection System

<TagLinks />

OSSEC is a full platform to monitor and control your systems. It mixes together all the aspects of HIDS (host-based intrusion detection), log monitoring and SIM/SIEM together in a simple, powerful and open source solution.

[OSSEC website](https://www.ossec.net/) [GitHub](https://github.com/ossec/ossec-hids)

Setup and configuration has been tested on following OS with version:

* Ubuntu- 16.04, 18.04, 20.04
* 2.9.0 -> 3.6.0

## Configuration files

* [ossec.conf](https://github.com/featzor/docs/blob/master/conf/ossec/ossec.conf) (server)
* ossec.conf (agent)

## Prerequisites

* `build-essential`
* `libssl-dev`
* `libpcre2-dev`
* `zlib1g-dev`
* `jq` (optional)
* `inotify-tools` (optional)
* `pcre2` library for version >= 3.3.0 ([ftp.pcre.org](https://ftp.pcre.org/pub/pcre/))

## Server Installation 

Download the [latest stable version](https://github.com/ossec/ossec-hids/releases) from ossec-hids GitHub. Extract the file and run the installation script. If receving build errors make sure that you installed all the required dependencies or check the [troubleshooting section](#troubleshooting) for details.

```console
foo@bar:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
foo@bar:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/
foo@bar:~$ sudo apt-get install build-essential libssl-dev libpcre2-dev zlib1g-dev
foo@bar:~$ sudo PCRE2_SYSTEM=yes ./install.sh
```

In this setup we will not use e-mail notifications as we will be using Slack as our notification channel. We wont be adding IPs to our whitelist now but in a later segment. Last we will also skip to enable the syslog port (514 udp).

```console{4,9,10}
[sudo] password for user: (en/br/cn/de/el/es/fr/hu/it/jp/nl/pl/ru/sr/tr) [en]: ENTER
What kind of installation do you want (server, agent, local, hybrid or help)? server
Choose where to install the OSSEC HIDS [/var/ossec/]: ENTER
Do you want e-mail notification? (y/n) [y]: n
Do you want to run the integrity check daemon? (y/n) [y]: y
Do you want to run the rootkit detection engine? (y/n) [y]: y
Do you want to enable active response? (y/n) [y]: y
Do you want to enable the firewall-drop response? (y/n) [y]: y
Do you want to add more IPs to the white list? (y/n)? [n]: n
Do you want to enable remote syslog (port 514 udp)? (y/n) [y]: n
--- Press ENTER to finish (maybe more information below). ---
```

## Server Configuration

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

If you are using PSAD Intrusion Detection make sure to include the PSAD ruleset in the configuration file (as its not defined by default).

```config{1}
    <include>psad_rules.xml</include>
    <include>local_rules.xml</include>
</rules>
```

Before installing the OSSEC client(s) we need to make some adjustments to our OSSEC server. We will start by editing the configuration file (server) and whitelist the OSSEC clients IP address as well as secure applications communicating with our client(s).

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

```
<global>
    <white_list>[OSSEC-CLIENT-IP]</white_list>
</global>
```

Furthermore, to enable the function to harvest syslog we need to establish that our remote client connection is secure and allow it.

```xml
<remote>
    <connection>secure</connection>
    <allowed-ips>[OSSEC-CLIENT-IP]</allowed-ips>
</remote>
```

Next we need to add the client to our OSSEC server and generate a client key. Run the command shown in the code segment below and follow the setup to fit our setup.

```console
foo@bar:~$ sudo /var/ossec/bin/manage_agents
```

```
****************************************
* OSSEC HIDS v3.4.0 Agent Manager.     *
* The following options are available: *
****************************************
    (A)dd an agent (A).  
    (E)xtract key for an agent (E).
    (L)ist already added agents (L).
    (R)emove an agent (R).
    (Q)quit.
Choose your action: A,E,L,R or Q: a
- Adding a new agent (use â€˜\qâ€™ to return to the main menu).
    Please provide the following:
    * A name for the new agent: [CLIENT-SERVER-NAME]
    * The IP Address of the new agent: [OSSEC-CLIENT-IP]
    * An ID for the new agent[000]: 001
Agent information:
    ID:001
    Name:[CLIENT-SERVER-NAME]
    IP Address:[OSSEC-CLIENT-IP]
Confirm adding it?(y/n): y
```

Once we added the client proceed by extracting its agent key by providing the assigned agent ID.

```
Choose your action: A,E,L,R or Q: e
Provide the ID of the agent to extract the key (or '\q' to quit): 001
Agent key information for '001' is:
-AGENT KEY-
** Press Enter to return to the main menu.
```

Next we need to go back to our OSSEC client and import our extracted agent key. Execute the command, shown in the code section below, on the agent machine and paste the key. Validate that our agent information is correct before adding it.

```console
foo@bar:~$ sudo /var/ossec/bin/manage_agents
```

```
****************************************
* OSSEC HIDS v2.9.0 Agent Manager.     *
* The following options are available: *
****************************************
    (I)mport key from the server (I).
    (Q)uit.
Choose your action: I or Q: i
â€¦
Paste it here (or '\q' to quit): -PASTE AGENT KEY-
Agent information:
    ID:001
    Name:[CLIENT-SERVER-NAME]
    IP Address:[OSSEC-CLIENT-IP]
Confirm adding it?(y/n): y
** Press ENTER to return to the main menu.
** You must restart OSSEC for your changes to take effect.
```

When we confirmed the agent, and have an assigned ID, go back once again to our OSSEC server and add the new agent ID within the active-response section, regarding Slack notifications, in the server's configuration file.

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml{3}
<active-response>
    <command>ossec-slack</command>
    <location>server,001</location>
    <level>7</level>
</active-response>
```

At client edit the OSSEC configuration file and ensure that the server IP is correct, and the repeated offenders section as well as the email directive is set.

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml{3,6,9}
<ossec_config>
    <client>
        <server-ip>[OSSEC-HOST-IP]</server-ip>
    </client>
    <active-response>
        <repeated_offenders>30,60,120,240,480</repeated_offenders>
    </active-response>
    <global>
        <email_notification>no</email_notification>
    </global>
```

Finally reload the OSSEC server and restart the client to enable and activate OSSEC HIDS.

```console
foo@bar:~$ sudo /var/ossec/bin/ossec-control reload
foo@bar:~$ sudo /var/ossec/bin/ossec-control restart
```   

Now after a short while m/monit should alert us that OSSEC processes are indeed running on our newly added client. To confirm that OSSEC and Slack alerts works, we can trigger rule 10100: First time user logged in, by simply login to our system through SSH. Once we are satisfied and rest assured everything works accurately and that syntax for configuration files and local rules (OSSEC server) are in order, proceed by enabling active response for the agent.

To enable the active response (intrusion prevention) plugin add the following sections found in the code segment beneath. Be assured that all services and applications running against our client is either whitelisted or configured in a way so we do not by mistake automatically ban necessary services. To apply our changes, once weâ€™re satisfied, reload OSSEC.

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml
<command>
    <name>firewall-drop</name>
    <executable>firewall-drop.sh</executable>
    <expect>srcip</expect>
    <timeout_allowed>yes</timeout_allowed>
</command>

<active-response>
    <disabled>no</disabled>
    <command>firewall-drop</command>
    <agent_id>[UID]</agent_id>
    <location>local</location>
    <rules_id>[optional]</rules_id>
    <level>6</level>
    <timeout>600</timeout>
</active-response>
```

```console
foo@bar:~$ sudo /var/ossec/bin/ossec-control reload
```

## Firewall settings

```console
foo@bar:~$ sudo ufw allow proto udp from [AGENT/SERVER] to any port 1514 comment "OSSEC"
```

## M/Monit monitoring

To monitor if the OSSEC daemons are running accordingly, we use Monit to monitor their status. Edit the Monit configuration file and add the lines below, continue with reloading the Monit daemon to apply our new monitor rules. If working correctly we shall now receive m/monit alerts saying processes is not running.

```console
foo@bar:~$ sudo nano /usr/local/etc/monitrc
```

```config
# OSSEC processes
check process ossec-agentd matching "ossec-agentd"
check process ossec-execd matching "ossec-execd"
check process ossec-logcollector matching "ossec-logcollector"
check process ossec-syscheckd matching "ossec-syscheckd"
```

```console
foo@bar:~$ cd /usr/local/
foo@bar:~$ sudo ./bin/monit reload
```

### Monitor M/Monit failed login attempts with OSSEC

Add the local file path in ossec.conf (client side).

```console
foo@bar:~$ sudo nano /var/ossec/etc/ossec.conf
```

```xml
<localfile>
    <log_format>syslog</log_format>
    <location>/usr/local/mmonit-3.7.2/logs/error.log</location>
</localfile>
```

Create a custom rule on the server and increase alert level to receive slack alerts.

```console
foo@bar:~$ sudo nano /var/ossec/rules/local_rules.xml
```

```xml
<rule id="102000" level="7">
    <if_sid>2501</if_sid>
    <match>Unauthorized, authentication failed for</match>
    <group>authentication_failed,</group>
    <description>User authentication failure.</description>
</rule>
```

## Slack notifications

::: warning NOTE
Make sure that the log path is correct `/../` in the ossec-slack.sh file.
:::

```console
foo@bar:~$ sudo nano /var/ossec/active-response/bin/ossec-slack.sh
```

```bash{9}
CHANNEL="#example"
SITE="webhook url"
SOURCE="ossec2slack"
...
# Logging
cd $LOCAL
cd ../
PWD=`pwd`
echo "`date` $0 $1 $2 $3 $4 $5 $6 $7 $8" >> ${PWD}/../logs/active-responses.log
```

## Integrating Cloudflare

::: warning NOTE
The Cloudflare integration requires that you have the jq (processing JSON) tool installed. This tool is used when removing blocked IP's following the repeated offenders timeout interval.
:::

```console
libellux@server:~$ sudo apt-get install jq
```

### Cloudflare API token

Login to Cloudflare, go to My Profile and API Tokens. Select Create Token and proceed to configure a Custom token. Give your token a descriptive name (e.g. OSSEC).

<img class="zoom-custom-imgs" :src="('/img/ossec/cloudflare_token.png')" alt="cloudflare token">

## Upgrading

To upgrade to OSSEC 3.3.0 using the PCRE2 package simply download the package and install and upgrade OSSEC as normal:

    $ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
    $ tar -zxvf pcre2-10.32.tar.gz -C src/external/
    $ sudo ./install

To upgrade OSSEC simply download the [latest release](https://github.com/ossec/ossec-hids/releases), extract the file and run the install script.

    OSSEC HIDS v2.9.3 Installation Script - http://www.ossec.net
 
    You are about to start the installation process of the OSSEC HIDS.
    You must have a C compiler pre-installed in your system.
 
        - System: Linux hostname 4.4.0-116-generic
        - User: root
        - Host: hostname

    -- Press ENTER to continue or Ctrl-C to abort. --

    - You already have OSSEC installed. Do you want to update it? (y/n): y

## Command-line

Command|Description
-------|-----------
/var/ossec/bin/agent_control -lc|List all active agents
/var/ossec/bin/ossec-logtest|Logtest
/var/ossec/bin/ossec-control|start,stop,reload,restart,status,enable,disable
/var/ossec/bin/manage_agents|manage agents (e.g., add, remove)

## Troubleshooting

If you encounter any issue or having questions regarding OSSEC I recommend using their very helpful [mailing list](https://groups.google.com/forum/#!forum/ossec-list).

### Duplicate counter error

In the OSSEC log /var/ossec/logs/ossec.log, you might notice that the log gets filled with warnings and errors as shown below.

```log
2019/02/21 13:33:21 ossec-remoted: WARN: Duplicate error: [...]
2019/02/21 13:33:21 ossec-remoted(1407): ERROR: Duplicated counter for [...]
```

Stop both the OSSEC manager and the agent. In the agent server go to /var/ossec/queue/rids and remove all the files within the folder. At the manager server go into /var/ossec/queue/rids remove the file corresponding to the agents ID. Do not delete the sender_counter. Restart both.

Or disable the feature by editing /var/ossec/etc/internal_options.conf

    # Verify msg id (set to 0 to disable it)
    remoted.verify_msg_id=0

Save and restart.

### build-essential

If receiving build error `./install.sh: 105: make: not found` install the build-essential package.

    sudo apt-get install build-essential

### libevent-dev

If receiving the build error below install the libevent development package `sudo apt-get install libevent-dev`.

    os_maild/sendmail.c:12:10: fatal error: event.h: No such file or directory
    12 | #include <event.h>
       |          ^~~~~~~~~
    compilation terminated.
    make: *** [Makefile:926: os_maild/sendmail.o] Error 1

### pcre2 & libpcre2-dev

If receiving the build error `./os_regex/os_regex.h:19:10: fatal error: pcre2.h: No such file or directory` download and install pcre2 package (version 10.32) found [here](https://ftp.pcre.org/pub/pcre/).

```console
foo@bar:~$ wget https://ftp.pcre.org/pub/pcre/pcre2-10.32.tar.gz
foo@bar:~$ tar -zxvf pcre2-10.32.tar.gz -C src/external/
```

If the build error persist make sure to install the libpcre2 development package `sudo apt-get install libpcre2-dev`.

### zlib1g-dev

If receving the build error `os_zlib/os_zlib.c:13:10: fatal error: zlib.h: No such file or directory` install the zlib1g development package `sudo apt-get install zlib1g-dev`.

### libssl-dev

If receiving the build error `./external/compat/includes.h:65:10: fatal error: openssl/opensslv.h: No such file or directory`install the libssl development package `sudo apt-get install libssl-dev`.
