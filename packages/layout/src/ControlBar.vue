<template>
  <m-action-feedback class="m-control-bar" active>
    <m-row :reverse="reverse" space-mode="between">
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
  </m-action-feedback>
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
  font-size: 1rem;
  display: block;
  margin: 1rem 0;
}

.control-comp,
.control-label {
  height: 2.7rem;
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
