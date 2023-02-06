import { type Input } from 'components/inputs';
import { WithStoreButton } from 'hocs/components';
import { isNullish } from 'utils/objects-handle';
import backgorundImage from 'static/img/send.png';

export class SendMessageButton extends WithStoreButton {
  constructor(messageInputRef: Input) {
    super({
      props: {
        htmlClasses: ['chat__body__footer__imgSend'],
        htmlStyle: {
          'background-image': backgorundImage,
        },
      },
      refs: {
        messageInput: messageInputRef,
      },
    });
  }

  protected _afterRenderHook(): void {
    super._afterRenderHook();

    this.assignCurrentChat();
  }

  public assignCurrentChat() {
    const store = this.store!;

    const currentChatID = store.getCurrentChatID();
    const isChatSelected = !isNullish(currentChatID);

    const messageInput = this.refs.messageInput as Input;
    const webSocket = store.getSocketByChatID(currentChatID, true);
    // console.log(
    //   `CHAT(${currentChatID}) Websocket: ${JSON.stringify(webSocket)}`
    // );

    if (isChatSelected) {
      this.setPropByPath('events.click', [
        function () {
          const message = messageInput.getValue();
          if (message === '') {
            return;
          }

          webSocket.send(message);
          messageInput.setValue('');
        },
      ]);
    } else {
      this.setPropByPath('events.click', []);
    }
    this.toggleDisabledState(!isChatSelected);
  }
}
