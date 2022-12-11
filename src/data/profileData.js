const profileData = {
  profileData: [
    {
      title: 'Почта',
      data: 'pochta@yandex.ru',
    },
    {
      title: 'Логин',
      data: 'ivanivanov',
    },
    {
      title: 'Имя',
      data: 'Иван',
    },
    {
      title: 'Фамилия',
      data: 'Иванов',
    },
    {
      title: 'Имя в чате',
      data: 'Иван',
    },
    {
      title: 'Телефон',
      data: '+7 (909) 967 30 30',
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

module.exports = profileData;
