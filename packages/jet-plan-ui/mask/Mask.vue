<script>
	import { h } from 'vue';
	import { TransitionFade } from '../animations';
	export default {
		name: 'j-mask',
		components: {
			TransitionFade,
		},
		props: {
			value: {
				type: Boolean,
				default: false,
			},
		},
		render() {
			return h(TransitionFade, null, {
				default: () => [
					this.value ? h('div', { class: 'j-mask' }) : '',
				],
			});
		},
	};
</script>

<style>
	.j-mask {
		background-color: var(--mask);
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
	}
</style>
