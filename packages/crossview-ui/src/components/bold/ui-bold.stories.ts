import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-bold';

export default {
  title: 'Bold',
  component: 'crossview-ui-bold',
  render: () => html`<crossview-ui-bold>3333</crossview-ui-bold>`,
} as Meta;

export const bold = {};
