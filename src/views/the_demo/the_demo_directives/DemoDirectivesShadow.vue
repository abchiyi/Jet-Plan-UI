<template>
  <article id='shadow'>
    <strong>Shadow</strong>
    <demo-box
      title='v-shaow'
      :code='code'
    >
      <template v-slot:header>
        <p>
          <label for="shadow-intensity">阴影强度</label>
          <input
            id="shadow-intensity"
            type="number"
            v-model="value"
          />
        </p>
      </template>
      <m-row X=center>
        <m-cube
          class="demo-box"
          v-shadow:bottom="value"
        >
          Intensity:{{value}}
        </m-cube>
      </m-row>
    </demo-box>

    <doc-directive directive="shadow">
      <template v-slot:arg>
        <li>默认未 'center', 可选 top', 'bottom', 'left', 'right',设置阴影方向。</li>
      </template>
      <template v-slot:value>
        <li>设置阴影强度，建议1~30的数字。</li>
      </template>
    </doc-directive>
  </article>
</template>
<script>
export default {
  name: 'v-shaow',
  data: () => {
    return {
      code: `
// Javascript
let value = 10;
// HTML
<body>
    <style>
        .demo-box {
            background: var(--foreground) !important;
            color: var(--text) !important;
            height: 200px;
            width: 150px;
            border: unset;
        }
    </style>
    <m-cube class="demo-box" v-shadow:bottom="value" >
        Intensity:{{value}}
    </m-cube>
</body>`,
      value: '10'
    }
  }
};
</script>
<style>
.demo-box {
  background: var(--foreground) !important;
  color: var(--text) !important;
  height: 200px;
  width: 150px;
  border: unset;
}
</style>
