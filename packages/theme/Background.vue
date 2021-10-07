<script>
import { h } from "vue";
export default {
  name: "m-background",
  mounted() {
    this.emitSize();
  },
  props: {
    bgBlur: {
      type: Boolean,
      default: false
    },
    fillets: {
      // 圆角设置
      type: String,
      validator: v => {
        let value = v.toLowerCase();
        return [" ", "", "s", "m", "l", "full"].indexOf(value) !== -1;
      }
    }
  },
  data() {
    return {
      size: undefined
    };
  },
  computed: {
    classes() {
      let classes = ["m-background"];
      if (this.bgBlur) classes.push("blur");
      if (this.fillets) classes.push("fillets-" + this.fillets);
      return classes;
    },
    styles() {
      let styles = {};
      if (this.size) styles["--height"] = this.size.height + "px";
      return styles;
    }
  },
  methods: {
    getSize() {
      let el = this.$refs.bg.getBoundingClientRect();
      return {
        height: el.height,
        width: el.width
      };
    },
    emitSize() {
      if (this.$refs.bg) {
        let data = this.getSize();
        this.$emit("size", data);
        this.size = data;
      }
    }
  },
  render() {
    return h(
      "div",
      {
        class: this.classes,
        style: this.styles,
        ref: "bg"
      },
      this.$slots
    );
  }
};
</script>

<style>
.m-background {
  transition: all 0.4s ease-in-out;
  background: var(--white);
  overflow: hidden;
}

@supports (backdrop-filter: blur()) {
  .m-background.blur {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
  }
}

/* 圆角尺寸 */
.m-background.fillets-s {
  border-radius: 4px;
}
.m-background.fillets-m {
  border-radius: 8px;
}
.m-background.fillets-l {
  border-radius: 1rem;
}
.m-background.fillets-full {
  border-radius: var(--height);
}

/*深色*/
@media (prefers-color-scheme: dark) {
  .m-background {
    background: rgb(53, 54, 58);
    color: rgba(238, 238, 238, 1);
  }
}

/*浅色*/
@media (prefers-color-scheme: light) {
  .m-background {
    background: rgb(255, 255, 255);
    color: rgba(51, 51, 51, 1);
  }
}
</style>
