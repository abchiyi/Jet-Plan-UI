<template>
  <m-button @click="()=>{ tal.action(()=>{value = !value})}">
  </m-button>
  <m-transition-slide
    :opacity="true/false"
    position="bottom"
  >
    <div
      class="deom-item"
      v-show="value"
    >
      <m-cube>To top</m-cube>
    </div>
  </m-transition-slide>
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
  },
};
</script>

<style >
</style>
