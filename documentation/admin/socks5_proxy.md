---
layout: page
title: Proxy to Development
permalink: /documentation/admin/socks5-proxy
---

## 403 Errors

The PSI development instance (<discovery.development.psi.ch>) is only accessible from restricted networks. Connecting from a disallowed IP address results in a 403 error:

![Example 403 Forbidden Error]({% link assets/img/documentation/admin/403_forbidden.png %}){: .center style="border: solid #ccc 1px; padding:5px"}

To solve this, you need to connect via an allowed system. The best way to set this up for operators is to configure a SOCKS5 proxy.

## Intended audience

This is intended for operators trying to test the ingestor against the development SciCat instance (<https://discovery.development.psi.ch>).

## Prerequisites

You will need ssh access to an allowed server. This will usually be the ingestor server, which should have been whitelisted by PSI already.


## Start the proxy

### SSH with the command line

If you can SSH to the ingestor at the command line, starting a SOCKS5 proxy can be done easy with the `-D` argument:

```sh
ssh -D 9999 ingestor.example.com
```

This can also be configured in `~/.ssh/config` so that it is automatically enabled when you connect to the ingestor:

```config
Host ingestor.example.com
    DynamicForward 9999
```

### PuTTY (Windows)

If you use PuTTY to connect to the ingestor server, add `D9999` in the Connection/SSH/Tunnels section. See the [PuTTY docs](https://the.earth.li/~sgtatham/putty/0.83/htmldoc/Chapter4.html#config-ssh-portfwd) or numerous online tutorials.

## Enable it in your browser

Your browser must now be configured to use the SOCKS5 proxy. This can be done several ways, but we recommend the FoxyProxy browser extension, available for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/), [Chrome](https://chromewebstore.google.com/detail/foxyproxy/gcknhkkoolaabfmlnjonogaaifnjlfnp?pli=1), and [Edge](https://microsoftedge.microsoft.com/addons/detail/foxyproxy/flcnoalcefgkhkinjkffipfdhglnpnem?hl=en-US)

After installing the add-on, add a new proxy.

- *Title*: OpenEM
- *Type*: SOCKS5
- *Hostname*: localhost
- *Port*: 9999

After adding the proxy, make sure it is enabled (the FoxyProxy menu bar icon should be colored to match the OpenEM proxy entry).

## Testing

Test by going to <https://discovery.development.psi.ch>.
