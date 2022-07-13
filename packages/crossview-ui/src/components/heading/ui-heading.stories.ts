import type { Meta } from '@storybook/web-components';
import type { TemplateResult } from 'lit';
import { html } from 'lit';

import './ui-heading';

export default {
  title: 'Heading',
  component: 'crossview-ui-heading',
} as Meta;

interface Args {
    level: string;
    content: string;
}

const Template = (args: Args): TemplateResult => {
    const { level, content } = args;
    return html`<crossview-ui-heading level=${level}>${content}</crossview-ui-heading>`;
};

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});

H1.args = {
   level: 'h1',
   content: '我是h1',
};
H2.args = {
    level: 'h2',
    content: '我是h2',
 };
 H3.args = {
    level: 'h3',
    content: '我是h3',
 };