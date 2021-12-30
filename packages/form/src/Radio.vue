<template>
  <div @click="click" :class="classes">
    <svg id="Radio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <g class="background" stroke-width="2">
        <rect width="16" height="16" rx="8" stroke="none" />
        <rect x="1" y="1" width="14" height="14" rx="7" fill="none" />
      </g>
      <circle class="dot" cx="4" cy="4" r="4" fill="#6a6a6a" />
    </svg>
  </div>

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
    }
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
        this.disabled ? "disabled" : ""
      ];
    }
  },
  props: {
    modelValue: {
      type: [String, Array, Boolean]
    },
    value: [String, Boolean],
    name: String,
    id: {
      required: true
    },
    size: {
      type: String,
      default: "s",
      validator: v => {
        return ["s", "m", "l"].indexOf(v) !== -1;
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      localvalue: this.modelValue
    };
  },
  watch: {
    modelValue(d) {
      this.localvalue = d;
    },
    localvalue(d) {
      this.$emit("update:modelValue", d);
      this.$emit("change", this.select);
    }
  }
};
</script>

<style >
/*--------------- Animation --------------- */
.m-radio * {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

/*--------------- Default --------------- */
.m-radio {
  display: inline-block;
  height: var(--HEIGHT);
  width: var(--HEIGHT);
  position: relative;
  user-select: none;
  margin: 0 2px;
}

.m-radio .background {
  stroke: var(--border);
  fill: var(--foreground);
}

.m-radio .dot {
  transform: scale(0) translate(4px, 4px);
  transform-origin: center;
  fill: var(--border);
  opacity: 0;
}

/*--------------- Select --------------- */
.m-radio.select .background {
  stroke: var(--primary);
}

.m-radio.select .dot {
  transform: scale(1) translate(4px, 4px);
  fill: var(--primary);
  opacity: 1;
}

/*--------------- Disabled --------------- */
.m-radio.m-radio.disabled {
  cursor: not-allowed;
}

.m-radio.disabled .background {
  stroke: var(--border);
  fill: var(--disabled);
}
.m-radio.disabled .dot {
  fill: var(--border);
}
</style>
