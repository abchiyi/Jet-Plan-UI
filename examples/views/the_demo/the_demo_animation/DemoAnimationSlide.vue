<template>
	<h2>滑入滑出</h2>
	<j-control-bar for-id="re-slide-value">
		<template v-slot:text>
			{{ value ? '滑出' : '滑入' }}
		</template>
		<j-button
			id="re-slide-value"
			@click="
				() => {
					value = !value;
				}
			"
		>
			ClickMe
		</j-button>
	</j-control-bar>
	<j-control-bar for-id="re-opacity-value">
		<template v-slot:text>同时应用 Fade 效果</template>
		<j-switch id="re-opacity-value" v-model="opacity"></j-switch>
	</j-control-bar>
	<demo-box title="滑入滑出" :code="code" id="slide">
		<div id="slider-animation-group">
			<j-row class="demo-row" X="center">
				<j-transition-slide :opacity="opacity" position="top">
					<div class="deom-item" v-show="value">
						<j-cube>To top</j-cube>
					</div>
				</j-transition-slide>
				<j-transition-slide :opacity="opacity" position="right">
					<div class="deom-item" v-show="value">
						<j-cube>To right</j-cube>
					</div>
				</j-transition-slide>
			</j-row>
			<j-row class="demo-row" X="center">
				<j-transition-slide
					:opacity="opacity"
					class="deom-item"
					position="left"
				>
					<div class="deom-item" v-show="value">
						<j-cube>To left</j-cube>
					</div>
				</j-transition-slide>
				<j-transition-slide
					:opacity="opacity"
					class="deom-item"
					position="bottom"
				>
					<div class="deom-item" v-show="value">
						<j-cube>To bottom</j-cube>
					</div>
				</j-transition-slide>
			</j-row>
		</div>
	</demo-box>
	<p>禁用透明效果适用于元素在屏幕或其他元素边缘进出可视范围使用</p>
	<p>Transition-Slide 组件接口:</p>
	<div style="overflow-x: scroll">
		<table style="width: 768px">
			<tr space-mode="between">
				<td>名称</td>
				<td>功能</td>
				<td>参数类型</td>
				<td>可选值</td>
				<td>默认</td>
			</tr>
			<tr space-mode="between">
				<td>position</td>
				<td>定义滑动方向</td>
				<td>String</td>
				<td>["left", "right", "top", "bottom"]</td>
				<td>--</td>
			</tr>
			<tr space-mode="between">
				<td>opacity</td>
				<td>在过渡中是否启用淡出/入效果</td>
				<td>Boolean</td>
				<td>true/false</td>
				<td>true</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'animation-slide',
		data() {
			return {
				value: true,
				opacity: true,
				code: `<j-transition-slide :opacity="true/false" position="top">
    <div class="deom-item" v-show="value">
    <j-cube>To top</j-cube>
    </div>
</j-transition-slide>`,
			};
		},
	};
</script>

<style>
	.demo-row {
		height: 100px;
	}
	.deom-item .j-cube {
		font-size: 14px;
	}
	.deom-item + .deom-item {
		margin-left: 5px;
	}
	.demo-row + .demo-row {
		margin-top: 5px;
	}
</style>
