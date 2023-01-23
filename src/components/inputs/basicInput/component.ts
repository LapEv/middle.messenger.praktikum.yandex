import { Block } from 'core/dom';
import template from './template';

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

    this.props.htmlAttributes!.value ??= '';
    this.props.htmlAttributes!.type ??= 'text';
  }

  public toggleDisabledState(state: boolean | undefined = undefined) {
    const element = this._unwrappedElement as HTMLInputElement;

    if (state !== false) {
      console.log('state = ', state);
      element.disabled = true;
      element.classList.add('profile__data__data__active');
      element.classList.remove('profile__data__data');
      return;
    }

    element.disabled = !element.disabled;
    element.classList.add('profile__data__data');
    element.classList.remove('profile__data__data__active');
  }

  public setValue(value: string) {
    const element = this._unwrappedElement! as HTMLInputElement;
    element.value = value;
  }
}
