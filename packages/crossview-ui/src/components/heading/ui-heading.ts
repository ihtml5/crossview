import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import type { TemplateResult } from 'lit';

import { property } from 'lit/decorators.js';

export class CrossViewUIHeading extends LitElement {

  @property({ type: String })
  level = 'h1';
  
  public static styles = css`
  .crossui-headingH1 {
  display: inline-block;
  font-size: 0.26rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #222;
}
.crossui-headingH2 {
  display: inline-block;
  margin: 0.16rem 0.02rem 0.16rem 0;
  font-size: 0.24rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #222;
}
.crossui-headingH3 {
  margin: 0.3rem 0.13rem 0.16rem 0px;
  font-size: 0.22rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #222;
}`;

createRoot() {
  return this;
}

  render(): TemplateResult {
    return html`
      ${unsafeHTML(`<${this.level.toLowerCase()} class="${`crossui-heading${this.level}`}">
        <slot></slot>
        </${this.level}>`)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-heading': CrossViewUIHeading;
  }
}

if (!window.customElements.get('crossview-ui-heading')) {
  window.customElements.define('crossview-ui-heading', CrossViewUIHeading);
}
