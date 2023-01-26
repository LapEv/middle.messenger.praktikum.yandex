import { Link } from 'components';
import { Block } from 'core/Dom';
import { AppRoutes } from 'core/Router';
import { WithRouter } from 'hocs';
import template from './template';

const LinkWithRouter = WithRouter(Link);
export class HeaderSection extends Block {
  constructor() {
    const children = {} as TComponentChildren;

    children.profileLink = new LinkWithRouter({
      props: {
        label: 'Профиль',
        htmlAttributes: { name: 'Profile' },
        htmlClasses: ['chat__list__profileLink__icon'],
        events: {
          click: [
            function () {
              this.router.go(AppRoutes.Profile);
            },
          ],
        },
      },
    });

    super({ children });
  }

  protected render() {
    return template;
  }
}
