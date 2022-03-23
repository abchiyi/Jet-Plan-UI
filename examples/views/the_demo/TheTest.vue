<template>
  <div style="background: var(--foreground); padding: 100px">
    <j-button @click="click">Click me</j-button>
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
  </div>
</template>
<script>
import pdn from "../../common/mix/popDemoName";
import { TimedActionLimit } from "@ui/tool";
export default {
  mixins: [pdn],
  name: "TheTestPage",
  data() {
    return {
      value: false,
      value1: true,
      v: true,
      tal: new TimedActionLimit(510, 1, false),
      color: undefined,
    };
  },
  methods: {
    click() {
      this.tal.action(() => {
        this.value = !this.value;
      });
    },
    updatedColor(v) {
      this.color = v;
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
  box-shadow: "";
}

.a {
  background: rgb(15, 87, 109);
}

.b {
  background: #cfcfcf;
}
</style>
