<template>
	<h2>淡出淡入</h2>
	<j-control-bar for-id="re-fade-value">
		<template v-slot:text>
			{{ value ? '淡出' : '淡入' }}
		</template>
		<j-button
			id="re-fade-value"
			@click="
				() => {
					value = !value;
				}
			"
		>
			ClickMe
		</j-button>
	</j-control-bar>
	<demo-box title="淡出淡入" :code="code" id="fade">
		<j-row class="animation-box" X="center">
			<j-transition-fade>
				<j-cube v-show="value">
					<p>Fade</p>
				</j-cube>
			</j-transition-fade>
		</j-row>
	</demo-box>
</template>

<script>
	export default {
		name: 'animation-fade',
		data() {
			return {
				value: true,
				code: `<j-transition-fade>
    <j-cube v-show="value">
        <p>Fade</p>
    </j-cube>
</j-transition-fade>`,
			};
		},
	};
</script>

<style>
	#fade .animation-box {
		height: 100px;
	}
</style>
