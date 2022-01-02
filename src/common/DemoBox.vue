<template>
  <m-card class="m-demo-box">
    <m-row Y="center" space-mode="between">
      <slot name="header">
        <span class="text-hint">{{ title }}</span>
      </slot>
      <m-button @click="expand_" text>Expand Code</m-button>
    </m-row>
    <hr />
    <div class="demo">
      <slot></slot>
    </div>
    <hr />
    <m-transition-folded title="展开Code">
      <m-code-box :code="code" v-show="value" />
    </m-transition-folded>
  </m-card>
</template>

<script>
export default {
  name: "m-demo-box",
  props: {
    expand: {
      type: Boolean,
      default: false
    },
    code: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: false
    };
  },
  methods: {
    expand_() {
      this.value = !this.value;
    }
  }
};
</script>

<style>
.m-demo-box {
  padding: 20px;
}
</style>
