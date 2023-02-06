import { WithStoreBlock } from 'hocs/components';
import { TextComponent } from 'components/text';
import { FunctionalButton } from './functionalButton';
import template from './template';

export class ChatSectionHeader extends WithStoreBlock {
  constructor() {
    const children = {} as TComponentChildren;

    children.functionalButton = new FunctionalButton();

    super({ children });
  }

  protected _afterRenderHook(): void {
    super._afterRenderHook();

    this.assignCurrentChat();
  }

  public assignCurrentChat() {
    const store = this.store!;
    const currentChatID = store.getCurrentChatID();
    const chats = this.store.getChatsDataByPath();
    const title = chats[currentChatID]?.title;

    this.children.user = new TextComponent({
      props: { text: title, htmlClasses: ['chat__body__title__user'] },
    });
  }

  protected render() {
    return template;
  }
}
