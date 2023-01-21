import { ChatPage } from 'pages/chat/chat';
import { Block } from 'core/dom';
// import {
//   Button,
//   ImageElement,
//   Input,
//   InputValidator,
//   TextElement,
// } from 'components/index';
import { profileTemplate } from './profileTemplate';
import { profileFieldsData, profileData } from './profileData';
import profileAvatar from 'static/img/profile_avatar.png';
import arrowBackImage from 'static/img/arrowBack.png';
// import { InputValidators } from 'utils/inputValidators';
import { LoginPage } from '../login/login';
import { ChangePasswordPage } from './changePassword/changePassword';
// import { Modal } from 'components/modal/modal';
// import { modalMessage } from 'components/modal/modalMessage';

export class ProfilePage extends Block {
  constructor() {
    const children: TComponentChildren = {};
    const refModal: TComponentRefs = {};
    const refs: TComponentRefs = {};

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

    refModal['modalField'] = children.modal;

    children.changeAvatar = new TextElement({
      props: {
        text: profileData.changeAvatar,
        htmlClass: 'profile__avatar__change',
        componentName: 'Profile Component Message',
        events: {
          click: [
            () => {
              refModal.modalField.showModal({
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
          htmlClass: profileData.inputFileds.class,
          htmlId: name,
          componentName: `${name} profile`,
          disabledAttr: true,
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
          validators: {
            blur: InputValidators[name],
          },
        },
      });

      children[`${name}Field`] = inputField;
      refs[`${name}Field`] = inputField;
    });

    children.changePasswordLink = new Button({
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

    children.exitLink = new Button({
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

    super({ children, props: { componentName: 'Profile Page' }, refs });
  }

  protected render(): string {
    return profileTemplate;
  }

  protected _preInitHook(): void {
    Object.values(this.refs).forEach((inputField: Input) => {
      inputField.refs.Form = this;
    });

    profileData.errorLabel.forEach((stateErrorName) => {
      this.state[stateErrorName] = '';
    });

    const button = new Button({
      state: {
        mode: 'save',
      },
      props: {
        label: profileData.changeData.change,
        htmlName: profileData.changeData.htmlName,
        htmlClass: profileData.changeData.class,
        componentName: 'Profile button',
        events: {
          click: [
            function checkList() {
              let isError = false;
              const formRefs = this.refs as ComponentRefs;
              Object.values(formRefs).forEach((inputField: any) => {
                const inputProps = inputField.props;
                if (inputProps.componentName === 'Profile button') {
                  if (this.state.mode === 'save' || !this.state.mode) {
                    inputProps.label = profileData.changeData.save;
                    this.state.mode = 'change';
                    inputProps.htmlClass = profileData.changeData.classActive;
                  } else {
                    inputProps.label = profileData.changeData.change;
                    this.state.mode = 'save';
                    inputProps.htmlClass = profileData.changeData.class;
                  }
                } else {
                  inputProps.disabledAttr = !inputProps.disabledAttr;
                  this.state.mode !== 'save'
                    ? (inputProps.htmlClass = profileData.inputFileds.class)
                    : (inputProps.htmlClass =
                        profileData.inputFileds.classActive);
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
            }.bind(this),
          ],
        },
      },
    });

    this.children.changeDataLink = button;
    this.refs['Button'] = button;
  }
}
