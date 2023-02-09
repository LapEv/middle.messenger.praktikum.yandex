export const profileFieldsData = [
  {
    name: "email",
    title: "Почта",
    data: "pochta@yandex.ru",
    placeholder: "Введите email",
  },
  {
    name: "login",
    title: "Логин",
    data: "ivanivanov",
    placeholder: "Введите логин",
  },
  {
    name: "first_name",
    title: "Имя",
    data: "Иван",
    placeholder: "Введите Имя",
  },
  {
    name: "second_name",
    title: "Фамилия",
    data: "Иванов",
    placeholder: "Введите фамилию",
  },
  {
    name: "display_name",
    title: "Имя в чате",
    data: "Иван",
    placeholder: "Введите имя в чате",
  },
  {
    name: "phone",
    title: "Телефон",
    data: "79099673030",
    placeholder: "Введите пароль",
  },
];

export const profileData = {
  username: "Ivan",
  changeAvatar: "Поменять аватар",
  backLink: {
    class: "profile__buttonBack__img",
    name: "",
    alt: "arrowBack",
    htmlName: "backLink",
  },
  avatar: {
    alt: "profileAvatar",
    class: "profile__buttonBack__img",
  },
  changeData: {
    change: "Изменить данные",
    save: "Сохранить данные",
    class: "profile__saveButton",
    classActive: "profile__saveButton__active",
    htmlName: "changeData",
  },
  changePassword: {
    link: "Изменить пароль",
    class: "profile__changePasswordButton",
    htmlName: "changePassword",
  },
  exitProfile: {
    link: "Выйти",
    class: "profile__exitButton",
    htmlName: "exitProfile",
  },
  inputFileds: {
    class: "profile__data__data",
    classActive: "profile__data__data__active",
  },
  errorLabel: [
    "errorEmail",
    "errorLogin",
    "errorFirstName",
    "errorSecondName",
    "errorPhone",
    "errorPassword",
    "errorPasswordCheck",
  ],
};
