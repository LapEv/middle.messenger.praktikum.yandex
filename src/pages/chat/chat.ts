import { WithStoreBlock } from 'hocs/components';
import { getDescendantByPath } from 'utils/pages';
import { Modal } from './components/modals';
import chatTemplate from './chatTemplate';
import {
  ChatsPageMainSection,
  ChatsPageNavigationSection,
  ChatListPage,
} from './components';

export class ChatPage extends WithStoreBlock {
  constructor() {
    const children = {} as TComponentChildren;
    children.navigationSection = new ChatsPageNavigationSection();
    children.chatSection = new ChatsPageMainSection();
    children.settings = new ChatListPage();
    children.modal = Modal;

    super({
      componentName: 'Chats Page',
      children,
    });
  }

  protected _afterPropsAssignHook() {
    super._afterPropsAssignHook();

    const functionalButton = this.getChildByPath(
      'chatSection.headerSection.functionalButton'
    );
    functionalButton.refs.settings = this.getChildByPath('settings');

    this.refs.messagesDisplaySection = this.getChildByPath(
      'chatSection.messagesDisplaySection'
    );

    this.refs.attachmentButton = this.getChildByPath(
      'chatSection.messageInputSection.attachmentButton'
    );

    this.refs.messageInput = this.getChildByPath(
      'chatSection.messageInputSection.messageInput'
    );

    this.refs.sendMessageButton = this.getChildByPath(
      'chatSection.messageInputSection.sendMessageButton'
    );

    this.refs.chooseChatAvatarButton = this.getChildByPath(
      'settings.avatarChooseButton.chooseButton'
    );

    this.refs.addChatUsersButton = this.getChildByPath(
      'settings.addChatUsersButton'
    );

    this.refs.deleteChatButton = this.getChildByPath(
      'settings.deleteChatButton'
    );

    const settings = this.getChildByPath('navigationSection.chatsList');
    this.refs.settings = settings;

    const chats = getDescendantByPath<TComponentChildArray>(
      settings.children,
      'chats'
    );
    chats.forEach((chat: any) => {
      this.refs[`chat-${chat.chatID}`] = chat;
    });
  }

  protected render(): string {
    return chatTemplate;
  }
}
