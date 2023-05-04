<template>
  <label class="j-checkbox-shell" :class="classes">
    <slot></slot>
    <svg viewBox="0 0 16 16">
      <path
        class="background"
        d="M4,0h8a4,4,0,0,1,4,4v8a4,4,0,0,1-4,4H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0Z"
      />
      <rect
        class="mask"
        width="12"
        height="12"
        rx="3"
        transform="translate(2 2)"
      />
      <transition name="dot">
        <g class="dot" v-show="selectTheStatus == 1">
          <rect width="8" height="8" rx="2" transform="translate(4 4)" />
        </g>
      </transition>

      <transition name="check">
        <path
          d="M281.784,416c-4.9,5.277-3.769,5.654-6.784,1.884"
          transform="translate(-270.392 -409.717)"
          stroke-dasharray="30px"
          stroke-linecap="round"
          stroke-width="2"
          v-show="checked"
          class="check"
          fill="none"
        />
      </transition>
    </svg>
  </label>
</template>
<script lang="ts">
import { computed, nextTick, defineComponent } from "vue";
import { JET_THEME } from "../../theme/theme";
import { getInputEl } from "../../tool";

export default defineComponent({
  name: "j-checkbox",
  props: {
    name: {
      type: String,
    },
  },
  setup() {
    return {
      colors: computed(() => JET_THEME.Theme),
    };
  },
  data() {
    return {
      inputElement: undefined as unknown as HTMLInputElement,
      nameMode: Boolean(this.name),
      checkboxes: [] as boolean[],
      checkboxFullValueList: [],
      firstLoad: true,
      oldDisabled: false,
      checked: false,
    };
  },
  methods: {
    async checkAll(checked: boolean) {
      const checkboxes = this.getAllCheckbox();
      for (let key in checkboxes) {
        if (checkboxes[key].checked != checked) {
          await nextTick();
          checkboxes[key].checked = checked;
          checkboxes[key].dispatchEvent(new Event("change"));
        }
      }
    },

    getAllCheckbox(): HTMLInputElement[] {
      if (!this.name) return [];
      const NodeList = document.querySelectorAll(`input[name="${this.name}"]`);
      return Array.from(NodeList) as HTMLInputElement[];
    },

    getInnerCheckBox() {
      return getInputEl(this, "<j-checkbox>");
    },

    updateStatus() {
      const checkboxes = this.getAllCheckbox();
      this.checkboxes = [];
      Object.keys(checkboxes).forEach(key => {
        this.checkboxes.push(checkboxes[Number(key)].checked);
      });
    },
  },
  computed: {
    modelCheckAll() {
      return Boolean(this.name);
    },

    selectTheStatus() {
      /**
       *  0 未选中
       *  1 部分选中
       *  2 全部选中
       */
      const noCheck = this.checkboxes.indexOf(false) !== -1;
      const checked = this.checkboxes.indexOf(true) !== -1;
      let status = null;
      switch (true) {
        case noCheck && !checked:
          status = 0;
          break;
        case noCheck && checked:
          status = 1;
          break;
        case !noCheck && checked:
          status = 2;
          break;
      }
      return status;
    },

    classes() {
      return [
        "shape j-check-box",
        this.selectTheStatus == 1 ? "section-selected" : "",
        this.firstLoad ? "first-load" : "",
      ];
    },
  },
  watch: {
    selectTheStatus(v) {
      if (this.modelCheckAll) {
        if (v == 2) {
          this.inputElement.checked = true;
        } else {
          this.inputElement.checked = false;
        }
        this.inputElement.dispatchEvent(new Event("change"));
      }
    },
  },
  mounted() {
    // 组件挂载后为 inputElement 赋值，独立设置此常量为节省性能
    this.inputElement = getInputEl(this, "<j-checkbox>");

    // 同步是否选中值
    this.checked = this.inputElement.checked;

    if (this.modelCheckAll) {
      const checkboxes = this.getAllCheckbox();

      // 设置事件监听器
      checkboxes.forEach(item =>
        item.addEventListener("change", this.updateStatus)
      );

      // 等待文档加载完毕后更新关联的“checkbox”的状态
      this.$nextTick(this.updateStatus);

      // 根据关联的“checkbox”的选中状态反转所有关联的“checkbox”的值
      this.inputElement.addEventListener("click", () => {
        this.checkAll(this.inputElement.checked);
      });
    }

    // 在交互后应用动画
    this.inputElement.addEventListener("change", () => {
      // 当处于全选控制模式下，第一次响应事件时将不会开启动画
      if (this.nameMode) {
        this.nameMode = false;
      } else {
        this.firstLoad = false;
      }
    });
  },
  beforeUpdate() {
    this.oldDisabled = this.inputElement.disabled;
  },
  updated() {
    // 同步是否选中值
    this.checked = this.inputElement.checked;

    if (this.firstLoad) {
      if (this.oldDisabled != this.inputElement.disabled) {
        this.firstLoad = false;
      }
    }
  },
});
</script>

