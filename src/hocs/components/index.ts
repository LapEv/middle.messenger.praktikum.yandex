import { Block } from 'core/dom';
import { Link } from 'components/link';
import { TextComponent } from 'components/text';
import { ImageComponent } from 'components/image';
import { Button } from 'components/buttons';
import { Input } from 'components/inputs';
import { InputWithValidation } from 'components/inputs/inputValidation';
import { FileInput } from 'components/inputs/fileInput';
import { WithStore } from '../withStore';
import { WithRouter } from '../withRouter';

export const WithStoreBlock = WithStore(Block);
export const WithStoreButton = WithStore(Button) as any as typeof Button;
export const WithStoreInput = WithStore(Input) as any as typeof Input;
export const WithStoreFileInput = WithStore(
  FileInput
) as any as typeof FileInput;
export const WithStoreTextComponent = WithStore(
  TextComponent
) as any as typeof TextComponent;
export const WithStoreValidatedInput = WithStore(
  InputWithValidation
) as any as typeof InputWithValidation;
export const WithStoreImageComponent = WithStore(
  ImageComponent
) as any as typeof ImageComponent;

export const WithRouterLink = WithRouter(Link) as any as typeof Link;
export const WithRouterButton = WithRouter(Button) as any as typeof Button;
export const WithRouterImage = WithRouter(
  ImageComponent
) as any as typeof ImageComponent;
