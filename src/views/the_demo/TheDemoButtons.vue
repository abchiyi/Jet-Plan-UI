<template>
	<div>
		<h1>按钮</h1>
		<p>基本按钮组件</p>
		<!-- Demo -->
		<demo-box title="点击反馈" :code="code" id="fade">
			<div>
				<m-row id="buttons-button" X="center">
					<m-button Primary>primary</m-button>
					<m-button>Button</m-button>
					<m-button disabled>Button disabled</m-button>
				</m-row>
				<m-row id="buttons-button-text" X="center">
					<m-button primary text>Text Button Primary</m-button>
					<m-button text>Text Button</m-button>
					<m-button text disabled>Text Button Disabled</m-button>
				</m-row>
				<br />
				<div id="buttons-row">
					<m-button row>Button One Row</m-button>
					<m-button text row>Text Button One Row</m-button>
				</div>
			</div>
		</demo-box>
		<demo-doc>
			<template v-slot:prop>
				<li id="prop-button-text">
					<c-highlighter>text - Boolean</c-highlighter>
					按钮外观切换，使用常规按钮还是文本按钮
					<c-highlighter>default - false</c-highlighter>
				</li>
				<li id="prop-button-primary">
					<c-highlighter>primary - Boolean</c-highlighter>
					按钮外观切换，按钮外观展示为带主题色的主要按钮
					<c-highlighter>default - false</c-highlighter>
				</li>
				<li id="prop-button-row">
					<c-highlighter>row - Boolean</c-highlighter>
					使按钮占据一行
					<c-highlighter>default - false</c-highlighter>
				</li>
				<li id="prop-button-disabled">
					<c-highlighter>disabled - Boolean</c-highlighter>
					禁用按钮
					<c-highlighter>default - false</c-highlighter>
				</li>
				<li id="prop-others">
					按钮组件外层使用
					<c-highlighter>m-action-feedback</c-highlighter>
					组件渲染，其余
					<c-highlighter>Prop</c-highlighter>
					参考
					<!--    TODO 跳转到组件 -->
					<m-button text teg="a">m-action-feedback 组件</m-button>
				</li>
			</template>

			<template v-slot:slot>
				<li>默认插槽</li>
			</template>
		</demo-doc>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'the-demo-buttons',
		data() {
			return {
				code: `<m-button Primary>primary</m-button>
<m-button>Button</m-button>
<m-button disabled>Button disabled</m-button>
<m-button primary text>Text Button Primary</m-button>
<m-button text>Text Button</m-button>
<m-button text disabled>Text Button Disabled</m-button>
<m-button row>Button One Row</m-button>
<m-button text row>Text Button One Row </m-button>`,
			};
		},
	};
</script>

<style>
	.m-button.aa {
		width: 400px;
	}
</style>
