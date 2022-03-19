<template>
	<div>
		<h2>Code box</h2>
		<p>用于展示各种代码</p>
		<!-- Demo -->
		<demo-box title="点击反馈" :code="code">
			<j-row X="center">
				<j-code-box code="conosle.log('Hello world')" />
			</j-row>
		</demo-box>
		<demo-doc>
			<template v-slot:prop>
				<li id="prop-code">
					<c-highlighter>code - String</c-highlighter>
					代码文本，该参数是必须的。
				</li>
				<li id="prop-lang">
					<c-highlighter>lang - String</c-highlighter>
					指定语言类型，不指定即为自动识别。
				</li>
			</template>
		</demo-doc>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'the-demo-code-box',
		data() {
			return {
				code: `<j-code-box code="conosle.log('Hello world')"  lang="javascript" />`,
			};
		},
	};
</script>

<style></style>
