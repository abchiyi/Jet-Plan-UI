<template>
  <h2>淡出淡入</h2>
  <m-control-bar for-id="re-fade-value">
    <template v-slot:text>
      {{ value ? "淡出" : "淡入" }}
    </template>
    <template v-slot:control>
      <m-button
        id="re-fade-value"
        @click="
          () => {
            value = !value;
          }
        "
        >ClickMe</m-button
      >
    </template>
  </m-control-bar>
  <demo-box title="淡出淡入" :code="code" id="fade">
    <m-row class="animation-box" X="center">
      <m-transition-fade>
        <m-cube v-show="value">
          <p>Fade</p>
        </m-cube>
      </m-transition-fade>
    </m-row>
  </demo-box>
</template>

<script>
export default {
  name: "animation-fade",
  data() {
    return {
      value: true,
      code: `<m-transition-fade>
    <m-cube v-show="value">
        <p>Fade</p>
    </m-cube>
</m-transition-fade>`
    };
  }
};
</script>

<style>
#fade .animation-box {
  height: 100px;
}
</style>
