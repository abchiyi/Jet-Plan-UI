<template>
  <div :class="classes">
    <component :is="titleIs">
      {{ name }}
    </component>
    <ul>
      <slot>
        <li style="color: var(--error)"><strong>Empty !</strong></li>
      </slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'doc-item',
  props: {
    name: {
      type: String,
      required: true,
    },
    titleIs: {
      type: String,
      default: 'strong',
    },
    noDot: {
      type: Boolean,
      default: false,
    },
    noPadding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        'doc',
        'font-mono',
        this.noDot ? 'no-dot' : '',
        this.noPadding ? 'no-padding' : '',
      ];
    },
  },
};
</script>

<style>
.doc > ul > li {
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

.doc.no-padding > ol,
.doc.no-padding > ul {
  padding-left: unset;
}

.doc + .doc {
  margin-top: 3em;
}
</style>
