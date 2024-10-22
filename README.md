Nostr-Login
===========

This library is a powerful `window.nostr` provider.

```
<script src='/dist/unpkg.js'></script>
```

Just add the above script to your HTML and 
get a nice UI for users to login with Nostr Connect (nip46), with an extension, read-only login,
account switching, OAuth-like sign up, etc. Your app just talks to the `window.nostr`, the rest is handled by `nostr-login`.

## Options

You can set these attributes to the `script` tag to customize the behavior:
- `data-dark-mode` - `true`/`false`, default will use the browser's color theme
- `data-bunkers` - the comma-separated list of domain names of Nostr Connect (nip46) providers for sign up, i.e. `nsec.app,highlighter.com`
- `data-perms` - the comma-separated list of [permissions](https://github.com/nostr-protocol/nips/blob/master/46.md#requested-permissions) requested by the app over Nostr Connect, i.e. `sign_event:1,nip04_encrypt`
- `data-theme` - color themes, one of `default`, `ocean`, `lemonade`, `purple`
- `data-no-banner` - if `true`, do not show the `nostr-login` banner, will need to launch the modals using event dispatch, see below
- `data-methods` - comma-separated list of allowed auth methods, method names: `connect`, `extension`, `readOnly`, `local`, all allowed by default.
- `data-otp-request-url` - URL for requesting OTP code
- `data-otp-reply-url` - URL for replying with OTP code
- `data-title` - title for the welcome screen
- `data-description` - description for the welcome screen
- `data-start-screen` - screen shown by default (banner click, window.nostr.* call), options: `welcome`, `welcome-login`, `welcome-signup`, `signup`, `local-signup`, `login`, `otp`, `connect`, `login-bunker-url`, `login-read-only`, `connection-string`, `switch-account`, `import`
- `data-signup-relays` - comma-separated list of relays for nip65 event published on local signup


## Acknowledgment

This project is a fork of [Nostr-Login](https://github.com/nostrband/nostr-login) by Nostr.Band. We would like to thank the original authors for their work and providing it under the MIT license.

## License

MIT License
