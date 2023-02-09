import { WithStoreBlock } from "hocs/components";

import { AttachmentButton } from "./attachmentButton";
import { MessageInput } from "./messageInput";
import { SendMessageButton } from "./sendMessageButton";
import template from "./template";

export class MessageInputSection extends WithStoreBlock {
  constructor() {
    const children = {} as TComponentChildren;

    children.attachmentButton = new AttachmentButton();
    const messageInput = new MessageInput();
    children.messageInput = messageInput;
    children.sendMessageButton = new SendMessageButton(messageInput);

    super({ children });
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    const sendMessageButton = this.getChildByPath("sendMessageButton");
    const messageInput = this.getChildByPath("messageInput");
    messageInput.refs.sendMessageButton = sendMessageButton;
  }

  protected render(): string {
    return template;
  }
}
