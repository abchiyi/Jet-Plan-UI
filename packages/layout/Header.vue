<script>
	import { h } from 'vue';
	export default {
		name: 'm-header',
		render() {
			return h(
				'header',
				{
					class: ['m-header', 'frosted-glass'],
				},
				this.$slots
			);
		},
	};
</script>

<style>
	.m-header {
		margin-top: unset !important;
		position: fixed;
		right: 0;
		left: 0;
		top: 0;
	}
</style>
