import { WithStoreBlock } from 'hocs/components';
import { Button, TextComponent } from 'components';
import functionalButtonBackgroundImage from 'static/img/settings.png';
import template from './template';

export class ChatSectionHeader extends WithStoreBlock {
  constructor() {
    const children = {} as TComponentChildren;

    children.functionalButton = ChatSectionHeader._createfunctionalButton();

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

  private static _createfunctionalButton() {
    return new Button({
      props: {
        htmlClasses: ['chat__body__title__img'],
        htmlStyle: {
          'background-image': functionalButtonBackgroundImage,
        },
        events: {
          click: [
            function () {
              this.refs.settings._element.style.display = 'block';
            },
          ],
        },
      },
    });
  }
}
