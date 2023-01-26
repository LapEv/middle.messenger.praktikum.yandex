import { AppPages } from 'pages/appPages';
import * as Pages from 'pages';

const map = {
  [AppPages.Registration]: Pages.RegistrationPage,
  [AppPages.Login]: Pages.LoginPage,
  [AppPages.Chat]: Pages.ChatPage,
  [AppPages.Profile]: Pages.ProfilePage,
  [AppPages.ChangePassword]: Pages.ProfilePage,
  [AppPages.NotFound]: Pages.NotFoundErrorPage,
  [AppPages.Forbidden]: Pages.AuthorizationRequiredErrorPage,
};

export const getPageComponent = (page: AppPages): TAppPageClass => {
  return map[page];
};
