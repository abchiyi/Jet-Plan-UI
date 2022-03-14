<template>
	<div id="the-demo-header">
		<doc-item id="describes" title-is="h2" name="页头浮动栏">
			<li>
				<p>
					页头浮动栏, flex
					定位至页面顶部，始终悬浮于内容上方。没有除定位以及高度外任何样式设置，需自定义样式
				</p>
			</li>
		</doc-item>
		<hr />
		<div id="doc">
			<doc-item title-is="h2" name="<m-header>:">
				<li id="slots">
					<doc-item name="Slots:">
						<li id="slots-default">
							<p>
								<c-highlighter>:default</c-highlighter>
								- 默认插槽
							</p>
						</li>
					</doc-item>
				</li>
			</doc-item>
		</div>
		<doc-item id="demo" title-is="h2" name="如何使用">
			<li>
				<demo-box title="<>" :code="code" :expand="true"></demo-box>
			</li>
		</doc-item>
	</div>
</template>
<script>
	import pdn from '../../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: 'the-demo-header',
		data: () => {
			return {
				code: `
<m-header>
    <template v-slot:default>
        Header
    </template>
</m-header>
                `,
			};
		},
	};
</script>
<style></style>
