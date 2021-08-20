<template>
  <div>
    <m-demo-box>
      <template v-slot:header>
        <m-switch-item v-model="failed">失败</m-switch-item>
        <m-switch-item v-model="success">完成</m-switch-item>
        <input type="number" v-model="number" />
      </template>
      <mo-progress :failed="failed" :value="number"></mo-progress>
    </m-demo-box>
  </div>
</template>

<script>
export default {
  name: "m-progress-demo",
  data() {
    return {
      code: undefined,
      success: false,
      failed: false,
      number: 50,
    };
  },
  watch: {
    success() {
      if (this.success) {
        this.code = setInterval(() => {
          this.number++;
        }, 100);
      } else {
        this.number = 50;
        clearInterval(this.code);
      }
    },
    number() {
      if (this.number > 100) {
        clearInterval(this.code);
      }
    },
  },
};
</script>
