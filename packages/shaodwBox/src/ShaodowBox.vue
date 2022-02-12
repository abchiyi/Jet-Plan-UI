<script>
import { h } from "vue";

import {
  SHADOW_PAINTER_ERROR,
  chekcDirection,
  shadowPainter,
} from "../../tool/lib/inedx"

export default {
  name: "m-shaodw-box",
  props: {
    tag: { default: "div" },
    direction: {
      type: String,
      validator (v) {
        try {
          chekcDirection(v);
        } catch (error) {
          if (error instanceof SHADOW_PAINTER_ERROR)
            console.warn(`
            <m-shadow-box direction=!! ${v} !! >
            Prop:'direction' Only supports:
            [default:center ['top', 'bottom', 'left', 'right']]`);
          return false;
        }
        return true;
      }
    },
    intensity: { default: 1 }
  },
  render () {
    return h(
      this.tag,
      {
        class: ["m-shadow-box"],
        style: {
          boxShadow: shadowPainter(this.direction, this.intensity)
        }
      },
      {
        default: () => this.$slots.default()
      }
    );
  }
};
</script>

<style>
.m-shadow-box {
  transition: box-shadow 0.4s var(--ease-in-out);
}
</style>
