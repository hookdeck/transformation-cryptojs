# Using Crypto-js (or any other vanilla js library) in Hookdeck

[slack-badge]: https://img.shields.io/badge/Slack-Hookdeck%20Developers-blue?logo=slack

[![slack-badge]](https://join.slack.com/t/hookdeckdevelopers/shared_invite/zt-yw7hlyzp-EQuO3QvdiBlH9Tz2KZg5MQ)

The Hookdeck transformation runtime does not expose the node.js standard library. One way to get around that limitation is to find a polyfill, a ponyfill or a library that implements the desired functionality and bundle it with webpack, then upload the resulting bundle to the transformation editor.

This repo shows how to do that with Crypto-js.

# How to get it working

1. Clone the repo
2. Run `npm install`
3. Run `npm run-script build`
4. Modify the handler to do what you need it to
5. Copy/paste the contents of the bundle in `dist/main.js` to your transformation
6. Run the transformation to test that it works

[video](https://www.loom.com/share/86c7e6beea5844c9af52624cd9226a88) here!
