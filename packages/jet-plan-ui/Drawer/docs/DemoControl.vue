<template>
  <div class="demo">
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in FROM" :key="item">
        <Radio>
          <input type="radio" :value="item" name="from" v-model="from" />
        </Radio>
        <strong>{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <Button primary block @click="expand = !expand">
      {{ expand ? "Close" : "Open" }} Drawer
    </Button>
  </div>
  <slot :from="from" :expand="expand"></slot>
</template>

<script lang="ts" setup>
import { Row, Radio, Button } from "jet-plan-ui";
import { ref, computed } from "vue";
import { RTS } from "src/theme";

const FROM = ["top", "bottom", "left", "right"];

const from = ref("bottom");
const expand = ref(false);
const colors = computed(() => RTS.getTheme());
</script>
<style scoped>
.action-label {
  background: v-bind("colors.value.background.dark");
  padding: 0.8em 0.5em;
  outline: unset;
  margin: unset;
  width: 100%;
}

.action-label + .action-label {
  margin-left: 0.5em;
}
.j-row + .j-row {
  margin-top: 0.5rem;
}
.j-button,
strong {
  font-family: "sarasa mono";
  font-size: 12px;
}

.j-button {
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>
