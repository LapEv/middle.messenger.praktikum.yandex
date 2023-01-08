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
    class: 'auth__noaccount',
  },
  submitButtonLabel: 'Авторизоваться',
  errorLabel: ['errorLogin', 'errorPassword'],
  errorLink: {
    404: {
      name: 'error 404 page',
      htmlName: 'Error 404 page',
      class: 'auth__error',
    },
    505: {
      name: 'error 505 page',
      htmlName: 'Error 505 page',
      class: 'auth__error',
    },
  },
};

export default loginData;
