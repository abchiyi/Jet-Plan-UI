<template>
	<article id="scroll-to">
		<doc-item name="v-scroll-to:" title-is="h2">
			<li>
				<p>
					<c-highlighter>="value"</c-highlighter>
					: type - Number
				</p>
				<p>
					传入任意数字作为参数,这个参数将在要滚动到的对象高度超出屏幕时启用，作用是设置滚动到元素时元素顶部距离屏幕的距离
				</p>
			</li>
			<li>
				<p>
					<c-highlighter>:args</c-highlighter>
				</p>
				<p>传入任意元素 id</p>
			</li>
		</doc-item>
		<p>
			当元素高度小于视窗高度时，滚动到该元素将会把该元素至于视窗中央。当元素高度大于视窗高度时将会把元素头部滚动至视窗顶部。
			在元素高度大于视窗时，会将元素滚动至 “value”
			中指定的距离屏幕顶部的高度。
		</p>
		<div id="scroll-controll">
			<m-button row tag="a" v-scroll-to:120="`#cube1`">
				滚动至大于屏幕高度元素,定义顶部距离视窗200px
			</m-button>
			<m-button row tag="a" v-scroll-to="`#cube2`">
				滚动至小于屏幕高度元素
			</m-button>
			<m-button row tag="a" v-scroll-to="`#cube3`">
				滚动至大于屏幕高度元素,未定义顶部距离视窗位置
			</m-button>
		</div>
		<demo-box title="v-scroll-to" :code="code">
			<m-row X="center">
				<m-col style="width: 100px">
					<m-cube
						id="cube2"
						v-scroll-to="`#scroll-controll`"
						style="height: 100px; background: var(--warning)"
					>
						100px
					</m-cube>
					<m-cube
						id="cube1"
						style="height: 120vh"
						v-scroll-to="`#scroll-controll`"
					>
						120vh
					</m-cube>

					<m-cube
						id="cube3"
						v-scroll-to="`#scroll-controll`"
						style="height: 120vh; background: var(--error)"
					>
						120vh
					</m-cube>
				</m-col>
			</m-row>
		</demo-box>
	</article>
</template>
<script>
	export default {
		name: 'the-demo-directives-scroll-to',
		data: () => {
			return {
				code: `// HTML
<body>
    <m-button tag='a' v-scroll-to:120="'#cube1'">
        滚动至大于屏幕高度元素,定义顶部距离视窗200px
    </m-button>
    <m-button tag='a' v-scroll-to="#cube2'">
        滚动至小于屏幕高度元素
    </m-button>
    <m-button tag='a' v-scroll-to="'#cube3'">
        滚动至大于屏幕高度元素,未定义顶部距离视窗位置
    </m-button>
    <m-row X='center'>
        <m-col style="width:100px">
            <m-cube id="cube1" style="height:120vh">120vh</m-cube>
            <m-cube id="cube2" style="height:100px">100px</m-cube>
            <m-cube id="cube3" style="height:120vh">120vh</m-cube>
        </m-col>
    </m-row>
</body>`,
			};
		},
	};
</script>
<style></style>
