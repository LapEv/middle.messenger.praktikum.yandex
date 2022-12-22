import { Block } from '../../core/Block';
import Handlebars from 'handlebars/dist/handlebars.runtime';
import { Validate } from '../../core/validator';
import authFormTemplate from './authForm.hbs';
import {
  getDefaultListenersForValidation,
  getListenerForFormSubmit,
} from '../../helpers/validateHelpers';
import './authForm.scss';

Handlebars.registerPartial({ authForm: authFormTemplate });

export type Props = {
  title: string;
  redirectUrl: string;
  fields: {
    name: string;
    type: string;
    placeholder: string;
  }[];
  submitButton: {
    text: string;
  };
  altLink: {
    link: string;
    text: string;
  };
};

type ValidatorProps = {
  validator: Validate;
};

export default class AuthForm extends Block {
  constructor(props: Props & ValidatorProps) {
    const { validator, ...restProps } = props;
    super({
      ...restProps,
      events: [
        ...getDefaultListenersForValidation(
          validator,
          'input',
          'form__field-wrapper.error'
        ),
        getListenerForFormSubmit(
          validator,
          '[data-field]',
          'form',
          'form__field-wrapper.error'
        ),
      ],
    });
  }

  render() {
    // const context = this.createCompileContext();
    // return authFormTemplate(authFormTemplate);
    return '<div>Login</div>';
  }
}
