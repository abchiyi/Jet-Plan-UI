<template>
	<h2>折叠展开</h2>
	<m-control-bar for-id="re-folded-value">
		<template v-slot:text>
			{{ value ? '折叠' : '展开' }}
		</template>
		<m-button
			id="re-folded-value"
			@click="
				() => {
					value = !value;
				}
			"
		>
			ClickMe
		</m-button>
	</m-control-bar>
	<demo-box title="折叠展开" :code="code" id="folded">
		<div>
			<!-- <m-row X="center"> -->
			<m-transition-folded>
				<m-cube v-show="value">
					<p>Folded</p>
				</m-cube>
			</m-transition-folded>
		</div>
		<!-- </m-row> -->
	</demo-box>
</template>

<script>
	export default {
		name: 'animation-folded',
		data() {
			return {
				value: true,
				code: `<m-transition-folded>
    <div v-show="value">
        <m-cube>
        <p>Folded</p>
        </m-cube>
    </div>
</m-transition-folded>`,
			};
		},
	};
</script>
