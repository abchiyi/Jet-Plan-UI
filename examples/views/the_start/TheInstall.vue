<template>
	<div id="the-insatll">
		<h2>安装</h2>
		<hr />
		<br />
		<h3>npm 安装</h3>
		<p>使用 npm 安装以配合webpack 打包工具</p>
		<j-code-box
			:code="`
npm i jet-plan-ui
npm i jet-plan-ui-theme
`"
		></j-code-box>
		<h3>最小文件</h3>
		<p>从 git clone 包后自行打包文件,</p>
		<p>打包后主文件存放在jet-plan-ui/lib目录下</p>
		<p calss="text-hint">
			Gitee:
			<j-code-box
				:code="`
https://gitee.com/abchiyi/jet-plan-ui.git
cd ./Jet-Plan-UI
npm run lib
`"
			/>
		</p>
		<p calss="text-hint">
			Github :
			<j-code-box
				:code="`
https://github.com/abchiyi/Jet-Plan-UI.git
cd ./Jet-Plan-UI
npm run lib
`"
			/>
		</p>
	</div>
</template>
<script>
	export default {
		name: 'the-install',
	};
</script>
<style></style>
