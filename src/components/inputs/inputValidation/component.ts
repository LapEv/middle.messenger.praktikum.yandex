import { Block } from 'core/Dom';
import { TInputProps, Input } from '../basicInput';

export type TInputValidator = () => boolean;
export type TInputValidatorsByEvents = Record<string, TInputValidator[]>;
export type TInputWithValidationProps = TInputProps & {
  validators?: TInputValidatorsByEvents;
  label?: string;
  mainClass?: string;
};

type TInputWithValidationState = {
  inputError: string;
};

const InputExtended = Input as any as typeof Block<
  TInputWithValidationProps,
  TInputWithValidationState
>;

export class InputWithValidation extends InputExtended {
  protected _afterPropsAssignHook() {
    super._afterPropsAssignHook();
    this.state.inputError = '';
    this.props.htmlWrapper ??= {
      componentAlias: 'wrapped',
      htmlWrapperTemplate: `
      <div class=${this.props.mainClass}${this.props.htmlAttributes?.name}>
        <label for="${this.props.htmlAttributes?.name}" class="${this.props.mainClass}${this.props.htmlAttributes?.name}__label">${this.props.label}</label>
        {{{ wrapped }}}
        <div class="auth__error__container">
          \\{{#if inputError}}
            <span class="${this.props.mainClass}${this.props.htmlAttributes?.name}__error"> \\{{ inputError }} </span>
          \\{{/if}}
        </div>
      </div>
      `,
    };
  }

  protected _beforePropsProxyHook() {
    super._beforePropsProxyHook();

    this.props.validators = this.props.validators ?? {};
    this._bindValidators();
  }

  protected _bindValidators() {
    const bindedValidators = {} as Record<string, TInputValidator[]>;
    Object.entries(this.props.validators!).forEach(([event, validators]) => {
      const events = this.props.events as Record<
        string,
        ComponentEventHandler[]
      >;

      if (!events[event]) {
        events[event] = [];
      }
      bindedValidators[event] = [];

      validators.forEach((validator) => {
        const bindedValidator = validator.bind(this);
        bindedValidators[event].push(bindedValidator);
        events[event].push(bindedValidator);
      });
    });

    this.props.validators = bindedValidators;
  }

  public getValidators() {
    return this.props.validators as Record<string, TInputValidator[]>;
  }
}
