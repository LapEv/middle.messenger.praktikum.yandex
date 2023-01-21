const regData = {
  page: 'Registration Page',
  formClass: 'auth__registration_form',
  inputFields: [
    {
      type: 'text',
      name: 'email',
      placeholder: 'Введите email',
      label: 'Почта',
    },
    {
      type: 'text',
      name: 'login',
      placeholder: 'Введите логин',
      label: 'Логин',
    },
    {
      type: 'text',
      name: 'first_name',
      placeholder: 'Введите Имя',
      label: 'Имя',
    },
    {
      type: 'text',
      name: 'second_name',
      placeholder: 'Введите фамилию',
      label: 'Фамилия',
    },
    {
      type: 'text',
      name: 'phone',
      placeholder: 'Введите телефон',
      label: 'Телефон',
    },
    {
      type: 'password',
      name: 'password',
      placeholder: 'Введите пароль',
      label: 'Пароль',
    },
    {
      type: 'password',
      name: 'passwordCheck',
      placeholder: 'Введите пароль повторно',
      label: 'Пароль (еще раз)',
    },
  ],
  pageTitle: 'Регистрация',
  link: {
    name: 'Войти',
    htmlName: 'Login',
    class: 'auth__noaccount',
  },
  submitButtonLabel: 'Зарегистрироваться',
  errorLabel: [
    'errorEmail',
    'errorLogin',
    'errorFirstName',
    'errorSecondName',
    'errorPhone',
    'errorPassword',
    'errorPasswordCheck',
  ],
};

export default regData;
