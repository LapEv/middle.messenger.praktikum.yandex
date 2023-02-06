import { AppPages } from 'pages/appPages';

declare global {
  export type TAppRouteData = {
    path?: string;
    block: AppPages;
    needAuthorization: Boolean;
  };
  export const enum TEnumAppRoutes {
    SignUp = 'signup_route',
    Login = 'login_route',
    Chats = 'chats_route',
    Profile = 'profile_route',
    NotFound = 'not_found_route',
  }
}
export {};
