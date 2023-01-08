import { Block } from 'core/dom';
import { Link, Input, Button, InputValidator } from 'components/index';
// import { InputValidators } from 'utils/inputValidators';
import { ChatPage, LoginPage } from '../index';
import template from './registrationTemplate';
import regData from './registrationData';
import { AppRoutes } from 'core/router';
import { WithRouter } from 'hocs';

const LinkWithRouter = WithRouter(Link);
export class RegistrationPage extends Block {
  constructor() {
    const children: TComponentChildren = {};
    const refs: TComponentRefs = {};

    children.loginLink = new LinkWithRouter({
      props: {
        label: regData.link.name,
        htmlName: regData.link.htmlName,
        htmlClass: regData.link.class,
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Login);
            },
          ],
        },
      },
    });

    // regData.inputFields.forEach(({ type, name, placeholder, label }) => {
    //   const inputField = new Input({
    //     props: {
    //       placeholder,
    //       type: type,
    //       htmlName: name,
    //       htmlClass: `auth__registration_form__${name}__input`,
    //       componentName: `${name} input with validation`,
    //       htmlWrapper: {
    //         componentAlias: 'wrapped',
    //         htmlWrapperTemplate: `
    //         <div">
    //           <label for="login" class="auth__registration_form__label">${label}</label>
    //           {{{ wrapped }}}
    //         </div>
    //         `,
    //       },
    //       validators: {
    //         blur: InputValidators[name],
    //       },
    //     },
    //   });

    //   children[`${name}Field`] = inputField;
    //   refs[`${name}Field`] = inputField;
    // });

    super({
      children,
      componentName: regData.page,
      refs,
    });
  }

  render() {
    return template;
  }

  // report(obj: any) {
  //   console.log(obj);
  // }

  // routeTo() {
  //   MainPage.component = new ChatPage();
  // }

  // protected _preInitHook(): void {
  //   Object.values(this.refs).forEach((inputField: Input) => {
  //     inputField.refs.Form = this;
  //   });

  //   regData.errorLabel.forEach((stateErrorName) => {
  //     this.state[stateErrorName] = '';
  //   });

  //   this.children.button = new Button({
  //     props: {
  //       type: 'submit',
  //       label: regData.submitButtonLabel,
  //       htmlClass: 'buttonAuth',
  //       events: {
  //         click: [
  //           function submitForm() {
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
