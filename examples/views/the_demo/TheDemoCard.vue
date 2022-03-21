<template>
	<div>
		<h2>Card组件</h2>
		<p>卡片容器</p>
		<!-- Demo -->
		<demo-box title="卡片" :code="code">
			<j-card style="height: 200px"></j-card>
		</demo-box>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'the-demo-card',
		data() {
			return {
				code: ``,
			};
		},
	};
</script>

<style></style>
