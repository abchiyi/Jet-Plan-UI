<template>
  <j-transition-slide :opacity="false" :position="from">
    <div v-show="expand" :class="classes">
      <slot />
    </div>
  </j-transition-slide>
</template>


<script>
export default {
  name: 'j-drawer',
  props: {
    expand: {
      type: Boolean,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      width: undefined,
      show: false,
    };
  },

  computed: {
    classes() {
      return ['j-drawers', this.from];
    },
  },
};
</script>

<style>
.j-drawers {
  overflow-y: scroll;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

.j-drawers.right {
  left: unset;
}

.j-drawers.left {
  right: unset;
}
.j-drawers.top {
  bottom: unset;
}

.j-drawers.bottom {
  top: unset;
}

/* Firefox  */
@supports (scrollbar-width: none) {
  .j-drawers {
    /* overflow: -moz-scrollbars-none; */
    scrollbar-width: none;
  }
}

/* chrome and Safari */
.j-drawers::-webkit-scrollbar {
  display: none;
}

/* IE 10+ */
.j-drawers {
  -ms-overflow-style: none;
}
</style>
