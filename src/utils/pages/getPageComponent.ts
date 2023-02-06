import { RegistrationPage } from 'pages/registration';
import { LoginPage } from 'pages/login';
import { ChatPage } from 'pages/chat';
import { ProfilePage } from 'pages/profile';
import { AppPages } from 'pages/appPages';
import {
  NotFoundErrorPage,
  AuthorizationRequiredErrorPage,
} from 'pages/errors';

const map = {
  [AppPages.Registration]: RegistrationPage,
  [AppPages.Login]: LoginPage,
  [AppPages.Chat]: ChatPage,
  [AppPages.Profile]: ProfilePage,
  [AppPages.ChangePassword]: ProfilePage,
  [AppPages.NotFound]: NotFoundErrorPage,
  [AppPages.Forbidden]: AuthorizationRequiredErrorPage,
};

export const getPageComponent = (page: AppPages): TAppPageClass => {
  return map[page];
};