<style>
/* 基本样式 */
.j-check-box,
.j-check-box > * {
  user-select: none;
}

.j-check-box {
  display: inline-block;
  height: var(--SIZE);
  width: var(--SIZE);
  cursor: pointer;
  margin: 0 2px;
}

.j-check-box .dot {
  fill: v-bind("colors.infoColors.primary.default");
}

/*--------------- Focus --------------- */
.j-check-box > input[type="checkbox"]:focus-visible + svg {
  outline: 2px solid v-bind("colors.infoColors.info.default");
  border-radius: 4px;
}

/* ---------- No Check ---------- */
.j-check-box .background {
  fill: v-bind("colors.border.default");
}

.j-check-box .mask {
  fill: v-bind("colors.border.dark");
}

/* ---------- Checked ---------- */

/* .j-check-box.checked .background, */
.j-check-box > input:checked + svg .background {
  fill: v-bind("colors.infoColors.primary.light");
}
/* .j-check-box.checked .mask, */
.j-check-box > input:checked + svg .mask {
  fill: v-bind("colors.infoColors.primary.default");
}
/* .j-check-box.checked .check, */
.j-check-box > input:checked + svg .check {
  stroke: v-bind("colors.background.light");
}

/* ---------- Check Dot ---------- */
.j-check-box.section-selected .mask {
  fill: v-bind("colors.infoColors.primary.light");
}

/* ---------- Disabled ---------- */

/* section-selected */
.j-check-box > input:disabled + svg {
  cursor: not-allowed;
}

.j-check-box > input:disabled + svg .background {
  fill: v-bind("colors.border.light");
}

.j-check-box > input:disabled + svg .mask {
  fill: v-bind("colors.border.default");
}

.j-check-box > input:disabled + svg .dot {
  fill: v-bind("colors.background.light");
}

/* checked */
.j-check-box > input:checked:disabled + label .check {
  stroke: v-bind("colors.background.light");
}

/* ---------- Animation ---------- */
.j-check-box .background,
.j-check-box .mask {
  transition: fill 0.3s var(--ease-out);
}

.j-check-box .check-enter-active {
  animation: path-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

.j-check-box .check-leave-active {
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
    stroke-dashoffset: -0.5;
  }

  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes path-out {
  0% {
    stroke: v-bind("colors.background.light");
    stroke-dashoffset: 0;
  }

  100% {
    stroke: v-bind("colors.background.light");
    stroke-dashoffset: 32;
  }
}

/* dot */
.dot-leave-active,
.dot-enter-active {
  transform-origin: center;
}

.dot-enter-active {
  animation: dot-in 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

.dot-leave-active {
  animation: dot-out 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.3);
}

@keyframes dot-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  100% {
    opacity: 1;
  }
}

@keyframes dot-out {
  0% {
    opacity: 1;
  }

  70% {
    opacity: 0;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}

.j-check-box.first-load * {
  transition: unset !important;
  animation: unset !important;
}
</style>
