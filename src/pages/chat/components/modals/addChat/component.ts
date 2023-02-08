import { Block } from 'core/dom1';
import { Button } from 'components/buttons';
import { Input } from 'components/inputs';
import { TextComponent } from 'components/text';
import { APIResponseHasError } from 'utils/api';
import { ChatsService } from 'services';
import { transformAddUsersFormDataToAPI } from 'utils/api/to-api-data-transformers';
import template from './template';
import { Modal } from 'pages/chat/components/modals';
export class AddChatModal extends Block {
  readonly chatID: string;

  constructor({
    chatID,
    componentName,
  }: {
    chatID: string;
    componentName: string;
  }) {
    const state = {
      apiResponseSuccess: '',
      apiResponseError: '',
    };

    const children = {} as TComponentChildren;
    children.title = AddChatModal._createChatTitle();
    children.usersIdenifiersInput = AddChatModal._createUsersIdenifiersInput();

    const beforePropsAssignHook = function () {
      this.chatID = chatID;
    };

    super({
      children,
      state,
      componentName,
      helpers: { beforePropsAssignHook },
    });
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this._createSubmitButton();
  }

  private _createSubmitButton() {
    const refs = {
      usersInput: this.children.usersIdenifiersInput as Block,
      modalWindow: this,
    };

    const afterRequestCallback = function (response: any) {
      if (APIResponseHasError(response)) {
        this.state.apiResponseError = response.reason;
      } else {
        this.state.apiResponseSuccess = 'Users added successfully';
        this.children.usersIdenifiersInput.setValue('');
        Modal.toggleVisibility('off');
      }
    }.bind(this);

    const submitButton = new Button({
      refs,
      props: {
        label: 'add users',
        htmlClasses: ['modal__button'],
        events: {
          click: [
            function () {
              const { usersInput, modalWindow } = this.refs;
              modalWindow.clearAPIResponseStatus();

              const { chatID } = modalWindow;
              const usersList = usersInput.getValue().split(',');
              const apiData = transformAddUsersFormDataToAPI({
                chatID,
                usersList,
              });

              // console.log(
              //   `ADD USERS DATA: ${apiData.chatId}, ${apiData.users}`
              // );

              ChatsService.addUsersToChat(apiData, afterRequestCallback);
            },
          ],
        },
      },
    });

    this.children.submitButton = submitButton;
  }

  clearAPIResponseStatus() {
    this.state.apiResponseSuccess = '';
    this.state.apiResponseError = '';
  }

  protected render() {
    return template;
  }

  private static _createUsersIdenifiersInput() {
    return new Input({
      props: {
        htmlAttributes: {
          placeholder: 'Enter Users ID Numbers',
        },
        htmlClasses: ['modal__login__input'],
      },
    });
  }
  private static _createChatTitle() {
    return new TextComponent({
      props: {
        text: 'Добавить нового пользователя',
        htmlClasses: ['modal__title'],
      },
    });
  }
}
