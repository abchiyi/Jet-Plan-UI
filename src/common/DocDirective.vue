<template>
  <!-- TODO 移除组件，使用 ，改用 <doc-item> 实现-->
  <!-- Doc -->
  <strong :id="ids.directiveDoc">v-
    {{directive}}:
    <m-button
      v-scroll-to:120="`#${ids.arg}`"
      tag="a"
      active
      hover
    >arg</m-button> =
    <m-button
      v-scroll-to:120="`#${ids.value}`"
      active
      hover
      tag="a"
    >value</m-button>
  </strong>
  <br>
  <div class="doc">
    <div
      :id="ids.arg"
      class="arg"
    >
      <strong>arg:</strong>
      <ul class="arg">
        <slot name="arg">
          <li>无可选参数</li>
        </slot>
      </ul>
    </div>
    <!-- value -->
    <div
      :id="ids.value"
      class="value"
    >
      <strong>value:</strong>
      <ul class="value">
        <slot name="value">
          <li>无需传入参数</li>
        </slot>
      </ul>
    </div>
  </div>
  <!-- arg -->

  <m-button v-scroll-to:120px="`#${ids.directiveDoc}`">
    返回至 v-{{directive}} 文档头部
  </m-button>
</template>
<script>
export default {
  name: "doc-directive",
  props: {
    directive: {
      type: String,
      required: true
    }
  },
  computed: {
    ids () {
      return {
        arg: `${this.directive}_arg`,
        value: `${this.directive}_value`,
        directiveDoc: `${this.directive}_doc`
      }
    }
  }
};
</script>

<style>
.doc li + li {
  margin-top: 1em;
}

.doc li::marker {
  margin: unset;
}
</style>
