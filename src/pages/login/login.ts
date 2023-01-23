import { Block } from 'core/Dom';
import loginData from './loginData';
import template from './loginTemplate';
import { LoginPageForm } from './formComponents';

export class LoginPage extends Block {
  constructor() {
    const children: TComponentChildren = {};
    const refs: TComponentRefs = {};

    children.loginForm = new LoginPageForm();

    super({
      children,
      componentName: loginData.page,
      refs,
    });
  }

  render() {
    return template;
  }
}
