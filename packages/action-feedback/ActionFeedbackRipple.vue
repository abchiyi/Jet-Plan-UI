<script>
	import { getOffset } from '../tool/lib/dom';
	import { h } from 'vue';
	export default {
		name: 'm-mask',
		props: {
			data: {
				type: Object,
				required: true,
			},
		},
		methods: {
			calcDiameter() {
				const width = this.data.el.offsetWidth;
				const height = this.data.el.offsetHeight;
				return Math.sqrt(width * width + height * height) * 2 + 'px';
			},
			getPosition(data) {
				// 获取父元素内点击定位
				const offset = getOffset(data.el);
				return {
					left: data.event.pageX - offset.x + 'px',
					top: data.event.pageY - offset.y + 'px',
				};
			},
		},
		computed: {
			styles() {
				return {
					'--diameter': this.calcDiameter(),
					'--opacity': this.data.opacity,
					...this.getPosition(this.data),
					backgroundColor: this.data.color,
				};
			},
		},
		render() {
			return h('span', {
				class: ['m-mask', this.data.ripple ? 'ripple' : 'mask'],
				style: this.styles,
			});
		},
	};
</script>
<style scoped>
	span {
		transform: translate(-50%, -50%);
		transition: 1.2s var(--ease-out);
		opacity: var(--opacity);
		height: var(--diameter);
		width: var(--diameter);
		pointer-events: none;
		border-radius: 50%;
		position: absolute;
		user-select: none;
		display: block;
	}

	.mask-enter-active {
		transition-timing-function: cubic-bezier(0.6, 0.6, 0.4, 1);
	}

	.mask-enter-from {
		transform: translate3d(0, 0, 0) translate(-50%, -50%) scale(1);
	}
	.mask-enter-from.ripple {
		transform: translate3d(0, 0, 0) translate(-50%, -50%) scale(0);
	}
	.mask-enter-to {
		transform: translate3d(0, 0, 0) translate(-50%, -50%) scale(1);
	}

	.mask-leave-to {
		opacity: 0;
	}
</style>
