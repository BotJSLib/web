---
sidebar_position: 4
---

# Base Access
Bot.js has a built-in wrapper only for the things that all the supported platforms have in common. This means that some features are not accessible by default.
This is why, Bot.js exposes the `base` object, which contains the platform-specific objects.

## Discord
For Discord, the `base` object is an instance of the `Client` class from the [discord.js](https://discord.js.org) library.

## Telegram
For Telegram, the `base` object is an instance of the `Bot` class from the [node-telegram-bot-api](https://npmjs.com/package/node-telegram-bot-api) library.

