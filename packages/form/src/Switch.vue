<script>
import { h } from "vue";
export default {
  name: "m-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 40
    }
  },
  data() {
    return {
      wider: false,
      intervalCode: [],
      waitTime: 100
    };
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue"
  },
  computed: {
    classes() {
      let classes = ["shape switch"];
      if (this.disabled) classes.push("disabled");
      classes.push(this.modelValue ? "on" : "off");
      if (this.wider) classes.push("wider");
      return classes;
    },
    styles() {
      let styles = {};
      styles["--SIZE"] = this.size + "px";
      return styles;
    }
  },
  methods: {
    change: function() {
      if (!this.disabled) {
        this.$emit("update:modelValue", this.modelValue ? false : true);
        console.log(this.modelValue);
      }
    },
    toWider() {
      let inervalCode = setInterval(() => {
        this.wider = true;
      }, this.waitTime);
      this.intervalCode.push(inervalCode);
    },
    cancellation() {
      if (this.intervalCode) {
        this.intervalCode.forEach(code => {
          clearInterval(code);
        });
        this.intervalCode = [];
        this.wider = false;
      }
    }
  },
  render() {
    return h("div", {
      class: this.classes,
      style: this.styles,
      // 事件
      onClick: this.change,
      onMousedown: this.toWider,
      // onTouchstart: this.toWider,
      onMouseup: this.cancellation,
      onTouchend: this.cancellation,
      onMouseout: this.cancellation
    });
  }
};
</script>
