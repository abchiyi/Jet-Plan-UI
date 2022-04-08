<template>
  <h1>&lt;j-all-theme&gt;</h1>
  <p>
    组件 &lt;j-all-theme&gt;
    组件用于显示所有已安装的主题，并通过点击图标来切换主题
  </p>
  <demo-box title="<j-all-theme />" :code="code" expand>
    <div>
      <j-all-theme />
    </div>
  </demo-box>
  <hr />
</template>

<script>
export default {
  name: 'them-all-theme',
  data() {
    return {
      code: `
<j-all-theme/>
`,
    };
  },
};
</script>

<style>
</style>
