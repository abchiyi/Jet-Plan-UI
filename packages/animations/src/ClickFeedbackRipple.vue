<script>
import { h } from "vue";
export default {
  name: "ripple",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    calcDiameter() {
      const width = this.data.el.offsetWidth;
      const height = this.data.el.offsetHeight;
      return Math.sqrt(width * width + height * height) * 2 + "px";
    },
    getPosition(data) {
      // 获取父元素内点击定位
      return {
        left: data.event.clientX - data.el.offsetLeft + "px",
        top: data.event.clientY - data.el.offsetTop + "px",
      };
    },
  },
  computed: {
    styles() {
      return {
        "--diameter": this.calcDiameter(),
        "--opacity": this.data.opacity,
        ...this.getPosition(this.data),
        backgroundColor: this.data.color,
      };
    },
  },
  render() {
    return h("span", {
      style: this.styles,
    });
  },
};
</script>
<style scoped>
span {
  transform: translate(-50%, -50%);
  height: var(--diameter);
  width: var(--diameter);
  opacity: var(--opacity);
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
  height: 0;
  width: 0;
}

.ripple-leave-to {
  opacity: 0;
}
</style>
