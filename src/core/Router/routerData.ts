import { AppPages } from 'pages/appPages';

export const enum AppRoutes {
  Login = 'login_route',
  Registration = 'registration_route',
  Chat = 'chat_route',
  Profile = 'profile_route',
  ChangePassword = 'changePassword_route',
  Error = 'error_route',
}

export const AppRoutesData = {
  [AppRoutes.Login]: {
    path: '/login',
    block: AppPages.Login,
    needAuthorization: false,
  },
  [AppRoutes.Registration]: {
    path: '/registration',
    block: AppPages.Registration,
    needAuthorization: false,
  },
  [AppRoutes.Chat]: {
    path: '/chat',
    block: AppPages.Chat,
    needAuthorization: true,
  },
  [AppRoutes.Profile]: {
    path: '/profile',
    block: AppPages.Profile,
    needAuthorization: true,
  },
  [AppRoutes.ChangePassword]: {
    path: '/сhangePassword',
    block: AppPages.ChangePassword,
    needAuthorization: true,
  },
  [AppRoutes.Error]: {
    block: AppPages.Error,
    needAuthorization: false,
  },
};

export const MapPathToRoute: Record<string, AppRoutes> = {
  '/registration': AppRoutes.Registration,
  '/login': AppRoutes.Login,
  '/chats': AppRoutes.Chat,
  '/profile': AppRoutes.Profile,
  '/changePassword': AppRoutes.ChangePassword,
};
