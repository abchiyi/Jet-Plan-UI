<template>
  <div>
    <h2>滑入滑出</h2>
    <m-control-bar for-id="re-slide-value">
      <template v-slot:text>
        {{ value ? "滑出" : "滑入" }}
      </template>
      <template v-slot:control>
        <m-button
          id="re-slide-value"
          @click="
            () => {
              value = !value;
            }
          "
          >ClickMe</m-button
        >
      </template>
    </m-control-bar>
    <demo-box id="slide">
      <m-row class="demo-row" X="center">
        <m-transition-slide position="top">
          <div class="deom-item" v-show="value">
            <m-cube>To top</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide position="right">
          <div class="deom-item" v-show="value">
            <m-cube>To right</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
      <m-row class="demo-row" X="center">
        <m-transition-slide class="deom-item" position="left">
          <div class="deom-item" v-show="value">
            <m-cube>To left</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide class="deom-item" position="bottom">
          <div class="deom-item" v-show="value">
            <m-cube>To bottom</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
    </demo-box>
  </div>
</template>

<script>
export default {
  name: "animation-slide",
  data() {
    return {
      value: true
    };
  }
};
</script>

<style>
.demo-row {
  height: 100px;
}
.deom-item .m-cube {
  font-size: 14px;
}
.deom-item + .deom-item {
  margin-left: 5px;
}
.demo-row + .demo-row {
  margin-top: 5px;
}
</style>
