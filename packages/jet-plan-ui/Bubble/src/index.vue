<template>
  <div class="j-bubble">我是浮动气泡组件</div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
export default defineComponent({
  name: "j-bubble",
  props: {
    position: {
      type: String as PropType<
        | "top"
        | "top-end"
        | "top-start"
        | "bottom"
        | "bottom-end"
        | "bottom-start"
        | "left"
        | "left-top"
        | "left-bottom"
        | "right"
        | "right-top"
        | "right-bottom"
      >,
      default: "top",
    },

    show: Boolean,
  },
  computed: {
    ClassBubble() {
      const [start, position] = Array.from(this.position?.split("-"));
      return [start, position];
    },
  },
});
</script>

<style scoped>
.j-bubble {
}
</style>
