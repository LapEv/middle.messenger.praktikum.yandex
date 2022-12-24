import Block from '../../core/block';
import template from './template';

type TextElementProps = {
  text?: string;
  htmlTag?: string;
} & ComponentCommonProps;

export class TextElement extends Block {
  protected props: TextElementProps;

  constructor({
    props = {},
    refs = {},
  }: {
    props?: TextElementProps;
    refs?: ComponentRefs;
  }) {
    props.htmlTag = props.htmlTag ?? 'span';
    super({ props, refs });
  }

  protected render(): string {
    return template(this.props.htmlTag as string);
  }
}
