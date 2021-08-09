<script>
import { h } from "vue";
export default {
  name: "m-switch",
  props: {
    value: {
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
    prop: "value",
    event: "change"
  },
  computed: {
    classes() {
      let classes = ["shape switch"];
      if (this.disabled) classes.push("disabled");
      classes.push(this.value ? "on" : "off");
      if (this.wider) classes.push("wider");
      return classes;
    },
    styles() {
      let styles = {};
      styles["--SIZE"] = this.size + "px";
      return styles;
    }
  },
  watch: {
    value() {
      // this.cancellation();
    }
  },
  methods: {
    change: function() {
      if (!this.disabled) {
        this.$emit("change", this.value ? false : true);
        console.log(this.value);
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
      on: {
        click: this.change,
        mousedown: this.toWider,
        touchstart: this.toWider,
        mouseup: this.cancellation,
        touchend: this.cancellation,
        mouseout: this.cancellation
      }
    });
  }
};
</script>
