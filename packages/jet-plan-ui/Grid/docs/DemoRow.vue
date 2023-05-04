<template>
  <Row class="demo demo-row" :X="props.rowX" :Y="props.rowY">
    <div class="demo-cube height-full">Height Full</div>
    <div class="demo-cube height-half">Height Half</div>
    <div class="demo-cube height-min">Height Min</div>
  </Row>
</template>
<script lang="ts" setup>
import { Row } from "jet-plan-ui";
const props = defineProps({ rowX: String, rowY: String });
</script>
<style scoped>
.height-full {
  height: 80px;
}
.height-half {
  height: 50px;
}
.height-min {
  height: 30px;
}

.demo-cube + .demo-cube {
  margin-left: 1rem;
}
.j-row {
  height: 120px;
}
</style>
