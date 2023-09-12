<template>
  <div class="demo demo-button">
    <Button>Button</Button>
    <Button styleType="primary">Primary</Button>
    <Button styleType="warning">Warning</Button>
    <Button styleType="success">Success</Button>
    <Button styleType="danger">Danger</Button>
    <br />
    <Button disabled>Button disabled</Button>
    <Button disabled styleType="primary">Primary disabled</Button>
    <Button disabled styleType="warning">Warning disabled</Button>
    <Button disabled styleType="success">Success disabled</Button>
    <Button disabled styleType="danger">Danger disabled</Button>
    <br />
    <strong class="text-hint">text button</strong>
    <div>
      <Button text>Button</Button>
      <Button text styleType="primary">Primary</Button>
      <Button text styleType="warning">Warning</Button>
      <Button text styleType="success">Success</Button>
      <Button text styleType="danger">Danger</Button>
    </div>
    <div>
      <Button text disabled>Button disabled</Button>
      <Button text disabled styleType="primary">Primary disabled</Button>
      <Button text disabled styleType="warning">Warning disabled</Button>
      <Button text disabled styleType="success">Success disabled</Button>
      <Button text disabled styleType="danger">Danger disabled</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "jet-plan-ui";
</script>
<style scoped>
.j-button {
  min-width: 80px;
}

.j-button.disabled {
  min-width: 150px;
}
</style>
