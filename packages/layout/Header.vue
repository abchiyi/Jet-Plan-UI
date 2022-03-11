<script>
	import { h } from 'vue';
	export default {
		name: 'm-header',
		render() {
			return h(
				'header',
				{
					class: ['m-header', ''],
				},
				this.$slots
			);
		},
	};
</script>

<style>
	.m-header {
		position: fixed;
		z-index: 90;
		right: 0;
		left: 0;
		top: 0;
	}
</style>
