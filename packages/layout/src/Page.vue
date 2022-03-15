<template>
	<div
		id="page"
		:class="modelValue ? 'is-open' : 'is-closed'"
		v-re-screen-size="autoSidebarControl"
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
		>
			<slot name="header"></slot>
		</m-header>
		<!-- 遮罩 -->
		<m-mask :value="sidebarExpand && !sidebarDock" />
		<!-- 侧栏 -->
		<m-sidebar
			id="page-sidebar"
			:dock="sidebarDock"
			v-focus="onBlur"
			:expand="modelValue"
		>
			<slot name="sidebar" />
		</m-sidebar>
	</div>
</template>

<script>
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
			autoSidebar: {
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
				sidebarExpand: false,
				sidebarDock: false,
			};
		},
		methods: {
			autoSidebarControl(el, v) {
				v.contains(['xl', 'lg'], bool => {
					el;
					if (this.autoSidebar) {
						this.$emit('update:modelValue', bool);
						this.sidebarDock = bool;
					}
				});
			},
			onBlur() {
				if (!this.sidebarDock) {
					this.$emit('update:modelValue', false);
				}
			},
		},
		computed: {
			classSidebarOpen() {
				return [
					this.modelValue && this.sidebarDock
						? 'with-sidebar-open'
						: '',
				];
			},
		},
		watch: {
			modelValue(v) {
				this.sidebarExpand = v;
			},
		},
	};
</script>

<style scoped>
	#page-sidebar {
		width: 255px;
	}

	#page-header,
	#page-content {
		transition: all 500ms var(--ease-in-out);
		padding: 0 10px;
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
