=;
<template>
	<m-transition-slide
		v-focus="onblurClose"
		:opacity="false"
		:position="right ? 'right' : 'left'"
	>
		<div v-show="show" class="bar frosted-glass">
			<slot />
		</div>
	</m-transition-slide>
</template>

<script>
	import { Focus } from '../tool/directives';
	import { TimedActionLimit } from '../tool';
	export default {
		name: 'm-sidebar',
		mounted() {
			this.show = this.modelValue;
		},
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
				tal: new TimedActionLimit(500, 1),
			};
		},
		watch: {
			modelValue() {
				this.show = this.modelValue;
			},
			show() {
				this.$emit('update:modelValue', this.show);

				// 侧栏开启使计数器过热
				if (this.show) this.tal.action(() => {});
			},
		},
		methods: {
			onblurClose(v) {
				// 计数器控制是否要执行关闭动作
				this.tal.action(() => {
					if (!v && !this.dock) this.show = false;
				});
			},
		},
	};
</script>

<style scoped>
	.bar {
		overflow-y: scroll;
		position: fixed;
		height: 100vh;
		z-index: 91;
		bottom: 0;
		top: 0;
		left: 0;
	}

	/* Firefox  */
	@supports (scrollbar-width: none) {
		.bar {
			/* overflow: -moz-scrollbars-none; */
			scrollbar-width: none;
		}
	}

	/* chrome and Safari */
	.bar::-webkit-scrollbar {
		display: none;
	}

	/* IE 10+ */
	.bar {
		-ms-overflow-style: none;
	}
</style>
