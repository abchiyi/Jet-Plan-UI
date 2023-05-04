import {
  basicElementsInThisPageOfDesktop,
  basicElementsInThisPageOfMObile,
} from "./tools";

describe("About", () => {
  it("测试页面基本元素", () => {
    cy.viewport("macbook-16");
    cy.visit("/");
    cy.get("header a[href='/about']").click();
    cy.get("h1").should("contain", "关于");
    basicElementsInThisPageOfDesktop();
    basicElementsInThisPageOfMObile();
  });
});
