<template>
  <h2>折叠展开</h2>
  <m-control-bar for-id="re-folded-value">
    <template v-slot:text>
      {{ value ? "折叠" : "展开" }}
    </template>
    <template v-slot:control>
      <m-button
        id="re-folded-value"
        @click="
          () => {
            value = !value;
          }
        "
        >ClickMe</m-button
      >
    </template>
  </m-control-bar>
  <demo-box :code="code" id="folded">
    <m-row class="animation-box" X="center">
      <m-transition-folded>
        <div v-show="value">
          <m-cube>
            <p>Folded</p>
          </m-cube>
        </div>
      </m-transition-folded>
    </m-row>
  </demo-box>
</template>

<script>
export default {
  name: "animation-folded",
  data() {
    return {
      value: true,
      code: `<m-transition-folded>
    <div v-show="value">
        <m-cube>
        <p>Folded</p>
        </m-cube>
    </div>
</m-transition-folded>`
    };
  }
};
</script>
