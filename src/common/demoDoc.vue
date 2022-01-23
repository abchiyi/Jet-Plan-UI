<template>
  <!-- Doc -->
  <article class="prop">
    <strong>Props:</strong>
    <slot name="prop">
      <ul class="doc">
        <li>无任何接口。</li>
      </ul>
    </slot>
  </article>
  <article class="slot">
    <strong>Props:</strong>
    <slot name="slot">
      <ul class="doc">
        <li>无插槽，任何组件或HTML&文本都将被忽略</li>
      </ul>
    </slot>
  </article>
  <article class="Event">
    <strong>Event:</strong>
    <slot name="event">
      <ul class="event">
        <li>仅有原生事件</li>
      </ul>
    </slot>
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
