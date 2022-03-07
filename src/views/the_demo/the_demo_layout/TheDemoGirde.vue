<template>
	<div>
		<doc-item id="describes" title-is="h2" name="基础栅格系统">
			<p>基于 flexbox 的24栏网格系统</p>
		</doc-item>
		<hr />
		<br />
		<div id="doc">
			<!-- m-col -->
			<doc-item name="<m-col> :" title-is="h2">
				<li id="props">
					<doc-item title-is="h3" name="Props:">
						<li id="props-m-col-tag">
							<p>
								<inline-code>tag</inline-code>
								type - String , default - div
							</p>
							<p>指定当前组件渲染标签</p>
						</li>
						<li id="props-m-col-col">
							<p>
								<inline-code>col</inline-code>
								type - Number | range - 0 ~ 24
							</p>
							<p>未特定屏幕尺寸下所元素占用列数</p>
						</li>
						<li id="props-m-col-all">
							<p>
								<inline-code>xs</inline-code>
								<inline-code>sm</inline-code>
								<inline-code>md</inline-code>
								<inline-code>lg</inline-code>
								type - Number , range - 0 ~ 24
							</p>
							<p>设置特定屏幕尺寸下所元素占用列数</p>
						</li>
						<li id="props-m-col-offset">
							<p>
								<inline-code>offset</inline-code>
								type - String | range - 0 ~ 24
							</p>
							<p>未特定屏幕宽度下设置位移</p>
						</li>
						<li id="props-m-col-offset-all">
							<p>
								<inline-code>offsetXs</inline-code>
								<inline-code>offsetSm</inline-code>
								<inline-code>offsetMd</inline-code>
								<inline-code>offsetLg</inline-code>
								type - Number , range - 0 ~ 24
							</p>
							<p>特定屏幕宽度下设置位移</p>
						</li>
						<li id="props-m-col-relative-to-screen">
							<p>
								<inline-code>relativeToScreen</inline-code>
								type - Boolean , default - false
							</p>
							<p>始终相对屏幕计算列宽,而非相对父元素</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
			<!-- m-row -->
			<doc-item name="<m-row> :" title-is="h2">
				<li>
					<doc-item title-is="h3" name="Props:">
						<li id="props-m-row-tag">
							<p>
								<inline-code>tag</inline-code>
								type - String , default - div
							</p>
							<p>指定当前组件渲染标签</p>
						</li>
						<li id="props-m-row-x">
							<p>
								<inline-code>X</inline-code>
								type - String , range - start | center | end ,
								default - start
							</p>
							<p>设置元素横轴起始点</p>
						</li>
						<li id="props-m-row-y">
							<p>
								<inline-code>Y</inline-code>
								type - String , range - top | center | bottom |
								, default - top
							</p>
							<p>设置元素纵轴起始点</p>
						</li>
						<li id="props-m-row-warp">
							<p>
								<inline-code>warp</inline-code>
								type - Boolean , default - false
							</p>
							<p>
								子元素超出组件显示宽度时是否换行,
								不换行则会压缩每个元素的宽度
							</p>
						</li>
						<li id="props-m-row-reverse">
							<p>
								<inline-code>reverse</inline-code>
								type - Boolean , default - false
							</p>
							<p>反向排列元素</p>
						</li>
						<li id="props-m-row-nogap">
							<p>
								<inline-code>no-gap</inline-code>
								type - Boolean , default - false
							</p>
							<p>取消 'm-col' 组件间隙</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<br />
		<doc-item id="demo" title-is="h2" name="如何使用">
			<li id="base-raster">
				<p>通过使用使用组件 'm-col' 的 col 属性来组合网格</p>
				<demo-box title="基础栅格" :code="code1" :expand="true">
					<div id="base-gired">
						<m-row class="girde-item" v-for="n in 4" :key="n">
							<m-col :col="n * 4">
								<m-cube class="girde-cube">{{ n * 4 }}</m-cube>
							</m-col>
							<m-col :col="24 - n * 2">
								<m-cube class="girde-cube" dark>
									{{ 24 - n * 4 }}
								</m-cube>
							</m-col>
						</m-row>
					</div>
				</demo-box>
			</li>
			<li id="use-offset-positioning">
				<p>
					使用
					<inline-code>m-col</inline-code>
					组件的 offset 属性来进行偏移定位
				</p>
				<demo-box title="flex 定位" :code="code2" :expand="v1">
					<div id="gired-flex">
						<m-row class="girde-item" v-for="n in 4" :key="n">
							<m-col :col="4" :offset="n * 2">
								<m-cube class="girde-cube">{{ n * 4 }}</m-cube>
							</m-col>
						</m-row>
					</div>
				</demo-box>
			</li>
			<li id="position-x-y">
				<p>
					使用
					<inline-code>m-row</inline-code>
					组件的 X,Y 属性以快速定位元素
				</p>
				<demo-box title="flex 定位" :code="code3" :expand="v1">
					<template v-slot:header>
						<m-row space-mode="between">
							<label for="y-top">Y 轴顶部对齐</label>
							<m-radio id="y-top" value="top" v-model="y" />
						</m-row>
						<m-row space-mode="between">
							<label for="y-center">Y 轴居中</label>
							<m-radio id="y-center" value="center" v-model="y" />
						</m-row>
						<m-row space-mode="between">
							<label for="y-bottom">Y 轴底部对齐</label>
							<m-radio id="y-bottom" value="bottom" v-model="y" />
						</m-row>
						<m-row space-mode="between">
							<label for="x-start">X 轴顶部对齐</label>
							<m-radio id="x-start" value="start" v-model="x" />
						</m-row>
						<m-row space-mode="between">
							<label for="x-center">X 轴居中</label>
							<m-radio id="x-center" value="center" v-model="x" />
						</m-row>
						<m-row space-mode="between">
							<label for="x-end">X 轴末尾对齐</label>
							<m-radio id="x-end" value="end" v-model="x" />
						</m-row>
					</template>
					<div>
						<m-row
							class="girde-item"
							style="height: 100px"
							:Y="y"
							:X="x"
						>
							<m-col :col="4">
								<m-cube class="girde-cube" />
							</m-col>
							<m-col :col="4">
								<m-cube
									class="girde-cube"
									style="height: 48px"
								/>
							</m-col>
							<m-col :col="4">
								<m-cube
									class="girde-cube"
									style="height: 72px"
								/>
							</m-col>
						</m-row>
					</div>
				</demo-box>
			</li>
		</doc-item>
	</div>
