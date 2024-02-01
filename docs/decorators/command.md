---
sidebar_position: 1
---

# Command
Commands are the most common ways to trigger a bot. In all the platforms, commands are triggered by a prefix, which is `/`. On Whatsapp, the prefix is not needed.

You can register a command by using the `@Command` decorator.
This will automatically create it on all the platforms, for example it will be registered as a slash command on Discord.

All the functions must return a `MessageBuilder` object, which is used to create messages. You can learn more about it [here](/docs/usage).

## Usage
```ts
import { Command, MessageBuilder } from "@michelo11/botjs";

export class ExampleCommand {

    @Command("example", "This is an example command")
    public exampleCommand() {
        return new MessageBuilder("This is an example command");
    }

}