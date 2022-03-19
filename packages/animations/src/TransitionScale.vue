<script>
	import { h, TransitionGroup } from 'vue';
	export default {
		name: 'j-transition-scale',
		render() {
			return h(
				TransitionGroup,
				{
					name: 'j-transition-scale',
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
	.j-transition-scale-enter-active,
	.j-transition-scale-leave-active {
		transition: all 0.4s var(--ease-out);
	}
	.j-transition-scale-enter-from,
	.j-transition-scale-leave-active {
		transform: scale(0) !important;
		opacity: 0;
	}
</style>
