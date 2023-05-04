<template>
  <div class="demo">
    <Row class="grid-item" v-for="n in 4" :key="n">
      <Col :col="n * 4">
        <div class="demo-cube">{{ n * 4 }}</div>
      </Col>
      <Col :col="24 - n * 4">
        <div class="demo-cube demo-cube-dark" dark>{{ 24 - n * 4 }}</div>
      </Col>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { Row, Col } from "jet-plan-ui";
import { computed } from "vue";
import { RTS } from "src/theme/index";
const colors = computed(() => RTS.getTheme());
</script>

<style scoped>
.grid-item {
  margin-bottom: 8px;
}
.demo-cube {
  height: 36px;
  width: 100%;
}

.demo-cube-dark {
  background-color: v-bind("colors.value.border.light");
  color: v-bind("colors.value.text.default");
}
</style>
