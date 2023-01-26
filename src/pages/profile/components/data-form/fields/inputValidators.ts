import * as InputValidators from 'utils/form-input-validator';
import { TInputValidator } from 'components/inputs/inputValidation';
import { EnumInputFields } from './enumInputFields';

export const FormValidators: Record<
  EnumInputFields,
  Record<string, TInputValidator[]>
> = [
  {
    field: EnumInputFields.Email,
    validatorsList: [InputValidators.validateEmailRegex],
  },
  {
    field: EnumInputFields.Login,
    validatorsList: [InputValidators.validateLoginRegex],
  },
  {
    field: EnumInputFields.FirstName,
    validatorsList: [InputValidators.validateNameRegex],
  },
  {
    field: EnumInputFields.SecondName,
    validatorsList: [InputValidators.validateNameRegex],
  },
  {
    field: EnumInputFields.DisplayName,
    validatorsList: [InputValidators.validateNameRegex],
  },
  {
    field: EnumInputFields.Phone,
    validatorsList: [InputValidators.validatePhoneRegex],
  },
].reduce((acc, { field, validatorsList }) => {
  validatorsList.unshift(InputValidators.validateNotEmptyValue);
  const validator = InputValidators.makeValidator({
    validatorsList,
  });
  acc[field] = { blur: [validator] };
  return acc;
}, {} as any);
