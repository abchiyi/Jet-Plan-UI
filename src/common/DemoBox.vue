<template>
  <m-card class="m-demo-box">
    <m-row
      Y="center"
      space-mode="between"
    >
      <span class="text-hint">{{ title }}</span>
      <m-button
        @click="expand_"
        text
      >View Code</m-button>
    </m-row>
    <div class="demo-box-header">
      <slot name="header"></slot>
    </div>
    <div class="demo-box-show-demo">
      <slot></slot>
    </div>
    <m-transition-folded title="展开Code">
      <m-code-box
        :code="code"
        v-show="value"
        lang="javascript"
      />
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
  data () {
    return {
      value: false
    };
  },
  methods: {
    expand_ () {
      this.value = !this.value;
    }
  }
};
</script>

<style>
.m-demo-box {
  padding: 20px;
}
.demo-box-show-demo {
  background-color: var(--background);
  border-radius: var(--m-radius);
  padding: 1rem 2rem;
  margin: 20px 0;
}
</style>
