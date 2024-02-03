---
sidebar_position: 4
---

# Base Access
Bot.js has a built-in wrapper only for the things that all the supported platforms have in common. This means that some features are not accessible by default.
This is why, Bot.js exposes the `base` wrapper, which contains the `client` object that is an instance of the platform-specific library.

## Discord
For Discord, the `client` object is an instance of the `Client` class from the [discord.js](https://discord.js.org) library.

## Telegram
For Telegram, the `client` object is an instance of the `Bot` class from the [node-telegram-bot-api](https://npmjs.com/package/node-telegram-bot-api) library.

## Slack
For Slack, the `client` object is an instance of the `App` class from the [@slack/bolt](https://www.npmjs.com/package/@slack/bolt) library.

## Whatsapp
For Whatsapp, the `client` object is an instance of the `twilio` class from the [twilio](https://www.npmjs.com/package/twilio) library.

## Twitch
For Twitch, the `client` object is an instance of the `Chat` class from the [twitch-js](https://www.npmjs.com/package/twitch-js) library.

## Reddit
For Reddit, the `client` object is an instance of the `Snoowrap` class from the [snoowrap](https://www.npmjs.com/package/snoowrap) library.