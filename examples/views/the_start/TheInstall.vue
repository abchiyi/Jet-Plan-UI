<template>
    <div id="the-insatll">
        <h1>安装</h1>
        <hr />
        <h2>从 Npm 安装:</h2>
        <p>使用 npm 安装以配合webpack 打包工具</p>
        <hr />
        <demo-box
            title="npm install"
            code="
npm i jet-plan-ui
npm i jet-plan-ui-theme
        "
        ></demo-box>

        <h2>从源文件编译:</h2>
        <hr />
        <demo-box
            title="Gitee"
            code="
git clone https://gitee.com/abchiyi/jet-plan-ui.git ./
cd ./Jet-Plan-UI
npm run lib
"
        />
        <demo-box
            title="Github"
            code="
git clone https://github.com/abchiyi/Jet-Plan-UI.git ./
cd ./Jet-Plan-UI
npm run lib
"
        />
    </div>
</template>
<script>
export default {
    name: 'the-install',
};
</script>
<style></style>
