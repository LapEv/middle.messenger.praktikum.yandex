import { ChatPage } from "pages/chat";
import { TErrorPage, TErrorPageClass } from "pages/errors";
import { LoginPage } from "pages/login";
import { ProfilePage } from "pages/profile";
import { RegistrationPage } from "pages/registration";

declare global {
  export type TAppPage =
    | PagesClasses.ChatsPage
    | PagesClasses.LoginPage
    | PagesClasses.ProfilePage
    | PagesClasses.RegistrationPage
    | PagesClasses.TErrorPage;

  export type TAppPageClass =
    | typeof RegistrationPage
    | typeof LoginPage
    | typeof ChatPage
    | typeof ProfilePage
    | TErrorPageClass;
}

export {};
