<script>
import { h } from "vue";
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
      type: [Number, String],
      default: 40
    }
  },
  data() {
    return {
      wider: false,
      intervalCode: [],
      first_load: null
    };
  },
  model: {
    prop: "modeValue",
    event: "update:modelValue"
  },
  computed: {
    class() {
      return [
        "shape m-switch",
        this.wider ? "wider" : "",
        this.disabled ? "disabled" : "",
        this.modelValue ? "on" : "off",
        this.first_load ? "first-load" : ""
      ];
    },
    style() {
      return {
        "--SIZE": this.size + "px"
      };
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
    cancellation() {
      // 在抬起或离开元素后设置拨杆拉宽参数为false
      if (this.intervalCode) {
        this.intervalCode.forEach(code => {
          clearInterval(code);
        });
        this.intervalCode = [];
        this.wider = false;
      }
    }
  },
  created() {
    this.first_load = true;
  },
  render() {
    return h("div", {
      class: this.class,
      style: this.style,
      // 事件
      onClick: this.change,
      onMousedown: this.toWider,
      // FIXME onTouchstart 不可用
      // onTouchstart: this.toWider,
      onMouseup: this.cancellation,
      onTouchend: this.cancellation,
      onMouseout: this.cancellation
    });
  }
};
</script>
<style>
.m-switch {
  border-radius: calc(var(--HEIGHT) / 2);
  height: var(--HEIGHT);
  width: var(--WIDTH);
  display: inline-block;
  position: relative;
  user-select: none;
  margin: 0 2px;
}

/* 遮罩 */
.m-switch::before {
  border-radius: calc(var(--WIDTH) / 2);
  height: var(--MASK-HEIGHT);
  width: var(--MASK-WIDTH);
  left: var(--OFF-SET);
  top: var(--OFF-SET);
  position: absolute;
  content: "";
}
/* 拨杆 */
.m-switch::after {
  box-shadow: 0 var(--LEVER-SHADOW) calc(var(--LEVER-SHADOW) * 2)
    var(--shadow-1);
  border-radius: calc(var(--LEVER_DIAMETER) / 2);
  height: var(--LEVER_DIAMETER);
  width: var(--LEVER_DIAMETER);
  top: var(--OFF-SET);
  left: var(--OFF-SET);
  position: absolute;
  content: "";
}

/* ------------ On ---------- */

/* 移动拨杆 */
.m-switch.on::after,
.m-switch.off::after {
  animation-timing-function: cubic-bezier(0.3, 0.6, 0.15, 1.2);
  animation-duration: 0.4s;
}
/* 第一次加载时不播放动画*/
.m-switch.first-load.on::after,
.m-switch.first-load.off::after {
  animation-duration: unset;
}

.m-switch.on::after {
  animation-name: left-to-right;
}
.m-switch.off::after {
  animation-name: right-to-left;
}

@keyframes left-to-right {
  0% {
    transform: translateX(
      calc(-1 * (var(--WIDTH) - var(--LEVER_DIAMETER) - var(--OFF-SET) * 2))
    );
  }
}
@keyframes right-to-left {
  0% {
    transform: translateX(
      calc((var(--WIDTH) - var(--LEVER_DIAMETER) - var(--OFF-SET) * 2))
    );
  }
}

/* 移动定位置右侧 */
.m-switch.on::after {
  right: var(--OFF-SET);
  left: unset;
}

/* 缩放基底遮罩 */
.m-switch.on::before {
  transform: scale(0);
}

/*------------ Active ----------*/
/* 拉宽拨杆*/
.m-switch.wider:active::after {
  width: var(--LEVER-WIDER);
}

/* 缩小基底遮罩 */
.m-switch:active::before {
  transform: scale(0);
}

/*------------ Disabled ----------*/

/* 遮罩 */
.m-switch.disabled::before {
  /* 收起遮罩 */
  transform: scale(0);
}

/* 切换指针为禁用 */
.m-switch.disabled {
  cursor: not-allowed;
}

/*------------ Animation ----------*/

/* 弹性过渡动画 */
/* .m-switch::after, */
.m-switch::before,
.m-switch {
  transition: 0.4s cubic-bezier(0.3, 0.6, 0.15, 1);
}

/* 弹性效果 */
.m-switch::after {
  transition: 0.4s cubic-bezier(0.3, 0.6, 0.15, 1.2);
}

/* #Color# */
/*------------ Default ----------*/
/* 基底 */
.m-switch {
  background-color: var(--grey-2);
}

/* 遮罩 */
.m-switch::before {
  background-color: var(--grey-0);
}

/* 拨杆 */
.m-switch::after {
  background-color: var(--grey-0);
}

/*------------ On ----------*/

/* 遮罩 */
.m-switch.on {
  /* background-color: var(--green-1); */
  background-color: var(--main-0);
}

/*------------ Disabled ----------*/

/* 基底 */
.m-switch.on.disabled {
  background-color: var(--bgco-1);
}

/* 遮罩 */
.m-switch.disabled::before {
  background-color: var(--grey-1);
}

/* 拨杆 */
.m-switch::after {
  background-color: var(--grey-0);
}
</style>
