<template>
	<j-row class="navbar" Y="center" spaceMode="between" reverse>
		<!-- 选项 -->
		<div id="header-options">
			<j-button text hover @click="switchMode">
				<div id="darkmode-switch" style="user-select: none">
					<j-transition-fade @leave="darkModeSwitch">
						<i
							v-show="darkModeTransitionSwitch"
							:key="1"
							:class="[
								'bi',
								darkMode ? 'bi-moon-fill' : 'bi-sun-fill',
							]"
						></i>
					</j-transition-fade>
				</div>
			</j-button>
			<j-button text hover>About</j-button>

			<button-gitee text />
			<button-github text />
		</div>
		<j-col :lg="0" :xl="0">
			<!-- 侧栏开关 -->
			<j-button text title="menu" @click.stop="click">
				<i style="font-size: 1.8em" class="bi bi-list"></i>
			</j-button>
		</j-col>
	</j-row>
</template>

<script>
	import { theme } from '@ui';
	import themeDefault from '@theme';
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
			switchMode() {
				this.darkModeTransitionSwitch = false;
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
<style scoped>
	.navbar {
		height: 72px;
		width: 100%;
	}

	.navbar > #darkmode-switch {
		height: 16px;
		width: 18.6px;
	}
</style>
