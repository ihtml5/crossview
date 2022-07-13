import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-editor';

export default {
  title: 'Editor',
  component: 'crossview-ui-editor',
  render: () => html`<crossview-ui-editor></crossview-ui-editor>`,
} as Meta;

export const editor = { args: {} };
