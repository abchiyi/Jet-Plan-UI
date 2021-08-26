<script>
export default {
  name: "ripple",
  props: {
    event: {
      type: [MouseEvent, TouchEvent],
      default: undefined,
    },
    color: {
      type: String,
      default: undefined,
    },
    opacity: {
      type: String,
      default: undefined,
    },
    animationTime: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    calcDiameter(event) {
      const width = event.target.offsetWidth;
      const height = event.target.offsetHeight;
      return Math.sqrt(width * width + height * height) * 2 + "px";
    },
    getPosition(event) {
      // 获取父元素内点击定位
      return {
        left: event.clientX - event.target.offsetLeft + "px",
        top: event.clientY - event.target.offsetTop + "px",
      };
    },
  },
  computed: {
    styles() {
      return {
        "--diameter": this.calcDiameter(this.event),
        "--animation-time": this.animationTime,
        ...this.getPosition(this.event),
        backgroundColor: this.color,
      };
    },
  },
  render(h) {
    return h(
      "transition",
      {
        props: {
          name: "ripple",
          appear: true,
        },
      },
      [
        h("span", {
          style: this.styles,
        }),
      ]
    );
  },
};
</script>
<style scoped>
span {
  transform: translate(-50%, -50%);
  height: var(--diameter);
  width: var(--diameter);
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  user-select: none;
  display: block;
  opacity: 0.5;
}

.ripple-enter-active,
.ripple-leave-active {
  transition-duration: var(--animation-time);
  transition-property: opacity height width;
  transition-timing-function: ease-out;
}

.ripple-enter {
  height: 0;
  width: 0;
}

.ripple-leave-to {
  opacity: 0;
}
</style>
