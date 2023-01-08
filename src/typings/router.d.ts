import { AppPages } from 'pages/appPages';

declare global {
  export type TAppRouteData = {
    path?: string;
    block: AppPages;
    needAuthorization: Boolean;
  };
  export const enum TAppRoutes {
    Registration = 'registration_route',
    Login = 'login_route',
    Chat = 'chat_route',
    Profile = 'profile_route',
    Error = 'error_route',
  }
}
export {};
