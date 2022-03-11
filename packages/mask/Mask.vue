<script>
	import { h } from 'vue';
	import { TransitionFade } from '../animations';
	export default {
		name: 'm-mask',
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
					this.value ? h('div', { class: 'm-mask' }) : '',
				],
			});
		},
	};
</script>

<style>
	.m-mask {
		background-color: rgb(145, 238, 207);
		pointer-events: none;
		position: fixed;
		opacity: 0.5;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
	}
</style>
