<template>
  <!-- sub app bar -->
  <j-row
    class="app-bar frosted-glass"
    spaceMode="between"
    id="sub-app-bar"
    v-show="Mobile"
    Y="center"
  >
    <j-button class="button-menu" @click="clickMenu" text>
      <i class="bi bi-list"></i>
      菜单
    </j-button>
  </j-row>
  <!-- drawer left -->
  <j-drawer id="drawer-left" from="left" :expand="drawerLeftExpand">
    <slot name="drawer"></slot>
  </j-drawer>
  <!-- drawer mask -->
  <div
    v-show="drawerLeftExpand"
    @click="drawerLeftExpand = false"
    id="drawer-mask"
  ></div>
</template>
<script lang="ts">
import { Row as JRow, Button as JButton, Drawer as JDrawer } from "jet-plan-ui";
import { shadowPainter } from "jet-plan-ui/tool";
import { inject, defineComponent } from "vue";
export default defineComponent({
  components: {
    JRow,
    JButton,
    JDrawer,
  },
  setup() {
    return {
      Mobile: inject<string>("Mobile"),
    };
  },
  methods: {
    clickMenu() {
      this.drawerLeftExpand = !this.drawerLeftExpand;
    },
  },
  data() {
    return {
      drawerShadow: shadowPainter("right", 2, "#76909233"),
      drawerLeftExpand: false,
    };
  },
});
</script>
<style scoped>
/* Sub app bar */
#sub-app-bar {
  height: var(--HEIGHT-HEADER);
  box-sizing: border-box;
  position: sticky;
  width: 100vw;
  top: -1px;
  margin-left: -1rem;
}

#drawer-left {
  box-shadow: v-bind(drawerShadow);
  background: var(--background);
  width: 255px;
}

#drawer-mask {
  backdrop-filter: blur(2px);
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
}
</style>
