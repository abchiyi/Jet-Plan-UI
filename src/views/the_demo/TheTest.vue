<template>
  <div>
    <m-button @click="click">Click me</m-button>
    <m-transition-slide position="right">
      <m-cube
        class="a"
        v-show="value"
      >To top</m-cube>
    </m-transition-slide>
  </div>

</template>
<script>
import pdn from '../../common/mix/popDemoName'
import { TimedActionLimit } from '../../../packages/tool'
export default {
  mixins: [pdn],
  name: "TheTestPage",
  data () {
    return {
      value: true,
      tal: new TimedActionLimit(510, 1, false)
    };
  },
  methods: {
    click () {
      this.tal.action(() => { this.value = !this.value })
    }
  },
};
</script>

<style >
.a {
  position: relative;
}
</style>
