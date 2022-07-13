import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-paragraph';

export default {
  title: 'Paragraph',
  component: 'crossview-ui-paragraph',
  render: ({ content }) => html`<crossview-ui-paragraph>${content}</crossview-ui-paragraph>`,
} as Meta;

export const paragraph = { args: { content: 'Web Components' } };
