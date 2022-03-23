import {
    rgbToHex
} from "../lib";

function reTextColor(el) {
    function getBgColor(el) {
        return window.getComputedStyle(el).backgroundColor;
    }
    if (rgbToHex(getBgColor(el)).max < 0.6) {
        el.style.color = "var(--text-light)";
    } else {
        el.style.color = "var(--text-dark)";
    }
}

function getTransitionDuration(el) {
    return parseFloat(window.getComputedStyle(el).transitionDuration);
}

function checkAndSetTransition(el) {
    if (!getTransitionDuration(el)) {
        el.style.transition = '0.1s ease-in-out'
    }
}

export default {
    name: "auto-color",
    mounted(el) {
        checkAndSetTransition(el)
        el.addEventListener("transitionend", () => {
            checkAndSetTransition(el)
            reTextColor(el);
        }, false);
        reTextColor(el);
    },
    updated(el) {
        checkAndSetTransition(el)
        setTimeout(() => {
            reTextColor(el);
        }, getTransitionDuration(el) * 1000);
    },
};
