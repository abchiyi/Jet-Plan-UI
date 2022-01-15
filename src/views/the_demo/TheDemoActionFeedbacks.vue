<template>
  <h2>动作反馈</h2>
  <m-click-feedback class="r">
    123
  </m-click-feedback>
  <div style="height:300px;border:solid 1px green;overflow:hidden">
    <div class="r" ref="r" @click="log"></div>
  </div>

  <demo-box title="淡出淡入" :code="code" id="fade">
    <m-button activeAnimation>asddddddddddd</m-button>
    <m-row class="animation-box" X="center">
      <m-click-feedback>
        <m-cube v-show="value">
          <p>Fade</p>
        </m-cube>
      </m-click-feedback>
    </m-row>
  </demo-box>
</template>

<script>
function aa(el) {
  const box = el.getBoundingClientRect();
  //   const body = document.body;
  //   const clientTop = el.clientTop || body.clientTop || 0;
  //   const clientLeft = el.clientLeft || body.clientLeft || 0;
  const clientTop = el.clientTop || 0;
  const clientLeft = el.clientLeft || 0;
  const scrollTop = window.pageYOffset || el.scrollTop;
  const scrollLeft = window.pageXOffset || el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}
import { getOffset } from "../../../packages/tool/src/dom";
export default {
  name: "animation-fade",
  data() {
    return {
      value: true,
      code: ``
    };
  },
  methods: {
    log() {
      let el = this.$refs.r;
      console.log(getOffset(el));
      console.log(aa(el));
    }
  }
};
</script>

<style scoped >
.m-cube {
  border: 4px solid var(--border);
  background: var(--foreground);
  box-sizing: border-box;
  color: var(--text);
}
.r {
  height: 400px;
  width: 400px;
  background: rgba(255, 255, 255, 0.102);
  /* border: solid 20px red; */
}
</style>
