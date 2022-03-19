<template>
	<div>
		<h3>Input</h3>
		<demo-box title="input" :code="code">
			<j-input />
		</demo-box>
	</div>
</template>
<script>
	export default {
		name: '',
		data: () => {
			return {
				code: `<j-input />`,
			};
		},
	};
</script>
<style></style>
