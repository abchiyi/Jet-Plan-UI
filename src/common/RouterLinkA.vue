<template>
	<m-button text hover row :class="className" @click="click">
		<slot />
	</m-button>
</template>

<script>
	export default {
		name: 'router-link-a',
		props: {
			href: String,
			active: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			className() {
				return [
					'router-link-a',
					this.$route.path == this.href ? 'active' : '',
				];
			},
		},
		methods: {
			click() {
				if (this.href) {
					this.$router.push(this.href);
				}
			},
		},
	};
</script>

<style>
	.router-link-a.active {
		color: var(--primary);
	}
</style>
