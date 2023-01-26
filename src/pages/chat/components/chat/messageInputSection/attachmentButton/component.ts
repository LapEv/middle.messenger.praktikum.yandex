import { WithStoreButton } from 'hocs/components';
import { isNullish } from 'utils/objects-handle';
import backgorundImage from 'static/img/attach.png';

export class AttachmentButton extends WithStoreButton {
  constructor() {
    super({
      props: {
        htmlClasses: ['chat__body__footer__img'],
        htmlStyle: {
          'background-image': backgorundImage,
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
