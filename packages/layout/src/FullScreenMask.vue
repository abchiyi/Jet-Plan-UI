<template>
	<span class="full-screen-mask"></span>
</template>

<script>
	export default {
		name: 'FullScreenMask',
	};
</script>

<style scoped>
	.full-screen-mask {
		position: fixed;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
		background-color: var(--shadow);
		animation: ;
	}
</style>
