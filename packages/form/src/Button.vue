<script>
import { h } from "vue";
// import { Background } from "../../layout";
export default {
  // mixins: [Background],
  name: "m-button",
  data() {
    return {
      height: undefined,
      width: undefined
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
    radius: {
      type: String,
      default: "",
      validator: function(value) {
        return ["sm", "xl", ""].indexOf(value) !== -1;
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
    }
  },
  methods: {
    click: function() {
      // if (!this.disabled) this.$emit("click");
    }
  },

  render() {
    return h(
      "button",
      {
        class: this.classes
        // onClick: this.click
      },
      this.$slots
    );
  }
};
</script>
