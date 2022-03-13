<script>
	// TODO 重构
	function getSize(size) {
		if (!size) return 0;
		const index = size.indexOf('px');
		if (index === -1) return 0;
		return Number(size.substring(0, index));
	}
	import { h, Transition } from 'vue';
	export default {
		name: 'm-transition-folded',
		methods: {
			beforeEnter(el) {
				el.dataset.oldPaddingTop = el.style.paddingTop;
				el.dataset.oldPaddingBottom = el.style.paddingBottom;
				el.dataset.oldOverflow = el.style.overflow;
				el.style.paddingTop = '0';
				el.style.paddingBottom = '0';
				el.style.height = '0';
			},
			enter(el) {
				el.style.display = 'block';
				el.style.overflow = 'hidden';
				el.style.height =
					el.scrollHeight +
					getSize(el.dataset.oldPaddingTop) +
					getSize(el.dataset.oldPaddingBottom) +
					'px';
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
			},
			afterEnter(el) {
				el.style.display = '';
				el.style.height = '';
				el.style.overflow = el.dataset.oldOverflow;
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
			},
			beforeLeave(el) {
				el.dataset.oldPaddingTop = el.style.paddingTop;
				el.dataset.oldPaddingBottom = el.style.paddingBottom;
				el.dataset.oldOverflow = el.style.overflow;

				el.style.display = 'block';
				if (el.scrollHeight !== 0) {
					el.style.height = el.scrollHeight + 'px';
				}
				el.style.overflow = 'hidden';
			},
			leave(el) {
				if (el.scrollHeight !== 0) {
					setTimeout(() => {
						el.style.height = 0;
						el.style.paddingTop = 0;
						el.style.paddingBottom = 0;
					});
				}
			},
			afterLeave(el) {
				el.style.display = 'none';
				el.style.height = '';
				el.style.overflow = el.dataset.oldOverflow;
				el.style.paddingTop = el.dataset.oldPaddingTop;
				el.style.paddingBottom = el.dataset.oldPaddingBottom;
			},
		},
		render() {
			return h(
				Transition,
				{
					name: 'm-transition-folded',
					onBeforeEnter: this.beforeEnter,
					onEnter: this.enter,
					onAfterEnter: this.afterEnter,

					onBeforeLeave: this.beforeLeave,
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
	.m-transition-folded-enter-active,
	.m-transition-folded-leave-active {
		transition: all 0.45s var(--ease-out);
		backface-visibility: hidden;
		transform: translate3d(0, 0, 0);
	}
</style>
