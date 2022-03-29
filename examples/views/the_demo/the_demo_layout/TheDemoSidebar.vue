<template>
  <div id="the-demo-sidebar">
    <doc-item id="describes" title-is="h2" name="侧边栏：">
      <li><p>用于在屏幕两侧展示内容</p></li>
    </doc-item>
    <hr />
    <div id="doc">
      <doc-item title-is="h2" name="<j-sidebar>：">
        <li id="props">
          <doc-item name="props:">
            <li id="prop-mode-value">
              <p>
                <high-lighter>modelValue</high-lighter>
                :type - Boolean, default - false
              </p>
              <p>用于参数绑定，控制侧栏开关</p>
            </li>
            <li id="propo-dock">
              <p>
                <high-lighter>dock</high-lighter>
                :type - Boolean, default - false
              </p>
              <p>
                设置为 true 将停靠于设置位置，点击非侧栏中内容时将不响应关闭动作
              </p>
            </li>
            <li id="prop-right">
              <p>
                <high-lighter>right</high-lighter>
                :type - Boolean, default - false
              </p>
              <p>设置侧栏在屏幕左/右，默认左侧</p>
            </li>
          </doc-item>
        </li>
      </doc-item>
    </div>
    <div @click.stop>
      <j-control-bar for-id="demo-sidebar-switch">
        <template v-slot:text>开启侧栏</template>
        <j-switch id="demo-sidebar-switch" v-model="demoShowSidebar" />
      </j-control-bar>
      <j-control-bar for-id="demo-sideber-display-in-right">
        <template v-slot:text>停靠于右侧</template>
        <j-switch id="demo-sideber-display-in-right" v-model="displayInRight" />
      </j-control-bar>
    </div>
    <demo-box title="<j-sidebar>" :code="code" :expand="true"></demo-box>
    <j-sidebar
      v-focus="close"
      style="width: 320px"
      :right="displayInRight"
      :expand="demoShowSidebar"
    >
      测试内容
    </j-sidebar>
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
	<j-switch id="demo-sideber-display-in-right" v-model="displayInRight" />
	<j-switch id="demo-sideber-switch" v-model="demoShowSidebar" />
	<j-sidebar :right="displayInRight" v-model="demoShowSidebar">
	测试内容
	</j-sidebar>
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
