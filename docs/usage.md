---
sidebar_position: 3
---

# Usage

## Creating a bot

To create a bot, you need to instantiate the `Manager` class from the `@michelo11/botjs` package.

Here is the standard implementation:

```ts
import { dirname, isESM } from "@discordx/importer";
import { BotManager, Platform } from "@michelo11/botjs";
import "dotenv/config";

const manager = new BotManager();

// Register your bots and their tokens here
manager.create(process.env.DISCORD_TOKEN!, Platform.Discord);
manager.create(process.env.TELEGRAM_TOKEN!, Platform.Telegram);
manager.create(process.env.SLACK_TOKEN!, Platform.Slack, {
  signingSecret: process.env.SLACK_SIGNING_SECRET!,
  appToken: process.env.SLACK_SOCKETS!,
  token: process.env.SLACK_TOKEN!,
  port: 3001,
});
manager.create(process.env.WHATSAPP_TOKEN!, Platform.Whatsapp, {
  sid: process.env.TWILIO_SID!,
  port: 3000,
  number: process.env.WHATSAPP_NUMBER!,
});
manager.create(process.env.TWITCH_ACCESS_TOKEN!, Platform.Twitch, {
  channels: [process.env.TWITCH_CHANNEL!],
  username: process.env.TWITCH_CHANNEL!,
  clientId: process.env.TWITCH_CLIENT_ID!,
})

// Load all files in this folder
const folder = isESM() ? dirname(import.meta.url) : __dirname;

// Start the bot
if (process.env.BOTJS_WATCH === "true") {
  manager.startDev(folder);
} else {
  manager.start().then(() => {
    manager.loadFiles(folder);
  });
}
```

## Messaging

Bot.js exposes a simple Message Builder, this allows to create messages with text, buttons and other components that are supported by the platforms.

Here is an example of a message with a text and a button:

```ts
import { MessageBuilder } from "@michelo11/botjs";

const message = new MessageBuilder("Here is your button:").addButton(
  new ButtonBuilder("Click me!", "button")
);

// Send the message
user.send(message);
```

## Starting a development server

Bot.js comes with a built-in hot reloading system. This means that when you apply an edit, the bot will not need to be restarted, the files will be reloaded automatically. Thanks to this, the hot reload only takes a few milliseconds.

To start the bot, you need to run the following command:

```bash
npx botjs dev
# OR
yarn botjs dev
# OR
pnpm botjs dev
```

## Building the bot

To build the bot, you need to run the following command:

```bash
npx botjs build
# OR
yarn botjs build
# OR
pnpm botjs build
```
