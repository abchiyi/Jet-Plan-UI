<template>
	<div>
		<m-page v-model="value">
			<!--浮动头栏 -->
			<template v-slot:header>
				<demo-header :title="title" v-model="value"></demo-header>
			</template>
			<!-- 浮动侧栏 -->
			<template v-slot:sidebar>
				<m-row tag="header" X="center" Y="center">
					<m-button text @click="$router.push('/')">Home</m-button>
				</m-row>
				<ol id="links">
					<!-- Start -->
					<expand-menu v-model="expand.start">
						<template v-slot:text>开始</template>
						<m-transition-folded>
							<demo-page-have-index
								v-show="expand.start"
								:paths="links.start"
							/>
						</m-transition-folded>
					</expand-menu>
					<!-- Style -->
					<expand-menu v-model="expand.style">
						<template v-slot:text>样式</template>
						<m-transition-folded>
							<demo-page-have-index
								v-show="expand.style"
								:paths="links.styles"
							/>
						</m-transition-folded>
					</expand-menu>
					<!-- Layout -->
					<expand-menu v-model="expand.layout">
						<template v-slot:text>布局</template>
						<m-transition-folded>
							<demo-page-have-index
								v-show="expand.layout"
								:paths="links.layout"
							/>
						</m-transition-folded>
					</expand-menu>
					<!-- tools -->
					<expand-menu v-model="expand.tools">
						<template v-slot:text>工具</template>
						<m-transition-folded>
							<demo-page-have-index
								v-show="expand.tools"
								:paths="links.tools"
							/>
						</m-transition-folded>
					</expand-menu>
					<!-- components -->
					<expand-menu v-model="expand.components">
						<template v-slot:text>组件</template>
						<m-transition-folded>
							<demo-page-have-index
								v-show="expand.components"
								:paths="links.components"
							/>
						</m-transition-folded>
					</expand-menu>
				</ol>
			</template>
			<template v-slot:default>
				<!-- <router-view /> -->

				<router-view
					@md-title="
						v => {
							title = v;
						}
					"
					v-slot="{ Component }"
				>
					<transition mode="out-in" name="m-transition-fade">
						<component :is="Component" />
					</transition>
				</router-view>
			</template>
			<template v-slot:footer>
				<p>Footer</p>
			</template>
		</m-page>
	</div>
</template>

<script>
	import {
		TheDemoCompontentsRouter,
		TheDemoStart,
		TheDemoStyle,
		TheDemoTool,
		TheDemoLayout,
	} from '../../router';
	function toLinks(routerConf) {
		return routerConf.map(item => {
			return {
				name: item.name,
				href: item.path,
				index: item.index ? item.index : [],
			};
		});
	}
	export default {
		data() {
			return {
				value: true,
				title: null,
				expand: {
					start: true,
					style: true,
					components: true,
					tools: true,
					layout: true,
				},
			};
		},
		computed: {
			links() {
				return {
					start: toLinks(TheDemoStart),
					components: toLinks(TheDemoCompontentsRouter),
					tools: toLinks(TheDemoTool),
					styles: toLinks(TheDemoStyle),
					layout: toLinks(TheDemoLayout),
				};
			},
		},
	};
</script>

<style>
	#links {
		padding: 0 16px;
	}
	.demo-box {
		margin: 10px 0;
		border-radius: 16px;
		padding: 15px 20px;
		display: block;
	}

	.slide_left-enter-active,
	.slide_left-leave-active,
	.slide_right-enter-active,
	.slide_right-leave-active {
		transition: all 0.3s;
		position: absolute !important;
		/* background-color: #fff; */
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 1;
	}
	.slide_left-enter-from,
	.slide_right-leave-to {
		opacity: 1;
		transform: translateX(100%);
	}
	.slide_right-enter-from,
	.slide_left-leave-to {
		opacity: 1;
		transform: translateX(-100%);
	}
	.slide_left-leave-to,
	.slide_right-leave-to {
		opacity: 0.3;
	}
</style>
