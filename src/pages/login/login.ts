import { Block } from 'core/dom';
import { Input, InputValidator, Button, Link } from 'components/index';
import { ChatPage, ErrorPage, RegistrationPage } from '../index';
// import { InputValidators } from 'utils/inputValidators';
import loginData from './loginData';
import template from './loginTemplate';
import { errorData } from 'pages/error/errorData';
import { AppRoutes } from 'core/router';
import { WithRouter } from 'hocs';

const LinkWithRouter = WithRouter(Link);
export class LoginPage extends Block {
  constructor() {
    const children: TComponentChildren = {};
    const refs: TComponentRefs = {};

    children.registration = new LinkWithRouter({
      props: {
        label: loginData.link.name,
        htmlName: loginData.link.htmlName,
        htmlClass: loginData.link.class,
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Registration);
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
          // htmlName: name,
          htmlClass: ['auth__form__login__input'],
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
          // validators: {
          //   blur: InputValidators[name],
          // },
        },
      });

      children[`${name}Field`] = inputField;
      refs[`${name}Field`] = inputField;
    });

    children.error404 = new Link({
      props: {
        label: loginData.errorLink[404].name,
        htmlClasses: [loginData.errorLink[404].class],
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Error);
            },
          ],
        },
      },
    });

    children.error505 = new Link({
      props: {
        label: loginData.errorLink[505].name,
        htmlClasses: [loginData.errorLink[505].class],
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Error);
            },
          ],
        },
      },
    });

    super({
      children,
      componentName: loginData.page,
      refs,
    });
  }

  render() {
    return template;
  }

  // protected _preInitHook(): void {
  //   Object.values(this.refs).forEach((inputField: Input) => {
  //     inputField.refs.Form = this;
  //   });

  //   loginData.errorLabel.forEach((stateErrorName) => {
  //     this.state[stateErrorName] = '';
  //   });

  //   this.children.button = new Button({
  //     props: {
  //       type: 'submit',
  //       label: loginData.submitButtonLabel,
  //       htmlClass: 'buttonAuth',
  //       events: {
  //         click: [
  //           function submitForm() {
  //             console.log('submit');
  //             let isError = false;
  //             let objValues = {};
  //             const formRefs = this.refs as ComponentRefs;
  //             Object.values(formRefs).forEach((inputField: Input) => {
  //               const key = inputField.props.htmlName;
  //               const value = inputField.getInputValue();
  //               objValues = { ...objValues, ...{ [key as string]: value } };

  //               Object.values(inputField.validators).forEach(
  //                 (validator: InputValidator) => {
  //                   const error = validator();
  //                   if (error) {
  //                     isError = true;
  //                   }
  //                 }
  //               );
  //             });
  //             if (!isError) {
  //               this.report(objValues);
  //               this.routeTo();
  //             }
  //           }.bind(this),
  //         ],
  //       },
  //     },
  //   });
  // }
}
