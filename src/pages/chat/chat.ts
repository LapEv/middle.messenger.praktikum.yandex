import Block from 'core/block';
import { ImageElement, Input, Link, TextElement } from 'components/index';
import { chatTemplate } from './chatTemplate';
import menuImage from 'static/img/menu.png';
import attachImage from 'static/img/attach.png';
import sendImage from 'static/img/send.png';
import photoImage from 'static/img/camera.png';
import ChatList from './chatList';
import { chatList, chatData, chatMessages } from './chatData';
import { MainPage } from 'core/renderDOM';
import { ProfilePage } from 'pages/profile/profile';
import { Modal } from 'components/modal/modal';
import { modalMessageUsers } from 'components/modal/modalMessage';

export class ChatPage extends Block {
  constructor() {
    const children: { chats: ChatList[] } & ComponentChildren = {
      chats: [],
    };
    const refs: ComponentRefs = {};

    children.modal = new Modal({
      props: {
        title: '',
        inputProps: modalMessageUsers.inputProps,
        text: '',
        error: '',
      },
    });

    refs['modalField'] = children.modal;

    chatList.map(
      ({
        username,
        userImg,
        lastMessage,
        lastMessageDate,
      }: {
        username: string;
        userImg: string;
        lastMessage: string;
        lastMessageDate: string;
      }) => {
        children.chats.push(
          new ChatList({ username, userImg, lastMessage, lastMessageDate })
        );
      }
    );

    children.profileLink = new Link({
      props: {
        label: chatData.link.name,
        htmlName: chatData.link.htmlName,
        htmlClass: 'chat__list__profileLink__icon',
        htmlWrapper: {
          componentAlias: 'wrappedLink',
          htmlWrapperTemplate: `
              <div class='chat__list__profileLink'>
                {{{wrappedLink}}} 
                <svg
                  class='chat__list__profileLink__svg'
                  width='6'
                  height='10'
                  viewBox='0 0 6 10'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M1 9L5 5L1 1' stroke='#999999'></path>
                </svg>
              </div>
            `,
        },
        events: {
          click: [
            () => {
              MainPage.component = new ProfilePage();
            },
          ],
        },
      },
    });

    children.inputFind = new Input({
      props: {
        placeholder: chatData.inputFindUser.placeholder,
        type: chatData.inputFindUser.type,
        htmlName: chatData.inputFindUser.name,
        htmlClass: chatData.inputFindUser.class,
        componentName: `${chatData.inputFindUser.name} input`,
        htmlWrapper: {
          componentAlias: 'wrappedInputFind',
          htmlWrapperTemplate: `
            <div style='height: auto'>
              <label for='chatSearch'></label>
              {{{wrappedInputFind}}}
            </div>
            `,
        },
      },
    });

    children.chatWith = new TextElement({
      props: {
        text: chatMessages.user,
        htmlClass: 'chat__body__title__user',
        componentName: 'Chat Component Message',
      },
    });

    children.menuImage = new ImageElement({
      props: {
        src: menuImage,
        htmlClass: 'chat__body__title__img',
        alt: 'menu',
        componentName: 'Menu Image',
        events: {
          click: [
            () => {
              refs.modalField.showModal({
                title: modalMessageUsers.addUser.title,
                link: modalMessageUsers.addUser.link,
                value: modalMessageUsers.addUser.value,
                button: modalMessageUsers.addUser.button,
                error: modalMessageUsers.addUser.error,
              });
            },
          ],
        },
      },
    });

    children.chatDate = new TextElement({
      props: {
        text: chatMessages.date,
        htmlClass: 'chat__body__date',
        componentName: 'Chat Component Message',
      },
    });

    children.chatMessage1 = new TextElement({
      props: {
        text: chatMessages.message1,
        htmlClass: 'chat__body__message',
        componentName: 'Chat Component Message',
      },
    });

    children.chatTime1 = new TextElement({
      props: {
        text: chatMessages.time1,
        htmlClass: 'chat__body__message__time',
        componentName: 'Chat Component Message',
      },
    });

    children.imagePhoto = new ImageElement({
      props: {
        src: photoImage,
        htmlClass: 'chat__body__img',
        alt: 'photo',
        componentName: 'Photo Image',
      },
    });

    children.chatMessage2 = new TextElement({
      props: {
        text: chatMessages.message2,
        htmlClass: 'chat__body__you',
        componentName: 'Chat Component Message',
      },
    });

    children.chatTime2 = new TextElement({
      props: {
        text: chatMessages.time2,
        htmlClass: 'chat__body__you__time',
        componentName: 'Chat Component Message',
      },
    });

    children.inputMessage = new Input({
      props: {
        placeholder: chatData.inputMessage.placeholder,
        type: chatData.inputMessage.type,
        htmlName: chatData.inputMessage.name,
        htmlClass: chatData.inputMessage.class,
        componentName: `${chatData.inputMessage.name} input`,
        htmlWrapper: {
          componentAlias: 'wrappedInputMessage',
          htmlWrapperTemplate: `
            <div style='height: auto'>
              <label for='message' style='width: 0'></label>
              {{{wrappedInputMessage}}}
            </div>
            `,
        },
      },
    });

    children.attachImage = new ImageElement({
      props: {
        src: attachImage,
        htmlClass: 'chat__body__footer__img',
        alt: 'attach',
        componentName: 'Attach Image',
      },
    });

    children.sendImage = new ImageElement({
      props: {
        src: sendImage,
        htmlClass: 'chat__body__footer__imgSend',
        alt: 'send',
        componentName: 'Send Image',
      },
    });

    super({ children, props: { componentName: 'Chats Page' } });
  }

  protected render(): string {
    return chatTemplate;
  }
}
