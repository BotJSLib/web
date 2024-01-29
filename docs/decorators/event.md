---
sidebar_position: 2
---

# Event

Events are used to listen to actions that happen on the platforms.

You can register a command by using the `@Event` decorator.

## Usage

```ts
import { Event, User, MessageBuilder } from "@michelo11/botjs";

export class ExampleEvent {

  @Event("message")
  async message(user: User, content: string) {
    if (content === "ping") {
      await user.send(new MessageBuilder("pong"));
    }
  }
}
```

## Parameters

The parameters are different depending on the event.
Here is a table with all the parameters for each event:

| Event          | Parameters                                           |
| -------------- | ---------------------------------------------------- |
| `join`         | `user: User`                                         |
| `leave`        | `user: User`                                         |
| `message`      | `user: User, content: string`                        |
| `message-edit` | `user: User, oldContent: string, newContent: string` |
