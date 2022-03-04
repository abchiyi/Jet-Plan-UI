<template>
  <div :class="classes">
    <component :is="titleIs">
      {{name}}
    </component>
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
      type: String,
      required: true,
    },
    titleIs: {
      type: String,
      default: 'strong'
    },
    noDot: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    classes () {
      return [
        'doc',
        this.noDot ? "no-dot" : ""
      ]
    }
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
