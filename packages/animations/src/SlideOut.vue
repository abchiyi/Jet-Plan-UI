<script>
export default {
  name: "m-slide-transition",
  mounted() {
    if (this.$slots.default.length != 1) console.error("子节点数量大于1");
  },
  props: {
    position: {
      type: String,
      required: true,
      validator: function (value) {
        const checkout = ["left", "right", "top", "bottom"];
        return checkout.indexOf(value.toLowerCase()) !== -1;
      },
    },
    relativeToScreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      height: undefined,
      width: undefined,
    };
  },
  computed: {
    moveDistance() {
      return "translateX(-60px)";
    },
  },
  methods: {
    sync() {
      this.display = this.value;
      this.$emit("input", this.value);
    },
  },
  render(createElement) {
    return createElement(
      "transition",
      {
        props: { name: "m-slide-transition" },
        on: {
          enter: function (el) {
            el.style.transition = "all 400ms cubic-bezier(0.5, 0, 0, 0.95)";
          },
          leave: (el) => {
            el.style.transition = "all 400ms cubic-bezier(0.5, 0, 0, 0.95)";
          },

          beforeEnter: (el) => {
            // el.style.opacity = 0.5;
          },
          afterEnter: (el) => {
            el.style.transform = "unset";
            // el.style.opacity = 1;
          },

          beforeLeave: (el) => {
            el.style.transform = "translateX(-60px)";
            el.style.opacity = 0;
          },
          afterLeave: (el) => {
            el.style.transform = "unset";
            el.style.opacity = 1;
          },
        },
      },
      [this.$slots.default]
    );
  },
};
</script>
