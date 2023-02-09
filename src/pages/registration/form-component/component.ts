import { InputForm } from "components/inputs/inputForm";

import regData from "../registrationData";
import { EnumInputFields, MapInputFieldsProps } from "./fields";
import { afterValidationCallback } from "./validationCallback";

export class RegistrationPageForm extends InputForm {
  constructor() {
    super({
      enumInputFieldsNames: EnumInputFields,
      mapInputToProps: MapInputFieldsProps,
      props: {
        afterValidationCallback,
        formTitle: regData.pageTitle,
        htmlClasses: [regData.formClass],
        type: "registration",
        label: "Зарегистрироваться",
      },
    });
  }
}
