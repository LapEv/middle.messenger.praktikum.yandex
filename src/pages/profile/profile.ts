import { ChatPage } from 'pages/chat/chat';
import Block from 'core/block';
import { MainPage } from 'core/renderDOM';
import { ImageElement, Input, Link, TextElement } from 'components/index';
import { profileTemplate } from './profileTemplate';
import { profileFieldsData, profileData } from './profileData';
import profileAvatar from 'static/img/profile_avatar.png';
import arrowBackImage from 'static/img/arrowBack.png';
import { LoginPage } from '../login/login';
import { ChangePasswordPage } from './changePassword/changePassword';
import { Modal } from 'components/modal/modal';
import { modalMessage } from 'components/modal/modalMessage';

export class ProfilePage extends Block {
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
              MainPage.component = new ChatPage();
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

    children.inputAvatarImage = new Input({
      props: {
        htmlName: 'avatar',
        type: 'file',
        htmlClass: 'profile__data__data__avatar',
        componentName: `${name} profile`,
      },
    });

    children.modal = new Modal({
      props: {
        title: '',
        inputProps: modalMessage.inputProps,
        text: '',
        error: '',
      },
    });

    refs['modalField'] = children.modal;

    children.changeAvatar = new TextElement({
      props: {
        text: profileData.changeAvatar,
        htmlClass: 'profile__avatar__change',
        componentName: 'Profile Component Message',
        events: {
          click: [
            () => {
              refs.modalField.showModal({
                title: modalMessage.LoadFile.title,
                link: modalMessage.LoadFile.link,
                value: modalMessage.LoadFile.value,
                button: modalMessage.LoadFile.button,
                error: modalMessage.LoadFile.error,
              });
            },
          ],
        },
      },
    });

    children.username = new TextElement({
      props: {
        text: profileData.username,
        htmlClass: 'profile__title',
        componentName: 'Profile Component Message',
      },
    });

    profileFieldsData.forEach(({ name, title, data, placeholder }) => {
      const inputField = new Input({
        props: {
          placeholder,
          type: 'text',
          htmlName: name,
          value: data,
          htmlClass: 'profile__data__data',
          htmlId: name,
          componentName: `${name} profile`,
          htmlWrapper: {
            componentAlias: 'wrappedProfileInput',
            htmlWrapperTemplate: `
              <div class='profile__data'>
                <p class='profile__data__title'>
                  ${title}
                </p>
                <label for=${name} style="width: 0px"></label>
                {{{wrappedProfileInput}}}
              </div>
              <div class='profile__line'></div>
              `,
          },
        },
      });

      children[`${name}Field`] = inputField;
    });

    children.changeDataLink = new Link({
      props: {
        label: profileData.changeData.link,
        htmlName: profileData.changeData.htmlName,
        htmlClass: profileData.changeData.class,
      },
    });

    children.changePasswordLink = new Link({
      props: {
        label: profileData.changePassword.link,
        htmlName: profileData.changePassword.htmlName,
        htmlClass: profileData.changePassword.class,
        events: {
          click: [
            () => {
              MainPage.component = new ChangePasswordPage();
            },
          ],
        },
      },
    });

    children.exitLink = new Link({
      props: {
        label: profileData.exitProfile.link,
        htmlName: profileData.exitProfile.htmlName,
        htmlClass: profileData.exitProfile.class,
        events: {
          click: [
            () => {
              MainPage.component = new LoginPage();
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
