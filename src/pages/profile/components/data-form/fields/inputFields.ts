import { TInputWithValidationProps } from 'components/inputs/inputValidation';
import { EnumInputFields } from './enumInputFields';
import { FormValidators } from './inputValidators';

export const MapInputFieldToProps: Record<
  EnumInputFields,
  Partial<TInputWithValidationProps>
> = {
  [EnumInputFields.Email]: {
    htmlAttributes: { name: 'email' },
    validators: FormValidators[EnumInputFields.Email],
  },
  [EnumInputFields.Login]: {
    htmlAttributes: { name: 'login' },
    validators: FormValidators[EnumInputFields.Login],
  },
  [EnumInputFields.FirstName]: {
    htmlAttributes: { name: 'first_name' },
    validators: FormValidators[EnumInputFields.FirstName],
  },
  [EnumInputFields.SecondName]: {
    htmlAttributes: { name: 'second_name' },
    validators: FormValidators[EnumInputFields.SecondName],
  },
  [EnumInputFields.DisplayName]: {
    htmlAttributes: { name: 'display_name' },
    validators: FormValidators[EnumInputFields.DisplayName],
  },
  [EnumInputFields.Phone]: {
    htmlAttributes: { name: 'phone' },
    validators: FormValidators[EnumInputFields.Phone],
  },
};

const MapInputFieldToDataType = {
  [EnumInputFields.Email]: 'email',
  [EnumInputFields.Login]: 'login',
  [EnumInputFields.FirstName]: 'first name',
  [EnumInputFields.SecondName]: 'second name',
  [EnumInputFields.DisplayName]: 'display name',
  [EnumInputFields.Phone]: 'phone',
};

Object.entries(MapInputFieldToProps).forEach(
  ([fieldName, props]: [
    EnumInputFields,
    Partial<TInputWithValidationProps>
  ]) => {
    props.htmlClasses = ['profile__data__data'];
    props.htmlWrapper = {
      componentAlias: 'wrappedDataInput',
      htmlWrapperTemplate: `
      <div class="profile__data">
        <span class="profile__data__title"> ${MapInputFieldToDataType[fieldName]} </span>
        <div class="profile__data__data">
          {{{ wrappedDataInput }}}
          \\{{#if inputError}}
            <span class="profile__error"> \\{{ inputError }} </span>
          \\{{/if}}
        </div>
      </div>
    `,
    };
  }
);

export const MapInputFieldToUserDataRecord: Record<
  EnumInputFields,
  Keys<TAppUserData>
> = {
  [EnumInputFields.Email]: 'email',
  [EnumInputFields.Login]: 'login',
  [EnumInputFields.FirstName]: 'firstName',
  [EnumInputFields.SecondName]: 'secondName',
  [EnumInputFields.DisplayName]: 'displayName',
  [EnumInputFields.Phone]: 'phone',
};

export const MapInputFieldToHelpers = Object.entries(
  MapInputFieldToUserDataRecord
).reduce((acc, [fieldName, recordName]) => {
  acc[fieldName] = {
    beforePropsProxyHook() {
      this.setPropByPath(
        'htmlAttributes.value',
        this.store.getUserDataByPath(recordName)
      );
    },

    afterRenderHook() {
      this.toggleDisabledState(true);
    },
  };

  return acc;
}, {} as any);
