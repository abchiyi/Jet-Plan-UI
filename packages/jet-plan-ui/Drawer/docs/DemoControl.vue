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
import { ref } from "vue";

const FROM = ["top", "bottom", "left", "right"];

const from = ref("bottom");
const expand = ref(false);
</script>
