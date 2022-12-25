import Block from 'core/block';
import { MainPage } from 'core/renderDOM';
import {
  Button,
  ImageElement,
  Input,
  Link,
  TextElement,
} from 'components/index';
import { profileTemplate } from './changePasswordTemplate';
// import { changePasswordData } from './changePasswordData';
import { profileData } from '../profileData';
import profileAvatar from 'static/img/profile_avatar.png';
import arrowBackImage from 'static/img/arrowBack.png';
import { ProfilePage } from '../profile';
import { changePasswordData, changePassword } from './changePasswordData';

export class ChangePasswordPage extends Block {
  constructor() {
    const children: ComponentChildren = {};

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
        },
      });

      children[`${name}Field`] = inputField;
    });

    children.button = new Button({
      props: {
        type: 'button',
        label: changePassword.button,
        htmlClass: 'buttonAuth',
        events: {
          click: [
            () => {
              MainPage.component = new ProfilePage();
            },
          ],
        },
      },
    });
    super({ children });
  }

  protected render(): string {
    return profileTemplate;
  }
}
