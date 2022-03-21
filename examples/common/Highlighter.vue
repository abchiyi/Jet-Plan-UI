<template>
	<code class="c-highlighter">
		<slot>inline code</slot>
	</code>
</template>

<script>
	export default {
		name: 'c-highlighter',
	};
</script>

<style>
	.warning-text,
	code.c-highlighter {
		background-color: var(--border);
		border-radius: var(--s-radius);
		color: var(--text-hint);
		font-family: SarasaMono;
		display: inline-block;
		padding: 2px 6px;
		margin: 2px 0;
	}

	.c-highlighter + .c-highlighter {
		margin-left: 5px;
	}
</style>
