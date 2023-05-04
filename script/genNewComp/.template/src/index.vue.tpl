<template>
  <div class="{{ compClassName }}">
    我是{{ compZhName }}组件
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "{{ compClassName }}",
});
</script>

<style scoped>
.{{ compClassName }} {

}
</style>
