import { Link } from 'components/link';
import { Block } from 'core/Dom';
import { AppRoutes } from 'core/Router';
import { WithRouter } from 'hocs';
import template from './template';

type ErrorPageProps = WithComponentCommonProps<{
  errorCode: number;
  errorDescription: string;
}>;
export type TErrorPage = Block<ErrorPageProps>;
export type TErrorPageClass = typeof Block<ErrorPageProps>;

const LinkWithRouter = WithRouter(Link);

function getErrorPageClass(initProps: ErrorPageProps): TErrorPageClass {
  class ErrorPage extends Block<ErrorPageProps> {
    constructor() {
      const children: TComponentChildren = {};
      children.homeButton = new LinkWithRouter({
        props: {
          label: 'На страницу логина',
          htmlName: 'error',
          htmlClasses: ['auth__noaccount'],
          events: {
            click: [
              function () {
                this.router.go(AppRoutes.Login);
              },
            ],
          },
        },
      });
      super({ props: initProps, children });
    }

    protected render(): string {
      return template;
    }
  }

  return ErrorPage;
}

export const NotFoundErrorPage: TErrorPageClass = getErrorPageClass({
  errorCode: 404,
  errorDescription: 'Page Not Found',
});

export const AuthorizationRequiredErrorPage: TErrorPageClass =
  getErrorPageClass({
    errorCode: 403,
    errorDescription: 'Authorization Required',
  });
