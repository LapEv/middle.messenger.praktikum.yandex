const data = {
  data: [
    {
      username: 'Петя',
      userImg: '',
      lastMessage: 'Test',
      lastMessageDate: '16:54',
    },
    {
      username: 'Ваня',
      userImg: '',
      lastMessage: 'Test Test',
      lastMessageDate: '10:54',
    },
    {
      username: 'Коля',
      userImg: '',
      lastMessage: 'Тестовое сообщение',
      lastMessageDate: 'Вт',
    },
    {
      username: 'Дима',
      userImg: '',
      lastMessage:
        'Тестовое сообщение, чтобы посмотреть как работает ограничение',
      lastMessageDate: '2 Дек 2022',
    },
  ],
  chatMessages: {
    user: 'Вадим',
    date: '19 июня',
    time1: '11:56',
    text1:
      'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой./n Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
    time2: '12:00',
    text2: 'Круто!',
  },
  route: {
    index: '/index',
    registration: '/registration',
    chat: '/chat',
    profile: '/profile.hbs',
    changePassword: '/profileChangePassword',
    error: '/error',
  },
};

module.exports = data;
