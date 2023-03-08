import type { TemplateResult } from 'lit';
import { css, html, LitElement, nothing } from 'lit';
import { property } from 'lit/decorators.js';

export class CrossViewUIImage extends LitElement {
  public static styles = css`
  .crossui-imgContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.2rem;
  line-height: 0.31rem;
  font-size: 0.19rem;
  color: #222;
  text-align: center;
}
.crossui-imgContent {
  width: auto;
}
.crossui-img {
  max-width: 100%;
  display: block;
  margin: 0 0.08rem 0.03rem 0.02rem;
  border-radius: 0.06rem;
}
.crossui-imgDesc {
  display: flex;
  flex-direction: row;
  margin: 0.03rem 0.09rem 0 0.04rem;
  font-size: 0.16rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.88;
  color: #666;
}
.crossui-imgUpArrow {
  position: relative;
  top: 0.05rem;
  margin-right: 0.05rem;
  width: 0;
  height: 0;
  border: 0.05rem solid #666;
  border-color: transparent transparent #666 transparent;
}

.crossui-placeholder,
.img {
  width: 100%;
  display: flex;
  background-position: center center;
  background-repeat: no-repeat;
}
.crossui-placeholder {
  background-size: 33%;
  background-color: #eaeaea;
  background-image: url(//mat1.gtimg.com/www/js/news/placeholder.png);
}
.crossui-imgRadius {
  background-size: cover;
  border-radius: 0.02rem;
}
.crossui-imgContentLazy {
  display: flex;
  width: 100%;
  background-color: #eee;
  height: 2rem;
  justify-content: center;
  align-items: center;
}`;

  @property({ type: String })
  public src = '';

  @property({ type: String })
  public index = '';

  @property({ type: String })
  public desc = '';

  @property({ type: Number })
  public gifsize = 0;

  @property({ type: String })
  public frameimgurl = '';

  @property({ type: Boolean })
  public  isLazyLoad = false;
  
  elmId: string;

  constructor() {
    super();
    this.elmId = `image-${parseInt(`${Math.random() * Number.MAX_SAFE_INTEGER}`, 10)}`;
    this.isLazyLoad = true;
  }

  firstUpdated(): void {
    const curImageElm = this.shadowRoot?.querySelector(`#${this.elmId}`);
    if (curImageElm) {
      new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            const lazyImage = entry.target;
            observer.unobserve(lazyImage);
            this.isLazyLoad = false;
            this.requestUpdate();
          }
        });
      }).observe(curImageElm);
    }
  }

  render(): TemplateResult {
    try {
      return html`
        <div class="crossui-imgContainer">
          <div class=${this.isLazyLoad ? 'crossui-imgContentLazy' : 'crossui-imgContent'}>
            <img
              class="crossui-img"
              src=${this.isLazyLoad
                ? 'https://mat1.gtimg.com/www/js/news/placeholder.png'
                : this.src}
              alt="图片"
              data-src=${this.src}
              id=${this.elmId}
            />
            ${this.desc
              ? html`<div class="crossui-imgDesc">
                  <div class="crossui-imgUpArrow"></div>
                  ${this.desc}
                </div>`
              : nothing}
          </div>
        </div>
      `;
    } catch (error: unknown) {
      console.error(error);
      return html``;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'crossview-ui-image': CrossViewUIImage;
  }
}

if (!window.customElements.get('crossview-ui-image')) {
  window.customElements.define('crossview-ui-image', CrossViewUIImage);
}