<template>
  <m-row
    class="header"
    Y="center"
    X="center"
    spaceMode="between"
  >
    <!-- 标题 -->
    <slot name="title">
      <h1>{{title}}</h1>
    </slot>
    <!-- 侧栏开关 -->
    <div>
      <m-button
        text
        title="menu"
        @click.stop="click"
      >
        <i
          style="font-size: 2rem"
          class="bi bi-list"
        ></i>
      </m-button>
    </div>
  </m-row>
</template>

<script>
export default {
  name: "demo-header",
  data () {
    return {
      // TODO读取cookis确定值
      colorMode: true
    };
  },
  props: {
    modelValue: {
      type: Boolean
    },
    title: {
      default: 'Mousse UI',
      type: String,
    }
  },
  methods: {
    click () {
      this.$emit("update:modelValue", this.modelValue ? false : true);
    }
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue"
  }
};
</script>
