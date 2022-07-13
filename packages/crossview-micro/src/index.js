import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './container/wc';

/**
 * crossview-microapps
 */
@customElement('crossview-microapps')
export class CrossViewMicroApps extends LitElement {
  static get properties() {
    return {
      isRoot: Boolean,
      isReady: Boolean,
      crossviewApps: {
        state: true,
      },
    };
  }
  constructor() {
    super();
    this.isRoot = true;
    this.crossviewApps = [];
  }
  static get styles() {
    return css `
    .crossview-app {
      padding: 10px;
    }
    `
  }
  createRenderRoot() {
    return this;
  }
  async firstUpdated() {
    const resp = await fetch('/crossview/getapps');
    const apps = await resp.json();
    this.crossviewApps =  apps;
    window.crossviewApps = apps;
  }
  render() {
    const { apps = [] } = this.crossviewApps || {};
    return html`<div class="crossview-app">${Object.keys(apps).map((app, index) => {
      return unsafeHTML(`<crossview-app name="${app}" index="${index + 1}"></crossview-app>`);
    })}</div>`;
  }
}
