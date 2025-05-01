/**
 * Copyright 2025 LukeCig33
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/scroll-button/scroll-button.js";
import "@haxtheweb/simple-cta/simple-cta.js";

/**
 * `portfolio-screen`
 *
 * @demo index.html
 * @element portfolio-screen
 */
export class PortfolioScreen extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-screen";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "",
    };
    this.registerLocalization({
      context: this,
    });
  }

   // Lit reactive properties
   static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      color: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: 0;
        padding: var(--ddd-spacing-4);
        width: 100%;
        height: 100vh; /* ensure it's full screen */
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .content-layout {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        gap: 20px;
      }
      .section {
        margin: 20px;
        padding: 10px 40px 10px 10px;
        border-radius: 8px;
        color: var(--ddd-theme-primary);
        text-align: right;
      }
      .section-image {
        max-width: 200px;
        height: auto;
        border-radius: 8px;
        margin: 0 0 20px 20px;
        display: block;
      }
      .text-content {
        text-align: left;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-width: 800px; /* optional, for cleaner text width */
        padding: 20px;
        color: var(--ddd-theme-secondary);
      }
      .text-content p {
        text-align: left;
      }
      .anchor-offset {
        position: relative;
        top: -100px; /* adjust based on banner height */
        height: 0;
      }
      portfolio-screen::before {
        content: "";
        display: block;
        height: 100px; /* or whatever your banner height is */
        margin-top: -100px;
        visibility: hidden;
      }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <div
        class="wrapper"
        style="background-color: var(--ddd-primary-${this.color});"
      >
        <div class="section">
          <h1>${this.title}</h1>
          <div class="content-layout">
            <slot name="image"></slot>
            <div class="text-content">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioScreen.tag, PortfolioScreen);
