<script>
	import { h, Transition } from 'vue';
	export default {
		name: 'j-transition-fade',
		render() {
			return h(
				Transition,
				{
					name: 'j-transition-fade',
				},
				{
					default: () => this.$slots.default(),
				}
			);
		},
	};
</script>

<style>
	.j-transition-fade-enter-active,
	.j-transition-fade-leave-active {
		transition: opacity 0.4s var(--ease-out);
	}
	.j-transition-fade-enter-from,
	.j-transition-fade-leave-active {
		opacity: 0 !important;
	}
</style>
