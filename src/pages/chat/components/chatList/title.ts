import { WithStoreTextComponent } from 'hocs/components';

export class ChatTitle extends WithStoreTextComponent {
  private chatID: string;

  constructor(chatID: string) {
    const beforePropsAssignHook = function () {
      this.chatID = chatID;
      console.log('chatID = ', chatID);
      const title = this.store!.getChatsDataByPath(`${this.chatID}`);
      console.log('title = ', title);
      this.props = {
        htmlClasses: ['chat__list__message__title'],
        text: title,
      };
    };

    super({ helpers: { beforePropsAssignHook } });
  }
}