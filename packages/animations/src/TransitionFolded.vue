<script>
	import { h, Transition } from 'vue';
	export default {
		name: 'm-transition-folded',
		methods: {
			enter(el) {
				el.style.height = el.scrollHeight + 'px';
			},
			afterEnter(el) {
				el.style.height = '';
			},

			leave(el) {
				let style = window.getComputedStyle(el);
				let paddingTop = style.paddingTop.split('px')[0];
				let paddingBottom = style.paddingBottom.split('px')[0];
				el.style.height =
					el.scrollHeight - paddingTop - paddingBottom + 'px';
			},
			afterLeave(el) {
				el.style.height = '';
			},
		},
		render() {
			return h(
				Transition,
				{
					name: 'm-transition-folded',
					onEnter: this.enter,
					onAfterEnter: this.afterEnter,

					onLeave: this.leave,
					onAfterLeave: this.afterLeave,
				},
				{
					default: () => this.$slots.default(),
				}
			);
		},
	};
</script>

<style>
	.m-transition-folded-leave-to,
	.m-transition-folded-enter-from {
		margin-bottom: 0px !important;
		margin-top: 0px !important;
		padding-bottom: 0px !important;
		padding-top: 0px !important;
		height: 0px !important;
	}
	.m-transition-folded-leave-active,
	.m-transition-folded-enter-active {
		transition: all 0.4s var(--ease-out) !important;
		transform: translate3d(0, 0, 0);
		backface-visibility: hidden;
		overflow: hidden;
		display: block;
	}
</style>
