import Block from '../../core/block';
import { Link, Input, InputValidator, Button } from '../../components/index';
import { MainPage } from '../../core/renderDOM';
import { ChatPage, RegistrationPage } from '../index';
import { InputValidators } from '../../utils/inputValidators';
import loginData from './loginData';
import template from './loginTemplate';

export class LoginPage extends Block {
  constructor() {
    const children: ComponentChildren = {};
    const refs: ComponentRefs = {};

    children.registration = new Link({
      props: {
        label: loginData.link.name,
        htmlName: loginData.link.htmlName,
        htmlClass: 'auth__noaccount',
        events: {
          click: [
            () => {
              MainPage.component = new RegistrationPage();
            },
          ],
        },
      },
    });

    loginData.inputFields.forEach(({ type, name, placeholder, label }) => {
      const inputField = new Input({
        props: {
          placeholder,
          type: type,
          htmlName: name,
          htmlClass: 'auth__form__login__input',
          componentName: `${name} input with validation`,
          htmlWrapper: {
            componentAlias: 'wrapped',
            htmlWrapperTemplate: `
              <div>
                <label for="login" class="auth__form__login__label">${label}</label>
                {{{ wrapped }}}
              </div>
              `,
          },
          validators: {
            blur: InputValidators[name],
          },
        },
      });

      children[`${name}Field`] = inputField;
      refs[`${name}Field`] = inputField;
    });

    super({
      children,
      props: { componentName: loginData.page },
      refs,
    });
  }

  render() {
    return template;
  }

  routeTo() {
    MainPage.component = new RegistrationPage();
  }

  protected _preInitHook(): void {
    Object.values(this.refs).forEach((inputField: Input) => {
      inputField.refs.Form = this;
    });

    loginData.errorLabel.forEach((stateErrorName) => {
      this.state[stateErrorName] = '';
    });

    this.children.button = new Button({
      props: {
        type: 'button',
        label: loginData.submitButtonLabel,
        htmlClass: 'buttonAuth',
        events: {
          click: [
            function submitForm() {
              let isError = false;
              const formRefs = this.refs as ComponentRefs;
              Object.values(formRefs).forEach((inputField: Input) => {
                Object.values(inputField.validators).forEach(
                  (validator: InputValidator) => {
                    const error = validator();
                    if (error) {
                      isError = true;
                    }
                  }
                );
              });
              if (!isError) {
                this.routeTo();
              }
            }.bind(this),
            () => {
              MainPage.component = new ChatPage();
            },
          ],
        },
      },
    });
  }
}
