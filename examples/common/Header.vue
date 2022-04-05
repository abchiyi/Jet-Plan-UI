<template>
  <j-row class="navbar" Y="center" spaceMode="between" reverse>
    <!-- 选项 -->
    <div id="header-options">
      <j-button text hover>About</j-button>

      <button-gitee text />
      <button-github text />
    </div>
    <j-col :lg="0" :xl="0">
      <!-- 侧栏开关 -->
      <j-button text title="menu" @click.stop="click">
        <i style="font-size: 1.8em" class="bi bi-list"></i>
      </j-button>
    </j-col>
  </j-row>
</template>

<script>
export default {
  name: 'demo-header',
  props: {
    modelValue: {
      type: Boolean,
    },
    title: {
      default: 'Mousse UI',
      type: String,
    },
  },
  data() {
    return {
      darkModeTransitionSwitch: true,
      darkMode: false,
    };
  },
  methods: {
    click() {
      this.$emit('update:modelValue', this.modelValue ? false : true);
    },
    switchMode() {
      this.darkModeTransitionSwitch = false;
    },
    darkModeSwitch() {
      setTimeout(() => {
        this.darkModeTransitionSwitch = true;
        this.darkMode = !this.darkMode;
      }, 400);
    },
  },
  watch: {
    darkMode(b) {
      this.$jetTheme.darkMode = b;
    },
  },
  model: {
    prop: 'modeValue',
    event: 'update:modelValue',
  },
};
</script>
<style scoped>
.navbar {
  height: 72px;
  width: 100%;
}

.navbar > #darkmode-switch {
  height: 16px;
  width: 18.6px;
}
</style>
