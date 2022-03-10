<template>
	<div id="the-demo-sidebar">
		<doc-item id="describes" title-is="h2" name="侧边栏：">
			<li><p>用于在屏幕两侧展示内容</p></li>
		</doc-item>
		<hr />
		<div id="doc">
			<doc-item title-is="h2" name="<m-sidebar>：">
				<li id="props">
					<doc-item name="props:">
						<li id="prop-mode-value">
							<p>
								<inline-code>modelValue</inline-code>
								:type - Boolean, default - false
							</p>
							<p>用于参数绑定，控制侧栏开关</p>
						</li>
						<li id="propo-dock">
							<p>
								<inline-code>dock</inline-code>
								:type - Boolean, default - false
							</p>
							<p>
								设置为 true
								将停靠于设置位置，点击非侧栏中内容时将不响应关闭动作
							</p>
						</li>
						<li id="prop-right">
							<p>
								<inline-code>right</inline-code>
								:type - Boolean, default - false
							</p>
							<p>设置侧栏在屏幕左/右，默认左侧</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<doc-item id="demo" title-is="h2" name="如何使用">
			<li>
				<demo-box title="<>" :code="code" :expand="true">
					<div>
						<m-control-bar for-id="demo-sidebar-switch">
							<template v-slot:text>开启侧栏</template>
							<template v-slot:control>
								<m-switch
									id="demo-sidebar-switch"
									v-model="demoShowSidebar"
								/>
							</template>
						</m-control-bar>
						<m-control-bar for-id="demo-sideber-display-in-right">
							<template v-slot:text>停靠于右侧</template>
							<template v-slot:control>
								<m-switch
									id="demo-sideber-display-in-right"
									v-model="displayInRight"
								/>
							</template>
						</m-control-bar>
						<m-control-bar for-id="demo-sideber-dock">
							<template v-slot:text>始终停靠于屏幕边缘</template>
							<template v-slot:control>
								<m-switch
									id="demo-sideber-dock"
									v-model="demoSidebarDock"
								/>
							</template>
						</m-control-bar>
					</div>
				</demo-box>
			</li>
		</doc-item>
		<m-sidebar
			:right="displayInRight"
			:dock="demoSidebarDock"
			v-model="demoShowSidebar"
		>
			测试内容
		</m-sidebar>
	</div>
</template>
<script>
	export default {
		name: 'the-demo-sidebar',
		data: () => {
			return {
				code: `

	//Javascript
	let demoShowSidebar =  true;
	let displayInRight = true;
	// HTML
	<m-switch id="demo-sideber-display-in-right" v-model="displayInRight" />
	<m-switch id="demo-sideber-switch" v-model="demoShowSidebar" />
	<m-sidebar :right="displayInRight" v-model="demoShowSidebar">
	测试内容
	</m-sidebar>
	                `,
				demoShowSidebar: true,
				demoSidebarDock: true,
				displayInRight: true,
			};
		},
	};
</script>
<style></style>
