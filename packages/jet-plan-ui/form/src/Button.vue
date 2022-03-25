<script>
import { h } from "vue";
import { ActionFeedback } from "../../action-feedback";
export default {
  name: "j-button",
  data() {
    return {
      value: false,
      maskSize: null,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    row: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let classes = ["shape", "j-button"];
      if (this.primary) classes.push("primary");
      if (this.disabled) classes.push("disabled");
      if (this.row) classes.push("row");
      classes.push(this.text ? "text-button" : "button");

      return classes;
    },
  },
  methods: {
    renderDefault() {
      let solt = this.$slots.default;
      if (solt) {
        return solt();
      }
      return "Submit";
    },
  },
  render() {
    return h(
      ActionFeedback,
      {
        tag: "button",
        active: true,
        class: this.classes,
      },
      {
        default: () => [this.renderDefault()],
      }
    );
  },
};
</script>
<style>
/*------------ Default ----------*/
.j-button {
  transition: all 0.3s var(--ease-out);
  background-color: var(--secondary);
  border-radius: var(--m-radius);
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  padding: 5px 10px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  /* color: var(--text-hint); */
  cursor: pointer;
  /* font-size: 1.1rem; */
  text-decoration: underline;
}

.j-button {
  /* margin: 0 0 0 2px; */
  margin: calc(1em * 0.15);
}
/*------------ disabled ----------*/
.j-button.disabled {
  color: var(--text-disabled);
  cursor: not-allowed;
}

/*------------ OneLine ----------*/
.j-button.row {
  display: block;
  width: 100%;
}
.j-button.row + .j-button.row {
  margin: 2px 0 0 0;
}
/* Button Mode Only*/
.j-button.button.primary {
  background-color: var(--primary);
  /* TODO需要在主题文件定义文本色彩 */
  color: white;
}
/* Text Button */
/*------------ Default ----------*/
.j-button.text-button {
  background: unset;
  padding: 6px 8px;
}
/*------------ Primary ----------*/
.j-button.text-button.primary {
  color: var(--primary);
}
/* ------------ disabled ---------- */
.j-button.text-button.disabled {
  color: var(--text-disabled);
}
</style>
