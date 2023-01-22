import { WithStoreButton } from 'hocs/components';
import { isNullish } from 'utils/objects-handle';
import { Modal, AddChatModal, EnumModal } from 'pages/chat/components/modals';

export class AddChatUsersButton extends WithStoreButton {
  constructor() {
    super({
      props: {
        label: 'add chat users',
        htmlClasses: ['chat__settings__item'],
        events: {
          click: [
            function () {
              const chatID = this.store.getCurrentChatID();
              const componentName = `${EnumModal.AddUsers}(${chatID})`;
              const contentType = Modal.getContentType();

              if (contentType !== componentName) {
                Modal.setContent(new AddChatModal({ chatID, componentName }));
              }

              Modal.toggleVisibility('on');
            },
          ],
        },
      },
    });
  }

  protected _afterRenderHook(): void {
    const currentChatID = this.store!.getCurrentChatID();
    if (isNullish(currentChatID)) {
      this.toggleDisabledState(true);
    }
  }
}
