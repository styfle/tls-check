# tls-check

> Check the TLS protocol support of one or more web servers

## Usage

Pass one or more hostnames with optional port to see a list of supported protocols that each server supports.

```sh
npx tls-check google.com https://bing.com zeit.co:443
```

```sh
Checking TLS against 3 website(s)...

✅ google.com TLSv1 Enabled.
✅ google.com TLSv1.1 Enabled.
✅ google.com TLSv1.2 Enabled.
✅ google.com TLSv1.3 Enabled.

✅ bing.com TLSv1 Enabled.
✅ bing.com TLSv1.1 Enabled.
✅ bing.com TLSv1.2 Enabled.
❌ bing.com TLSv1.3 Disabled.

❌ zeit.co TLSv1 Disabled.
❌ zeit.co TLSv1.1 Disabled.
✅ zeit.co TLSv1.2 Enabled.
✅ zeit.co TLSv1.3 Enabled.
```

## Support

This is beta software so the API may change at anytime.