import { Block } from 'core/dom';
import template from './template';

export type ButtonProps = {
  label?: string;
  type?: string;
} & TComponentCommonProps;

export class Button extends Block {
  protected props: ButtonProps;

  constructor({
    // props = { componentName: 'Button' },
    props = {},
    refs = {},
    state = {},
  }: {
    props?: ButtonProps;
    refs?: TComponentRefs;
    state?: TComponentState;
  }) {
    super({ props, refs, state });
  }

  protected render(): string {
    return template;
  }
}
