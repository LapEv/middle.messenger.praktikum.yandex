import { Button } from "components/buttons";
import { EnumModal, Modal } from "pages/chat/components/modals";
import { CreateChatModal } from "pages/chat/components/modals/createChat";

export class CreateChatButton extends Button {
  constructor() {
    super({
      props: {
        label: "create new chat",
        htmlClasses: ["chat__settings__item"],
        events: {
          click: [
            function () {
              const contentType = Modal.getContentType();
              const componentName = EnumModal.CreateChat;

              if (contentType !== componentName) {
                Modal.setContent(new CreateChatModal(componentName));
              }

              Modal.toggleVisibility("on");
            },
          ],
        },
      },
    });
  }
}
