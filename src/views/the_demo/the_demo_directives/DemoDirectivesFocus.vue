<template>
	<article id="focus">
		<doc-item name="v-focus:" title-is="h2">
			<p>判断操作是否聚焦于某个元素。</p>
			<li id="v-focus-value">
				<doc-item name="Value：">
					<li>
						<p>
							<c-highlighter>="value"</c-highlighter>
							: type - Function
						</p>
						<p>接受一个无参数回调函数，会在点击元素外时执行回调</p>
					</li>
				</doc-item>
			</li>
		</doc-item>
		<demo-box title="v-focus" :code="code">
			<m-row X="center">
				<m-cube v-focus="onblur" style="width: 150px; padding: 0 10px">
					{{ value ? 'NowClickOutside' : 'NowClickMe' }}
				</m-cube>
			</m-row>
		</demo-box>
	</article>
</template>
<script>
	export default {
		name: 'demo-directives-focus',
		data: () => {
			return {
				code: `// Script
function onblur (v) {
    this.value = v;
};


// Style
<style>
    .demo-cube{
        style="width:150px;
        padding:0 10px;
    }
</style>


//Html
<body>
    <div class="demo-cube" v-focus="onblur">
        {{value?'NowClickOutside':"NowClickMe"}}
    </div>
</body>

`,
				value: false,
			};
		},
		methods: {
			onblur(v) {
				this.value = v;
			},
		},
	};
</script>
<style></style>
