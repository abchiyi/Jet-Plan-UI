<template>
  <div class="demo demo-button">
    <div class="buttons">
      <Button>Button</Button>
      <Button styleType="primary" loading>Primary</Button>
      <Button styleType="warning">Warning</Button>
      <Button styleType="success">Success</Button>
      <Button styleType="danger">Danger</Button>
      <Button disabled>Button disabled</Button>
      <Button disabled styleType="primary">Primary disabled</Button>
      <Button disabled styleType="warning">Warning disabled</Button>
      <Button disabled styleType="success">Success disabled</Button>
      <Button disabled styleType="danger">Danger disabled</Button>
    </div>
    <div class="buttons">
      <Button mode="text">Button</Button>
      <Button mode="text" styleType="primary">Primary</Button>
      <Button mode="text" styleType="warning">Warning</Button>
      <Button mode="text" styleType="success">Success</Button>
      <Button mode="text" styleType="danger">Danger</Button>
      <Button mode="text" disabled>Button disabled</Button>
      <Button mode="text" disabled styleType="primary">Primary disabled</Button>
      <Button mode="text" disabled styleType="warning">Warning disabled</Button>
      <Button mode="text" disabled styleType="success">Success disabled</Button>
      <Button mode="text" disabled styleType="danger">Danger disabled</Button>
    </div>
    <div class="buttons">
      <Button mode="outline">Button</Button>
      <Button mode="outline" loading styleType="primary">Primary</Button>
      <Button mode="outline" styleType="primary">Primary</Button>
      <Button mode="outline" styleType="warning">Warning</Button>
      <Button mode="outline" styleType="success">Success</Button>
      <Button mode="outline" styleType="danger">Danger</Button>
      <Button mode="outline" disabled>Button disabled</Button>
      <Button mode="outline" disabled styleType="primary">
        Primary disabled
      </Button>
      <Button mode="outline" disabled styleType="warning">
        Warning disabled
      </Button>
      <Button mode="outline" disabled styleType="success">
        Success disabled
      </Button>
      <Button mode="outline" disabled styleType="danger">
        Danger disabled
      </Button>
    </div>

    <Button block styleType="primary">Primary block button</Button>
  </div>
</template>
<script lang="ts" setup>
import { Button } from "jet-plan-ui";
</script>
<style scoped>
.buttons {
  margin-bottom: 1em;
}
</style>
