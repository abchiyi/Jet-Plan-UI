<template>
  <article id="focus">
    <doc-item name="v-focus:" title-is="h2">
      <p>判断操作是否聚焦于某个元素。</p>
      <li id="v-focus-value">
        <doc-item name="Value：">
          <li>
            <p>
              <high-lighter>="value"</high-lighter>
              : type - Function
            </p>
            <p>接受一个无参数回调函数，会在点击元素外时执行回调</p>
          </li>
        </doc-item>
      </li>
    </doc-item>
    <demo-box title="v-focus" :code="code">
      <j-row X="center">
        <j-cube
          v-focus="onblur"
          @click="
            () => {
              value = true;
            }
          "
          style="width: 150px; padding: 0 10px"
        >
          {{ value ? 'NowClickOutside' : 'NowClickMe' }}
        </j-cube>
      </j-row>
    </demo-box>
  </article>
</template>
<script>
export default {
  name: 'demo-directives-focus',
  data: () => {
    return {
      code: `
// Script
function onblur () {
    this.value = false;
};
//Html
<j-cube v-focus="onblur" @click="() => {value = true}" 1>
    {{ value ? 'NowClickOutside' : 'NowClickMe' }}
</j-cube>
`,
      value: false,
    };
  },
  methods: {
    onblur() {
      this.value = false;
    },
  },
};
</script>
<style></style>
