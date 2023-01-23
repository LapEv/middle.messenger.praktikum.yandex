import { type Block } from 'core/dom';
import { Button, type Input } from 'components';
import { formSubmitButtonCallback } from 'components/inputs/inputForm';

export class DataChangeButton extends Button {
  constructor(refs: { form: Block }) {
    const enum FormMode {
      DataSaved = 'data_saved',
      DataChanging = 'data_changing',
    }

    async function onClickCallback() {
      const { form } = this.refs;

      form.state.apiResponseSuccess = '';

      if (this.state.mode === FormMode.DataSaved) {
        this.state.mode = FormMode.DataChanging;
        this.props.label = 'save data';

        // console.log('state = ', this.state.mode);
        Object.values(form.refs).forEach((dataField: Input) => {
          dataField.toggleDisabledState(true);
        });
      } else {
        await formSubmitButtonCallback.call(this);

        if (form.getAPIResponseError() === '') {
          this.state.mode = FormMode.DataSaved;
          this.props.label = 'change data';

          Object.values(form.refs).forEach((dataField: Input) => {
            dataField.toggleDisabledState();
          });
        }
      }
    }

    super({
      state: {
        mode: FormMode.DataSaved,
      },
      refs,
      props: {
        label: 'change data',
        htmlClasses: ['profile__saveButton'],
        events: {
          click: [onClickCallback],
        },
      },
    });
  }
}
