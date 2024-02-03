---
sidebar_position: 4
---

# Select Menu

The Select Menu decorator is used to listen to select menu choices.
You can send a menu using the `MessageBuilder` object. You can learn more about it [here](/docs/usage).

Select Menus are not supported in WhatsApp and Twitch.

## Usage

```ts
import { SelectMenu, User, MessageBuilder } from "@michelo11/botjs";

export class ExampleMenu {

  @SelectMenu("menu")
  menu(user: User, value: string) {
    return new MessageBuilder(`You selected ${value}!`);
  }
}
```