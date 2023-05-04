<template>
  <div class="demo demo-offset">
    <Row class="item">
      <Col class="cube" :col="4" :offset="offset">{{ offset }}</Col>
    </Row>
    <Row class="item">
      <Col class="cube" :col="4" :offset="4">{{ 4 }}</Col>
    </Row>
    <Row class="item">
      <Col class="cube" :col="4" :offset="6">{{ 6 }}</Col>
    </Row>
  </div>
</template>
<script lang="ts" setup>
import { Row, Col } from "jet-plan-ui";
import { computed } from "vue";
const props = defineProps({ offset: Number });
const offset = computed(() => (props.offset ? props.offset : 0));
</script>
<style scoped>
.item + .item {
  margin-top: 8px;
}
.cube {
  background: var(--info-colors-primary);
  color: var(--text-light);
  justify-content: center;
  font-family: sarasa mono;
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 36px;
}
</style>
