import { Button } from "components/buttons";
import close from "static/img/close.png";

export class CollapseButton extends Button {
  constructor() {
    super({
      props: {
        htmlStyle: {
          "background-image": close,
        },
        htmlClasses: ["chat__settings__button"],
        events: {
          click: [
            function () {
              this.refs.settings.hide();
            },
          ],
        },
      },
    });
  }
}
