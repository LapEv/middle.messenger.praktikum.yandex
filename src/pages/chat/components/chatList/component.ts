import { LogoutButton } from 'components/buttons';
import { Block } from 'core/Dom';
import * as Buttons from './buttons';
import template from './template';

export class ChatListPage extends Block {
  constructor() {
    const children = {} as TComponentChildren;

    children.collapseButton = new Buttons.CollapseButton();
    children.createChatButton = new Buttons.CreateChatButton();
    children.deleteChatButton = new Buttons.DeleteChatButton();
    children.addChatUsersButton = new Buttons.AddChatUsersButton();
    children.avatarChooseButton = new Buttons.AvatarChooseButton();
    children.exitLink = new LogoutButton();

    super({ props: { htmlStyle: { display: 'none' } }, children });
  }

  protected _afterPropsAssignHook() {
    super._afterPropsAssignHook();

    (this.children.collapseButton as Block).refs.settings = this;
  }

  protected render() {
    return template;
  }
}
