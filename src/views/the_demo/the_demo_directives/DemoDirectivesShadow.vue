<template>
	<article id="shadow">
		<doc-item name="v-shadow:" title-is="h2">
			<li>
				<p>
					<inline-code>:arg</inline-code>
					: range - top | nottom | left | right
				</p>
			</li>
			<li>
				<p>
					<inline-code>="value"</inline-code>
					: type - Number, range - 1~30
				</p>
				设置阴影强度,建议1~30,最大值可超过30
			</li>
		</doc-item>

		<demo-box title="v-shaow" :code="code">
			<template v-slot:header>
				<p>
					<label for="shadow-intensity">阴影强度</label>
					<input
						id="shadow-intensity"
						type="number"
						v-model="value"
					/>
				</p>
			</template>
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
