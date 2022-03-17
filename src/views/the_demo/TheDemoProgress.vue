<template>
	<div id="the-demo-progressbar">
		<doc-item id="describes" title-is="h2" name="进度条:">
			<li><p>用于展示加载进度</p></li>
		</doc-item>
		<hr />
		<div id="doc">
			<doc-item title-is="h2" name="<m-progress>:">
				<li>
					<doc-item name="Props:">
						<li id="prop-value">
							<p>
								<c-highlighter>value</c-highlighter>
								:type - String|Number, default - 0, range - 0 ~
								100
							</p>
							<p>控制进度条百分比</p>
						</li>
						<li id="prop-failed">
							<p>
								<c-highlighter>failed</c-highlighter>
								: type - Boolean, default - false
							</p>
							<p>切换进度条为失败状态</p>
						</li>
						<li id="prop-height">
							<p>
								<c-highlighter>height</c-highlighter>
								: type - String, default - "8px"
							</p>
							<p>控制状态栏行高</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<m-control-bar for-id="demo-progress-to-susccess">
			<template v-slot:text>完成进度条</template>
			<m-switch id="demo-progress-to-susccess" v-model="success" />
		</m-control-bar>
		<m-control-bar for-id="demo-progress-to-failed">
			<template v-slot:text>失败进度条</template>
			<m-switch id="demo-progress-to-failed" v-model="failed" />
		</m-control-bar>
		<demo-box title="<m-progress>" :code="code" :expand="true">
			<div id="demo-content">
				<m-progress :failed="failed" :value="number"></m-progress>
			</div>
		</demo-box>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'the-demo-progress',
		data() {
			return {
				code: `
//javascript
let value = 50;
let filed = false;

// HTML
<m-control-bar for-id="demo-progress-to-susccess">
    <template v-slot:text>完成进度条</template>
    <template v-slot:control>
        <m-switch
            id="demo-progress-to-susccess"
            v-model="success"
        />
    </template>
</m-control-bar>
<m-control-bar for-id="demo-progress-to-failed">
    <template v-slot:text>失败进度条</template>
    <template v-slot:control>
        <m-switch
            id="demo-progress-to-failed"
            v-model="failed"
        />
    </template>
</m-control-bar>
<div id="demo-content">
    <m-progress
        :failed="failed"
        :value="number"
    ></m-progress>
</div>
                `,
				intervalID: null,
				success: false,
				failed: false,
				number: 50,
			};
		},
		watch: {
			success() {
				if (this.success) {
					this.intervalID = setInterval(() => {
						this.number++;
					}, 100);
				} else {
					this.number = 50;
					clearInterval(this.intervalID);
				}
			},
			number() {
				if (this.number > 100) {
					clearInterval(this.intervalID);
				}
			},
		},
	};
</script>
