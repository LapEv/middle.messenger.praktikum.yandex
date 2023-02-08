import { TextComponent } from 'components/text';
import { Block } from 'core/dom1';
import template from './template';

type TMessageComponentProps = WithComponentCommonProps<{
  content: string;
}>;

export class MessageComponent extends Block<TMessageComponentProps> {
  constructor(message: string) {
    const children = {} as TComponentChildren;

    children.content = new TextComponent({
      props: { text: message, htmlClasses: ['chat__body__message__text'] },
    });

    super({ children });
  }

  protected render(): string {
    return template;
  }
}
