<script>
import { h } from "vue";
import { Mask } from "../../mask";
export default {
  name: "m-button",
  data() {
    return {
      value: false,
    };
  },
  props: {
    tag: {
      type: String,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    hoverAnimation: {
      type: Boolean,
      default: false,
    },
    activeAnimation: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: String,
      default: "",
      validator: function (value) {
        return ["sm", "xl", ""].indexOf(value) !== -1;
      },
    },
    row: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let classes = ["shape", "m-button"];
      if (this.primary) classes.push("primary");
      if (this.disabled) classes.push("disabled");
      if (this.row) classes.push("row");
      if (this.radius) classes.push("radius-" + this.radius);
      classes.push(this.text ? "text-button" : "button");

      return classes;
    },
    show_mask() {
      return this.hoverAnimation && this.value && !this.disabled;
    },
  },
  methods: {
    enter() {
      this.value = true;
    },
    leave() {
      this.value = false;
    },
    renderDefault() {
      let solt = this.$slots.default;
      if (solt) {
        return solt();
      }
      return "Submit";
    },
    renderMask() {
      return h(Mask, { value: this.value });
    },
  },
  render() {
    return h(
      this.tag,
      {
        class: this.classes,
        onmouseenter: this.enter,
        onmouseleave: this.leave,
      },
      {
        default: () => [this.renderMask(), this.renderDefault()],
      }
    );
  },
};
</script>
<style scoped>
/* TODO  迟滞的动画效果 */
/*------------ Default ----------*/

.m-button {
  position: relative;
  text-decoration: underline 2px;
  background-color: var(--bgco-0);
  display: inline-block;
  color: var(--grey-4);
  padding: 6px 16px;
  font-weight: bold;
  user-select: none;
  font-size: 14px;
  margin: 1px 2px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}

/*------------ Primary ----------*/

.m-button.button.primary {
  background-color: var(--main-0);
  color: var(--grey-0);
}

/*------------ Active ----------*/
.m-button.button:active {
  filter: brightness(0.85);
}

/*------------ Animation ----------*/

.m-button {
  transition: filter 0.1s cubic-bezier(0.2, 1, 0.5, 1), all 0.3s ease-out;
}

/*------------ disabled ----------*/

.m-button.disabled:active,
.m-button.disabled {
  color: var(--grey-2);
  cursor: not-allowed;
  filter: unset;
}

/*------------ Disabled Primary  ----------*/
.m-button.button.primary.disabled:active,
.m-button.button.primary.disabled {
  background-color: var(--bgco-1);
  color: var(--grey-0);
}

/*------------ Radius ----------*/

.m-button.button.radius-sm {
  border-radius: 4px;
}

.m-button.button.radius-xl {
  border-radius: 1rem;
}

/*------------ OneLine ----------*/
.m-button.row {
  display: block;
  width: 100%;
}

/* Text Button */

/*------------ Default ----------*/

.m-button.text-button {
  background: unset;
  color: var(--grey-4);
  transition: opacity 0.2s cubic-bezier(0.2, 1, 0.5, 1);
}

/*------------ Active ----------*/

.m-button.text-button:active {
  opacity: 0.6;
}

/*------------ Primary ----------*/

.m-button.text-button.primary {
  color: var(--main-0);
}

/* ------------ disabled ---------- */

.m-button.text-button.disabled:active,
.m-button.text-button.disabled {
  color: var(--grey-2);
}

/*------------ Disabled Primary  ----------*/

.m-button.text-button.primary.disabled:active,
.m-button.text-button.primary.disabled {
  color: var(--bgco-1);
  opacity: unset;
}
</style>
