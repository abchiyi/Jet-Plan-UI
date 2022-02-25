<template>
  <div class="doc class">

    <strong>参数：</strong>
    <ul class="arg">
      <slot name="arg">
        <li>无可选参数</li>
      </slot>
    </ul>

    <strong>方法：</strong>
    <ul class="value">
      <slot name="methos">
        <li>无可用方法</li>
      </slot>
    </ul>

    <strong>使用：</strong>
    <ul class="use">
      <slot name="use">
        <li style="color:var(--error);"><strong>Unknown</strong></li>
      </slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "doc-of-class",
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
