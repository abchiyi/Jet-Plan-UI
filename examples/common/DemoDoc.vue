<template>
  <!-- Doc -->
  <article class="prop">
    <strong>Props:</strong>
    <ul class="doc">
      <slot name="prop">
        <li>无任何接口。</li>
      </slot>
    </ul>
  </article>
  <article class="slot">
    <strong>Props:</strong>
    <ul class="doc">
      <slot name="slot">
        <li>无插槽，任何组件或HTML&文本都将被忽略</li>
      </slot>
    </ul>
  </article>
  <article class="Event">
    <strong>Event:</strong>
    <ul class="event">
      <slot name="event">
        <li>仅有原生事件</li>
      </slot>
    </ul>
  </article>
</template>
<script>
export default {
  name: "demo-doc"
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
