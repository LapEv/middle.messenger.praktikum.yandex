import { Button } from "components/buttons";
import icon from "static/img/settings.png";

export class FunctionalButton extends Button {
  constructor() {
    super({
      props: {
        htmlClasses: ["chat__body__title__img"],
        htmlStyle: {
          "background-image": icon,
        },
        events: {
          click: [
            function () {
              this.refs.settings._element.style.display = "block";
            },
          ],
        },
      },
    });
  }
}
