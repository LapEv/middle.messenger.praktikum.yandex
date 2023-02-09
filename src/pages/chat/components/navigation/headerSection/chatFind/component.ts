import { Input } from "components/inputs";
import { Block } from "core/dom";

import template from "./template";

export class ChatFind extends Block {
  constructor() {
    const children = {} as TComponentChildren;

    children.findInput = new Input({
      props: {
        htmlAttributes: { name: "chatSearch", placeholder: "Поиск" },
        htmlClasses: ["chat__list__input"],
      },
    });

    super({ children });
  }

  protected render() {
    return template;
  }
}
