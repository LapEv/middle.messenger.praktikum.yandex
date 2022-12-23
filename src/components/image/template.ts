import getTemplate from '../../utils/componentTemplateGenerator';

const tag = 'img';
const attributes = `
  src="{{ src }}"
  alt="{{ alt }}"
`;

export default getTemplate({ tag, attributes, isSelfClosingTag: true });
