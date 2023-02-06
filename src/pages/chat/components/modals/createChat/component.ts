import { Block } from 'core/dom';
import { Button } from 'components/buttons';
import { Input } from 'components/inputs';
import { TextComponent } from 'components/text';
import { ChatsService } from 'services/chats';
import { APIResponseHasError } from 'utils/api';
import template from './template';
import { Modal } from 'pages/chat/components/modals';

export class CreateChatModal extends Block {
  constructor(componentName: string) {
    const state = {
      apiResponseSuccess: '',
      apiResponseError: '',
    };
    const children = {} as TComponentChildren;

    children.title = CreateChatModal._createChatTitle();
    children.chatTitleInput = CreateChatModal._createChatTitleInput();

    super({
      children,
      state,
      componentName,
    });
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this._createSubmitButton();
  }

  private _createSubmitButton() {
    const refs = {
      titleInput: this.children.chatTitleInput as Block,
      modalWindow: this,
    };

    const afterRequestCallback = function (response: any) {
      if (APIResponseHasError(response)) {
        this.state.apiResponseError = response.reason;
      } else {
        this.state.apiResponseSuccess = 'Chat created successfully';
        this.children.chatTitleInput.setValue('');
        Modal.toggleVisibility('off');
      }
    }.bind(this);

    const submitButton = new Button({
      refs,
      props: {
        label: 'Create',
        htmlClasses: ['modal__button'],
        events: {
          click: [
            function () {
              const { titleInput, modalWindow } = this.refs;
              modalWindow.clearAPIResponseStatus();
              // console.log(`TITLE INPUT: ${titleInput.getValue()}`);
              ChatsService.createChat(
                { title: titleInput.getValue() },
                afterRequestCallback
              );
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

  private static _createChatTitleInput() {
    return new Input({
      props: {
        htmlAttributes: {
          placeholder: 'Enter Chat Title',
        },
        htmlClasses: ['modal__login__input'],
      },
    });
  }

  private static _createChatTitle() {
    return new TextComponent({
      props: { text: 'Создать новый чат', htmlClasses: ['modal__title'] },
    });
  }
}
