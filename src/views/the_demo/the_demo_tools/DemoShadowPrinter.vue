<template>
	<article id="demo-shadow-painter">
		<h2>ShadowPainter</h2>
		<p>输出一个和 UI 界面统一样式的 css 阴影配置字符串</p>
		<doc-item no-dot name="参数">
			<li>
				<p>
					<c-highlighter>direction:String</c-highlighter>
					top | bottom | left | right。 设置阴影的方向
				</p>
			</li>
			<li>
				<p>
					<c-highlighter>intensity:Number</c-highlighter>
					大于0的任意数字。设置阴影的强度
				</p>
			</li>
			<li>
				<p>
					<c-highlighter>color:String</c-highlighter>
					任意 css
					支持的色彩编码。设置阴影色彩，不指定则使用默认阴影色彩
				</p>
			</li>
		</doc-item>

		<doc-item no-dot name="示例">
			<li>
				<demo-box title="shadowPainter" :code="code" expand>
					<template v-slot:header>
						<p>
							<label for="shadow-intensity">阴影强度</label>
							<input
								style="color: black"
								id="shadow-intensity"
								type="number"
								v-model="value"
							/>
						</p>
					</template>
					<m-row X="center">
						<m-cube class="demo-box" v-shadow:bottom="value">
							Intensity:{{ value }}
						</m-cube>
					</m-row>
				</demo-box>
			</li>
		</doc-item>
	</article>
</template>
<script>
	export default {
		name: 'demo-shadow-painter',
		data: () => {
			return {
				value: 15,
				code: `import { shadowPainter } from 'mousseUI/tool'
// 渲染一个组件
export default {
    render(){
        return h('div',
            {
            style: {
                boxShadow: shadowPainter('buttom', 15)
            }
        })
    }
}
      `,
			};
		},
	};
</script>
<style>
	.demo-box {
		background: var(--foreground) !important;
		color: var(--text) !important;
		height: 200px;
		width: 150px;
		border: unset;
	}
</style>
