<template>
  <div :class="classes">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { JET_THEME } from "jet-plan-ui/theme";
import { Bumper, autoTextColor } from "jet-plan-ui/tool";
import { defineComponent } from "vue";
export default defineComponent({
  name: "j-avatar",
  props: {
    circle: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    return {
      colorBackground: JET_THEME.Theme.background.light,
    };
  },
  data() {
    return {
      colorText: "",
      Bumper: new Bumper(20),
    };
  },
  mounted() {
    this.Bumper.setAlarmCooled(() => {
      this.colorText = autoTextColor(this.$el);
    });
    this.Bumper.action();
  },
  updated() {
    this.Bumper.action();
  },
  computed: {
    classes() {
      return ["j-avatar", this.circle ? "circle" : ""];
    },
  },
});
</script>

<style>
.j-avatar {
  background: v-bind("colorBackground");
  color: v-bind(colorText);
  display: inline-block;
  position: relative;
  font-size: 1.5rem;
  user-select: none;
  overflow: hidden;
  min-height: 2em;
  min-width: 2em;
  margin: 5px;
}

.j-avatar .content {
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

.j-avatar.circle img,
.j-avatar.circle {
  border-radius: 2em;
}

.j-avatar img,
.j-avatar {
  border-radius: var(--m-radius);
}

.j-avatar img {
  height: var(--size);
  width: var(--size);
}
</style>
