<template>
	<div id="the-how-to-use">
		<h2>如何使用</h2>
		<p>组件库支持完全引入和部分引入</p>
		<hr />
		<br />
		<h3>完整引入</h3>
		<j-code-box
			:code="`

import { resolveComponent, createApp, h } from 'vue'

// 引入组件库
import ui from 'jet-plan-ui'
// 主题安装器
import { theme } from jet-plan-ui'
// 引入主题
import  themeDefault from 'jet-plan-ui-theme'
// 设置主题
theme.use(themeDefault)

const BASE_COMPONENT = {
    name: 'app',
    render: () => h(resolveComponent('router-view'))
}
createApp(BASE_COMPONENT)
    .use(ui)
    .mount('#app')
        `"
		/>
		<h3>部分引入</h3>
		<!-- TODO  部分引入-->
	</div>
</template>
<script>
	export default {
		name: 'the-how-to-use',
	};
</script>
<style lang=""></style>
