import { InputForm } from 'components';
import { WithStoreValidatedInput } from 'hocs/components';
import { afterValidationCallback } from './afterValidationCallback';
import {
  EnumInputFields,
  MapInputFieldToProps,
  MapInputFieldToHelpers,
} from './fields';

export class ProfilePageInputForm extends InputForm {
  constructor() {
    super({
      props: {
        htmlClasses: ['profile__data__container'],
        isSubmitButtonNeeded: false,
        afterValidationCallback,
      },
      InputClass: WithStoreValidatedInput as any,
      enumInputFieldsNames: EnumInputFields,
      mapInputToProps: MapInputFieldToProps,
      mapInputToHelpers: MapInputFieldToHelpers,
    });
  }
}
