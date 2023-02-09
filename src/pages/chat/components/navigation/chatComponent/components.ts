import { WithStoreBlock } from "hocs/components";

import { ChatAvatar } from "./avatar";
import template from "./template";
import { ChatText } from "./text";
import { ChatTime } from "./time";
import { ChatTitle } from "./title";

export class ChatComponent extends WithStoreBlock {
  // @ts-ignore
  public readonly chatID: string;

  constructor(chatID: string) {
    const children = {} as TComponentChildren;
    children.avatarImage = new ChatAvatar(chatID);
    children.chatTitle = new ChatTitle(chatID);
    children.chatText = new ChatText(chatID);
    children.chatTime = new ChatTime(chatID);

    const beforePropsAssignHook = function () {
      this.chatID = chatID;
    };

    const afterRenderHook = function () {
      if (this.chatID === this.store.getCurrentChatID()) {
        this.toggleHtmlClass("current-chat", "on");
      }
    };

    super({ children, helpers: { beforePropsAssignHook, afterRenderHook } });
  }

  protected render() {
    return template;
  }

  protected _afterRenderHook(): void {
    super._afterRenderHook();

    const onclickCallback = function () {
      this.store.dispatch({ currentChatID: this.chatID });
    };

    this.dispatchEventListener("click", onclickCallback.bind(this));
  }
}
