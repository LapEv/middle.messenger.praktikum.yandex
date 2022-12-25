import Block from 'core/block';
import { Link, TextElement } from 'components/index';
import { MainPage } from 'core/renderDOM';
import { LoginPage } from '../index';
import { errorData } from './errorData';
import { errorTemplate } from './errorTemplate';

export type ErrorProps = {
  title?: string;
  message?: string;
} & ComponentCommonProps;

export class ErrorPage extends Block {
  protected props: ErrorProps;
  constructor({ props = { componentName: 'Error' } }: { props?: ErrorProps }) {
    const children: ComponentChildren = {};

    children.errorTitle = new TextElement({
      props: {
        text: props.title,
        htmlClass: 'error__title',
        componentName: 'Error Component Message',
      },
    });

    children.errorMessage = new TextElement({
      props: {
        text: props.message,
        htmlClass: 'error__message',
        componentName: 'Error Component Message',
      },
    });

    children.backLink = new Link({
      props: {
        label: errorData.errorProps.link,
        htmlClass: errorData.errorProps.class,
        events: {
          click: [
            () => {
              MainPage.component = new LoginPage();
            },
          ],
        },
      },
    });

    super({ children });
  }

  render() {
    return errorTemplate;
  }
}
