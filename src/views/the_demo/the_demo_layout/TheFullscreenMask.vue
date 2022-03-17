<template>
	<div id="demo-fullscreen-mask">
		<doc-item id="describes" title-is="h2" name="遮罩:" no-dot>
			<li><p>全屏阴影遮罩</p></li>
		</doc-item>
		<hr />
		<div id="doc">
			<doc-item title-is="h2" name="<full-screen-mask>:">
				<li><p>组件无接口</p></li>
			</doc-item>
		</div>
		<demo-box title="<>" :code="code" :expand="true">
			<div>
				<m-button hover @click="mask">打开全屏遮罩</m-button>
			</div>
		</demo-box>
		<m-transition-fade>
			<full-screen-mask v-show="showMask" @click="mask" />
		</m-transition-fade>
	</div>
</template>
<script>
	import pdn from '../../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'demo-fullscreen-mask',
		data: () => {
			return {
				code: `
<full-screen-mask />
                `,
				showMask: false,
			};
		},
		methods: {
			mask() {
				this.showMask = !this.showMask;
			},
		},
	};
</script>
<style></style>
