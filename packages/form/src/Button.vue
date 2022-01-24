<script>
import { h } from "vue";
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
    disabled: {
      type: Boolean,
      default: false
    },
    text: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
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
      classes.push(this.text ? "text-button" : "button");

      return classes;
    }
  },
  methods: {
    renderDefault() {
      let solt = this.$slots.default;
      if (solt) {
        return solt();
      }
      return "Submit";
    }
  },
  render() {
    return h(
      ActionFeedback,
      {
        active: true,
        class: this.classes
      },
      {
        default: () => [this.renderDefault()]
      }
    );
  }
};
</script>
<style>
/*------------ Default ----------*/
.m-button {
  transition: all 0.3s var(--ease-out);
  background-color: var(--secondary);
  text-decoration: underline 2px;
  border-radius: var(--s-radius);
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 5px 10px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 0.8em;
  cursor: pointer;
}

@supports (-webkit-tap-highlight-color: #ffffff00) {
  .m-button {
    -webkit-tap-highlight-color: #ffffff00;
  }
}

.m-button + .m-button {
  margin: 0 0 0 2px;
}
/*------------ disabled ----------*/
.m-button.disabled {
  color: var(--text-disabled);
  cursor: not-allowed;
}

/*------------ OneLine ----------*/
.m-button.row {
  display: block;
  width: 100%;
}
.m-button.row + .m-button.row {
  margin: 2px 0 0 0;
}
/* Button Mode Only*/
.m-button.button.primary {
  background-color: var(--primary);
  /* TODO需要在主题文件定义文本色彩 */
  color: white;
}
/* Text Button */
/*------------ Default ----------*/
.m-button.text-button {
  font-weight: bold;
  background: unset;
  padding: 6px 8px;
}
/*------------ Primary ----------*/
.m-button.text-button.primary {
  color: var(--primary);
}
/* ------------ disabled ---------- */
.m-button.text-button.disabled {
  color: var(--text-disabled);
}
</style>
