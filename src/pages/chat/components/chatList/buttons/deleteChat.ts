import { WithStoreButton } from 'hocs/components';
import { ChatsService } from 'services';
import { transformChatIDToDeleteAPI } from 'utils/api/to-api-data-transformers';
import { isNullish } from 'utils/objects-handle';

export class DeleteChatButton extends WithStoreButton {
  constructor() {
    super({
      props: {
        label: 'delete chat',
        htmlClasses: ['chat__settings__item'],
        events: {
          click: [
            function () {
              const currentChatID = this.store.getCurrentChatID();
              // console.log(
              //   `CURRENT CHAT: ${JSON.stringify(
              //     transformChatIDToDeleteAPI(currentChatID)
              //   )}`
              // );
              ChatsService.deleteChat(currentChatID);
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
