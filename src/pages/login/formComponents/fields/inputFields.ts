import { TInputWithValidationProps } from "components/inputs/inputValidation";

import { EnumInputFields } from "./enumInputFields";
import { FormValidators } from "./inputValidators";

export const MapInputFieldsProps: Record<
  EnumInputFields,
  TInputWithValidationProps
> = {
  [EnumInputFields.Login]: {
    htmlAttributes: { name: "login", placeholder: "Введите логин" },
    htmlClasses: ["auth__form__login__input"],
    validators: FormValidators[EnumInputFields.Login],
    label: "Логин",
    mainClass: "auth__form__",
  },
  [EnumInputFields.Password]: {
    htmlAttributes: {
      name: "password",
      placeholder: "Введите пароль",
      type: "password",
    },
    htmlClasses: ["auth__form__password__input"],
    validators: FormValidators[EnumInputFields.Password],
    label: "Пароль",
    mainClass: "auth__form__",
  },
};
