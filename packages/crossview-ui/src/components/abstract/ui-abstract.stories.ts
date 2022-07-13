import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-abstract';

export default {
  title: 'Abstract',
  component: 'crossview-ui-abstract',
  render: ({ abstract }) => html`<crossview-ui-abstract abstract=${abstract}></crossview-ui-abstract>`,
} as Meta;

export const abstract = { args: { abstract: 'Web Components' } };
