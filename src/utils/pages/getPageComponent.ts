import { AppPages } from "pages/appPages";
import { ChatPage } from "pages/chat";
import {
  AuthorizationRequiredErrorPage,
  NotFoundErrorPage,
} from "pages/errors";
import { LoginPage } from "pages/login";
import { ProfilePage } from "pages/profile";
import { RegistrationPage } from "pages/registration";

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
