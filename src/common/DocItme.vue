<template>
  <div class="doc">
    <strong>{{name}}：</strong>
    <ul>
      <slot>
        <li style="color:var(--error);"><strong>Empty !</strong></li>
      </slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "doc-item",
  props: {
    name: {
      required: true,
      type: String,
    },
  }
};
</script>

<style>
.dov {
  margin: 10px;
}

.doc li + li {
  margin-top: 1em;
}

.doc li::marker {
  margin: unset;
}

.doc + .doc {
  margin-bottom: 20px;
}

.doc.no-dot > ol,
.doc.no-dot > ul {
  list-style-type: none;
}
</style>
