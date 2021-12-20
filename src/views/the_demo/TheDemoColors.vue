<template>
  <div>
    <m-card>
      <h2 class="text-hint">Base color:</h2>
      <m-row class="text-hint" X="center">
        <m-cube style="background: var(--primary)"> primary </m-cube>
        <m-cube style="background: var(--secondary); color: var(--text)">
          secondary
        </m-cube>
        <m-cube style="background: var(--success)"> success </m-cube>
        <m-cube style="background: var(--warning)"> warning </m-cube>
        <m-cube style="background: var(--info)"> info </m-cube>
        <m-cube style="background: var(--error)"> error </m-cube>
      </m-row>
    </m-card>
    <h2 class="text-hint">Texts color:</h2>
    <div>
      <p style="color: var(--text-disabled)">Text disabled</p>
      <p style="color: var(--text)">Text nolmal</p>
      <p class="text-hint" style="color: var(--text-hint)">Text hint</p>
    </div>
    <h2 class="text-hint">Others:</h2>
    <m-row>
      <m-cube
        class="text-hint shadow"
        style="background: var(--card); color: var(--text)"
      >
        Shadow
      </m-cube>
      <m-cube
        class="text-hint"
        style="
          box-sizing: border-box;
          border: 2px solid var(--border);
          background: var(--secondary);
          color: var(--text);
        "
      >
        border
      </m-cube>
      <m-cube
        class="text-hint shadow"
        style="background: var(--card); color: var(--text)"
      >
        card
      </m-cube>
    </m-row>
  </div>
</template>

<script>
import mCube from "../../common/Cube.vue";
export default {
  name: "the-demo-style",
  components: { mCube },
};
</script>

<style>
.m-cube + .m-cube {
  margin-left: 20px;
}

.shadow {
  box-shadow: 0 2px 10px 1px var(--shadow);
}
</style>
