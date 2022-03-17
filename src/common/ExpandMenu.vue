<template>
	<m-button :style="styles" row text hover @click.stop="click">
		<m-row space-mode="between">
			<strong>
				<slot name="text">ShowMenu</slot>
			</strong>
			<i :class="iconClass"></i>
		</m-row>
	</m-button>
	<div class="more-content">
		<slot></slot>
	</div>
	<!-- <hr class="expand-hr" /> -->
</template>
<script>
	export default {
		name: 'expand-menu',
		props: {
			modelValue: {
				type: Boolean,
			},
			indentation: {
				type: [Number, String],
				default: 0,
			},
		},
		computed: {
			iconClass() {
				return ['bi bi-chevron-right', this.modelValue ? 'expand' : ''];
			},
			styles() {
				return {
					paddingLeft: this.indentation
						? this.indentation + 'rem'
						: '',
				};
			},
		},
		methods: {
			click() {
				this.$emit('update:modelValue', !this.modelValue);
			},
		},
	};
</script>
<style>
	.bi {
		transition: all 0.3s var(--ease-out);
	}
	.bi.expand {
		transform: rotate(90deg);
	}
	.more-content {
		margin-bottom: 0.5em;
	}
	.expand-hr {
		margin-left: 8px;
		margin-right: 8px;
	}
</style>
