import {
  basicElementsInThisPageOfDesktop,
  basicElementsInThisPageOfMObile,
  routerLinkTest,
  locationIs,
} from "./tools";

import componentList from "../../packages/list.json";
function TestNavLinks(parentSelector: string) {
  context('测试"开始"导航组', () => {
    it('测试"开始"导航标题', () => {
      cy.visit("/guide");
      cy.get(`${parentSelector} > .links-start`)
        .children("h2")
        .should("contain", "开始");
    });

    it("链接快速开始", () => {
      routerLinkTest({
        selector: ` ${parentSelector} > .links-start li:nth-child(${1}) > *`,
        path: `/guide/quick-start`,
        ariaLabel: "快速开始",
        text: "快速开始",
        goBack: false,
        click: true,
      });
    });

    afterEach(() => {
      cy.get("h1")
        .should("have.length", 1)
        .should(jqHtmlEl => {
          jqHtmlEl[0];
          // XXX 检查页面标题内容是否正确
          expect(jqHtmlEl.text()).equal("快速开始");
        });
    });
  });

  context('测试"工具"导航组', () => {
    it("标题", () => {
      cy.visit("/guide");
      cy.get(`${parentSelector} > .links-tool`)
        .children("h2")
        .should("contain", "工具");
    });

    it("链接主题'主题'", () => {
      routerLinkTest({
        selector: `${parentSelector} > .links-tool a[href='/guide/theme']`,
        path: "/guide/theme",
        ariaLabel: "主题",
        text: "主题",
        click: true,
      });

      cy.get("h1").should("contain", "主题");
    });
  });

  it("测试组件文档导航", () => {
    const selector = `${parentSelector} > .links-component`;

    cy.get(`${selector} li`).should("have.length", componentList.length);

    for (const key of Object.keys(componentList)) {
      const numberKey = Number(key);
      routerLinkTest({
        selector: `${selector} li:nth-child(${numberKey + 1}) > *`,
        path: `/guide/${componentList[numberKey].compClassName.replace(
          "j-",
          ""
        )}`,
        ariaLabel: componentList[numberKey].compName,
        text: componentList[numberKey].compName,
        goBack: false,
        click: true,
      });
      cy.get("h1").should("contain", componentList[numberKey].compZhName);
    }
  });
}

describe("Guide", () => {
  it("测试页面基本元素", () => {
    cy.visit("/guide");
    basicElementsInThisPageOfDesktop();
    basicElementsInThisPageOfMObile();
  });

  context("测试副 'AppBar'", () => {
    beforeEach(() => {
      cy.viewport("iphone-xr");
      cy.visit("/guide");
    });

    it("仅显示于移动端", () => {
      cy.get("#sub-app-bar").should("be.visible");

      cy.viewport("macbook-16");
      cy.visit("/guide");
      cy.get("#sub-app-bar").should("not.be.visible");
    });
    it("滑动时固定于页面顶部", () => {
      cy.get("#sub-app-bar")
        .should("have.css", "position", "sticky")
        .should("have.css", "top", "-1px"); // 防止露出底部文本以及隐藏分割线
    });
    it("sub app bar 左侧的菜单按钮", () => {
      cy.get("#sub-app-bar > button:nth-child(1)")
        .should("contain.text", "菜单")
        // 点击打开侧栏
        .click();
      // cy.get("");
    });
  });

  context("测试 '#drawer-left' ", () => {
    beforeEach(() => {
      cy.viewport("iphone-xr");
      cy.visit("/guide");
    });
    it("点击菜单按钮在左侧展开抽屉", () => {
      cy.get("#drawer-left").should("not.be.visible");
      cy.get("#sub-app-bar button").click();
      cy.get("#drawer-left").should("be.visible");
    });
    it("点击抽屉外遮罩关闭抽屉", () => {
      cy.get("#drawer-left").should("not.be.visible");
      cy.get("#sub-app-bar button").click();
      cy.get("#drawer-left").should("be.visible");
      cy.get("#drawer-mask").click("bottomRight");
      cy.get("#drawer-left").should("not.be.visible");
    });

    it("抽屉遮罩是同步显示的", () => {
      cy.get("#sub-app-bar button").click();
      cy.get("#drawer-left").should("be.visible");
      cy.get("#drawer-mask").should("be.visible");

      cy.get("#drawer-mask").click("bottomRight");
      cy.get("#drawer-left").should("not.be.visible");
      cy.get("#drawer-mask").should("not.be.visible");
    });
  });

  context("测试文档导航", () => {
    it("/guide 链接重定向", () => {
      cy.visit("/guide");
      // 链接不完整时默认定向到 '/guide/quick-start'
      locationIs("/guide/quick-start");
    });

    context("Desktop:导航链接测试", () => {
      beforeEach(() => {
        cy.viewport("macbook-16");
        cy.visit("/guide");
        // 目录是否正确显示
        cy.get("#sidebar-right .title-anchor-nav").should("be.visible");
      });

      afterEach(() => {
        cy.get("#guide-doc h2").then(value => {
          value.each((index, element) => {
            cy.get("#sidebar-right").contains(element.innerText);
          });
        });
      });

      // it("测试页面锚点", () => {
      //   cy.visit("/guide/theme"); // 使用主题文档测试导航
      // });

      TestNavLinks("#sidebar-left");
    });

    context("Mobile:导航链接测试", () => {
      beforeEach(() => {
        cy.viewport("iphone-xr");
        cy.visit("/guide");
        cy.get("#sub-app-bar button").click();
      });
      TestNavLinks("#drawer-left");
    });
  });
});
