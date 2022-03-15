<template>
	<m-page v-model="mobileDevicesWidth">
		<template v-slot:header>
			<m-row spaceMode="between">
				<m-col :xs="0" :sm="0" :md="0">
					<logo-title />
				</m-col>
				<demo-header v-model="mobileDevicesWidth"></demo-header>
			</m-row>
		</template>
		<template v-slot:sidebar>
			<logo-title />
			<hr style="margin: auto" />
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
					<m-button primary @click="to('/get-started')">
						Get Start
					</m-button>
					<m-button primary>
						<i class="bi bi-github" />
						GitHub
					</m-button>
				</div>
			</div>
		</m-row>
	</m-page>
</template>

<script>
	import logoTitle from '../components/logoTitle.vue';
	export default {
		components: { logoTitle },
		name: 'Home',
		data() {
			return {
				mobileDevicesWidth: false,
				showMenuButton: undefined,
			};
		},
		methods: {
			to(url) {
				this.$router.push(url);
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
		user-select: none;
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
