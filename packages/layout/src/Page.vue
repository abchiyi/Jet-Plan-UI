<template>
	<div
		id="page"
		:class="modelValue ? 'is-open' : 'is-closed'"
		v-rss="reScreenSize"
	>
		<!-- 正文 -->
		<m-row id="page-content" :class="classSidebarOpen" X="center">
			<m-col id="content">
				<main>
					<slot></slot>
				</main>
				<footer>
					<hr />
					<slot name="footer"></slot>
				</footer>
			</m-col>
		</m-row>
		<!-- 头栏 -->
		<m-header
			id="page-header"
			:class="classSidebarOpen"
			class="frosted-glass"
			v-shadow:bottom="2"
		>
			<slot name="header"></slot>
		</m-header>
		<!-- 遮罩 -->
		<m-mask :value="sidebarExpand && !sidebarDock" />
		<!-- 侧栏 -->
		<m-sidebar
			id="page-sidebar"
			:dock="sidebarDock"
			v-model="sidebarExpand"
		>
			<slot name="sidebar" />
		</m-sidebar>
	</div>
</template>

<script>
	import { Focus, ReScreenSize } from '../../tool/directives';
	import { Mask } from '../../mask';
	export default {
		name: 'm-page',
		components: {
			'm-mask': Mask,
		},
		props: {
			modelValue: {
				type: Boolean,
				default: false,
			},
		},
		model: {
			prop: 'modeValue',
			event: 'update:modelValue',
		},
		data() {
			return {
				contentBody: {
					colXs: 24,
					colSm: 24,
					colMd: 24,
					colLg: 16,
					colXl: 16,
					col: 16,
				},
				sidebarOpenIn: ['xl', 'lg'],
				sidebarExpand: true,
				sidebarDock: undefined,
			};
		},
		methods: {
			reScreenSize(el, v) {
				el;
				v.contains(this.sidebarOpenIn, bool => {
					this.$emit('update:modelValue', bool);
					this.sidebarDock = bool;
					console.log(3);
				});
			},
		},
		directives: {
			focus: Focus,
			rss: ReScreenSize,
		},
		computed: {
			classSidebarOpen() {
				return [
					this.sidebarExpand && this.sidebarDock
						? 'with-sidebar-open'
						: '',
				];
			},
		},
		watch: {
			modelValue(v) {
				this.$emit('update:modelValue', v);
				this.sidebarExpand = v;
			},
			sidebarExpand(v) {
				this.$emit('update:modelValue', v);
			},
		},
	};
</script>

<style>
	#page-sidebar {
		width: 255px;
	}

	#page-header,
	#page-content {
		transition: all 500ms var(--ease-in-out);
		padding: 0 2em;
	}

	#page-header.with-sidebar-open,
	#page-content.with-sidebar-open {
		margin-left: 255px;
	}

	#page-header {
		height: 72px;
	}

	.content,
	main,
	footer {
		--HEIGHT-FOOTER: 150px;
		--HEIGHT-HEADER: 72px;
		--TOP-MARGIN: 100px;
	}

	#page-content > #content {
		max-width: 960px;
		height: 100vh;
	}

	main {
		margin-top: var(--TOP-MARGIN);
	}

	footer {
		height: var(--HEIGHT-FOOTER);
		box-sizing: border-box;
		position: sticky;
		top: 100vh;
	}
</style>
