const loginData = {
  page: 'Login Page',
  inputFields: [
    {
      type: 'text',
      name: 'login',
      placeholder: 'Введите логин',
      label: 'Логин',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Введите пароль',
      label: 'Пароль',
    },
  ],
  pageTitle: 'Вход',
  link: {
    name: 'Нет аккаунта?',
    htmlName: 'Registration',
  },
  submitButtonLabel: 'Авторизоваться',
  errorLabel: ['errorLogin', 'errorPassword'],
};

export default loginData;
