<template>
	<article id="shadow">
		<doc-item name="v-shadow:" title-is="h2">
			<li>
				<p>
					<c-highlighter>:arg</c-highlighter>
					: range - top | nottom | left | right
				</p>
			</li>
			<li>
				<p>
					<c-highlighter>="value"</c-highlighter>
					: type - Number, range - 1~30
				</p>
				设置阴影强度,建议1~30,最大值可超过30
			</li>
		</doc-item>
		<m-card>
			<m-row spaceMode="between" Y="center">
				<label for="shadow-intensity"><span>阴影强度</span></label>
				<input id="shadow-intensity" type="number" v-model="value" />
			</m-row>
		</m-card>
		<demo-box title="v-shaow" :code="code">
			<m-row X="center">
				<m-cube class="demo-box" v-shadow:bottom="value">
					Intensity:{{ value }}
				</m-cube>
			</m-row>
		</demo-box>
	</article>
</template>
<script>
	export default {
		name: 'v-shaow',
		data: () => {
			return {
				code: `
// Javascript
let value = 10;
// HTML
<body>
    <style>
        .demo-box {
            background: var(--foreground) !important;
            color: var(--text) !important;
            height: 200px;
            width: 150px;
            border: unset;
        }
    </style>
    <m-cube class="demo-box" v-shadow:bottom="value" >
        Intensity:{{value}}
    </m-cube>
</body>`,
				value: '10',
			};
		},
	};
</script>
<style>
	.demo-box {
		background: var(--foreground) !important;
		color: var(--text) !important;
		height: 200px;
		width: 150px;
		border: unset;
	}
</style>
