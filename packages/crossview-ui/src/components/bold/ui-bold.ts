import { LitElement, html, css } from 'lit';
import type { TemplateResult } from 'lit';

export class CrossViewUIBold extends LitElement {

  static override styles = css`
  .crossui-bold {
    font-weight: 700;
}
  `;

  render(): TemplateResult {
    return html`<strong class="crossui-bold">
  <slot></slot>
</strong>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-bold': CrossViewUIBold;
  }
}

if (!window.customElements.get('crossview-ui-bold')) {
  window.customElements.define('crossview-ui-bold', CrossViewUIBold);
}