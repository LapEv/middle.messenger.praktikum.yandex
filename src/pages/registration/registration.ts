import Block from '../../core/block';
import { Link, Input, Button, InputValidator } from '../../components/index';
import { InputValidators } from '../../utils/inputValidators';
import { MainPage } from '../../core/renderDOM';
import { ChatPage, LoginPage } from '../index';
import template from './registrationTemplate';
import regData from './registrationData';

export class RegistrationPage extends Block {
  constructor() {
    const children: ComponentChildren = {};
    const refs: ComponentRefs = {};

    children.loginLink = new Link({
      props: {
        label: 'Войти',
        htmlName: 'Registration',
        htmlClass: 'auth__noaccount',
        events: {
          click: [
            () => {
              MainPage.component = new LoginPage();
            },
          ],
        },
      },
    });

    regData.inputFields.forEach(({ type, name, placeholder, label }) => {
      const inputField = new Input({
        props: {
          placeholder,
          type: type,
          htmlName: name,
          htmlClass: `auth__registration_form__${name}__input`,
          componentName: `${name} input with validation`,
          htmlWrapper: {
            componentAlias: 'wrapped',
            htmlWrapperTemplate: `
            <div">
              <label for="login" class="auth__registration_form__label">${label}</label>
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

    super({ children, props: { componentName: regData.page }, refs });
  }

  render() {
    return template;
  }

  routeTo() {
    MainPage.component = new ChatPage();
  }

  protected _preInitHook(): void {
    Object.values(this.refs).forEach((inputField: Input) => {
      inputField.refs.Form = this;
    });

    regData.errorLabel.forEach((stateErrorName) => {
      this.state[stateErrorName] = '';
    });

    this.children.button = new Button({
      props: {
        type: 'button',
        label: regData.submitButtonLabel,
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
          ],
        },
      },
    });
  }
}
