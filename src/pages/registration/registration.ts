import { Block } from 'core/dom1';
import { RegistrationPageForm } from './form-component';
import template from './registrationTemplate';

export class RegistrationPage extends Block {
  constructor() {
    const children: TComponentChildren = {};
    const refs: TComponentRefs = {};

    children.registrationForm = new RegistrationPageForm();

    super({ componentName: 'Registration Page', children, refs });
  }

  render() {
    return template;
  }
}
