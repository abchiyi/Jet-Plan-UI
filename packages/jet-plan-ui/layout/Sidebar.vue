<template>
  <jDrawer :class="classes" :expand="expand" :from="right ? 'right' : 'left'">
    <slot />
  </jDrawer>
</template>

<script>
import jDrawer from './src/drawer.vue';
export default {
  name: 'j-sidebar',
  components: { jDrawer },
  props: {
    expand: {
      type: Boolean,
      required: true,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return ['j-sidebar', 'frosted-glass'];
    },
    postiton() {
      return this.right ? 'right' : 'left';
    },
  },
};
</script>

<style scoped>
.j-sidebar {
  overflow-y: scroll;
  position: fixed;
  height: 100vh;
  bottom: 0;
  top: 0;
  left: 0;
}

.j-sidebar.right {
  left: unset;
  right: 0;
}

/* Firefox  */
@supports (scrollbar-width: none) {
  .j-sidebar {
    /* overflow: -moz-scrollbars-none; */
    scrollbar-width: none;
  }
}

/* chrome and Safari */
.j-sidebar::-webkit-scrollbar {
  display: none;
}

/* IE 10+ */
.j-sidebar {
  -ms-overflow-style: none;
}
</style>
