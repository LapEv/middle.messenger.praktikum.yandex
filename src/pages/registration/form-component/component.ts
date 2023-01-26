import { InputForm } from 'components';
import regData from '../registrationData';
import { afterValidationCallback } from './validationCallback';
import { EnumInputFields, MapInputFieldsProps } from './fields';

export class RegistrationPageForm extends InputForm {
  constructor() {
    super({
      enumInputFieldsNames: EnumInputFields,
      mapInputToProps: MapInputFieldsProps,
      props: {
        afterValidationCallback,
        formTitle: regData.pageTitle,
        htmlClasses: [regData.formClass],
        type: 'registration',
        label: 'Зарегистрироваться',
      },
    });
  }
}
