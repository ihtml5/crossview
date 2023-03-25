import type { TemplateResult } from 'lit';
import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';

export class CrossViewUIAbstract extends LitElement {
  public static styles = css`
    .crossview-ui-summary {
      color: #666666;
      margin-top: 1.25em;
      margin-bottom: 1.25em;
      text-align: justify;
      font-size: 1em;
      line-height: 1.75em;
    }
    .crossview-ui-start-quotation-mark {
      margin-bottom: 13px;
      margin-left: 0px;
      width: 36px;
      height: 3px;
      border-bottom-style: solid;
      border-width: 0.5px;
      border-color: #666666;
    }

    .crossview-ui-end-quotation-mark {
      position: absolute;
      margin-top: 7px;
      right: 15px;
      width: 71px;
      height: 9px;
    }

    /*absolute会脱离文档流，用占坑div撑开父div*/
    .crossview-ui-end-quotation-mark-placeholder {
      height: 2px;
      width: 0px;
    }
  `;
  
  @property({ type: String }) abstract = '';

  public render(): TemplateResult {
    return html`
      <div class="crossview-ui-summary">
        <div class="crossview-ui-start-quotation-mark"></div>
        ${this.abstract}4444466667777vvvvvvv
        <div class="crossview-ui-end-quotation-mark"></div>
        <div class="crossview-ui-end-quotation-mark-placeholder"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-abstract': CrossViewUIAbstract;
  }
}

if (!window.customElements.get('crossview-ui-abstract')) {
  window.customElements.define('crossview-ui-abstract', CrossViewUIAbstract);
}