</template>

<script>
	import inlineCode from '../../../common/inlineCode.vue';
	import pdn from '../../../common/mix/popDemoName';
	export default {
		components: { inlineCode },
		name: 'grid-demo',
		mixins: [pdn],
		data() {
			return {
				code1: `
<m-row class="girde-item" v-for="n in 4" :key="n">
    <m-col :col="n * 4"><m-cube class="girde-cube">{{ n * 4 }}</m-cube></m-col>
    <m-col :col="24 - n * 2">
        <m-cube class="girde-cube" dark> {{ 24 - n * 4 }} </m-cube>
    </m-col>
</m-row>

<style>
.girde-item {
margin-bottom: 8px;
}
.girde-cube {
height: 36px;
width: 100%;
}
</style>
`,

				code2: `
<m-col :col="4" :offset="n * 2">
    <m-cube class="girde-cube">{{ n * 4 }}</m-cube>
</m-col>`,
				code3: `
<m-row class="row girde-item" :Y="y" :X="x">
    <m-col :col="4"><m-cube class="girde-cube"/></m-col>
    <m-col :col="4"><m-cube class="girde-cube" style="height:48px"/></m-col>
    <m-col :col="4"><m-cube class="girde-cube" style="height:72px"/></m-col>
</m-row>`,
				v1: true,
				x: 'start',
				y: 'top',
				position: ['start', 'center', 'end', 'around', 'between'],
			};
		},
	};
</script>

<style>
	tr td:nth-child(2) {
		width: 200px;
	}
	.girde-item + .girde-item {
		margin-top: 8px;
	}
	.girde-cube {
		height: 36px;
		width: 100%;
	}
</style>
