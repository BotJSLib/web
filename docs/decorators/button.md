---
sidebar_position: 3
---

# Button
The Button decorator is used to listen to button clicks.
You can send a button using the `MessageBuilder` object. You can learn more about it [here](/docs/usage).

Button usage on whatsapp must be enabled. You can learn more about it [here](https://www.twilio.com/docs/whatsapp/buttons).

## Usage
```ts
import { Button, User } from "@michelo11/botjs";

export class ExampleButton {

    @Button("example")
    public exampleButton(user: User) {
        
    }

}
```