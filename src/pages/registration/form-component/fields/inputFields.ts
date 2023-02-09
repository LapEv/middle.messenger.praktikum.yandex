import { TInputWithValidationProps } from "components/inputs/inputValidation";

import { EnumInputFields } from "./enumInputFields";
import { FormValidators } from "./inputValidators";

export const MapInputFieldsProps: Record<
  EnumInputFields,
  TInputWithValidationProps
> = {
  [EnumInputFields.Email]: {
    htmlAttributes: { name: "email", placeholder: "Введите email" },
    htmlClasses: ["auth__registration_form__email__input"],
    validators: FormValidators[EnumInputFields.Email],
    label: "Почта",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.Login]: {
    htmlAttributes: { name: "login", placeholder: "Введите логин" },
    htmlClasses: ["auth__registration_form__login__input"],
    validators: FormValidators[EnumInputFields.Login],
    label: "Логин",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.FirstName]: {
    htmlAttributes: { name: "first_name", placeholder: "Введите Имя" },
    htmlClasses: ["auth__registration_form__first_name__input"],
    validators: FormValidators[EnumInputFields.FirstName],
    label: "Имя",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.SecondName]: {
    htmlAttributes: { name: "second_name", placeholder: "Введите фамилию" },
    htmlClasses: ["auth__registration_form__second_name__input"],
    validators: FormValidators[EnumInputFields.SecondName],
    label: "Фамилия",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.Phone]: {
    htmlAttributes: { name: "phone", placeholder: "Введите телефон" },
    htmlClasses: ["auth__registration_form__phone__input"],
    validators: FormValidators[EnumInputFields.Phone],
    label: "Телефон",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.Password]: {
    htmlAttributes: {
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
    },
    htmlClasses: ["auth__registration_form__password__input"],
    validators: FormValidators[EnumInputFields.Password],
    label: "Пароль",
    mainClass: "auth__registration_form__",
  },
  [EnumInputFields.PasswordCheck]: {
    htmlAttributes: {
      name: "password",
      placeholder: "Введите пароль повторно",
      type: "password",
    },
    htmlClasses: ["auth__registration_form__passwordCheck__input"],
    validators: FormValidators[EnumInputFields.PasswordCheck],
    label: "Пароль (еще раз)",
    mainClass: "auth__registration_form__",
  },
};
