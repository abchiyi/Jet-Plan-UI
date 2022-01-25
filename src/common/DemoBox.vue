<template>
  <m-card class="m-demo-box">
    <m-row Y="center" space-mode="between">
      <slot name="header">
        <span class="text-hint">{{ title }}</span>
      </slot>
      <m-button @click="expand_" text>View Code</m-button>
    </m-row>
    <div class="demo">
      <slot></slot>
    </div>
    <m-transition-folded title="展开Code">
      <m-code-box :code="code" v-show="value" lang="html" />
    </m-transition-folded>
  </m-card>
</template>

<script>
export default {
  name: "demo-box",
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
.demo {
  background-color: var(--background);
  border-radius: var(--m-radius);
  padding: 1rem 2rem;
  margin: 20px;
}
</style>
