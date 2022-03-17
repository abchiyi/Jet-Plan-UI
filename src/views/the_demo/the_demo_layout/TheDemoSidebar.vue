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
								<c-highlighter>modelValue</c-highlighter>
								:type - Boolean, default - false
							</p>
							<p>用于参数绑定，控制侧栏开关</p>
						</li>
						<li id="propo-dock">
							<p>
								<c-highlighter>dock</c-highlighter>
								:type - Boolean, default - false
							</p>
							<p>
								设置为 true
								将停靠于设置位置，点击非侧栏中内容时将不响应关闭动作
							</p>
						</li>
						<li id="prop-right">
							<p>
								<c-highlighter>right</c-highlighter>
								:type - Boolean, default - false
							</p>
							<p>设置侧栏在屏幕左/右，默认左侧</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<div @click.stop>
			<m-control-bar for-id="demo-sidebar-switch">
				<template v-slot:text>开启侧栏</template>
				<m-switch id="demo-sidebar-switch" v-model="demoShowSidebar" />
			</m-control-bar>
			<m-control-bar for-id="demo-sideber-display-in-right">
				<template v-slot:text>停靠于右侧</template>
				<m-switch
					id="demo-sideber-display-in-right"
					v-model="displayInRight"
				/>
			</m-control-bar>
		</div>
		<demo-box title="<m-sidebar>" :code="code" :expand="true"></demo-box>
		<m-sidebar
			v-focus="close"
			style="width: 320px"
			:right="displayInRight"
			:expand="demoShowSidebar"
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
				demoShowSidebar: false,
				displayInRight: true,
			};
		},

		methods: {
			close() {
				this.demoShowSidebar = false;
			},
		},
	};
</script>
<style></style>
