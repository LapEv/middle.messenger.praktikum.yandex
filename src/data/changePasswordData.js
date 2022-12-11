const changePasswordData = {
  changePasswordData: [
    {
      title: 'Старый пароль',
      data: '**********',
    },
    {
      title: 'Новый пароль',
      data: '**********',
    },
    {
      title: 'Подтвердите новый пароль',
      data: '**********',
    },
  ],
  route: {
    index: '/index',
    registration: '/registration',
    chat: '/chat',
    profile: '/profile.hbs',
    changePassword: '/profileChangePassword',
    error: '/error',
  },
};

module.exports = changePasswordData;
