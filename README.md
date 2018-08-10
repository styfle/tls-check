# tls-check

> Check the TLS protocol support of one or more web servers

## Usage

Pass one or more hostnames with optional port to see a list of supported protocols that each server supports.

```sh
npx tls-check google.com https://bing.com github.com:443
```

```sh
Checking TLS against 3 website(s)...

❌ google.com SSLv3_method
✔ google.com TLSv1_method
✔ google.com TLSv1_1_method
✔ google.com TLSv1_2_method

❌ bing.com SSLv3_method
✔ bing.com TLSv1_method
✔ bing.com TLSv1_1_method
✔ bing.com TLSv1_2_method

❌ github.com SSLv3_method
❌ github.com TLSv1_method
❌ github.com TLSv1_1_method
✔ github.com TLSv1_2_method

```

## Support

This is beta software so the API may change at anytime.