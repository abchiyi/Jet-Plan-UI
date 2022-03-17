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
								<c-highlighter>tag</c-highlighter>
								type - String , default - div
							</p>
							<p>指定当前组件渲染标签</p>
						</li>
						<li id="props-m-col-col">
							<p>
								<c-highlighter>col</c-highlighter>
								type - Number | range - 0 ~ 24
							</p>
							<p>未特定屏幕尺寸下所元素占用列数</p>
						</li>
						<li id="props-m-col-all">
							<p>
								<c-highlighter>xs</c-highlighter>
								<c-highlighter>sm</c-highlighter>
								<c-highlighter>md</c-highlighter>
								<c-highlighter>lg</c-highlighter>
								<c-highlighter>xl</c-highlighter>
								type - Number , range - 0 ~ 24
							</p>
							<p>设置特定屏幕尺寸下所元素占用列数</p>
						</li>
						<li id="props-m-col-offset">
							<p>
								<c-highlighter>offset</c-highlighter>
								type - String | range - 0 ~ 24
							</p>
							<p>未特定屏幕宽度下设置位移</p>
						</li>
						<li id="props-m-col-offset-all">
							<p>
								<c-highlighter>offsetXs</c-highlighter>
								<c-highlighter>offsetSm</c-highlighter>
								<c-highlighter>offsetMd</c-highlighter>
								<c-highlighter>offsetLg</c-highlighter>
								<c-highlighter>offsetXl</c-highlighter>
								type - Number , range - 0 ~ 24
							</p>
							<p>特定屏幕宽度下设置位移</p>
						</li>
						<li id="props-m-col-relative-to-screen">
							<p>
								<c-highlighter>relativeToScreen</c-highlighter>
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
								<c-highlighter>tag</c-highlighter>
								type - String , default - div
							</p>
							<p>指定当前组件渲染标签</p>
						</li>
						<li id="props-m-row-x">
							<p>
								<c-highlighter>X</c-highlighter>
								type - String , range - start | center | end ,
								default - start
							</p>
							<p>设置元素横轴起始点</p>
						</li>
						<li id="props-m-row-y">
							<p>
								<c-highlighter>Y</c-highlighter>
								type - String , range - top | center | bottom |
								, default - top
							</p>
							<p>设置元素纵轴起始点</p>
						</li>
						<li id="props-m-row-warp">
							<p>
								<c-highlighter>warp</c-highlighter>
								type - Boolean , default - false
							</p>
							<p>
								子元素超出组件显示宽度时是否换行,
								不换行则会压缩每个元素的宽度
							</p>
						</li>
						<li id="props-m-row-reverse">
							<p>
								<c-highlighter>reverse</c-highlighter>
								type - Boolean , default - false
							</p>
							<p>反向排列元素</p>
						</li>
						<li id="props-m-row-nogap">
							<p>
								<c-highlighter>no-gap</c-highlighter>
								type - Boolean , default - false
							</p>
							<p>取消 'm-col' 组件间隙</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<br />
		<h2>基础网格</h2>
		<p>
			通过使用使用组件
			<c-highlighter>&lt;m-col&gt;</c-highlighter>
			组合网格
		</p>
		<hr />
		<br />
		<demo-box title="基础栅格" :code="code1" :expand="true">
			<div id="base-gired">
				<m-row class="girde-item" v-for="n in 4" :key="n">
					<m-col :col="n * 4">
						<m-cube class="girde-cube">
							<span>
								{{ n * 4 }}
							</span>
						</m-cube>
					</m-col>
					<m-col :col="24 - n * 2">
						<m-cube class="girde-cube" dark>
							<span>
								{{ 24 - n * 4 }}
							</span>
						</m-cube>
					</m-col>
				</m-row>
			</div>
		</demo-box>
		<h2>偏移定位</h2>
		<p>
			使用
			<c-highlighter>&lt;m-col&gt;</c-highlighter>
			组件的 offset 属性来进行偏移定位
		</p>
		<hr />
		<br />
		<demo-box title="flex 定位" :code="code2" :expand="v1">
			<div id="gired-flex">
				<m-row class="girde-item" v-for="n in 4" :key="n">
					<m-col :col="4" :offset="n * 2">
						<m-cube class="girde-cube">{{ n * 4 }}</m-cube>
					</m-col>
				</m-row>
			</div>
		</demo-box>
		<h2>子元素起始轴</h2>
		<p>
			使用
			<c-highlighter>&lt;m-row&gt;</c-highlighter>
			组件的 X,Y 属性以快速定位元素
		</p>
		<hr />
		<br />

		<demo-box title="flex 定位" :code="code3" :expand="v1">
			<div>
				<m-row id="flex-y" warp spaceMode="between">
					<span>
						<m-radio id="y-top" value="top" v-model="y" />
						<label for="y-top">Y top</label>
					</span>
					<span>
						<m-radio id="y-center" value="center" v-model="y" />
						<label for="y-center">Y middle</label>
					</span>
					<span>
						<m-radio id="y-bottom" value="bottom" v-model="y" />
						<label for="y-bottom">Y bottom</label>
					</span>
				</m-row>
				<m-row id="flex-x" warp spaceMode="between">
					<span>
						<m-radio id="x-start" value="start" v-model="x" />
						<label for="x-start">X Start</label>
					</span>
					<span>
						<m-radio id="x-center" value="center" v-model="x" />
						<label for="x-center">X Center</label>
					</span>
					<span>
						<m-radio id="x-end" value="end" v-model="x" />
						<label for="x-end">X end</label>
					</span>
				</m-row>
				<hr />
				<m-row class="girde-item" style="height: 100px" :Y="y" :X="x">
					<m-col :col="4">
						<m-cube class="girde-cube" />
					</m-col>
					<m-col :col="4">
						<m-cube class="girde-cube" style="height: 48px" />
					</m-col>
					<m-col :col="4">
						<m-cube class="girde-cube" style="height: 72px" />
					</m-col>
				</m-row>
			</div>
		</demo-box>
	</div>
</template>

<script>
	import pdn from '../../../common/mix/popDemoName';
	export default {
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
	#flex-x > span > *,
	#flex-y > span > * {
		vertical-align: middle;
	}
	.girde-item + .girde-item {
		margin-top: 8px;
	}
	.girde-cube {
		height: 36px;
		width: 100%;
	}
</style>
