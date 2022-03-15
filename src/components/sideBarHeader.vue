<template>
	<header tag="header" row text @click="toHomePage">
		<m-row X="center" Y="center">
			<m-button text row class="text-hint">
				<m-row X="center" Y="center">
					<img src="../../public/logo.png" alt="logo" height="30" />
					<span class="version">Jet UI - V0.87.1beta</span>
				</m-row>
			</m-button>
		</m-row>
	</header>
	<hr style="margin: auto" />
</template>
<script>
	export default {
		name: 'sidebar-header',
		methods: {
			toHomePage() {
				this.$router.push('/');
			},
		},
	};
</script>
<style scoped>
	header > .m-row {
		height: 72px;
	}
</style>
