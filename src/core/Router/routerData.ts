import { AppPages } from 'pages/appPages';

export const enum AppRoutes {
  Login = 'login_route',
  Registration = 'registration_route',
  Chat = 'chat_route',
  Profile = 'profile_route',
  ChangePassword = 'changePassword_route',
  NotFound = 'not_found_route',
  NotAuthorized = 'not_authorized_route',
}

export const AppRoutesData = {
  [AppRoutes.Login]: {
    path: '/',
    block: AppPages.Login,
    needAuthorization: false,
  },
  [AppRoutes.Registration]: {
    path: '/sign-up',
    block: AppPages.Registration,
    needAuthorization: false,
  },
  [AppRoutes.Chat]: {
    path: '/messenger',
    block: AppPages.Chat,
    needAuthorization: true,
  },
  [AppRoutes.Profile]: {
    path: '/settings',
    block: AppPages.Profile,
    needAuthorization: true,
  },
  [AppRoutes.ChangePassword]: {
    path: '/сhangePassword',
    block: AppPages.ChangePassword,
    needAuthorization: true,
  },
  [AppRoutes.NotFound]: {
    block: AppPages.NotFound,
    needAuthorization: false,
  },
  [AppRoutes.NotAuthorized]: {
    block: AppPages.Forbidden,
    needAuthorization: false,
  },
};

export const MapPathToRoute: Record<string, AppRoutes> = {
  '/sign-up': AppRoutes.Registration,
  '/login': AppRoutes.Login,
  '/messenger': AppRoutes.Chat,
  '/settings': AppRoutes.Profile,
  '/changePassword': AppRoutes.ChangePassword,
};
