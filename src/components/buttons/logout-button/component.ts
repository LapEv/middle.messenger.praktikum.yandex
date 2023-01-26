import { TButtonProps } from 'components/buttons';
import { WithRouterButton } from 'hocs/components';
import { AuthorizationService } from 'services';

export class LogoutButton extends WithRouterButton {
  constructor(props?: TButtonProps) {
    super({
      props: {
        label: 'Выйти из системы',
        htmlClasses: ['chat__settings__item'],
        events: {
          click: [
            () => {
              AuthorizationService.logout();
            },
          ],
        },
        ...props,
      },
    });
  }
}
