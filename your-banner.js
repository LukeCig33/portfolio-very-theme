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
 * @element your-banner
 */
export class YourBanner extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "your-banner";
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
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #00000066;
      position: fixed;
      top: 100px;
      left: 0;
      height: 100px;
      width: 100%;
      right: 0;
      z-index: 1;
    }

    a {
      padding: 10px;
      display: inline-block;
      margin: 10px;
      background-color: white;
      border-radius: 8px;
      border: 1px solid white;
      color: var(--ddd-theme-accent) !important;
      text-decoration: none;
    }
      `,
    ];
  }

  // Lit render the HTML
  render() {
    return html`
      <a href="#1">About</a>
      <a href="#2">Research</a>
      <a href="#3">Presentations & Publications</a>
      <a href="#4">Future Goals</a>
      <a href="#5">Contact</a>
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

globalThis.customElements.define(YourBanner.tag, YourBanner);
