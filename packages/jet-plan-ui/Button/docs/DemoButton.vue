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
      <Button mode="text">Button</Button>
      <Button mode="text" styleType="primary">Primary</Button>
      <Button mode="text" styleType="warning">Warning</Button>
      <Button mode="text" styleType="success">Success</Button>
      <Button mode="text" styleType="danger">Danger</Button>
    </div>
    <div>
      <Button mode="text" disabled>Button disabled</Button>
      <Button mode="text" disabled styleType="primary">Primary disabled</Button>
      <Button mode="text" disabled styleType="warning">Warning disabled</Button>
      <Button mode="text" disabled styleType="success">Success disabled</Button>
      <Button mode="text" disabled styleType="danger">Danger disabled</Button>
    </div>
    <br />
    <strong class="text-hint">outline</strong>
    <div>
      <Button mode="outline">Button</Button>
      <Button mode="outline" styleType="primary">Primary</Button>
      <Button mode="outline" styleType="warning">Warning</Button>
      <Button mode="outline" styleType="success">Success</Button>
      <Button mode="outline" styleType="danger">Danger</Button>
    </div>
    <div>
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
