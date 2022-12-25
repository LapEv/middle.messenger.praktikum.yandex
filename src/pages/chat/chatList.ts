import Block from 'core/block';
import { ImageElement, TextElement } from 'components/index';
import { chatListTemplate } from './chatListTemplate';

export default class ChatList extends Block {
  constructor({
    username,
    userImg,
    lastMessage,
    lastMessageDate,
  }: {
    username?: string;
    userImg?: string;
    lastMessage?: string;
    lastMessageDate?: string;
  }) {
    const children: ComponentChildren = {};

    const messageElement = new TextElement({
      props: {
        text: lastMessage,
        componentName: 'Chat Component Message',
        htmlClass: 'chat__list__message__last',
        htmlWrapper: {
          componentAlias: 'wrapped',
          htmlWrapperTemplate: `
                <div class='chat__list__message__container'>
                  <div class="chat__list__message__circle">
                    ${userImg}
                  </div>
                  <div class='chat__list__message__text'>
                    <span class='chat__list__message__title'>${username}</span>
                    {{{wrapped}}}
                  </div>
                  <span class='chat__list__message__lastDate'>${lastMessageDate}</span>
                </div>
              `,
        },
      },
    });

    children.message = messageElement;

    super({ children });
  }

  protected render(): string {
    return chatListTemplate;
  }
}
