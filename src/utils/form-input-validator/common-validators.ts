export function validateNotEmptyValue(value: string): string {
  if (value === '') {
    return 'Пустое поле';
  }

  return '';
}

export function validateLoginRegex(value: string): string {
  if (value.length < 3) {
    return 'Длина должна состовлять не менее 3 символов';
  }
  if (!value.match('^[a-zA-Z0-9_-]+$')) {
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

export function validatePasswordRegex(value: string): string {
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

export function validateTwoFieldsMatching({
  fieldNames,
  notMatchErrorText,
}: {
  fieldNames: { first: string; second: string };
  notMatchErrorText: string;
}): () => string {
  return function validateMatching(): string {
    const form = this.refs.Form;
    const inputFirst = form.refs[fieldNames.first];
    const inputSecond = form.refs[fieldNames.second];

    const value = this.getValue();
    const inputs = {} as any;
    if (this === inputFirst) {
      Object.assign(inputs, {
        valueOther: inputSecond.getValue(),
        this: inputFirst,
        other: inputSecond,
      });
    } else {
      Object.assign(inputs, {
        valueOther: inputFirst.getValue(),
        this: inputSecond,
        other: inputFirst,
      });
    }

    let error = '';

    const valuesMatching = value === inputs.valueOther;
    const stateThis = inputs.this.state;
    const stateOther = inputs.other.state;

    if (!valuesMatching) {
      error = notMatchErrorText;
      stateThis.inputError = error;
      stateOther.inputError = error;
    } else if (stateOther.inputError === notMatchErrorText) {
      stateOther.inputError = '';
      stateThis.inputError = '';
    }

    return error;
  };
}

export function validateNameRegex(value: string): string {
  if (!value.match('^[а-яА-Яa-zA-Z]+$')) {
    return 'Только латиниские буквы или кирилицу, цифры';
  }
  if (!value.match('^[А-ЯA-Z]')) {
    return 'Должно начинаться с заглавной буквы';
  }

  return '';
}

export function validatePhoneRegex(value: string): string {
  if (!value.match(`^[+]?[\\d]+$`)) {
    return 'Только цифра без + в начале';
  }
  if (!(value.length >= 10 && value.length <= 15)) {
    return 'от 10 до 15 символов';
  }

  return '';
}

export function validateEmailRegex(value: string): string {
  if (!value.match('^[a-zA-z]+[a-zA-Z\\d-_]*@[a-z]+\\.')) {
    return 'Неправильный email';
  }

  return '';
}
