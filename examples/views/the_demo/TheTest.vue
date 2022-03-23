<template>
	<div style="background: var(--foreground); padding: 100px">
		<j-button @click="click">Click me</j-button>
		<j-transition-slide position="right">
			<j-cube class="a test-cube">
				<j-switch size="s" v-model="v" :disabled="value" />
				<j-switch size="m" v-model="value" />
				<j-switch size="l" v-model="value1" />
			</j-cube>
		</j-transition-slide>
		<div class="test-cube" v-shadow:bottom="5"></div>
		<j-code-box
			:code="`
abc
ABC
012
-+=
		`"
		/>
	</div>
</template>
<script>
	import pdn from '../../common/mix/popDemoName';
	import { TimedActionLimit } from '@ui/tool';
	export default {
		mixins: [pdn],
		name: 'TheTestPage',
		data() {
			return {
				value: true,
				value1: true,
				v: true,
				tal: new TimedActionLimit(510, 1, false),
			};
		},
		methods: {
			click() {
				this.tal.action(() => {
					this.value = !this.value;
				});
			},
		},
	};
</script>

<style>
	.a {
		position: relative;
	}

	.test-cube {
		margin: 10px;
		height: 260px;
		width: 230px;
		border: 1px solid #ebebeb;
		background: var(--foreground);
		border-radius: var(--m-radius);
		box-shadow: '';
	}
</style>
