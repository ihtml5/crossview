import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-icon';

export default {
  title: 'Icon',
  component: 'crossview-ui-icon',
  render: () => html`
  <crossview-ui-icon class="fas fa-address-card" color="#888" size="2em"></crossview-ui-icon>
  <crossview-ui-icon class="fas fa-address-book" color="#888" size="2em"></crossview-ui-icon>
  `,
} as Meta;

export const icon = {
  args: {
    class: 'fas fa-address-card'
  }
};

