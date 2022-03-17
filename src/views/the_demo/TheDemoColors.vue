<template>
	<div>
		<m-row id="h-tags-and-theme" warp>
			<m-col id="text-style" :sm="24" :col="12">
				<h2>Text style:</h2>
				<div id="h-tags">
					<div class="show-h-tag" style="warp: underline">
						<h1>H1标题</h1>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
					<div class="show-h-tag" style="warp: underline">
						<h2>H2标题</h2>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
					<div class="show-h-tag" style="warp: underline">
						<h3>H3标题</h3>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
					<div class="show-h-tag" style="warp: underline">
						<h4>H4标题</h4>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
					<div class="show-h-tag" style="warp: underline">
						<h5>H5标题</h5>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
					<div class="show-h-tag" style="warp: underline">
						<h6>H6标题</h6>
						<p class="text-hint">
							font-family: sarasa-ui-sc; font-size:3rem
						</p>
					</div>
				</div>
				<div id="text">
					<p style="color: var(--text)">Text nolmal</p>
					<p style="color: var(--text-disabled)">Text disabled</p>
					<p class="text-hint" style="color: var(--text-hint)">
						Text hint
					</p>
				</div>
			</m-col>
			<m-col id="theme" :sm="24" :col="12">
				<h2>Base Color:</h2>
				<m-row
					id="colors"
					class="demo-box"
					space-mode="around"
					X="center"
					warp
				>
					<div
						class="color-box"
						v-for="c in [
							'primary',
							'scrondary',
							'success',
							'warning',
							'error',
							'info',
						]"
						:key="c"
					>
						<div
							class="color"
							:style="{ background: `var(--${c})` }"
						></div>
						<p class="text-hint">{{ c }}</p>
					</div>
				</m-row>
				<div id="mini-screen">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 324 184"
					>
						<g
							id="组_22"
							data-name="组 22"
							transform="translate(-1522.5 -325)"
						>
							<g
								id="组_19"
								data-name="组 19"
								transform="translate(9 -8.5)"
							>
								<rect
									id="矩形_11"
									data-name="矩形 11"
									width="320"
									height="180"
									rx="4"
									transform="translate(1515.5 335.5)"
									fill="var(--background)"
									stroke="var(--border)"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="4"
								/>
								<path
									id="交叉_2"
									data-name="交叉 2"
									d="M-1885.168,123.1a20.877,20.877,0,0,1-8.576-7.36,20.4,20.4,0,0,1-3.2-11.584,18.492,18.492,0,0,1,1.6-8.064,16.37,16.37,0,0,1,4.288-5.567,21.923,21.923,0,0,1,6.143-3.585,39.7,39.7,0,0,1,7.36-2.048q3.9-.7,7.745-1.216,4.736-.64,8.128-1.024a48.989,48.989,0,0,0,5.567-.9,6.6,6.6,0,0,0,3.2-1.535,3.987,3.987,0,0,0,1.024-2.944V76.9q0-6.656-3.649-10.432t-11.072-3.776a22.05,22.05,0,0,0-6.72.96,21.325,21.325,0,0,0-5.248,2.432,16.142,16.142,0,0,0-3.776,3.392,19.111,19.111,0,0,0-2.432,3.84L-1894.9,69.6a25.018,25.018,0,0,1,5.184-7.871,25.912,25.912,0,0,1,6.912-4.992,32.417,32.417,0,0,1,7.872-2.688,40.46,40.46,0,0,1,8.064-.832,41.816,41.816,0,0,1,6.016.512,28.838,28.838,0,0,1,6.848,1.92,21.748,21.748,0,0,1,6.336,4.1,19.124,19.124,0,0,1,4.736,7.168,30.127,30.127,0,0,1,1.792,11.136V124h-10.751v-9.473h-.512a16.888,16.888,0,0,1-2.432,3.649,19.505,19.505,0,0,1-4.161,3.648,23.093,23.093,0,0,1-6.016,2.752,27.56,27.56,0,0,1-8.128,1.088A27.624,27.624,0,0,1-1885.168,123.1Zm28.8-32.32a75.34,75.34,0,0,1-7.68,1.344q-4.1.513-6.272.769a43.8,43.8,0,0,0-6.08,1.152,18.8,18.8,0,0,0-5.056,2.111,10.533,10.533,0,0,0-3.456,3.392,9.5,9.5,0,0,0-1.28,5.12,10.085,10.085,0,0,0,1.921,6.336,11.338,11.338,0,0,0,5.248,3.713,21.923,21.923,0,0,0,7.552,1.216,23.172,23.172,0,0,0,8.384-1.409,18.114,18.114,0,0,0,6.208-3.9,15.952,15.952,0,0,0,3.776-5.568,16.923,16.923,0,0,0,1.216-6.272V88.928Q-1852.784,89.951-1856.368,90.784ZM-1918.576,124l-9.344-26.368h-37.633L-1974.9,124h-11.776l34.176-93.056h11.648L-1906.672,124Zm-43.392-36.352h30.463l-14.847-41.984h-.769Z"
									transform="translate(3589.672 347.056)"
									fill="var(--text-disabled)"
								/>
							</g>
							<path
								id="路径_2"
								data-name="路径 2"
								d="M0,0H9V60H0Z"
								transform="translate(1820 456.5) rotate(90)"
								fill="#1687a7"
							/>
							<g
								id="组_20"
								data-name="组 20"
								transform="translate(323 -89)"
							>
								<g
									id="组_17"
									data-name="组 17"
									transform="translate(0 -6)"
								>
									<rect
										id="矩形_16"
										data-name="矩形 16"
										width="90"
										height="113"
										rx="4"
										transform="translate(1422 479)"
										fill="var(--foreground)"
									/>
									<rect
										id="矩形_17"
										data-name="矩形 17"
										width="13"
										height="6"
										rx="3"
										transform="translate(1495 582)"
										fill="var(--secondary)"
									/>
									<rect
										id="矩形_20"
										data-name="矩形 20"
										width="13"
										height="6"
										rx="3"
										transform="translate(1477 582)"
										fill="var(--primary)"
									/>
								</g>
								<rect
									id="矩形_21"
									data-name="矩形 21"
									width="90"
									height="30"
									rx="4"
									transform="translate(1422 438)"
									fill="var(--foreground)"
								/>
							</g>
							<g
								id="组_21"
								data-name="组 21"
								transform="translate(303 -82)"
							>
								<g fill="var(--text)">
									<rect
										id="矩形_12"
										data-name="矩形 12"
										width="18"
										height="8"
										rx="4"
										transform="translate(1244 431)"
									/>
									<rect
										id="矩形_13"
										data-name="矩形 13"
										width="150"
										height="8"
										rx="4"
										transform="translate(1244 445)"
									/>
									<rect
										id="矩形_18"
										data-name="矩形 18"
										width="75"
										height="8"
										rx="4"
										transform="translate(1244 457)"
									/>
								</g>
								<g fill="var(--text-hint)">
									<rect
										id="矩形_13-2"
										data-name="矩形 13"
										width="150"
										height="8"
										rx="4"
										transform="translate(1244 471)"
									/>
									<rect
										id="矩形_19"
										data-name="矩形 19"
										width="75"
										height="8"
										rx="4"
										transform="translate(1244 483)"
									/>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</m-col>
		</m-row>
		<!-- Switch theme -->
		<m-control-bar for-id="dark-mode">
			<template v-slot:text>开启深色模式</template>
			<m-switch
				id="dark-mode"
				:disabled="autoDarkMode"
				v-model="darkMode"
			/>
		</m-control-bar>
		<!-- Auto dark mode -->
		<m-control-bar for-id="auto-dark-mode">
			<template v-slot:text>跟随系统</template>
			<m-switch id="auto-dark-mode" v-model="autoDarkMode" />
		</m-control-bar>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	import { theme, themeDefault } from '@';
	import { redColorModeCookie, setColorModeCookie } from '../../common';
	export default {
		mixins: [pdn],
		name: 'the-demo-style',
		data() {
			return {
				darkMode: false,
				autoDarkMode: false,
			};
		},
		created() {
			let cookies = redColorModeCookie();
			this.darkMode = cookies[1];
			this.autoDarkMode = cookies[0];
		},
		watch: {
			darkMode(b) {
				setColorModeCookie(this.darkMode, this.autoDarkMode);
				theme.use(themeDefault, null, b);
			},
			autoDarkMode(b) {
				setColorModeCookie(this.darkMode, this.autoDarkMode);
				theme.use(themeDefault, b, this.darkMode);
			},
		},
	};
</script>

<style>
	#colors {
		background: var(--foreground);
	}

	.color-box {
		align-items: top;
		display: flex;
	}
	.color-box > * {
		width: 130px;
		display: inline-block;
	}
	.color-box p {
		font-size: 19px;
	}

	.color {
		border: 3px solid var(--border);
		border-radius: var(--m-radius);
		height: 50px;
		width: 50px;
		margin: 5px;
	}

	.show-h-tag > *:last-child {
		margin-left: 10px;
	}
	.show-h-tag > * {
		display: inline-block;
	}
	.shadow {
		box-shadow: 0 2px 10px 1px var(--shadow);
	}
</style>
