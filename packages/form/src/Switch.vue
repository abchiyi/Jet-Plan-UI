<template>
  <div
    :class="classes"
    @click="change"
    @mousedown="toWider"
    @mouseup="cancellation"
    @mouseout="cancellation"
    @touchstart="toWider"
    @touchend="cancellation"
    @touchcancel="cancellation"
  >
    <svg ref="self" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 16">
      <rect class="background" rx="8" />
      <rect
        class="mask"
        width="22"
        height="12"
        rx="6"
        transform="translate(2 2)"
      />
      <g class="lever">
        <rect class="lever-fill" width="10" height="10" rx="5" stroke="none" />
      </g>
    </svg>
  </div>
  <input
    :id="id"
    v-show="false"
    type="checkbox"
    :disabled="disabled"
    v-model="scopedValue"
  />
</template>
<script>
import "./css/shape.css";
export default {
  name: "m-switch",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "m",
      validator: v => {
        return ["s", "m", "l"].indexOf(v) !== -1;
      }
    },
    id: {
      require: true
    }
  },
  data() {
    return {
      wider: false,
      intervalCode: [],
      first_load: null,
      scopedValue: this.modelValue
    };
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue"
  },
  computed: {
    classes() {
      return [
        "shape m-switch",
        this.size,
        this.wider ? "wider" : "",
        this.disabled ? "disabled" : "",
        this.modelValue ? "on" : "off",
        this.first_load ? "first-load" : ""
      ];
    }
  },
  methods: {
    change() {
      if (!this.disabled) {
        this.$emit("update:modelValue", this.modelValue ? false : true);
        if (this.first_load) this.first_load = false;
      }
    },
    toWider() {
      // 在按下100ms后设置拨杆拉宽参数为true
      let inervalCode = setInterval(() => {
        this.wider = true;
      }, 100);
      this.intervalCode.push(inervalCode);
    },
    cancellation(e) {
      if (!this.$refs.self.contains(e.relatedTarget)) {
        // 在抬起或离开元素后设置拨杆拉宽参数为false
        if (this.intervalCode) {
          this.intervalCode.forEach(code => {
            clearInterval(code);
          });
          this.intervalCode = [];
          this.wider = false;
        }
      }
    }
  },
  created() {
    this.first_load = true;
  },
  watch: {
    modelValue(v) {
      if (this.first_load) this.first_load = false;
      this.scopedValue = v;
    }
  }
};
</script>
<style>
/* 隐藏选中框 */
@supports (-webkit-tap-highlight-color: #ffffff00) {
  .m-switch {
    -webkit-tap-highlight-color: #ffffff00;
  }
}
/*--------------- Default --------------- */
.m-switch {
  height: var(--HEIGHT);
  width: var(--WIDTH);
  display: inline-block;
  user-select: none;
  cursor: pointer;
  margin: 0 2px;
}

.m-switch .background {
  fill: var(--border);
  width: 26px;
  height: 16px;
}

.m-switch .mask {
  fill: var(--foreground);
}

.m-switch .lever {
  transform: translate(3px, 3px);
  stroke: var(--foreground);
  fill: var(--border);
  stroke-width: 1;
}

/*--------------- Acitive --------------- */
.m-switch.wider .lever > .lever-fill {
  width: 15px;
}
.m-switch.wider.on .lever > .lever-fill {
  width: 15px;
  transform: translate(-5px, 0px);
}

/*--------------- ON --------------- */
.m-switch.on .background,
.m-switch.on .mask {
  fill: var(--primary);
}
.m-switch.on .lever {
  transform: translate(13px, 3px);
  opacity: 0.7;
}

/*------------ Animation ----------*/
.m-switch * {
  transition: 0.3s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

/*--------------- Disabled --------------- */
.m-switch.disabled .background {
  fill: var(--border);
}

.m-switch.disabled .mask {
  fill: var(--disabled);
}

.m-switch.disabled.on .mask {
  fill: var(--border);
}
.m-switch.disabled.on .lever {
  fill: var(--disabled);
  opacity: 1;
}

/* 切换指针为禁用 */
.m-switch.disabled {
  cursor: not-allowed;
}
</style>
