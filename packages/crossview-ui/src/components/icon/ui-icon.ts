import { LitElement, html, css } from 'lit';
import type { TemplateResult } from 'lit';
import { property } from 'lit/decorators';
import solidpng from '@fortawesome/fontawesome-free/sprites/solid.svg';


// https://github.com/obsidiansoft-io/fa-icons
export class CrossViewUIIcon extends LitElement {

    @property({
        type: String,
    })
    color: string;

    @property({
        type: String,
        attribute: "class",
    })
    iClass: string;

    @property({
        type: String,
    })
    src: string;

    @property({
        attribute: false,
    })
    style: string;

    @property({
        type: String,
    })
    size: string;

    @property({
        type: String,
    })
    pathPrefix: string;


      static override styles = css`
        :host {
            display: inline-block;
            padding: 0;
            margin: 0;
        }
        :host svg {
            fill: var(--fa-icon-fill-color, currentcolor);
            width: var(--fa-icon-width, 19px);
            height: var(--fa-icon-height, 19px);
        }`;
    
      getSources(className: string): string {
        const PREFIX_TO_STYLE: Record<string, string> = {
          fas: "solid",
          far: "regular",
          fal: "light",
          fab: "brands",
          fa: "solid"
        };

        const normalizeIconName = (name: string): string => {
            const icon = name.replace("fa-", "");
            return icon;
        };

        const getPrefix = (iClass: string): [string, string] => {
          const data = iClass.split(" ");
          const [style, name] = data;
          return [PREFIX_TO_STYLE[style], normalizeIconName(name)];
        };

        const [type, id] = getPrefix(className);
        return `${solidpng}#${id}`;
      }

      constructor() {
        super();
        this.iClass = '';
        this.src = '';
        this.size = '';
        this.color = '';
        this.style = '';
        this.pathPrefix = '.';
      }

      parseStyles(): string {
        return `
          ${this.size ? `width: ${this.size};` : ''}
          ${this.size ? `height: ${this.size};` : ''}
          ${this.color ? `fill: ${this.color};` : ''}
          ${this.style}
        `;
      }

      render(): TemplateResult {
        this.src = this.getSources(this.iClass);
        return html`
          <svg 
            .style=${this.parseStyles()}>
            <use 
              href=${this.src}>
            </use>
          </svg>
        `;
      }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-icon': CrossViewUIIcon;
  }
}

if (!window.customElements.get('crossview-ui-icon')) {
  window.customElements.define('crossview-ui-icon', CrossViewUIIcon);
}