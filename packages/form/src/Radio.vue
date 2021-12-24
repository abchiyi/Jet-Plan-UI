<template>
  <div @click="click" :class="classes"></div>
  <input
    :id="id"
    :name="name"
    v-show="false"
    :value="value"
    type="radio"
    :disabled="disabled"
    v-model="localvalue"
  />
</template>
<script   >
export default {
  name: "m-radio",
  methods: {
    click() {
      this.$emit("update:modelValue", this.value);
    },
  },
  computed: {
    select() {
      return this.modelValue === this.value;
    },
    classes() {
      return [
        "shape m-radio",
        this.size,
        this.select ? "select" : "",
        this.disabled ? "disabled" : "",
      ];
    },
  },
  props: {
    modelValue: {
      type: [String, Array, Boolean],
    },
    value: [String, Boolean],
    name: String,
    id: {
      required: true,
    },
    size: {
      type: String,
      default: "s",
      validator: (v) => {
        return ["s", "m", "l"].indexOf(v) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localvalue: this.modelValue,
    };
  },
  watch: {
    modelValue(d) {
      this.localvalue = d;
    },
    localvalue(d) {
      this.$emit("update:modelValue", d);
      this.$emit("change", this.select);
    },
  },
};
</script>

<style >
.m-radio,
.m-radio::after {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.4);
}

.m-radio {
  border: solid var(--OFF-SET) var(--border);
  background: var(--foreground);
  border-radius: var(--SIZE);
  box-sizing: border-box;
  display: inline-block;
  height: var(--HEIGHT);
  width: var(--HEIGHT);
  user-select: none;
  position: relative;
  margin: 0 2px;
}
.m-radio::after {
  border-radius: var(--DOT-DIAMETER);
  height: var(--DOT-DIAMETER);
  width: var(--DOT-DIAMETER);
  background: var(--border);
  left: var(--OFF-SET);
  top: var(--OFF-SET);
  transform: scale(0);
  position: absolute;
  content: " ";
  opacity: 0;
}

.m-radio.select {
  border-color: var(--primary);
}
.m-radio.select::after {
  background: var(--primary);
  transform: scale(1);
  opacity: 1;
}

.m-radio.disabled {
  border-color: var(--border);
  background: var(--disabled);
}
.m-radio.disabled::after {
  background: var(--border);
}
</style>
