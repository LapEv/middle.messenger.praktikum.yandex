import { WithStoreTextComponent } from "hocs/components";

export class ChatText extends WithStoreTextComponent {
  // @ts-ignore 'chatID' is declared but its value is never read
  private chatID: string;

  constructor(chatID: string) {
    const beforePropsAssignHook = function () {
      this.chatID = chatID;
      const text = this.store!.getChatsDataByPath(
        `${this.chatID}.lastMessage.content`
      );
      this.props = {
        htmlClasses: ["chat__list__message__last"],
        text,
      };
    };

    super({ helpers: { beforePropsAssignHook } });
  }
}
