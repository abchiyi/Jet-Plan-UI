<template>
  <div @click="click" :class="classes">
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
    <transition name="dot">
      <span v-show="sectionSelected" class="dot" />
    </transition>
  </div>
  <input
    v-if="!handleCheckAll"
    v-show="false"
    @change.stop
    :id="id"
    :name="name"
    :value="value"
    type="checkbox"
    :disabled="disabled"
    v-model="localvalue"
  />
</template>
<script   >
export default {
  name: "m-check-box",
  computed: {
    handleCheckAll() {
      if (
        this.validatIsAArray(this.value) &&
        this.validatIsAArray(this.modelValue)
      ) {
        return true;
      }
      return false;
    },
    sectionSelected() {
      if (!this.checked) {
        if (this.handleCheckAll) {
          for (let key in this.modelValue) {
            if (this.value.indexOf(this.modelValue[key]) !== -1) {
              return true;
            }
          }
        }
      }

      return false;
    },
    checked() {
      //检查所有值是否存在列表中
      if (this.handleCheckAll) {
        return this.eq;
      }
      // 绑定数组
      if (this.validatIsAArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) !== -1;
      }
      // 绑定数值
      return this.modelValue ? "1" : "-1";
    },
    eq() {
      let modelValue = this.modelValue;
      let value = this.value;
      return modelValue.sort().toString() == value.sort().toString();
    },
    classes() {
      return [
        "shape m-check-box",
        this.size,
        this.checked ? "checked" : "",
        // this.sectionSelected && !this.checked ? "section-selected" : "",
        this.disabled ? "disabled" : "",
      ];
    },
  },
  props: {
    modelValue: {
      type: Array,
    },
    value: null,
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
  emits: {
    change: null,
    "update:modelValue": null,
  },
  data() {
    return {
      localvalue: this.modelValue,
    };
  },
  methods: {
    click() {
      let array = this.modelValue;
      if (this.handleCheckAll) {
        if (this.checked) {
          this.$emit("update:modelValue", []);
        } else {
          this.$emit("update:modelValue", this.checkAll(array));
        }
      } else {
        if (this.checked) {
          array.splice(array.indexOf(this.value), 1);
        } else {
          array.push(this.value);
        }
        this.$emit("update:modelValue", array);
      }
    },
    checkAll(array = Array) {
      for (let key in this.value) {
        if (array.indexOf(this.value[key]) == -1) {
          array.push(this.value[key]);
        }
      }
      return array;
    },
    validatIsAArray(v) {
      return typeof v == "object" && typeof v.length == "number";
    },
  },
  watch: {
    modelValue(d) {
      if (!this.handleCheckAll) {
        this.localvalue = d;
      }
    },
    localvalue() {
      this.$emit("change", this.localvalue);
    },
  },
};
</script>

<style >
/* 基本样式 */
.m-check-box,
.m-check-box > * {
  user-select: none;
}
.m-check-box {
  border: solid var(--OFF-SET) var(--border);
  background: var(--foreground);
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
  stroke-dasharray: 30px;
  stroke-linecap: round;
  stroke: white;
  stroke-width: 4;
  fill: none;
}
.m-check-box > .img {
  position: absolute;
  left: 0;
  top: 0;
}

.m-check-box .dot {
  height: var(--DOT-DIAMETER);
  width: var(--DOT-DIAMETER);
  background: var(--primary);
  left: var(--OFF-SET);
  top: var(--OFF-SET);
  border-radius: 1px;
  position: absolute;
  content: "";
}

/* Condition */
.m-check-box.section-selected.disabled .dot {
  background: var(--border);
}
.m-check-box.checked {
  border-color: var(--primary);
  background: var(--primary);
}
.m-check-box.disabled {
  background: var(--disabled);
  border-color: var(--border);
  cursor: not-allowed;
}
.m-check-box.checked.disabled {
  background: var(--border);
}
.m-check-box.disabled .path {
  stroke: var(--text-disabled);
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

.dot-leave-active,
.dot-enter-active {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

.dot-enter-active {
  transform: scale(1);
  opacity: 1;
}
.dot-enter-from,
.dot-leave-active {
  transform: scale(0);
  opacity: 0;
}
</style>
