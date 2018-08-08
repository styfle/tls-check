# tls-check

> Check the TLS protocol support of one or more web servers

## Usage

Pass one or more hostnames with optional port to see a list of supported protocols that each server supports.

```sh
npx tls-check google.com gmail.com:443 https://bing.com
```

```sh
Checking TLS against 4 websites
❌ google.com:443 SSLv3_method
✔ google.com:443 TLSv1_method
✔ google.com:443 TLSv1_1_method
✔ google.com:443 TLSv1_2_method
❌ gmail.com:443 SSLv3_method
❌ gmail.com:443 TLSv1_method
❌ gmail.com:443 TLSv1_1_method
❌ gmail.com:443 TLSv1_2_method
❌ bing.com:443 SSLv3_method
✔ bing.com:443 TLSv1_method
✔ bing.com:443 TLSv1_1_method
✔ bing.com:443 TLSv1_2_method
```

## Support

This is beta software so the API may change at anytime.