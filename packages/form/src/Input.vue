<template>
  <input :class="className" value="" />
</template>

<script>
export default {
  name: "mInput",
  props: {
    disabled: Boolean,
  },
  computed: {
    className() {
      return ["m-input", this.disabled ? "disabled" : ""];
    },
  },
};
</script>

<style>
.m-input:focus-visible {
  outline: unset;
}

.m-input {
  background-color: rgba(128, 128, 128, 0.9);
  border-radius: 0.28em;
  padding: 0.4em;
  color: inherit;
  border: unset;
  opacity: 0.4;
  height: 1em;
  width: 13em;
}

.m-input.disabled {
  cursor: not-allowed;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  appearance: unset;
  opacity: 0.3;
}
@supports (backdrop-filter: brightness(90%)) {
  .m-input {
    backdrop-filter: brightness(90%);
    background-color: unset;
    border: unset;
    opacity: 1;
  }
}
</style>
