import { WithStoreTextComponent } from "hocs/components";
import { dateToString } from "utils/objects-handle";

export class ChatTime extends WithStoreTextComponent {
  // @ts-ignore 'chatID' is declared but its value is never read
  private chatID: string;

  constructor(chatID: string) {
    const beforePropsAssignHook = function () {
      this.chatID = chatID;
      const time = this.store!.getChatsDataByPath(
        `${this.chatID}.lastMessage.time`
      );
      const convertTime = dateToString(time);
      this.props = {
        htmlClasses: ["chat__list__message__lastDate"],
        text: convertTime,
      };
    };

    super({ helpers: { beforePropsAssignHook } });
  }
}
