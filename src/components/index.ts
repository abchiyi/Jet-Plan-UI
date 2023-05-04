import linkButton from "./linkButton.vue";
import previewDemoCode from "./previewDemoCode.vue";
import routerList from "./routerList.vue";
import basePage from "./basePage.vue";
import logoTitle from "./logoTitle.vue";
import toGiteeIcoButton from "./toGiteeIcoButton.vue";
import toGithubIcoButton from "./toGithubIcoButton.vue";
import mobileGuideNavigationAids from "./mobileGuideNavigationAids.vue";
import titleAnchorNav from "./titleAnchorNav.vue";
import ActionLabel from "./ActionLabel.vue";
import DocCodeBox from "./DocCodeBox.vue";
import navigationLinks from "./navigationLinks.vue";

// import moduleName from './';

export function setCookie(name: string, value: any) {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie =
    name + "=" + encodeURI(value) + ";expires=" + exp.toUTCString();
}

// export function getCookie(name: string) {
//   let { arr, reg } = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
//   if ((arr = document.cookie.match(reg))) {
//     return decodeURI(arr[2]);
//   } else {
//     return null;
//   }
// }

// export function redColorModeCookie() {
//   /* 从Cookie 加载颜色主题设置,如为'null'则设置为 'true'即'Light Mode' */
//   const colorMode = Boolean(getCookie("colorMode"));
//   const autoColor = Boolean(getCookie("autoColor"));
//   if (colorMode === null) {
//     setColorModeCookie(true, false);
//     return true;
//   }
//   return {
//     darkMode: colorMode,
//     darkModeAuto: autoColor,
//   };
// }

// export function setColorModeCookie(color: Boolean, auto: Boolean) {
//   setCookie("colorMode", color ? "1" : "");
//   setCookie("autoColor", auto ? "1" : "");
// }

export {
  previewDemoCode,
  routerList,
  basePage,
  linkButton,
  logoTitle,
  titleAnchorNav,
  toGiteeIcoButton,
  toGithubIcoButton,
  mobileGuideNavigationAids,
  ActionLabel,
  DocCodeBox,
  navigationLinks,
};

import type { App } from "vue";
interface components {
  [key: string]: any;
}

export const components: components = {
  previewDemoCode,
  routerList,
  basePage,
  linkButton,
  logoTitle,
  titleAnchorNav,
  toGiteeIcoButton,
  toGithubIcoButton,
  mobileGuideNavigationAids,
  ActionLabel,
  DocCodeBox,
  navigationLinks,
};

export default (app: App) => {
  for (const key in components) {
    app.component(key, components[key]);
  }
};
