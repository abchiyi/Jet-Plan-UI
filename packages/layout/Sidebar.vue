=;
<template>
	<m-transition-slide
		v-focus="onblurClose"
		:opacity="false"
		:position="right ? 'right' : 'left'"
	>
		<div v-show="modelValue" :class="classes">
			<slot />
		</div>
	</m-transition-slide>
</template>

<script>
	import { Focus } from '../tool/directives';
	import { TimedActionLimit } from '../tool';
	export default {
		name: 'm-sidebar',
		mounted() {},
		props: {
			modelValue: {
				type: Boolean,
				default: false,
			},
			dock: {
				type: Boolean,
				default: false,
			},
			right: {
				type: Boolean,
				default: false,
			},
		},
		directives: {
			focus: Focus,
		},
		model: {
			prop: 'modeValue',
			event: 'update:modelValue',
		},
		data() {
			return {
				width: undefined,
				show: false,
				tal: new TimedActionLimit(10, 1, false),
			};
		},
		computed: {
			classes() {
				return ['m-sidebar', this.postiton, 'frosted-glass'];
			},
			postiton() {
				return this.right ? 'right' : 'left';
			},
		},
		watch: {
			modelValue(v) {
				this.$emit('update:modelValue', v);

				// 侧栏开启使计数器过热
				if (v) this.tal.action(() => {});
			},
		},
		methods: {
			onblurClose(v) {
				// 计数器控制是否要执行关闭动作
				// this.tal.action(() => {
				if (!v && !this.dock) {
					this.$emit('update:modelValue', false);
				}
				// });
			},
		},
	};
</script>

<style scoped>
	.m-sidebar {
		overflow-y: scroll;
		position: fixed;
		height: 100vh;
		z-index: 91;
		bottom: 0;
		top: 0;
		left: 0;
	}

	.m-sidebar.right {
		left: unset;
		right: 0;
	}

	/* Firefox  */
	@supports (scrollbar-width: none) {
		.m-sidebar {
			/* overflow: -moz-scrollbars-none; */
			scrollbar-width: none;
		}
	}

	/* chrome and Safari */
	.m-sidebar::-webkit-scrollbar {
		display: none;
	}

	/* IE 10+ */
	.m-sidebar {
		-ms-overflow-style: none;
	}
</style>
