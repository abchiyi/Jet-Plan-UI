<template>
	<j-action-feedback active class="j-control-bar">
		<j-row :reverse="reverse" space-mode="between">
			<j-row
				class="control-label"
				:for="forId"
				tag="label"
				Y="center"
				:X="reverse ? 'end' : 'start'"
				style="text-align: start"
			>
				<slot name="text">
					<p>Display text</p>
				</slot>
			</j-row>
			<j-row :reverse="reverse" class="control-comp" Y="center">
				<slot>
					<p>Control</p>
				</slot>
			</j-row>
		</j-row>
	</j-action-feedback>
</template>

<script>
	import { Row } from '../../gird/';
	export default {
		name: 'j-control-bar',
		components: {
			'j-row': Row,
		},
		props: {
			forId: { type: String, required: true },
			reverse: { type: Boolean, default: false },
		},
	};
</script>

<style>
	.control-label {
		user-select: none;
	}
	.j-control-bar {
		border-radius: var(--m-radius);
		background: var(--foreground);
		overflow: hidden;
		font-size: 1rem;
		display: block;
		margin: 0.8rem 0;
	}

	.control-comp,
	.control-label {
		height: 2.7rem;
	}

	.control-label {
		margin-left: 10px;
		width: 100%;
	}

	.control-comp {
		margin-right: 10px;
	}

	.reverse .control-comp {
		margin-left: 10px;
		margin-right: unset;
	}

	.reverse .control-label {
		margin-right: 10px;
		margin-left: unset;
	}
</style>
