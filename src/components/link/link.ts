import Block from 'core/Block';
import template from './template';

type LinkProps = {
  label: string;
  href?: string;
} & ComponentCommonProps;

export class Link extends Block {
  protected props: LinkProps;

  constructor({
    props,
    refs = {},
    state = {},
  }: {
    props: LinkProps;
    refs?: ComponentRefs;
    state?: ComponentState;
  }) {
    props.componentName = props.componentName ?? 'Link';
    super({ props, refs, state });
  }

  protected render(): string {
    return template;
  }
}
