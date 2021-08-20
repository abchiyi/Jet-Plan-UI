<template>
  <SlideTransition
    class="bar"
    :position="right ? 'right' : 'left'"
    :value="syncShow"
  >
    <m-background style="height: 100%" :style="styles" bgBlur>
      <header></header>
      <slot name="header"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </m-background>
  </SlideTransition>
</template>

<script>
import { SlideTransition } from "../animations";
export default {
  components: {
    SlideTransition
  },
  name: "m-sidebar",
  mounted() {
    this.syncShow = this.expand;
  },
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: undefined,
      syncShow: false
    };
  },
  computed: {
    styles() {
      let styles = {};
      styles["--postiton"] = -1 * this.width + "px";
      return styles;
    }
  },
  watch: {
    expand() {
      this.syncShow = this.expand;
    },
    syncShow() {
      this.$emit("expand", this.syncShow);
    }
  }
};
</script>

<style scoped>
.bar {
  overflow-y: scroll;
  height: 100vh;
  z-index: 91;
  top: 0;
}

/* Firefox  */
.bar {
  /* overflow: -moz-scrollbars-none; */
  scrollbar-width: none;
}

/* chrome and Safari */
.bar::-webkit-scrollbar {
  display: none;
}

/* IE 10+ */
.bar {
  -ms-overflow-style: none;
}
</style>
