import { InputValidator } from 'components';

type SingleInputValidator = (value: string) => string;

function makeValidator({
  errorStateRef,
  validatorsList,
}: {
  errorStateRef: string;
  validatorsList: SingleInputValidator[];
}): InputValidator {
  return function validate(isErrorRenderNeeded = true): boolean {
    let element: Nullable<HTMLInputElement>;

    if (this.htmlWrapped) {
      element = this._element.querySelector('input');
    } else {
      element = this._element;
    }
    if (!(element instanceof HTMLInputElement)) {
      throw new Error(
        `${
          this.componentName
        }: wrong element ${element} of type ${typeof element} to validate input`
      );
    }

    const form = this.refs.Form;

    let error = '';
    const { value } = element;
    for (const validator of validatorsList) {
      error = validator(value);
      form.state[errorStateRef] = error;

      if (error !== '') {
        break;
      }
    }

    if (isErrorRenderNeeded) {
      form._render();
    }

    this.state.previousValue = value;

    return !!error;
  };
}

function validateLoginRegex(value: string): string {
  if (value.length < 3) {
    return 'Длина должна состовлять не менее 3 символов';
  }
  if (!value.match('^[a-zA-Z0-9]+$')) {
    return 'Только латиниские буквы, цифры';
  }
  if (!value.match('[a-zA-Z]+')) {
    return 'Только буквы';
  }
  if (value.length > 20) {
    return 'Длина логина состовлять не более 20 символов';
  }

  return '';
}

function validatePasswordRegex(value: string): string {
  if (value.length < 8) {
    return 'Длина должна состовлять не менее 8 символов';
  }
  if (!value.match('[A-Z]+')) {
    return 'Пароль должен сожержать хотя бы одну заглавную букву';
  }
  if (!value.match('[0-9]+')) {
    return 'Пароль должен сожержать хотя бы одну цифру';
  }
  if (value.length > 40) {
    return 'Длина логина состовлять не более 40 символов';
  }

  return '';
}

function validateNameRegex(value: string): string {
  if (!value.match('^[а-яА-Яa-zA-Z]+$')) {
    return 'Только латиниские буквы или кирилицу, цифры';
  }
  return '';
}

function validatePhoneRegex(value: string): string {
  if (!value.match(`^[+]?[\\d]+$`)) {
    return 'Только цифра без + в начале';
  }
  if (!(value.length >= 10 && value.length <= 15)) {
    return 'от 10 до 15 символов';
  }
  return '';
}

function validateEmailRegex(value: string): string {
  if (!value.match('^[a-zA-z]+[a-zA-Z\\d-_]*@[a-z]+\\.')) {
    return 'incorrect email';
  }
  return '';
}

export const InputValidators: Record<string, InputValidator> = [
  ['login', [validateLoginRegex]],
  ['password', [validatePasswordRegex]],
  ['passwordCheck', [validatePasswordRegex]],
  ['first_name', [validateNameRegex]],
  ['second_name', [validateNameRegex]],
  ['phone', [validatePhoneRegex]],
  ['email', [validateEmailRegex]],
  ['display_name', [validateNameRegex]],
  ['oldPassword', [validateLoginRegex]],
  ['newPassword', [validatePasswordRegex]],
  ['newPasswordCheck', [validatePasswordRegex]],
].reduce(
  (acc, [fieldName, validatorsList]: [string, SingleInputValidator[]]) => {
    acc[fieldName] = makeValidator({
      validatorsList,
      errorStateRef: `${fieldName}Error`,
    });
    return acc;
  },
  {} as Record<string, InputValidator>
);
