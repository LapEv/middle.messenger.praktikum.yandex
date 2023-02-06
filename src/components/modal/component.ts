import { Button } from 'components/buttons';
import { Block } from 'core/dom';
import template from './template';
import close from 'static/img/close.png';

export class Modal extends Block {
  private contentType: string;

  protected _afterPropsAssignHook(): void {
    super._afterPropsAssignHook();

    this.contentType = '';
    this.children.content = new Block();
    this.children.closeButton = this._createCloseButton();
  }

  private _createCloseButton() {
    return new Button({
      refs: {
        modal: this,
      },
      props: {
        htmlStyle: {
          'background-image': close,
        },
        htmlClasses: ['modal__closeButton'],
        events: {
          click: [
            function () {
              this.refs.modal.toggleVisibility();
            },
          ],
        },
      },
    });
  }

  protected render(): string {
    return template;
  }

  public getContentType() {
    return this.contentType;
  }

  public setContent(newContentBlock: Block) {
    const oldContentType = this.contentType;
    const newContentType = newContentBlock.componentName;
    // console.log(`MODAL CONTENT: ${oldContentType} -> ${newContentType}`);

    this.setChildByPath('content', newContentBlock);
  }

  toggleVisibility(state?: Nullable<'on' | 'off'>) {
    this.toggleHtmlClass('modal__show', state);
  }
}
