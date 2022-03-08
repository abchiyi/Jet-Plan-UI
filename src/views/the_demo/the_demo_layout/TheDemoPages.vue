<template>
	<div id="demo-pages">
		<doc-item id="describes" title-is="h2" name="预设页面布局:" no-dot>
			<li><p>mousseUI 提供一些预设的页面布局来进行快速页面设置</p></li>
		</doc-item>
		<hr />
		<div id="p1-doc">
			<doc-item title-is="h2" name="预设1：">
				<li id="describes-p1">
					<p>上中下布局+侧栏，兼容移动设备</p>
					<p>在移动设备宽度下侧栏由停靠转为浮动</p>
				</li>
				<li id="p1-props">
					<doc-item name="props">
						<li id="props-model-value">
							<p>
								<inline-code>modelValue</inline-code>
								: type - Boolean
							</p>
							<p>用于绑定值，控制侧边栏开/关</p>
						</li>
					</doc-item>
				</li>
				<li id="p1-event">
					<doc-item name="Event:">
						<li id="event-update-model-value">
							<p>
								<inline-code>@update-model-value</inline-code>
								: type - Boolean
							</p>
							<p>更新绑定值</p>
						</li>
					</doc-item>
				</li>
				<li id="p1-slots">
					<doc-item name="Slots">
						<li id="p1-slots-header">
							<p>
								<inline-code>:header</inline-code>
								- 顶部浮动栏插槽
							</p>
						</li>
						<li id="p1-slots-default">
							<p>
								<inline-code>:default</inline-code>
								- 正文插槽
							</p>
						</li>
						<li id="p1-slots-footer">
							<p>
								<inline-code>:footer</inline-code>
								- 页脚插槽
							</p>
						</li>
						<li id="p1-slots-sidebar">
							<p>
								<inline-code>:sidebar</inline-code>
								- 侧栏插槽
							</p>
						</li>
					</doc-item>
				</li>
				<li id="p1-demo">
					<demo-box :code="code" :expand="true" title="预设1">
						<m-row X="center">
							<m-row
								id="p1"
								:class="demoClass"
								v-re-screen-size="setDemoMobileMode"
							>
								<m-transition-slide position="left">
									<m-col
										id="left"
										v-show="!demoMobileMode"
										:col="4"
									>
										<div id="p1-sidebar"></div>
									</m-col>
								</m-transition-slide>
								<m-col id="right">
									<div id="p1-header"></div>
									<m-row X="center" id="p1-main">
										<div>
											<div></div>
											<div></div>
											<div></div>
										</div>
									</m-row>
									<m-row X="center" id="p1-footer">
										<div></div>
									</m-row>
								</m-col>
							</m-row>
						</m-row>
					</demo-box>
				</li>
			</doc-item>
		</div>
	</div>
</template>
<script>
	import inlineCode from '../../../common/inlineCode.vue';
	import pdn from '../../../common/mix/popDemoName';
	export default {
		components: { inlineCode },
		mixins: [pdn],
		name: 'demo-pages',
		data: () => {
			return {
				demoMobileMode: false,
				code: `
// Javascript
let expandSidebar = true;
// HTML
<body>
    <m-pages v-mode="expandSidebar">
        <template slot:header>
            Header
        </template>
        <template slot:default>
            default
        </template>
        <template slot:footer>
            footer
        </template>
        <template slot:sidebar>
            sidebar
        </template>
    </m-pages>
</body>`,
			};
		},
		methods: {
			setDemoMobileMode(el, data) {
				el;
				if (['xs'].indexOf(data.activeCol) !== -1) {
					this.demoMobileMode = true;
				} else {
					this.demoMobileMode = false;
				}
			},
		},
		computed: {
			demoClass() {
				return [this.demoMobileMode ? 'mobile-mode' : ''];
			},
		},
	};
</script>
<style>
	#p1 {
		transition: all 0.4s var(--ease-in-out);
		border-radius: var(--m-radius);
		background: var(--foreground);
		box-sizing: border-box;
		overflow: hidden;
		width: 400px;
	}

	#p1.mobile-mode {
		width: 220px;
	}

	#p1 #right,
	#p1 #left {
		padding: 10px;
		height: 200px;
	}

	#p1 #right {
		padding-left: unset;
	}

	#p1.mobile-mode #right {
		padding: 10px;
	}

	#p1 #p1-sidebar {
		border-radius: var(--m-radius);
		background: var(--primary);
		height: 100%;
	}

	#p1-header {
		border-radius: var(--m-radius);
		background: var(--primary);
		height: 20%;
	}

	#p1-main {
		height: calc(60% - 10px);
		background: unset;
		margin-top: 10px;
	}

	#p1-footer > div,
	#p1-main > div {
		background: var(--background);
		box-sizing: border-box;
		padding: 10px;
		height: 100%;
		width: 50%;
	}

	#p1-main > div {
		border-radius: var(--m-radius) var(--m-radius) 0 0;
	}
	#p1-footer > div {
		border-top: solid 1px var(--border);
		border-radius: 0 0 var(--m-radius) var(--m-radius);
	}
	#p1-main > div > *:nth-child(3),
	#p1-main > div > *:nth-child(2),
	#p1-main > div > *:nth-child(1) {
		border-radius: var(--m-radius);
		background: var(--text-hint);
		margin-top: 5px;
		height: 8px;
	}

	#p1-main > div > *:nth-child(3),
	#p1-main > div > *:nth-child(2) {
		height: 5px;
		width: 80%;
	}
</style>
