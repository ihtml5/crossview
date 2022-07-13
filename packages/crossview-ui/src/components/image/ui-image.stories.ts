import type { Meta } from '@storybook/web-components';

import { html } from 'lit';
import './ui-image';

export default {
  title: 'Image',
  component: 'crossview-ui-image',
  render: ({ src, desc }) => html`<crossview-ui-image src="${src}" desc="${desc}"></crossview-ui-image>`,
} as Meta;

export const image = { args: { src: 'https://inews.gtimg.com/newsapp_bt/0/14272214315/641', desc: 'crossview ui image' } };