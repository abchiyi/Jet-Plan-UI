<template>
	<m-page v-model="mobileDevicesWidth">
		<template v-slot:header>
			<demo-header v-model="mobileDevicesWidth"></demo-header>
		</template>
		<template v-slot:sidebar>
			<side-bar-header />
			<ol id="links">
				<router-link-a>About</router-link-a>
			</ol>
		</template>
		<!-- 正文 -->
		<m-row id="header" tag="header" X="center" Y="center" warp>
			<div class="left">
				<img src="../../public/logo.png" alt="logo" id="logo" />
			</div>
			<div class="right">
				<div class="title">
					<h1 style="font-size: 3rem">Jet UI</h1>
					<p>适用于移动端和桌面端的 UI 组件库</p>
				</div>
				<div class="buttons">
					<m-button primary>Start</m-button>
					<m-button primary>GitHub</m-button>
				</div>
			</div>
		</m-row>
		<m-button
			@click="
				() => {
					$router.push('/get-started');
				}
			"
		></m-button>
	</m-page>
</template>

<script>
	import sideBarHeader from '../components/sideBarHeader.vue';
	export default {
		components: { sideBarHeader },
		name: 'Home',
		data() {
			return {
				mobileDevicesWidth: false,
				showMenuButton: undefined,
			};
		},
		methods: {
			switchMenuButton(el, v) {
				el;
				v.contains(['lg', 'xl'], v => {
					this.showMenuButton = !v;
				});
			},
		},
	};
</script>
<style scoped>
	#header {
		margin-top: 120px;
	}

	#header > .left {
		text-align: right;
		padding: 0 20px;
	}

	#header #logo {
		height: 220px;
		overflow: hidden;
	}

	#header .m-button {
		font-size: 1.5em;
		font-family: SarasaMono;
	}

	#header .buttons,
	#header .title {
		height: 110px;
	}

	.m-sidebar {
		width: 255px;
	}

	.m-sidebar > .m-button {
		padding: unset;
	}

	.m-sidebar > header > .m-row {
		font-size: 1.6rem;
		height: 72px;
	}
	.m-sidebar #version {
		font-size: 0.6rem;
	}
</style>
