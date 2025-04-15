import { html, fixture, expect } from '@open-wc/testing';
import "../portfolio-very-theme.js";

describe("PortfolioVeryTheme test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <portfolio-very-theme
        title="title"
      ></portfolio-very-theme>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
