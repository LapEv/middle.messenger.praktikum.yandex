import { InputForm } from "components/inputs/inputForm";
import { WithStoreValidatedInput } from "hocs/components";

import { afterValidationCallback } from "./afterValidationCallback";
import {
  EnumInputFields,
  MapInputFieldToHelpers,
  MapInputFieldToProps,
} from "./fields";

export class ProfilePageInputForm extends InputForm {
  constructor() {
    super({
      props: {
        htmlClasses: ["profile__data__container"],
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
