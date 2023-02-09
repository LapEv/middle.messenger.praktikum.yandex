import { TInputValidator } from "components/inputs/inputValidation";
import {
  makeValidator,
  validateLoginRegex,
  validateNotEmptyValue,
  validatePasswordRegex,
} from "utils/form-input-validator";

import { EnumInputFields } from "./enumInputFields";

export const FormValidators: Record<
  EnumInputFields,
  Record<string, TInputValidator[]>
> = [
  {
    field: EnumInputFields.Login,
    validatorsList: [validateLoginRegex],
  },
  {
    field: EnumInputFields.Password,
    validatorsList: [validatePasswordRegex],
  },
].reduce((acc, { field, validatorsList }) => {
  validatorsList.unshift(validateNotEmptyValue);
  const validator = makeValidator({
    validatorsList,
  });
  acc[field] = { blur: [validator] };
  return acc;
}, {} as any);
