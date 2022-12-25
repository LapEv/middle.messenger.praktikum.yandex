import { Button } from 'components/button/button';
import { Input } from 'components/input/input';
import { TextElement } from 'components/text/text';
import Block from 'core/block';
import { MainPage } from 'core/renderDOM';
import { ChatPage, ProfilePage } from 'pages';
import { modalMessage } from './modalMessage';
import { modalTemplate } from './modalTemplate';

export type ModalProps = {
  title?: string;
  inputProps?: any;
  text?: string;
  error?: string;
} & ComponentCommonProps;

export class Modal extends Block {
  protected props: ModalProps;

  constructor({
    props = { componentName: 'Modal' },
    refs = {},
    state = {},
  }: {
    props?: ModalProps;
    refs?: ComponentRefs;
    state?: ComponentState;
  }) {
    const children: ComponentChildren = {};

    children.modalTitle = new TextElement({
      props: {
        text: '',
        htmlClass: 'modal__title',
        componentName: 'Modal Component Message',
      },
    });

    const ChooseFile = (event: any) => {
      const fileName = event.target.files[0].name;

      if (fileName) {
        refs.modalTitle.setTextContent({
          value: modalMessage.fileLoaded.title,
        });
        refs.modalInputFile.setTextContent({
          value: fileName,
        });
        refs.modalButton.setTextContent({
          value: modalMessage.fileLoaded.button,
        });
        refs.modalError.setTextContent({
          value: modalMessage.fileLoaded.error,
        });
      }
    };

    children.modalInputFile = new Input({
      props: {
        type: props.inputProps.type,
        htmlName: 'modalInputFile',
        htmlId: 'modalInputFile',
        htmlClass: props.inputProps.class,
        componentName: 'Modal input file',
        htmlWrapper: {
          componentAlias: 'wrapped',
          htmlWrapperTemplate: `
            <div  class='modal__choose'>
              <label for="modalInputFile" class="modal__choose__text">${props.inputProps.label}</label>
              {{{ wrapped }}}
            </div>
            `,
        },
        events: {
          change: [
            () => {
              ChooseFile(event);
            },
          ],
        },
      },
    });

    children.modalButton = new Button({
      props: {
        type: 'button',
        label: '',
        htmlClass: 'modal__button',
        events: {
          click: [
            () => {
              MainPage.component =
                props.inputProps.type === 'file'
                  ? new ProfilePage()
                  : new ChatPage();
            },
          ],
        },
      },
    });

    children.modalError = new TextElement({
      props: {
        text: '',
        htmlClass: 'modal__error',
        componentName: 'Modal Component Message',
      },
    });

    refs['modalTitle'] = children.modalTitle;
    refs['modalInputFile'] = children.modalInputFile;
    refs['modalButton'] = children.modalButton;
    refs['modalError'] = children.modalError;
    super({ children, props, refs, state });
  }

  protected render(): string {
    return modalTemplate;
  }
}
