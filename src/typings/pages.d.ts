import * as PagesClasses from 'pages';

declare global {
  export type TAppPage =
    | PagesClasses.ChatPage
    | PagesClasses.LoginPage
    | PagesClasses.ProfilePage
    | PagesClasses.ChangePasswordPage
    | PagesClasses.RegistrationPage
    | PagesClasses.ErrorPage;

  export type TAppPageClass =
    | typeof PagesClasses.ChatPage
    | typeof PagesClasses.LoginPage
    | typeof PagesClasses.ProfilePage
    | typeof PagesClasses.ChangePasswordPage
    | typeof PagesClasses.RegistrationPage
    | typeof PagesClasses.ErrorPage;
}

export {};
