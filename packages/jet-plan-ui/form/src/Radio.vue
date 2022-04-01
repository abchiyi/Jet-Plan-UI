<template>
  <div @click="click" :class="classes">
    <svg id="radio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <rect class="background" width="16" height="16" rx="8" />
      <rect
        class="mask"
        width="12"
        height="12"
        rx="6"
        transform="translate(2 2)"
      />
      <rect
        class="dot"
        width="6"
        height="6"
        rx="3"
        transform="translate(5 5)"
      />
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
<script>
export default {
  name: 'j-radio',
  methods: {
    click() {
      if (!this.disabled) {
        this.$emit('update:modelValue', this.value);
      }
    },
  },
  computed: {
    select() {
      return this.modelValue === this.value;
    },
    classes() {
      return [
        'shape j-radio',
        this.size,
        this.select ? 'select' : '',
        this.disabled ? 'disabled' : '',
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
      default: 's',
      validator: (v) => {
        return ['s', 'm', 'l'].indexOf(v) !== -1;
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
      this.$emit('update:modelValue', d);
      this.$emit('change', this.select);
    },
  },
};
</script>

<style>
/*--------------- Animation --------------- */
.j-radio * {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

/*--------------- Default --------------- */
.j-radio {
  display: inline-block;
  height: var(--HEIGHT);
  width: var(--HEIGHT);
  position: relative;
  user-select: none;
  margin: 0 2px;
  cursor: pointer;
}

.j-radio .background {
  opacity: 0.6;
  fill: var(--border);
}

.j-radio .mask {
  fill: var(--background);
}

.j-radio .dot {
  animation: radio-dot-out 0.6s cubic-bezier(0.3, 0.6, 0.15, 1.3);
  fill: var(--text-light);
  opacity: 0;
}
@keyframes radio-dot-out {
  0% {
    opacity: 1;
  }
  100% {
    transform: translate(50%, 50%);
    opacity: 0;
    height: 0;
    width: 0;
  }
}
/*--------------- Select --------------- */
.j-radio.select .mask,
.j-radio.select .background {
  fill: var(--primary);
}

.j-radio.select .dot {
  animation: radio-dot-in 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.3);
  fill: var(--text-light);
  opacity: 1;
}
@keyframes radio-dot-in {
  0% {
    transform: translate(50%, 50%);
    opacity: 0;
    height: 0;
    width: 0;
  }
}
/*--------------- Disabled --------------- */
.j-radio.j-radio.disabled {
  cursor: not-allowed;
}
.j-radio.disabled .mask {
  fill: var(--disabled);
}

.j-radio.disabled.select .background {
  fill: var(--border);
}

.j-radio.disabled.select .dot {
  opacity: 0.5;
}
</style>
