<template>
  <label :for="id" :class="classes">
    <transition name="path">
      <svg
        class="img"
        v-show="checked"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
      >
        <path
          class="path"
          transform="translate(-266 -404)"
          d="M293,416c-13,14-10,15-18,5"
        />
      </svg>
    </transition>
  </label>
  <input
    :id="id"
    v-model="localvalue"
    :disabled="disabled"
    type="checkbox"
    :value="value"
    :name="name"
  />
</template>
<script   >
export default {
  name: "m-check-box",
  computed: {
    checked() {
      if (typeof this.localvalue == "object") {
        return this.localvalue.indexOf(this.value) !== -1;
      }
      return this.localvalue;
    },
    classes() {
      return [
        "shape m-check-box",
        this.size,
        this.checked ? "checked" : "",
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
      default: "m",
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
    },
  },
};
</script>

<style scoped>
.m-check-box,
.m-check-box > * {
  user-select: none;
}
.m-check-box {
  border: solid var(--OFF-SET) var(--border);
  background: var(--foreground_color);
  transition: 0.6s var(--ease-out);
  border-radius: var(--s-radius);
  box-sizing: border-box;
  display: inline-block;
  height: var(--SIZE);
  width: var(--SIZE);
  position: relative;
  cursor: pointer;
  margin: 0 2px;
}
.m-check-box .path {
  stroke-width: var(--PATH-WIDTH);
  stroke-dasharray: 30px;
  stroke-linecap: round;
  stroke: white;
  fill: none;
}
.m-check-box > .img {
  position: absolute;
  left: 0;
  top: 0;
}

/* Condition */
.m-check-box.checked {
  background: var(--primary);
}
.m-check-box.disabled {
  background: var(--background);
  cursor: not-allowed;
}

.m-check-box.disabled .path {
  stroke: var(--text_disabled);
}

/* Animation */
.path-enter-active {
  animation: path-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}
.path-leave-active {
  animation: path-out 0.4s var(--ease-out);
}
@keyframes path-in {
  0% {
    stroke-dashoffset: -30;
  }
  40% {
    stroke-dashoffset: 0;
  }
  60% {
    stroke-dashoffset: -1;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes path-out {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: 32;
  }
}
</style>
