<template>
	<m-row class="header" Y="center" spaceMode="between">
		<!-- 标题 -->
		<slot name="title">
			<h1>{{ title }}</h1>
		</slot>
		<m-row Y="center" id="header-control">
			<!-- Dark mode 开关 -->
			<div id="darkmode-switch" style="user-select: none">
				<m-transition-scale @leave="darkModeSwitch">
					<div
						@click="
							() => {
								darkModeTransitionSwitch = false;
							}
						"
						v-show="darkModeTransitionSwitch"
						:key="1"
						:class="[
							'test',
							'bi',
							darkMode ? 'bi-moon-fill' : 'bi-sun-fill',
						]"
					></div>
				</m-transition-scale>
			</div>
			<!-- 侧栏开关 -->
			<div>
				<m-button text title="menu" @click.stop="click">
					<i style="font-size: 2rem" class="bi bi-list"></i>
				</m-button>
			</div>
		</m-row>
	</m-row>
</template>

<script>
	import { theme, themeDefault } from '@';
	import { redColorModeCookie, setColorModeCookie } from '../common';
	export default {
		name: 'demo-header',
		props: {
			modelValue: {
				type: Boolean,
			},
			title: {
				default: 'Mousse UI',
				type: String,
			},
		},
		created() {
			let cookies = redColorModeCookie();
			this.darkMode = cookies[1];
			// this.autoDarkMode = cookies[0];
		},
		data() {
			return {
				darkModeTransitionSwitch: true,
				autoDarkMode: false,
				darkMode: false,
			};
		},
		methods: {
			click() {
				this.$emit('update:modelValue', this.modelValue ? false : true);
			},
			darkModeSwitch() {
				setTimeout(() => {
					this.darkModeTransitionSwitch = true;
					this.darkMode = !this.darkMode;
				}, 400);
			},
		},
		watch: {
			darkMode(b) {
				setColorModeCookie(this.darkMode, this.autoDarkMode);
				theme.use(themeDefault, null, b);
			},
			// autoDarkMode(b) {
			// 	setColorModeCookie(this.autoDarkMode, this.darkMode);
			// 	theme.use(themeDefault, b, this.darkMode);
			// },
		},
		model: {
			prop: 'modeValue',
			event: 'update:modelValue',
		},
	};
</script>
<style>
	.header {
		height: 100%;
	}
	.header > h1 {
		margin: unset;
		font-size: 1.4rem;
	}
	#darkmode-switch * {
		font-size: 1.2rem;
	}
</style>
