<template>
	<article id="re-screen-size">
		<doc-item name="v-re-screen-size:" title-is="h2">
			<li>
				<p>
					<inline-code>="value"</inline-code>
					: type - Function(el,reSizeObj)
				</p>
				<p>
					接受一个有参数回调函数，当屏幕尺寸发生变动时（旋转屏幕或调节窗口大小），函数将会被调用
				</p>
			</li>
			<li id="re-screen-size-value-callback-el">
				<p>
					<inline-code>el</inline-code>
					: type - Element
				</p>
				<p>指令所在的元素</p>
			</li>
			<li id="re-screen-size-value-callback-reSizeObj">
				<p>
					<inline-code>reSizeObj</inline-code>
					: type - Object
				</p>
				<p>包含了当前视窗尺寸信息的对象</p>
				<doc-item name="reSizeObj:" title-is="h3">
					<p>reSizeObj 包含信息</p>
					<li id="resize-obj-width">
						<p>
							<inline-code>width</inline-code>
							: type - Number
						</p>
						<p>当前屏幕可视宽度，单位为 “px”</p>
					</li>
					<li id="resize-obj-col">
						<p>
							<inline-code>col</inline-code>
							: type - Obj
						</p>

						<p>
							包含所有屏幕宽度范围的对象，对应屏幕宽度的属性将会被设置为true
						</p>
						<p>
							类似这样：
							<m-code-box
								code="{xs: false, sm: false, md: false, lg: false, xl: true}"
							/>
						</p>
					</li>
					<li id="resize-obj-active-col">
						<p>
							<inline-code>activeCol</inline-code>
							: type - String, range - [ "xs", "sm", "md",
							"lg","xl"]
						</p>
						<p>当前屏幕宽度所属范围</p>
					</li>
				</doc-item>
			</li>
		</doc-item>

		<demo-box
			title="v-re-screen-size"
			:code="code"
			:expand="true"
		></demo-box>
	</article>
</template>
<script>
	import DocItem from '../../../common/DocItem.vue';
	import inlineCode from '../../../common/inlineCode.vue';
	export default {
		components: { inlineCode, DocItem },
		name: 're-screen-size',
		data: () => {
			return {
				code: `// javascript
function test(el,screenSizeInfo){
    console.log(el);
    console.log(screenSizeInfo);
};
// HTML
<body>
    <div v-reScreenSize=screenSizeInfo ></div>
</body>`,
			};
		},
	};
</script>
<style></style>
