<template>
	<m-row class="header" Y="center" spaceMode="between">
		<m-row Y="center" id="header-control">
			<m-col :lg="0" :xl="0">
				<!-- 侧栏开关 -->
				<m-button text title="menu" @click.stop="click">
					<i style="font-size: 1.8em" class="bi bi-list"></i>
				</m-button>
			</m-col>
		</m-row>
		<!-- 选项 -->
		<div id="header-options">
			<m-button text hover @click="switchMode">
				<div id="darkmode-switch" style="user-select: none">
					<m-transition-fade @leave="darkModeSwitch">
						<i
							v-show="darkModeTransitionSwitch"
							:key="1"
							:class="[
								'bi',
								darkMode ? 'bi-moon-fill' : 'bi-sun-fill',
							]"
						></i>
					</m-transition-fade>
				</div>
			</m-button>
			<m-button text hover>About</m-button>
			<m-button text hover>Gitee</m-button>
			<m-button text hover>GitHub</m-button>
		</div>
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
	.header {
		height: 72px;
	}
	.header > h1 {
		margin: unset;
		font-size: 1.4rem;
	}
	#darkmode-switch {
		height: 16px;
		width: 18.6px;
	}

	#header-title > * {
		font-size: 1.8rem;
		vertical-align: middle;
	}
</style>
