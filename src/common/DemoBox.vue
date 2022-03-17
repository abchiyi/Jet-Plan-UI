<template>
	<m-card class="m-demo-box">
		<m-row v-if="codeControl" Y="center" space-mode="between">
			<span class="text-hint">{{ title }}</span>
			<m-button @click="expand_" text>View Code</m-button>
		</m-row>
		<div ref="showDemo" class="demo-box-demo">
			<slot></slot>
		</div>
		<m-transition-folded title="展开Code">
			<m-code-box
				:id="codeID"
				:code="code"
				v-show="value"
				lang="javascript"
			/>
		</m-transition-folded>
	</m-card>
</template>

<script>
	import { scrollTo } from '../../packages/tool/lib/dom';
	export default {
		name: 'demo-box',
		mounted() {
			if (this.$refs.showDemo.children.length > 1) {
				console.error(`<Demo-box> slot --> "default"
Only one child node is allowed !

${this.$refs.showDemo.innerHTML}
        `);
			}

			if (!this.showDemoHaveContent) {
				this.codeControl = false;
				this.value = true;
			}
		},
		props: {
			expand: {
				type: Boolean,
				default: false,
			},
			code: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
		},
		data() {
			return {
				value: this.expand,
				codeControl: true,
			};
		},
		methods: {
			expand_() {
				this.value = !this.value;
				if (this.value) {
					setTimeout(() => {
						scrollTo(`#${this.codeID}`, 200);
					}, 300);
				}
			},
		},
		computed: {
			codeID() {
				return this.title + '-code';
			},
			showDemoHaveContent() {
				return this.$refs.showDemo.children.length > 0;
			},
		},
	};
</script>

<style>
	.m-demo-box {
		padding: 20px;
	}
	.demo-box-demo > *:nth-child(1) {
		background-color: var(--background);
		border-radius: var(--m-radius);
		padding: 1rem 2rem;
		margin: 20px 0;
	}
</style>
