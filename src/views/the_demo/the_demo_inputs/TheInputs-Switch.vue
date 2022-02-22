<template>
  <div>
    <h3>Switch</h3>
    <demo-box
      title="Switch"
      :code="code"
    >
      <div id="demo-switch-group">
        <div>
          <m-switch
            id="demo-switch"
            v-model="value"
          />
          <label for="demo-switch">
            {{ value ? "on" : "off" }}
          </label>
        </div>
        <div>
          <m-switch
            id="demo-switch-disabled"
            disabled
            v-model="value"
          />
          <label for="demo-switch-disabled">
            disabled-{{ value ? "on" : "off" }}
          </label>
        </div>
      </div>

    </demo-box>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => {
    return {
      value: false,
      code: `
//Script
let value = false;
// Html
<div>
    <m-switch id="demo-switch" v-model="value" />
    <label for="demo-switch">
    {{ value ? "on" : "off" }}
    </label>
</div>
<div>
    <m-switch id="demo-switch-disabled" disabled v-model="value" />
    <labed for="demo-switch-disabled">
    disabled-{{ value ? "on" : "off" }}
    </labed>
</div>
      `,
    };
  },
};
</script>
<style>
</style>
