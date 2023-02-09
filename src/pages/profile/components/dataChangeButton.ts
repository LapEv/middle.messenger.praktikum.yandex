import { Button } from "components/buttons";
import { type Input } from "components/inputs";
import { formSubmitButtonCallback } from "components/inputs/inputForm";
import { type Block } from "core/dom";

export class DataChangeButton extends Button {
  constructor(refs: { form: Block }) {
    const enum FormMode {
      DataSaved = "data_saved",
      DataChanging = "data_changing",
    }

    async function onClickCallback() {
      const { form } = this.refs;

      form.state.apiResponseSuccess = "";

      if (this.state.mode === FormMode.DataSaved) {
        this.state.mode = FormMode.DataChanging;
        this.props.label = "Сохранить";

        Object.values(form.refs).forEach((dataField: Input) => {
          dataField.toggleDisabledState("save");
        });
      } else {
        await formSubmitButtonCallback.call(this);

        if (form.getAPIResponseError() === "") {
          this.state.mode = FormMode.DataSaved;
          this.props.label = "Редактировать";
          Object.values(form.refs).forEach((dataField: Input) => {
            dataField.toggleDisabledState("change");
          });
        } else {
          const arrInputsError: Array<string> = [];
          Object.values(form.refs).forEach((value: any) => {
            if (value.state.inputError) {
              arrInputsError.push(value.componentName);
            }
          });
          Object.values(form.refs).forEach((dataField: Input) => {
            if (arrInputsError.includes(dataField.componentName)) {
              dataField.toggleDisabledState("error");
            }
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
        label: "Редактировать",
        htmlClasses: ["profile__saveButton"],
        events: {
          click: [onClickCallback],
        },
      },
    });
  }
}
