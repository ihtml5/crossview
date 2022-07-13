import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import loadjs from 'loadjs';

/**
 * crossview-app
 */
@customElement('crossview-app')
export class CrossViewApp extends LitElement {
    static get properties() {
        return {
            name: String,
            api: String,
            index:String,
            isReady: {
                state: true,
            }
        };
    }
    constructor() {
        super();
        this.isReady = false;
    }
    async getInitData() {
        const { api = '' } = window?.crossviewApps?.apps[this.name] || {};
        if (!api) return;
        const resp = await fetch(api);
        const data = await resp.json();
        const fmtedAppName = this.getFmtAppName();
        if (this.name === 'cross-view') {
            window.crossViewInfo = data;
        }
        window[fmtedAppName] = data;
    }
    getFmtAppName() {
        const [prefix = '', appName = ''] = this.name.split('-');
        const fmtedAppName = `${prefix}${appName}`;
        return fmtedAppName;
    }
    async firstUpdated() {
        const { resources = [] } = window?.crossviewApps?.apps[this.name] || {};
        await this.getInitData();
        this.isReady = true;
        await loadjs(resources, {
            returnPromise: true,
        });
    }
    createRenderRoot() {
        return this;
    }
    render() {
        if (!this.isReady) {
            return nothing;
        }
        const appName = this.name || 'crossviewapp-unknown';
        return html`
        ${unsafeHTML(`<div style="padding: 10px; color: #555; font-size: 20px; font-weight: 700; ">应用${this.index} ${appName}</div><${appName}></${appName}>`)}`;
    }
}