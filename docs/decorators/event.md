---
sidebar_position: 2
---

# Event

Events are used to listen to actions that happen on the platforms.

You can register a command by using the `@Event` decorator.

## Usage

```ts
import { Event, User, Message, MessageBuilder } from "@michelo11/botjs";

export class ExampleEvent {
  @Event("message")
  async message(user: User, message: Message) {
    if (message.content === "example") {
      await user.send(new MessageBuilder("This is an example event."));
    }
  }
}
```

## Parameters

The parameters are different depending on the event.
Here is a table with all the parameters for each event:

| Event          | Parameters                                         |
| -------------- | -------------------------------------------------- |
| `join`         | `user: User, guild: Guild`                         |
| `leave`        | `user: User, guild: Guild`                         |
| `message`      | `user: User, message: Message`                     |
| `message-edit` | `user: User, oldContent: string, message: Message` |
