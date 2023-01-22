import { type Block } from 'core/dom';
import { WithStoreBlock } from 'hocs/components';
import { ChatComponent } from '../chatComponent';
import template from './template';

export class ChatsList extends WithStoreBlock {
  protected render() {
    return template;
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this.createChatsList();
  }

  public createChatsList() {
    let chats = {};
    if (this.store.userHasAnyChats()) {
      chats = this.store.getChatsDataByPath();
    }
    console.log(`CHATS: ${JSON.stringify(chats)}`);

    const chatsList = [] as Block[];
    Object.keys(chats!).forEach((id) => {
      chatsList.push(new ChatComponent(id));
    });

    this.children.chats = chatsList;
  }
}
