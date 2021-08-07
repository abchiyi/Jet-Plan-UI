<script>
import { h } from "vue";
export default {
  name: "m-col",
  props: {
    col: Number,
    xs: Number,
    sm: Number,
    md: Number,
    lg: Number,
    xl: Number,
    offset: Number,
    offsetXs: Number,
    offsetSm: Number,
    offsetMd: Number,
    offsetLg: Number,
    offsetXl: Number
  },
  methods: {
    calcWidth(number) {
      let num = (number * 100) / 24;
      // 在相对父元素和相对于屏幕尺寸间切换
      //   return number ? (this.relativeToScreen ? num + "vw" : num + "%") : "";
      return number ? (this.relativeToScreen ? num + "vw" : num + "%") : "";
      //   return this.relativeToScreen ? num + "vw" : num + "%";
    }
  },
  computed: {
    class() {
      return [
        this.xs != undefined ? "m-col-xs" : "",
        this.sm != undefined ? "m-col-sm" : "",
        this.md != undefined ? "m-col-md" : "",
        this.lg != undefined ? "m-col-lg" : "",
        this.xl != undefined ? "m-col-xl" : "",
        this.offset != undefined ? "offset" : "",
        this.offsetXs != undefined ? "offset-xs" : "",
        this.offsetSm != undefined ? "offset-sm" : "",
        this.offsetMd != undefined ? "offset-md" : "",
        this.offsetLg != undefined ? "offset-lg" : "",
        this.offsetXl != undefined ? "offset-xl" : ""
      ];
    },
    style() {
      return {
        // col
        col: this.col ? this.calcWidth(this.col) : "100%",
        xs: this.calcWidth(this.xs),
        sm: this.calcWidth(this.sm),
        md: this.calcWidth(this.md),
        lg: this.calcWidth(this.lg),
        xl: this.calcWidth(this.xl),
        // offset
        offset: this.calcWidth(this.offset),
        offsetXs: this.calcWidth(this.offsetXs),
        offsetSm: this.calcWidth(this.offsetSm),
        offsetMd: this.calcWidth(this.offsetMd),
        offsetLg: this.calcWidth(this.offsetLg),
        offsetXl: this.calcWidth(this.offsetXl),
        // hidden
        hiddenOnXs: !this.xs && this.xs != undefined ? "none" : "",
        hiddenOnSm: !this.sm && this.sm != undefined ? "none" : "",
        hiddenOnMd: !this.md && this.md != undefined ? "none" : "",
        hiddenOnLg: !this.lg && this.lg != undefined ? "none" : "",
        hiddenOnXl: !this.xl && this.xl != undefined ? "none" : ""
      };
    }
  },
  render() {
    return h(
      "div",
      {
        class: ["m-col", ...this.class]
      },
      this.$slots
    );
  }
};
</script>

<style>
/* --常规设置-- */

.m-col,
.m-col-xs,
.m-col-sm,
.m-col-md,
.m-col-lg,
.m-col-xl {
  transition: 0.3s ease-in-out;
  /* 内外边距和变宽将包含在总大小内 */
  box-sizing: border-box;
  display: inline-block;
  min-height: 1px;
}

.m-col {
  width: v-bind("style.col");
  padding: 0 2px;
}

/* 偏移 */
.m-col.offset {
  margin-left: v-bind("style.offset");
}

.m-row.reverse > .offset {
  margin-right: v-bind("style.offset");
  margin-left: unset;
}

/* --响应式-- */

/* xs */
@media (max-width: 575px) {
  .m-col-xs {
    width: v-bind("style.xs");
    display: v-bind("style.hiddenOnXs");
  }

  .m-col.offset-xs {
    margin-left: v-bind("style.offsetXs");
  }

  .row.reverse > .offset-xs {
    margin-right: v-bind("style.offsetXs");
    margin-left: unset;
  }
}

/* sm */
@media (min-width: 576px) {
  .m-col-sm {
    width: v-bind("style.sm");
    display: v-bind("style.hiddenOnSm");
  }

  .m-col.offset-sm {
    margin-left: v-bind("style.offsetSm");
  }

  .row.reverse > .offset-sm {
    margin-right: v-bind("style.offsetSm");
  }
}

/* md */
@media (min-width: 768px) {
  .m-col-md {
    width: v-bind("style.md");
    display: v-bind("style.hiddenOnMd");
  }

  .m-col.offset-md {
    margin-left: v-bind("style.offsetMd");
  }

  .row.reverse > .offset-md {
    margin-right: v-bind("style.offsetMd");
  }
}

/* lg */
@media (min-width: 992px) {
  .m-col-lg {
    width: v-bind("style.lg");
    display: v-bind("style.hiddenOnLg");
  }

  .m-col.offset-lg {
    margin-left: v-bind("style.offsetLg");
  }

  .row.reverse > .offset-lg {
    margin-right: v-bind("style.offsetLg");
  }
}

/* xl */
@media (min-width: 1200px) {
  .m-col-xl {
    width: v-bind("style.xl");
    display: v-bind("style.hiddenOnXl");
  }

  .m-col.offset-xl {
    margin-left: v-bind("style.offsetXl");
  }

  .row.reverse > .offset-xl {
    margin-right: v-bind("style.offsetXl");
  }
}
</style>
