import { WithStoreTextComponent } from 'hocs/components';

export class ChatText extends WithStoreTextComponent {
  private chatID: string;

  constructor(chatID: string) {
    const beforePropsAssignHook = function () {
      this.chatID = chatID;
      const text = this.store!.getChatsDataByPath(
        `${this.chatID}.lastMessage.content`
      );
      this.props = {
        htmlClasses: ['chat__list__message__last'],
        text: text,
      };
    };

    super({ helpers: { beforePropsAssignHook } });
  }
}
