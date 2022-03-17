<template>
	<m-transition-slide :opacity="false" :position="right ? 'right' : 'left'">
		<div v-show="expand" :class="classes">
			<slot />
		</div>
	</m-transition-slide>
</template>

<script>
	import { Focus } from '../tool/directives';
	export default {
		name: 'm-sidebar',
		props: {
			expand: {
				type: Boolean,
				required: true,
			},
			right: {
				type: Boolean,
				default: false,
			},
		},
		directives: {
			focus: Focus,
		},
		data() {
			return {
				width: undefined,
				show: false,
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
