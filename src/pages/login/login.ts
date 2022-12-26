import Block from 'core/block';
import { Link, Input, InputValidator, Button } from 'components/index';
import { MainPage } from 'core/renderDOM';
import { ChatPage, ErrorPage, RegistrationPage } from '../index';
import { InputValidators } from 'utils/inputValidators';
import loginData from './loginData';
import template from './loginTemplate';
import { errorData } from 'pages/error/errorData';

export class LoginPage extends Block {
  constructor() {
    const children: ComponentChildren = {};
    const refs: ComponentRefs = {};

    children.registration = new Link({
      props: {
        label: loginData.link.name,
        htmlName: loginData.link.htmlName,
        htmlClass: loginData.link.class,
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

    children.error404 = new Link({
      props: {
        label: loginData.errorLink[404].name,
        htmlName: loginData.errorLink[404].htmlName,
        htmlClass: loginData.errorLink[404].class,
        events: {
          click: [
            () => {
              MainPage.component = new ErrorPage({
                props: {
                  title: errorData[404].title,
                  message: errorData[404].message,
                },
              });
            },
          ],
        },
      },
    });

    children.error505 = new Link({
      props: {
        label: loginData.errorLink[505].name,
        htmlName: loginData.errorLink[505].htmlName,
        htmlClass: loginData.errorLink[505].class,
        events: {
          click: [
            () => {
              MainPage.component = new ErrorPage({
                props: {
                  title: errorData[505].title,
                  message: errorData[505].message,
                },
              });
            },
          ],
        },
      },
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

  report(obj: any) {
    console.log(obj);
  }

  routeTo() {
    MainPage.component = new ChatPage();
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
              let objValues = {};
              const formRefs = this.refs as ComponentRefs;
              Object.values(formRefs).forEach((inputField: Input) => {
                const key = inputField.props.htmlName;
                const value = inputField.getInputValue();
                objValues = { ...objValues, ...{ [key as string]: value } };

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
                this.report(objValues);
                this.routeTo();
              }
            }.bind(this),
          ],
        },
      },
    });
  }
}
