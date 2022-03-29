<template>
  <div>
    <j-button v-auto-color @click="click">Click me</j-button>
    <div
      v-auto-color="updatedColor"
      :class="['test-cube', value ? 'a' : 'b']"
      v-shadow:bottom="5"
    >
      <h1>TEST</h1>
    </div>
    <j-code-box
      :code="`
        abc
        ABC
        012
        -+=
        `"
    />

    <j-control-bar for-id="expand-switch">
      <template v-slot:text>展开抽屉</template>
      <j-switch v-model="value" id="expand-switch" />
    </j-control-bar>

    <j-control-bar
      :for-id="`radio-${i}`"
      v-bind:key="i"
      v-for="i in ['top', 'bottom', 'left', 'right']"
    >
      <template v-slot:text>{{ i }}</template>
      <j-radio :id="`radio-${i}`" v-model="openOn" :value="i" />
    </j-control-bar>

    <j-drawers :from="openOn" :expand="value">
      <h1>drawers</h1>
      <h1>drawers</h1>
      <h1>drawers</h1>
    </j-drawers>
  </div>
</template>
<script>
import pdn from "../../common/mix/popDemoName"
import { TimedActionLimit } from "@ui/tool"
export default {
  mixins: [pdn],
  name: "TheTestPage",
  data () {
    return {
      value: false,
      value1: true,
      openOn: 'top',
      v: true,
      tal: new TimedActionLimit(510, 1, false),
      color: undefined,
    }
  },
  methods: {
    click () {
      this.tal.action(() => {
        this.value = !this.value
      })
    },
    updatedColor (v) {
      this.color = v
    },
  },
};
</script>

<style>
.a {
  position: relative;
}

.test-cube {
  margin: 10px;
  height: 260px;
  width: 230px;
  border: 1px solid #ebebeb;
  background: var(--foreground);
  border-radius: var(--m-radius);
  box-shadow: '';
  transition: unset;
  /* background: #000; */
}
</style>
