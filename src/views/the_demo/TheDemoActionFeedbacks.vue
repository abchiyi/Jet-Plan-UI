<template>
	<div>
		<doc-item id="describes" name="动作反馈组件" title-is="h2">
			<li>
				<p>
					使用动作反馈组件以获得和 UI
					风格统一的动作反馈样式。例如‘点击’，‘悬停’等动作
				</p>
			</li>
		</doc-item>
		<hr />

		<doc-item id="doc" name="<j-action-feedback>:">
			<li id="props:">
				<doc-item name="Props:">
					<li id="prop-color">
						<p>
							<c-highlighter>color</c-highlighter>
							: type - String, default - "var(-mask)"
						</p>
						<p>用于设置遮罩色彩,支持 css 原生色彩格式&css变量</p>
					</li>
					<li id="prop-opacity">
						<p>
							<c-highlighter>opacity</c-highlighter>
							: type - String, default - "0.5"
						</p>
						<p>用于设置遮罩不透明度</p>
					</li>
					<li id="prop-tag">
						<p>
							<c-highlighter>tag</c-highlighter>
							: type - String, default - "div"
						</p>
						<p>设置组件渲染标签</p>
					</li>
					<li id="prop-active">
						<p>
							<c-highlighter>active</c-highlighter>
							: type - Boolean, default - false
						</p>
						<!-- TODO 链接动作效果到Mdn文档 -->
						<p>开启/关闭 "active" 效果</p>
					</li>
					<li id="prop-hover">
						<p>
							<c-highlighter>hover</c-highlighter>
							: type - Boolean, default - false
						</p>
						<p>开启/关闭 "hover" 效果</p>
					</li>
					<li id="prop-focus">
						<p>
							<c-highlighter>focus</c-highlighter>
							: type - Boolean, default - false
						</p>
						<p>元素聚焦( :fcous )效果</p>
					</li>
					<li id="prop-focus">
						<p>
							<c-highlighter>focus-outline</c-highlighter>
							: type - Boolean, default - false
						</p>
						<p>元素聚焦( :fcous, outline )外边框效果</p>
						<p></p>
					</li>
					<li id="props-describes">
						<p>
							<c-highlighter>focus</c-highlighter>
							,
							<c-highlighter>focus-outline</c-highlighter>
						</p>
						<p>
							<warning-text>
								组件渲染元素为不可聚焦元素时,使用以上效果需要设置属性
								<!-- TODO  属性文档 Mdn -->
								"tabindex"
							</warning-text>
						</p>
						<j-code-box
							code="
<j-action-feedback tabindex='1' focus focus-outline ></j-action-feedback>
<j-action-feedback tabindex='2' focus focus-outline ></j-action-feedback>
"
						/>
					</li>
				</doc-item>
			</li>
			<li id="slots">
				<doc-item name="Slots:">
					<li>
						<c-highlighter>default</c-highlighter>
						: 组件仅有一个默认插槽
					</li>
				</doc-item>
			</li>
		</doc-item>
		<demo-box title="<j-action-feedback>" :code="code" expand>
			<div>
				<!-- Control -->
				<j-control-bar for-id="re-active">
					<template v-slot:text>启用 Active 效果</template>

					<j-switch id="re-active" v-model="active" />
				</j-control-bar>
				<j-control-bar for-id="re-hover">
					<template v-slot:text>启用 Hover 效果</template>

					<j-switch id="re-hover" v-model="hover" />
				</j-control-bar>
				<j-control-bar for-id="switch-focus">
					<template v-slot:text>启用 :focus 效果</template>

					<j-switch id="switch-focus" v-model="focus" />
				</j-control-bar>
				<j-control-bar for-id="switch-focus-outline">
					<template v-slot:text>启用 :focus.outline 效果</template>

					<j-switch
						id="switch-focus-outline"
						v-model="focusOutline"
					/>
				</j-control-bar>
				<!-- Demo -->
				<j-row X="center">
					<j-action-feedback
						tabindex="1"
						class="demo-item"
						:active="active"
						:hover="hover"
						:focus="focus"
						:focus-outline="focusOutline"
					>
						<j-row style="height: 100%" X="center" Y="center">
							ClickMe!!
						</j-row>
					</j-action-feedback>
					<j-action-feedback
						tabindex="2"
						class="demo-item"
						:active="active"
						:hover="hover"
						:focus="focus"
						:focus-outline="focusOutline"
					>
						<j-row style="height: 100%" X="center" Y="center">
							ClickMe!!
						</j-row>
					</j-action-feedback>
				</j-row>
			</div>
		</demo-box>
	</div>
</template>

<script>
	import pdn from '../../common/mix/popDemoName';
	import WarningText from '../../common/Warning-text.vue';
	export default {
		components: { WarningText },
		mixins: [pdn],
		name: 'the-demo-action-feedbacks',
		data() {
			return {
				active: false,
				hover: false,
				focus: false,
				focusOutline: false,
				code: `
//Javascript
let active = true,
let hover = true,
let focus = true,
let focusOutline = true,
// HTML
<!-- Control -->
<j-control-bar for-id="re-active">
    <template v-slot:text>启用 Active 效果</template>

        <j-switch id="re-active" v-model="active" />
    </template>
</j-control-bar>
<j-control-bar for-id="re-hover">
    <template v-slot:text>启用 Hover 效果</template>

        <j-switch id="re-hover" v-model="hover" />
    </template>
</j-control-bar>
<j-control-bar for-id="switch-focus">
    <template v-slot:text>启用 :focus 效果</template>

        <j-switch id="switch-focus" v-model="focus" />
    </template>
</j-control-bar>
<j-control-bar for-id="switch-focus-outline">
    <template v-slot:text>
        启用 :focus.outline 效果
    </template>

        <j-switch
            id="switch-focus-outline"
            v-model="focusOutline"
        />
    </template>
</j-control-bar>
<!-- Demo -->
<j-row X="center">
    <j-action-feedback
        tabindex="1"
        class="demo-item"
        :active="active"
        :hover="hover"
        :focus="focus"
        :focus-outline="focusOutline"
    >
        <j-row
            style="height: 100%"
            X="center"
            Y="center"
        >
            ClickMe!!
        </j-row>
    </j-action-feedback>
    <j-action-feedback
        tabindex="2"
        class="demo-item"
        :active="active"
        :hover="hover"
        :focus="focus"
        :focus-outline="focusOutline"
    >
        <j-row
            style="height: 100%"
            X="center"
            Y="center"
        >
            ClickMe!!
        </j-row>
    </j-action-feedback>
</j-row>



                `,
			};
		},
	};
</script>

<style scoped>
	.demo-item {
		border-radius: var(--m-radius);
		background: var(--foreground);
		box-sizing: border-box;
		color: var(--text);
		height: 100px;
		width: 100px;
		margin: 10px;
	}
</style>
