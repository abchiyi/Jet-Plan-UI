<template>
	<h2>折叠展开</h2>
	<j-control-bar for-id="re-folded-value">
		<template v-slot:text>
			{{ value ? '折叠' : '展开' }}
		</template>
		<j-button
			id="re-folded-value"
			@click="
				() => {
					value = !value;
				}
			"
		>
			ClickMe
		</j-button>
	</j-control-bar>
	<demo-box title="折叠展开" :code="code" id="folded">
		<div>
			<!-- <j-row X="center"> -->
			<j-transition-folded>
				<j-cube v-show="value">
					<p>Folded</p>
				</j-cube>
			</j-transition-folded>
		</div>
		<!-- </j-row> -->
	</demo-box>
</template>

<script>
	export default {
		name: 'animation-folded',
		data() {
			return {
				value: true,
				code: `<j-transition-folded>
    <div v-show="value">
        <j-cube>
        <p>Folded</p>
        </j-cube>
    </div>
</j-transition-folded>`,
			};
		},
	};
</script>
