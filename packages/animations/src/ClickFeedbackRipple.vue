<script>
import { getOffset } from "../../tool/src/dom";
import { h } from "vue";
export default {
  name: "ripple",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    calcDiameter() {
      const width = this.data.el.offsetWidth;
      const height = this.data.el.offsetHeight;
      return Math.sqrt(width * width + height * height) * 2 + "px";
    },
    getPosition(data) {
      // 获取父元素内点击定位
      const offset = getOffset(data.el);
      return {
        left: data.event.pageX - offset.x + "px",
        top: data.event.pageY - offset.y + "px"
      };
    }
  },
  computed: {
    styles() {
      return {
        "--diameter": this.calcDiameter(),
        "--opacity": this.data.opacity,
        ...this.getPosition(this.data),
        backgroundColor: this.data.color
      };
    }
  },
  render() {
    return h("span", {
      class: "m-raipple",
      style: this.styles
    });
  }
};
</script>
<style scoped>
span {
  transform: translate(-50%, -50%);
  opacity: var(--opacity);
  height: var(--diameter);
  width: var(--diameter);
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  user-select: none;
  display: block;
}

.ripple-enter-active,
.ripple-leave-active {
  transition-property: opacity height width;
  transition-timing-function: ease-out;
}

.ripple-enter-from {
  transform: translate(-50%, -50%) scale(0);
}
.ripple-enter-to {
  transform: translate(-50%, -50%) scale(1);
}

.ripple-leave-to {
  opacity: 0;
}
</style>
