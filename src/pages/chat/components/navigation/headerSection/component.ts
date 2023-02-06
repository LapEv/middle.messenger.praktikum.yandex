import { Link } from 'components/link';
import { Block } from 'core/dom';
import { AppRoutes } from 'core/router';
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
