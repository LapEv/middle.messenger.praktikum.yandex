import { Block } from "core/dom";

import { LoginPageForm } from "./formComponents";
import loginData from "./loginData";
import template from "./loginTemplate";

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
