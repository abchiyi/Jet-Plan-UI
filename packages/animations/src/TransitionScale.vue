<script>
	import { h, TransitionGroup } from 'vue';
	export default {
		name: 'm-transition-scale',
		render() {
			return h(
				TransitionGroup,
				{
					name: 'm-transition-scale',
					mode: 'out-in',
				},
				{
					default: () => this.$slots.default(),
				}
			);
		},
	};
</script>

<style>
	.m-transition-scale-enter-active,
	.m-transition-scale-leave-active {
		transition: all 0.4s var(--ease-out);
	}
	.m-transition-scale-enter-from,
	.m-transition-scale-leave-active {
		transform: scale(0) !important;
		opacity: 0;
	}
</style>
