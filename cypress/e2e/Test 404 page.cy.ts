import {
  basicElementsInThisPageOfDesktop,
  basicElementsInThisPageOfMObile,
} from "./tools";

describe("About", () => {
  it("测试页面基本元素", () => {
    cy.viewport("macbook-16");
    cy.visit("/#/404");
    basicElementsInThisPageOfDesktop();
    basicElementsInThisPageOfMObile();

    cy.visit("/#/404");
    cy.get("h1").should("contain", "404");
  });
});
