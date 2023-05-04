type callback = (is: Boolean) => void;

export type linkOptions = {
  ariaLabel: string;
  selector: string;
  goBack?: boolean;
  click?: boolean;
  path: string;
  text: string;
};

export function locationIs(
  path: string,
  callback: callback | undefined = undefined
) {
  cy.location().should(location => {
    if (callback) {
      callback(location.pathname == path);
    } else {
      expect(location.pathname).to.equal(path);
    }
  });
}

export function linkTest(options: linkOptions) {
  const el = cy.get(options.selector);
  // href
  el.should("have.attr", "aria-label", options.ariaLabel);
  el.should("have.attr", "href", options.path);
  if (options.text) el.contains(options.text);
}

export function routerLinkTest(options: linkOptions) {
  // 基础属性测试
  linkTest(options);

  // 定位测试
  if (options.click) {
    cy.get(options.selector).click();
    locationIs(options.path);
  }

  // 返回页面继续测试
  if (options.goBack) cy.go("back");
}

export function newTagLinkTest(options: linkOptions) {
  linkTest(options);
  cy.get(options.selector)
    .should("have.attr", "target", "_blank")
    .should("have.attr", "rel", "noopener noreferrer");
}

function footerTest() {
  // 页脚包含了 License 信息和创作者，并且文本是居中的
  cy.get("footer")
    .children("p.license")
    .contains("Released under the Apache 2.0 License. Created by abchiyi")
    .should("have.css", "font-size", "12px")
    .should("have.css", "opacity", "0.3");
}

export function basicElementsInThisPageOfDesktop() {
  function headerTest() {
    cy.get("#header-group")
      // 导航栏两端相对屏幕有留白
      .should("have.css", "max-width", "1400px")
      // 导航栏是左右排列元素的
      .should("have.css", "justify-content", "space-between")
      .children()
      .should("have.length", 2);

    // 导航栏包含一个标题按钮，按钮内有一个'logo'，按钮内含有'ui'名称
    // 点击标题按钮会回到主页
    cy.get("#header-group > #logo-title").children("img");
    routerLinkTest({
      selector: "#header-group > #logo-title",
      ariaLabel: "前往主页",
      text: "JetPlanUI",
      goBack: false,
      click: true,
      path: "/",
    });

    // Test 不在主页时调用 .go("back")
    locationIs("/", v => {
      if (!v) cy.go("back");
    });

    // 导航栏右边包含4个导向链接
    cy.get("#nav").children().should("have.length", 4);

    const LTC_tpl = {
      goBack: true,
      click: true,
    };
    // 关于链接
    routerLinkTest({
      selector: "#nav > a[href='/about']",
      ariaLabel: "关于",
      path: "/about",
      text: "关于",
      ...LTC_tpl,
    });
    // 组件列表链接
    routerLinkTest({
      selector: "#nav > a[href='/component-list']",
      path: "/component-list",
      ariaLabel: "组件列表",
      text: "组件列表",
      ...LTC_tpl,
    });
    // 到gitee
    newTagLinkTest({
      selector: "#nav > [href='https://gitee.com/abchiyi/jet-plan-ui']",
      path: "https://gitee.com/abchiyi/jet-plan-ui",
      ariaLabel: "前往gitee",
      ...LTC_tpl,
      text: "",
    });
    // 到github
    newTagLinkTest({
      selector: "#nav > [href='https://github.com/abchiyi/Jet-Plan-UI']",
      path: "https://github.com/abchiyi/Jet-Plan-UI",
      ariaLabel: "前往github",
      ...LTC_tpl,
      text: "",
    });
  }

  cy.viewport("macbook-16");
  headerTest();
  footerTest();
}

export function basicElementsInThisPageOfMObile() {
  function headerTest() {
    cy.get("#header-group")
      //   导航栏是左右排列元素的
      .should("have.css", "justify-content", "space-between")
      .children()
      .should("have.length", 2);

    // 导航栏右侧是一个菜单按钮
    cy.get("#header-group > #nav-group >  #open-drop-menu")
      // 点击它打开下拉抽屉
      .click();
    // 显示下拉抽屉
    cy.get("#drawer-top").should("be.visible");
    // 抽屉内含有4个导航链接

    function clickOpenDropMenu() {
      cy.get("#open-drop-menu").click();
    }
    const selectorNav = "#nav-link-group-drop-menu";
    const LTC_tpl = {
      goBack: true,
      click: true,
    };

    // 关于链接
    routerLinkTest({
      selector: `${selectorNav} > a[href='/about']`,
      ariaLabel: "关于",
      path: "/about",
      text: "关于",
      ...LTC_tpl,
    });

    // 组件列表链接
    clickOpenDropMenu();
    routerLinkTest({
      selector: `${selectorNav} > a[href='/component-list']`,
      path: "/component-list",
      ariaLabel: "组件列表",
      text: "组件列表",
      ...LTC_tpl,
    });

    // 在下方有一组以图标形式的网站链接
    clickOpenDropMenu();
    // 转到 gitee
    newTagLinkTest({
      selector:
        "#social-links > [href='https://gitee.com/abchiyi/jet-plan-ui']",
      path: "https://gitee.com/abchiyi/jet-plan-ui",
      ariaLabel: "前往gitee",
      ...LTC_tpl,
      text: "",
    });
    // 转到 github
    newTagLinkTest({
      selector:
        "#social-links > [href='https://github.com/abchiyi/Jet-Plan-UI']",
      path: "https://github.com/abchiyi/Jet-Plan-UI",
      ariaLabel: "前往github",
      ...LTC_tpl,
      text: "",
    });

    // 下拉菜单开启 #open-drop-menu 按钮应显示为 “x”
    cy.get("#open-drop-menu").children("i").should("have.class", "bi-x");
  }

  cy.viewport("iphone-x");
  headerTest();
  footerTest();
}
