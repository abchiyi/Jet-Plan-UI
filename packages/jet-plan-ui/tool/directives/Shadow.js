import { shadowPainter, SHADOW_PAINTER_ERROR } from "../dom";

function setSahdow(el, binding) {
  let direction = binding.arg ? binding.arg : "center";

  try {
    el.style.boxShadow = shadowPainter(direction, binding.value);
  } catch (e) {
    if (e instanceof SHADOW_PAINTER_ERROR)
      console.error(
        `v-shadow:DIRECTON_ERROR:ErrorArg: ${direction}
            Only supports:
            [default:center ['top', 'bottom', 'left', 'right']]`
      );
  }
}

export default {
  name: "shadow",
  mounted(el, binding) {
    setSahdow(el, binding);
  },
  updated(el, binding) {
    setSahdow(el, binding);
  },
};
