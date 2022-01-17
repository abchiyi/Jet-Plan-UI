<script>
import { h } from "vue";
import { Mask } from "../../mask";
import { ActionFeedback } from "../../action-feedback";
export default {
  name: "m-button",
  data() {
    return {
      value: false,
      maskSize: null
    };
  },
  props: {
    tag: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    hoverAnimation: {
      type: Boolean,
      default: true
    },
    activeAnimation: {
      type: Boolean,
      default: true
    },
    primary: {
      type: Boolean,
      default: false
    },
    radius: {
      type: String,
      default: "s",
      validator: function(value) {
        return ["s", "m", "l"].indexOf(value) !== -1;
      }
    },
    row: {
      type: Boolean,
      default: false
    }
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
    }
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
      return h(Mask, {
        value: this.show_mask
      });
    },
    getSize(el) {
      let bcr = el.getBoundingClientRect();
      return {
        height: bcr.height + "px",
        width: bcr.width + "px"
      };
    }
  },
  render() {
    return h(
      this.activeAnimation ? ActionFeedback : this.tag,
      {
        tag: this.tag,
        class: this.classes,
        onmouseenter: this.enter,
        onmouseleave: this.leave
      },
      {
        default: () => [this.renderMask(), this.renderDefault()]
      }
    );
  }
};
</script>
<style>
/*------------ Default ----------*/

.m-button {
  text-decoration: underline 2px;
  background-color: var(--secondary);
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 6px 16px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 14px;
  cursor: pointer;
  overflow: hidden;
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
  .m-button {
    -webkit-tap-highlight-color: #ffffff00;
  }
}

.m-button + .m-button {
  margin: 0 0 0 2px;
}

/*------------ Primary ----------*/
.m-button.button.primary {
  background-color: var(--primary);
  color: white;
}

/*------------ Active ----------*/
.m-button.button:active {
  filter: brightness(0.85);
}

/*------------ Animation ----------*/

.m-button {
  transition: all 0.3s var(--ease-out);
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

.m-button.radius-s {
  border-radius: 4px;
}
.m-button.radius-m {
  border-radius: 8px;
}

.m-button.radius-l {
  border-radius: 1rem;
}

/*------------ OneLine ----------*/
.m-button.row {
  display: block;
  width: 100%;
}

.m-button.row + .m-button.row {
  margin: 2px 0 0 0;
}

/* Text Button */

/*------------ Default ----------*/

.m-button.text-button {
  background: unset;
  padding: 4px 8px;
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
