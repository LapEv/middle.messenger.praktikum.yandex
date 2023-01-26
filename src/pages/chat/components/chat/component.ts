import { WithStoreBlock } from 'hocs/components';
import { ChatSectionHeader } from './headerSection';
import { MessagesDisplayArea } from './messagesDisplaySection';
import { MessageInputSection } from './messageInputSection';
import template from './template';

export class ChatsPageMainSection extends WithStoreBlock {
  constructor() {
    const children: TComponentChildren = {};

    children.headerSection = new ChatSectionHeader();
    children.messagesDisplaySection = new MessagesDisplayArea();
    children.messageInputSection = new MessageInputSection();

    super({ children });
  }

  protected render(): string {
    return template;
  }
}
