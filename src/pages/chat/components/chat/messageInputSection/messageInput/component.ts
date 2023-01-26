import { WithStoreInput } from 'hocs/components';
import { isNullish } from 'utils/objects-handle';

export class MessageInput extends WithStoreInput {
  constructor() {
    super({
      props: {
        htmlAttributes: { name: 'message', placeholder: 'Введите сообщение' },
        htmlClasses: ['chat__body__footer__input'],
        events: {
          keypress: [
            function (event: KeyboardEvent) {
              if (event.key === 'Enter') {
                this.refs.sendMessageButton.click();
              }
            },
          ],
        },
      },
    });
  }

  protected _afterRenderHook(): void {
    super._afterRenderHook();

    this.assignCurrentChat();
  }

  public assignCurrentChat() {
    const currentChatID = this.store!.getCurrentChatID();
    this.toggleDisabledState(isNullish(currentChatID));
  }
}
