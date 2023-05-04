<template>
  <base-page>
    <!-- Logo&Title -->
    <j-row id="title-group" Y="bottom" warp>
      <!-- LOGO -->
      <j-col id="left" :col="12" :sm="24" :xs="24">
        <img id="big-logo" src="/logo.svg" alt="logo" width="250" />
      </j-col>
      <!-- 标题 -->
      <j-col id="right" :col="12" :sm="24" :xs="24">
        <!-- 为内容套壳以实现内容居中 -->
        <div>
          <h1>Jet Plan UI</h1>
          <p>基于 Vue 3 的扁平化 UI 组件库</p>
          <div id="button-group">
            <linkButton primary to="/docs/quick-start" aria-label="快速开始">
              快速开始 -->
            </linkButton>
            <!-- TODO 跳转到 安装文档 -->
            <linkButton id="install" to="install" aria-label="安装">
              安装
            </linkButton>
          </div>
        </div>
      </j-col>
    </j-row>
  </base-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { basePage } from "src/components";
import { linkButton } from "src/components";
export default defineComponent({
  name: "the-home",
  components: { basePage, linkButton },
  data() {
    return {
      // 使用与 'page' 组件相同的配置确保在初始加载侧栏不执行动画
      // sidebarExpand: ["xl", "lg"].includes(getWindowWidthIn().value),
      sidebarExpand: false,
    };
  },
});
</script>

<style scoped>
.j-row,
.j-col {
  transition: unset;
}
#button-group > * {
  font-size: 24px;
}
#get-start.j-button {
  background: var(--primary);
  color: white;
}
h1 {
  font-weight: normal;
}

/* Desktop & Tablet */
h1 {
  font-size: 72px;
}
#left {
  padding: 0 50px;
  justify-content: flex-end;
  display: flex;
}
h1 + p {
  font-size: 1.5rem;
}
#title-group {
  margin-top: calc(150px - 1rem - var(--HEIGHT-HEADER));
}

/* Mobile */
.mobile h1 {
  font-size: 3rem;
}
.mobile h1 + p {
  font-size: 1rem;
}
.mobile #title-group {
  margin-top: calc(70px - 1rem - var(--HEIGHT-HEADER));
}
/* 居中logo&标题 */
.mobile #left,
.mobile #right {
  justify-content: center;
  display: flex;
}
</style>
