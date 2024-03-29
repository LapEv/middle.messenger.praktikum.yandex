import { Button } from 'components';
import {
  Modal,
  CreateChatModal,
  EnumModal,
} from 'pages/chat/components/modals';

export class CreateChatButton extends Button {
  constructor() {
    super({
      props: {
        label: 'create new chat',
        htmlClasses: ['chat__settings__item'],
        events: {
          click: [
            function () {
              const contentType = Modal.getContentType();
              const componentName = EnumModal.CreateChat;

              if (contentType !== componentName) {
                Modal.setContent(new CreateChatModal(componentName));
              }

              Modal.toggleVisibility('on');
            },
          ],
        },
      },
    });
  }
}
