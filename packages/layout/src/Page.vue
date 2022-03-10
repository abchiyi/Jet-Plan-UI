<template>
	<div
		id="page"
		:class="modelValue ? 'is-open' : 'is-closed'"
		v-rss="reScreenSize"
	>
		<!-- 头栏 -->
		<m-header class="frosted-glass" v-shadow:bottom="2">
			<m-row Y="center">
				<m-col v-bind="width.mainContentWidth">
					<slot name="header"></slot>
				</m-col>
			</m-row>
		</m-header>
		<!-- 侧栏开启位移文档  -->
		<m-row>
			<m-col v-bind="width.mainContentWidth">
				<!-- 文档宽度控制 -->
				<m-row X="center">
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
			</m-col>
		</m-row>
		<!-- 侧栏 -->
		<m-sidebar :dock="sidebarDock" v-model="sidebarExpand">
			<m-row no-gap>
				<m-col v-bind="width.sidebarDispaly" relativeToScreen>
					<slot name="sidebar" />
				</m-col>
			</m-row>
		</m-sidebar>
	</div>
</template>

<script>
	import { Focus, ReScreenSize } from '../../tool/directives';
	export default {
		name: 'm-page',
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
				});
			},
		},
		directives: {
			focus: Focus,
			rss: ReScreenSize,
		},
		computed: {
			width() {
				const sidebarDispaly = {
					col: 3,
					lg: 5,
					sm: 10,
					xs: 15,
				};

				const mainContentWidth = {
					col: this.modelValue ? 24 - sidebarDispaly.col : 24,
					lg: this.modelValue ? 24 - sidebarDispaly.lg : 24,
					sm: 24,
					// offset
					offset: this.modelValue ? sidebarDispaly.col : 0,
					offsetLg: this.modelValue ? sidebarDispaly.lg : 0,
					offsetSm: 0,
				};

				return {
					sidebarDispaly: sidebarDispaly,
					mainContentWidth: mainContentWidth,
				};
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

<style scoped>
	#page {
		/* height: 100vh !important; */
		/* width: 100vw !important; */
		/* overflow-y: hidden; */
	}
	.content,
	main,
	footer {
		--HEIGHT-FOOTER: 150px;
		--HEIGHT-HEADER: 72px;
		--TOP-MARGIN: 100px;
	}

	.m-header > .m-row {
		height: 72px;
	}

	.m-header > *,
	#content {
		padding: 0 20px;
	}

	#content {
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
