import { InputForm } from 'components/inputs/inputForm';
import { afterValidationCallback } from './validationCallback';
import loginData from '../loginData';

import { EnumInputFields, MapInputFieldsProps } from './fields';

export class LoginPageForm extends InputForm {
  constructor() {
    super({
      enumInputFieldsNames: EnumInputFields,
      mapInputToProps: MapInputFieldsProps,
      props: {
        afterValidationCallback,
        formTitle: loginData.pageTitle,
        htmlClasses: [loginData.formClass],
        type: 'login',
        label: 'Авторизоваться',
      },
    });
  }
}
