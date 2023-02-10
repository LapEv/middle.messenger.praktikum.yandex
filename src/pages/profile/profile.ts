import { ImageComponent } from "components/image";
import { Input } from "components/inputs";
import { Block } from "core/dom";
import { AppRoutes } from "core/router";
import { WithRouter, WithStore } from "hocs";
import arrowBackImage from "static/img/arrowBack.png";
import avatarImagePlaceholder from "static/img/profile_avatar.png";

import { DataChangeButton, ProfilePageInputForm } from "./components";
import { AvatarInput } from "./components/avatar-upload-form/avatar-input";
import { SubmitSection } from "./components/avatar-upload-form/submit-section";
import { EnumInputFields } from "./components/data-form";
import { MapInputFieldToUserDataRecord } from "./components/data-form/fields";
import { profileData } from "./profileData";
import template from "./profileTemplate";

type TProfilePageProps = WithComponentCommonProps<{ userID: number }>;
const ProfilePageBlock = WithStore(Block<TProfilePageProps>);
const ImageWithRouter = WithRouter(ImageComponent);
export class ProfilePage extends ProfilePageBlock {
  constructor(profilePageImageRef: ImageComponent) {
    const children: TComponentChildren = {};

    children.arrowBackImage = new ImageWithRouter({
      props: {
        htmlAttributes: {
          src: arrowBackImage,
          alt: profileData.backLink.alt,
        },
        htmlClasses: [profileData.backLink.class],
        htmlWrapper: {
          componentAlias: "wrappedProfileLink",
          htmlWrapperTemplate: `
              <div class='profile__buttonBack'>
                {{{wrappedProfileLink}}}
              </div>
            `,
        },
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Chat);
            },
          ],
        },
      },
    });

    const storeAvatar = window.store.getUserDataByPath("avatar");
    const imageSource = storeAvatar || avatarImagePlaceholder;
    const avatarImage = new ImageComponent({
      props: {
        htmlAttributes: {
          src: imageSource,
          alt: "Profile Avatar",
        },
        htmlClasses: ["profile__avatar__img"],
      },
    });
    children.avatarImage = avatarImage;
    children.profileDataForm = new ProfilePageInputForm();

    // children.exitLink = new LogoutButton();

    const refs = {} as TComponentRefs;

    super({
      children,
      refs: { ...refs, profileImage: profilePageImageRef },
      state: { uploadingStatus: "" },
      componentName: "Profile Page",
    });
  }

  protected render(): string {
    return template;
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this.children.changeDataButton = new DataChangeButton({
      form: this.children.profileDataForm as Block,
    });

    this.props.userID = this.store.getUserDataByPath("id") as number;
    const avatarInput = this._createAvatarInput();
    this.children.avatarInput = avatarInput;

    const submitSection = this._createAvatarSubmitSection();
    this.children.submitSection = submitSection;

    const avatarFileInput = avatarInput.getChildByPath("fileInput");
    avatarFileInput.refs.avatarSubmit = submitSection;

    const submitButton = submitSection.getChildByPath("submitButton");
    Object.assign(submitButton.refs, {
      avatarInput,
    });
  }

  private _createAvatarInput() {
    return new AvatarInput();
  }

  private _createAvatarSubmitSection() {
    return new SubmitSection();
  }

  public updateUserInfo() {
    const userData = this.store.getUserDataByPath() as TAppUserData;

    Object.entries((this.children.profileDataForm as Block).refs).forEach(
      ([inputName, inputBlock]: [EnumInputFields, Input]) => {
        const recordName = MapInputFieldToUserDataRecord[inputName];
        inputBlock.setPropByPath(
          "htmlAttributes.value",
          `${userData[recordName]}`
        );
      }
    );
  }

  public updateUserAvatar() {
    const newAvatar = this.store.getUserDataByPath("avatar") as string;
    (this.children.avatarImage as ImageComponent).setPropByPath(
      "htmlAttributes.src",
      newAvatar
    );
  }
}
