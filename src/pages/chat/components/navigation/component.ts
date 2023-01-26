import { WithStoreBlock } from 'hocs/components';
import { ChatFind } from './headerSection/chatFind';
import { ChatsList } from './chatsList';
import { HeaderSection } from './headerSection';
import template from './template';

export class ChatsPageNavigationSection extends WithStoreBlock {
  constructor() {
    const children = {} as TComponentChildren;

    children.headerSection = new HeaderSection();
    children.chatFind = new ChatFind();
    children.chatsList = new ChatsList();
    super({ children });
  }

  protected render() {
    return template;
  }
}
