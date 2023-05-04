import {
  routerLinkTest,
  locationIs,
  basicElementsInThisPageOfDesktop,
  basicElementsInThisPageOfMObile,
} from "./tools";
function linkTest() {
  // logo 下方有一个快速开始按钮
  routerLinkTest({
    selector: "a[href='/guide/quick-start']",
    path: "/guide/quick-start",
    ariaLabel: "快速开始",
    text: "快速开始",
    goBack: false,
    click: false,
  });

  cy.get("a[href='/guide/quick-start']").click();
  locationIs("/guide/quick-start");

  // 当链接不完整时重定向到"快速开始"页
  cy.visit("/guide");
  locationIs("/guide/quick-start");

  cy.visit("/");
  // 在快速开始按钮旁边有一个 ‘安装’ 按钮
  routerLinkTest({
    selector: "a[href='/guide/quick-start'] + a",
    ariaLabel: "安装",
    path: "/install",
    text: "安装",
    goBack: true,
    click: true,
  });
}

describe("jet-plan-ui doc test", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("测试页面基本元素", () => {
    basicElementsInThisPageOfDesktop();
    basicElementsInThisPageOfMObile();
  });

  it("DeskTop&Tablet", () => {
    cy.viewport("macbook-16");
    // 主页中 logo 和 标题以及功能按钮是紧贴在一起的
    // logo 居右
    cy.get("#title-group > #left")
      .should("have.css", "justify-content", "end")
      .should("have.css", "display", "flex");

    // 标题&按钮组居左
    cy.get("#title-group > #right");

    // 标题,字体为 72px
    cy.get("#title-group h1")
      .should("have.css", "font-size", "72px")
      .contains("Jet Plan UI");

    // 副标题，字体为 24px
    cy.get("#title-group h1 + p")
      .should("have.css", "font-size", "24px")
      .contains("基于 Vue 3 的扁平化 UI 组件库");

    // 按钮字体为 24px
    cy.get("#title-group .j-button")
      .should("have.length", 2)
      .should("have.css", "font-size", "24px")
      .next()
      .should("have.css", "font-size", "24px");

    linkTest();
  });

  it("Mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/");
    // 主页中 logo 和 标题以及功能按钮是居中的
    // logo 居中
    cy.get("#title-group > #left")
      .should("have.css", "justify-content", "center")
      .should("have.css", "display", "flex");

    // 标题&按钮组居中
    cy.get("#title-group > #right")
      .should("have.css", "justify-content", "center")
      .should("have.css", "display", "flex");

    // 标题,字体为 48px
    cy.get("#title-group h1")
      .should("have.css", "font-size", "48px")
      .contains("Jet Plan UI");

    // 副标题，字体为 16px
    cy.get("#title-group h1 + p")
      .should("have.css", "font-size", "16px")
      .contains("基于 Vue 3 的扁平化 UI 组件库");

    // 按钮字体为 24px
    cy.get("#title-group .j-button")
      .should("have.length", 2)
      .should("have.css", "font-size", "24px")
      .next()
      .should("have.css", "font-size", "24px");

    linkTest();
  });
});
