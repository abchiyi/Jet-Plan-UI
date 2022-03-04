<template>
	<!-- div 标签作为缓冲,避免过渡动画修改内部样式 -->
	<div class="m-code-box-toplayer">
		<m-row class="m-code-box" ref="codeBox">
			<ul class="line-number">
				<li v-for="i in linenumber" :key="i">{{ i }}</li>
			</ul>
			<highlightjs
				style="width: 100%"
				:autodetect="lang ? false : true"
				:language="lang"
				:code="code.trim()"
			/>
		</m-row>
	</div>
</template>

<script>
	import 'highlight.js/styles/atom-one-dark.css';
	import 'highlight.js/lib/common';
	import hljsVuePlugin from '@highlightjs/vue-plugin';

	export default {
		name: 'm-code-box',
		props: {
			code: {
				type: String,
				required: true,
				default: '-!- Null -!- ',
			},
			lang: { type: String },
		},
		components: {
			highlightjs: hljsVuePlugin.component,
		},
		computed: {
			linenumber() {
				return this.stripCode.split('\n').length;
			},
			stripCode() {
				return this.code.trim();
			},
		},
		mounted() {
			console.log(this.getHljsBackgroundColor());
		},
		methods: {
			getHljsBackgroundColor() {
				let el = this.$refs.codeBox.$el.children[1];
				return el.style.background;
			},
		},
	};
</script>
<style>
	/* Font */
	.m-code-box .line-number,
	.m-code-box *,
	.m-code-box {
		font-family: SarasaMono;
		font-size: 12px;
	}
	.m-code-box {
		overflow: hidden;
		border-radius: var(--m-radius);
	}

	.m-code-box > .line-number,
	.m-code-box > pre {
		margin-top: unset;
		margin-bottom: unset;
	}

	.m-code-box > .line-number {
		background: rgb(25, 33, 51);
		border-right: 2px dashed var(--border);
		box-sizing: border-box;
		color: var(--text-hint);
		padding: 12px 0.6em;
		text-align: right;
		user-select: none;
		list-style: none;
		flex-shrink: 0;
	}

	.m-code-box .line-number li {
		margin: unset;
	}
</style>
