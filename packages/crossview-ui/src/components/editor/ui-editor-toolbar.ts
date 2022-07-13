import type { TemplateResult } from 'lit';
import type { Editor } from '@tiptap/core';
import { html, LitElement, css } from 'lit';
import { property } from 'lit/decorators';
import { styleMap } from 'lit/directives/style-map';

import { sharedStyles } from './styles';
import { ToolbarConfig } from './config';

export class CrossViewUIEditorToolbar extends LitElement {

    static override styles = [
        sharedStyles,
        css`
        .editor-toolbar-buttonGroup {
            display: flex;
        }
        .editor-toolbar-button {
            width: 30px;
            height: 30px;
            cursor: pointer;
            position: relative;
            border: #eee 1px solid;
            border-radius: 4px;
            margin: 3px;
            vertical-align: middle;
            box-sizing: border-box;
            background-repeat: no-repeat;
            background-color: #fff;
            background-position: center;
        }`
    ];

    @property({ type: Object })
    editor?: Editor;

    private toggleBold(): void {
        this.editor?.chain().focus().toggleBold().run();
    }

    private toggleItalic(): void {
        this.editor?.chain().focus()
            .toggleItalic()
            .run()
    }

    private toggleStrike(): void {
        this.editor?.chain().focus().toggleStrike().run()
    }

    private toggleCode(): void {
        this.editor?.chain().focus().toggleCode().run()
    }

    private unsetAllMarks(): void {
        this.editor?.chain().focus().unsetAllMarks().run()
    }

    private toggleBulletList(): void {
        this.editor?.chain().focus().toggleBulletList().run()
    }

    private toggleOrderedList(): void {
        this.editor?.chain().focus().toggleOrderedList().run()
    }

    private toggleCodeBlock(): void {
        this.editor?.chain().focus().toggleCodeBlock().run()
    }

    private setParagraph(): void {
        this.editor?.chain().focus().setParagraph().run()
    }

    private toggleBlockquote(): void {
        this.editor?.chain().focus().toggleBlockquote().run();
    }

    private setTextAlignLeft(): void {
        /* @ts-ignore */
        this.editor?.chain()?.focus().setTextAlign('left').run();
    }

    private setTextAlignCenter(): void {
        /* @ts-ignore */
        this.editor?.chain().focus().setTextAlign('center').run()
    }

    private setTextAlignRight(): void {
        /* @ts-ignore */
        this.editor?.chain().focus().setTextAlign('right').run();
    }

    private setTextAlignBetween(): void {
        /* @ts-ignore */
        this.editor?.chain().focus().setTextAlign('justify').run();
    }

    private toggleUnderline():void {
        this.editor?.chain().focus()
            .toggleUnderline()
            .run()
    }

    private undo(): void {
        this.editor?.chain().focus().undo().run()
    }

    private redo(): void {
        this.editor?.chain().focus().redo().run()
    }

    public render(): TemplateResult {
        const {
            toggleBold,
            toggleItalic,
            toggleStrike,
            toggleCode,
            unsetAllMarks,
            setParagraph,
            toggleBulletList,
            toggleOrderedList,
            toggleCodeBlock,
            toggleBlockquote,
            setTextAlignLeft,
            setTextAlignCenter,
            setTextAlignRight,
            setTextAlignBetween,
            undo,
            redo,
            toggleUnderline,
        } = ToolbarConfig;
        return html`
    <div class="editor-toolbar-buttonGroup">
        <button style=${styleMap({
            backgroundImage: `url(${toggleBold.icon})`
        })} @click=${this.toggleBold} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleItalic.icon})`
        })} @click=${this.toggleItalic} class="editor-toolbar-button"></button>
                        <button style=${styleMap({
            backgroundImage: `url(${toggleUnderline.icon})`
        })} @click=${this.toggleCode} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleStrike.icon})`
        })} @click=${this.toggleStrike} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${setTextAlignLeft.icon})`
        })} @click=${this.setTextAlignLeft} class="editor-toolbar-button"></button>
                      <button style=${styleMap({
            backgroundImage: `url(${setTextAlignCenter.icon})`
        })} @click=${this.setTextAlignCenter} class="editor-toolbar-button"></button>
          <button style=${styleMap({
            backgroundImage: `url(${setTextAlignRight.icon})`
        })} @click=${this.setTextAlignRight} class="editor-toolbar-button"></button>
                  <button style=${styleMap({
            backgroundImage: `url(${setTextAlignBetween.icon})`
        })} @click=${this.setTextAlignBetween} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleCode.icon})`
        })} @click=${this.toggleCode} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${unsetAllMarks.icon})`
        })} @click=${this.unsetAllMarks} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${setParagraph.icon})`
        })} @click=${this.setParagraph} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleBulletList.icon})`
        })} @click=${this.toggleBulletList} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleOrderedList.icon})`
        })} @click=${this.toggleOrderedList} class="editor-toolbar-button"></button>
        <button style=${styleMap({
            backgroundImage: `url(${toggleCodeBlock.icon})`
        })} @click=${this.toggleCodeBlock} class="editor-toolbar-button"></button>
                <button style=${styleMap({
            backgroundImage: `url(${toggleBlockquote.icon})`
        })} @click=${this.toggleBlockquote} class="editor-toolbar-button"></button>

<button style=${styleMap({
            backgroundImage: `url(${undo.icon})`
        })} @click=${this.undo} class="editor-toolbar-button"></button>
                  <button style=${styleMap({
            backgroundImage: `url(${redo.icon})`
        })} @click=${this.redo} class="editor-toolbar-button"></button>
    </div>`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'crossview-ui-editortoolbar': CrossViewUIEditorToolbar;
    }
}

if (!window.customElements.get('crossview-ui-editortoolbar')) {
    window.customElements.define('crossview-ui-editortoolbar', CrossViewUIEditorToolbar);
}