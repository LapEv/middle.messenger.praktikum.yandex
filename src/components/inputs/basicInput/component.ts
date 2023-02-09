import { Block } from "core/dom";

import template from "./template";

export type TInputProps = WithComponentCommonProps<{
  htmlAttributes?: {
    value?: string;
    placeholder?: string;
    type?: string;
  };
}>;

export class Input extends Block<TInputProps> {
  protected render(): string {
    return template;
  }

  public getValue() {
    const element = this._unwrappedElement;
    return (element as HTMLInputElement).value;
  }

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this.props.htmlAttributes!.value ??= "";
    this.props.htmlAttributes!.type ??= "text";
  }

  public toggleDisabledState(state: string | undefined = undefined) {
    const element = this._unwrappedElement as HTMLInputElement;

    if (state === "error") {
      element.disabled = false;
      element.classList.add("profile__data__data__error");
      element.classList.remove("profile__data__data");
      return;
    }

    if (state === "save") {
      element.disabled = false;
      element.classList.add("profile__data__data__active");
      element.classList.remove("profile__data__data");
      return;
    }

    if (state === "change") {
      element.disabled = true;
      element.classList.add("profile__data__data");
      element.classList.remove("profile__data__data__active");
    }
  }

  public setValue(value: string) {
    const element = this._unwrappedElement! as HTMLInputElement;
    element.value = value;
  }
}
