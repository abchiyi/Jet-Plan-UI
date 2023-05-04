import { reTextColor } from "..";

function getTransitionDuration(el) {
  return parseFloat(window.getComputedStyle(el).transitionDuration);
}

function checkAndSetTransition(el) {
  if (!getTransitionDuration(el)) {
    el.style.transition = "1ms ease-in-out";
  }
}

export default {
  name: "auto-color",
  mounted(el) {
    checkAndSetTransition(el);
    el.addEventListener(
      "transitionend",
      () => {
        checkAndSetTransition(el);
        reTextColor(el);
      },
      false
    );
    reTextColor(el);
  },
  updated(el) {
    checkAndSetTransition(el);
    setTimeout(() => {
      reTextColor(el);
    }, getTransitionDuration(el) * 1000);
  },
};
