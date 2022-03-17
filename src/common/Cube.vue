<template>
	<div :class="classes">
		<m-row X="center" Y="center">
			<slot></slot>
		</m-row>
	</div>
</template>

<script>
	export default {
		name: 'm-cube',
		props: {
			dark: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			classes() {
				let classes = ['m-cube'];
				if (this.dark) classes.push('dark');
				return classes;
			},
		},
	};
</script>

<style>
	.m-cube {
		width: 100px;
		height: 100px;
		border-radius: var(--m-radius);
		background-color: var(--primary);
		/* 文本设置 */
		color: #fff;
		transition: 0.4s ease-in-out;
		overflow: hidden;
	}
	.m-cube.dark {
		background-color: var(--secondary);
		color: inherit;
		font-weight: bolder;
	}
</style>
