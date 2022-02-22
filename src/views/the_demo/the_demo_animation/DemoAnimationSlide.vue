<template>
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
      >ClickMe</m-button>
    </template>
  </m-control-bar>
  <m-control-bar for-id="re-opacity-value">
    <template v-slot:text>
      同时应用 Fade 效果
    </template>
    <template v-slot:control>
      <m-switch
        id="re-opacity-value"
        v-model="opacity"
      ></m-switch>
    </template>
  </m-control-bar>
  <demo-box
    title="滑入滑出"
    :code="code"
    id="slide"
  >
    <div id="slider-animation-group">
      <m-row
        class="demo-row"
        X="center"
      >
        <m-transition-slide
          :opacity="opacity"
          position="top"
        >
          <div
            class="deom-item"
            v-show="value"
          >
            <m-cube>To top</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide
          :opacity="opacity"
          position="right"
        >
          <div
            class="deom-item"
            v-show="value"
          >
            <m-cube>To right</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
      <m-row
        class="demo-row"
        X="center"
      >
        <m-transition-slide
          :opacity="opacity"
          class="deom-item"
          position="left"
        >
          <div
            class="deom-item"
            v-show="value"
          >
            <m-cube>To left</m-cube>
          </div>
        </m-transition-slide>
        <m-transition-slide
          :opacity="opacity"
          class="deom-item"
          position="bottom"
        >
          <div
            class="deom-item"
            v-show="value"
          >
            <m-cube>To bottom</m-cube>
          </div>
        </m-transition-slide>
      </m-row>
    </div>

  </demo-box>
  <p>禁用透明效果适用于元素在屏幕或其他元素边缘进出可视范围使用</p>
  <p>Transition-Slide 组件接口:</p>
  <div style="overflow-x:scroll">
    <table style="width:768px">
      <tr space-mode="between">
        <td>名称</td>
        <td>功能</td>
        <td>参数类型</td>
        <td>可选值</td>
        <td>默认</td>
      </tr>
      <tr space-mode="between">
        <td>position</td>
        <td>定义滑动方向</td>
        <td>String</td>
        <td>["left", "right", "top", "bottom"]</td>
        <td>--</td>
      </tr>
      <tr space-mode="between">
        <td>opacity</td>
        <td>在过渡中是否启用淡出/入效果</td>
        <td>Boolean</td>
        <td>true/false</td>
        <td>true</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "animation-slide",
  data () {
    return {
      value: true,
      opacity: true,
      code: `<m-transition-slide :opacity="true/false" position="top">
    <div class="deom-item" v-show="value">
    <m-cube>To top</m-cube>
    </div>
</m-transition-slide>`
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
