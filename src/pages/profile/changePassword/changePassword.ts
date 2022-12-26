import Block from 'core/Block';
import { MainPage } from 'core/renderDOM';
import {
  Button,
  ImageElement,
  Input,
  InputValidator,
  TextElement,
} from 'components/index';
import { profileTemplate } from './changePasswordTemplate';
import { profileData } from '../profileData';
import profileAvatar from 'static/img/profile_avatar.png';
import arrowBackImage from 'static/img/arrowBack.png';
import { ProfilePage } from '../profile';
import { changePasswordData, changePassword } from './changePasswordData';
import { InputValidators } from '../../../utils/inputValidators';

export class ChangePasswordPage extends Block {
  constructor() {
    const children: ComponentChildren = {};
    const refs: ComponentRefs = {};

    children.arrowBackImage = new ImageElement({
      props: {
        src: arrowBackImage,
        alt: profileData.backLink.alt,
        htmlClass: profileData.backLink.class,
        componentName: 'Arrow Back Image',
        htmlWrapper: {
          componentAlias: 'wrappedProfileLink',
          htmlWrapperTemplate: `
              <div class='profile__buttonBack'>
                {{{wrappedProfileLink}}}
              </div>
            `,
        },
        events: {
          click: [
            () => {
              MainPage.component = new ProfilePage();
            },
          ],
        },
      },
    });

    children.avatarImage = new ImageElement({
      props: {
        src: profileAvatar,
        alt: profileData.avatar.alt,
        htmlClass: profileData.avatar.class,
        componentName: 'Profile avatar image',
      },
    });

    children.username = new TextElement({
      props: {
        text: profileData.username,
        htmlClass: 'profile__title',
        componentName: 'Profile Component Message',
      },
    });

    changePasswordData.forEach(({ name, title, data, placeholder }) => {
      const inputField = new Input({
        props: {
          placeholder,
          type: 'password',
          htmlName: name,
          value: data,
          htmlClass: 'profile__data__data',
          componentName: `${name} profile`,
          htmlWrapper: {
            componentAlias: 'wrappedChangePasswordInput',
            htmlWrapperTemplate: `
              <div class='profile__data'>
                <p class='profile__data__title'>
                  ${title}
                </p>
                <label for={{name}} style="width: 0px"></label>
                {{{wrappedChangePasswordInput}}}
              </div>
              <div class='profile__line'></div>
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
      props: { componentName: 'Change Password Page' },
      refs,
    });
  }

  protected render(): string {
    return profileTemplate;
  }

  routeTo() {
    MainPage.component = new ProfilePage();
  }

  protected _preInitHook(): void {
    Object.values(this.refs).forEach((inputField: Input) => {
      inputField.refs.Form = this;
    });

    changePassword.errorLabel.forEach((stateErrorName) => {
      this.state[stateErrorName] = '';
    });

    const button = new Button({
      props: {
        label: profileData.changeData.change,
        htmlName: profileData.changeData.htmlName,
        htmlClass: profileData.changeData.class,
        componentName: 'ChangePassword button',
        events: {
          click: [
            function checkPassword() {
              let isError = false;
              const formRefs = this.refs as ComponentRefs;
              Object.values(formRefs).forEach((inputField: any) => {
                const inputProps = inputField.props;
                if (inputProps.componentName !== 'ChangePassword button') {
                  Object.values(inputField.validators).forEach(
                    (validator: InputValidator) => {
                      const error = validator();
                      if (error) {
                        isError = true;
                      }
                    }
                  );
                }
              });
              if (!isError) {
                this.routeTo();
              }
            }.bind(this),
          ],
        },
      },
    });

    this.children.button = button;
    this.refs['Button'] = button;
  }
}
