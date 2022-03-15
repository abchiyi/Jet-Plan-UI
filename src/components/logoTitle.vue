<template>
	<m-row class="logo-header" X="center" Y="center">
		<m-button text class="text-hint" @click="toHomePage">
			<m-row X="center" Y="center">
				<img src="../../public/logo.png" alt="logo" height="30" />
				<span class="version">Jet UI - V0.87.1beta</span>
			</m-row>
		</m-button>
	</m-row>
</template>
<script>
	export default {
		name: 'logo-title',
		methods: {
			toHomePage() {
				this.$router.push('/');
			},
		},
	};
</script>
<style scoped>
	.logo-header {
		height: 72px;
	}
</style>
