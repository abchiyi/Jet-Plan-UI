<template>
  <div class="expand-menu">
    <j-button class="title" :style="styles" row text hover @click.stop="click">
      <j-row space-mode="between">
        <slot name="text">ShowMenu</slot>
        <i :class="iconClass"></i>
      </j-row>
    </j-button>
    <div class="more-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'expand-menu',
  props: {
    modelValue: {
      type: Boolean,
    },
    indentation: {
      type: [Number, String],
      default: 0,
    },
  },
  computed: {
    iconClass() {
      return ['bi bi-chevron-right', this.modelValue ? 'expand' : ''];
    },
    styles() {
      return {
        paddingLeft: this.indentation ? this.indentation + 'rem' : '',
      };
    },
  },
  methods: {
    click() {
      this.$emit('update:modelValue', !this.modelValue);
    },
  },
};
</script>
<style>
.expand-menu + .expand-menu {
  margin-top: 20px;
}
.expand-menu .title {
  font-weight: bold;
  font-size: 1.1rem;
}
.bi {
  transition: all 0.3s var(--ease-out);
}
.bi.expand {
  transform: rotate(90deg);
}
.more-content {
  margin-bottom: 0.5em;
}
.expand-hr {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
