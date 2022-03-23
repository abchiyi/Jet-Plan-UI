<template>
	<input :class="className" />
</template>

<script>
	export default {
		name: 'j-input',
		props: {
			disabled: Boolean,
		},
		computed: {
			className() {
				return ['j-input', this.disabled ? 'disabled' : ''];
			},
		},
	};
</script>

<style>
	.j-input:focus-visible {
		outline: unset;
	}

	.j-input {
		background-color: rgba(128, 128, 128, 0.9);
		border-radius: 0.28em;
		padding: 0.4em;
		color: inherit;
		border: unset;
		opacity: 0.4;
		height: 1em;
		width: 13em;
	}

	.j-input.disabled {
		cursor: not-allowed;
		-webkit-user-select: none;
		-ms-user-select: none;
		user-select: none;
		appearance: unset;
		opacity: 0.3;
	}
	@supports (backdrop-filter: brightness(90%)) {
		.j-input {
			backdrop-filter: brightness(90%);
			background-color: unset;
			border: unset;
			opacity: 1;
		}
	}
</style>
