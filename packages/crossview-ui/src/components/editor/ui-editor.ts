import { html, LitElement, css } from 'lit';
import type { TemplateResult } from 'lit';

import { Editor } from '@tiptap/core';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

import { sharedStyles } from './styles';
import './ui-editor-toolbar';

export class CrossViewUIEditor extends LitElement {

  static override styles = [
    sharedStyles,
    css`.crossview-ui-editor {
      border: 1px solid #eee;
      border-radius: 6px;
      box-sizing: border-box;
    }
    .crossview-ui-editortoolbar {
      margin-bottom: 8px;
    }
    `
  ];

  elmId: string;

  EditorIns?: Editor;

  constructor() {
    super();
    this.elmId = `tencent-video-${parseInt(String(Math.random() * Number.MAX_SAFE_INTEGER), 10)}`;
  }

  firstUpdated(): void {
    const element = this.renderRoot.querySelector(`#${this.elmId}`);
    this.EditorIns = new Editor({
      element,
      extensions: [
        StarterKit,
        TextAlign.configure({
          types: ['heading', 'paragraph']
        }),
        Underline,
      ],
      content: '',
    });
    this.requestUpdate();
  }
  
  public render(): TemplateResult {
    return html`
    <div>
      <div class="crossview-ui-editortoolbar">
        <crossview-ui-editortoolbar .editor=${this.EditorIns}></crossview-ui-editortoolbar>
      </div>
      <div id=${this.elmId} class="crossview-ui-editor"></div>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-editor': CrossViewUIEditor;
  }
}

if (!window.customElements.get('crossview-ui-editor')) {
  window.customElements.define('crossview-ui-editor', CrossViewUIEditor);
}