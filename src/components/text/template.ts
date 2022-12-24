import getTemplate from '../../utils/componentTemplateGenerator';

const content = `

{{#if text}}
  {{ text }}
{{else}}
  ""
{{/if}}
`;

export default (tag: string) => getTemplate({ tag, content });
