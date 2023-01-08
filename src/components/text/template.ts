import getTemplate from 'utils/templateGenerator';

const content = `

{{#if text}}
  {{ text }}
{{else}}
  ""
{{/if}}
`;

export default (tag: string) => getTemplate({ tag, content });
