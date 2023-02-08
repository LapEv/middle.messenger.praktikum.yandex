import { Button } from 'components/buttons';
import { type Block } from 'core/dom1';

export async function formSubmitButtonCallback() {
  const { form } = this.refs;
  this.state.apiResponseSuccess = '';
  form._validateForm();
  if (form.state.apiResponseError !== form.constructor.validationFailedError) {
    await form.props.afterValidationCallback!.call(form);
  }
}

export class FormSubmitButton extends Button {
  constructor(refs: { form: Block }, label?: string) {
    super({
      refs,
      props: {
        label: label,
        htmlClasses: ['buttonAuth'],
        events: {
          click: [formSubmitButtonCallback],
        },
      },
    });
  }
}
