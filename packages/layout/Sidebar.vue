<template>
	<m-transition-slide
		v-focus="onblurClose"
		:opacity="false"
		:position="right ? 'right' : 'left'"
	>
		<div v-shadow:right="dock ? 0 : 2" v-show="modelValue" :class="classes">
			<slot />
		</div>
	</m-transition-slide>
</template>

<script>
	import { Focus } from '../tool/directives';
	export default {
		name: 'm-sidebar',
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
				dock_: this.dock,
			};
		},
		computed: {
			classes() {
				return ['m-sidebar', this.postiton, 'frosted-glass'];
			},
			postiton() {
				return this.right ? 'right' : 'left';
			},
			showMask() {
				return !this.dock_ && this.modelValue;
			},
		},
		watch: {
			dock(v) {
				this.dock_ = v;
			},
		},
		methods: {
			onblurClose() {
				if (!this.dock_) {
					this.$emit('update:modelValue', false);
				}
			},
		},
	};
</script>

<style scoped>
	.m-sidebar {
		overflow-y: scroll;
		position: fixed;
		height: 100vh;
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
