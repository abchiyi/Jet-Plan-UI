<template>
  <label :for="id">
    <span @click="click" :class="classes">
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
    </span>
    <input
      :id="id"
      style="display: none"
      v-model="localvalue"
      type="checkbox"
      :value="value"
      :name="name"
    />
  </label>
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
      return ["shape", "m-check-box", this.checked ? "checked" : ""];
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
  },
  methods: {
    click() {
      //   this.localvalue = !this.localvalue;
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
  transition: 0.6s var(--ease-out);
  border-radius: var(--s-radius);
  box-sizing: border-box;
  display: inline-block;
  height: var(--SIZE);
  width: var(--SIZE);
  position: relative;
}
.m-check-box.checked {
  background: var(--info);
}
.m-check-box .path {
  stroke-dasharray: 30px;
  stroke-linecap: round;
  stroke-width: 4;
  stroke: white;
  z-index: 1;
  fill: none;
}
.m-check-box > .img {
  position: absolute;
  left: 0;
  top: 0;
}
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
/* input[type="checkbox"]:checked + .m-check-box {
  background: var(--info);
}
input[type="checkbox"]:checked + .m-check-box .path {
  animation: path-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
  display: inherit;
}
input[type="checkbox"] + .m-check-box .path {
  animation: path-out 0.4s var(--ease-out);
} */
</style>
