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
 * `scroll-button`
 *
 * @demo index.html
 * @element scroll-button
 */
export class ScrollButton extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "scroll-button";
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
      position: fixed !important;
      bottom: 20px !important;
      right: 20px !important;
      z-index: 9999;
      display: block;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }

    img {
      width: 40px;
      height: 40px;
    }
      `,
    ];
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Lit render the HTML
  render() {
    return html`
      <button @click="${this.scrollToTop}">
        <img
          src="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-up-arrow-icon-png-image_956434.jpg"
          alt="Scroll to top"
        />
      </button>
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

globalThis.customElements.define(ScrollButton.tag, ScrollButton);
