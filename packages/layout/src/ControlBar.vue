<template>
  <m-row :reverse="reverse" class="m-control-bar" space-mode="between">
    <m-row
      class="control-label"
      :for="forId"
      tag="label"
      Y="center"
      :X="reverse ? 'end' : 'start'"
      style="text-align:start"
    >
      <slot name="text"><p>Display text</p> </slot>
    </m-row>
    <m-row :reverse="reverse" class="control-comp" Y="center">
      <slot name="control"><p>Control</p></slot>
    </m-row>
  </m-row>
</template>

<script>
import { Row } from "../../gird/";
export default {
  name: "m-control-bar",
  components: {
    "m-row": Row
  },
  props: {
    forId: { type: String, required: true },
    reverse: { type: Boolean, default: false }
  }
};
</script>

<style>
.m-control-bar {
  border-radius: var(--m-radius);
  background: var(--foreground);
  display: block;
  margin: 1rem 0;
}

.m-control-bar > * {
  height: 1.8em;
}
.control-comp,
.control-label {
  margin: 8px 0;
}

.control-label {
  margin-left: 10px;
  width: 100%;
}

.control-comp {
  margin-right: 10px;
}

.reverse .control-comp {
  margin-left: 10px;
  margin-right: unset;
}

.reverse .control-label {
  margin-right: 10px;
  margin-left: unset;
}
</style>
