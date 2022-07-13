import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';

export class CrossViewUIParagraph extends LitElement {
  public static styles = css`
  .crossui-paragraphContainer {
    margin-top: 0.2rem;
    line-height: 0.31rem;
    font-size: 0.19rem;
    text-align: justify;
    color: #222222;
  }
  `;
  public render(): TemplateResult {
    return html`
    <div class="crossui-paragraphContainer">
      <slot></slot>
    </div>
  `;;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-paragraph': CrossViewUIParagraph;
  }
}

if (!window.customElements.get('crossview-ui-paragraph')) {
  window.customElements.define('crossview-ui-paragraph', CrossViewUIParagraph);
}