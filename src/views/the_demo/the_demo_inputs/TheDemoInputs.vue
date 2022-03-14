<template>
	<div>
		<h2>Inputs</h2>
		<p>
			以下组件都是
			<c-highlighter>&lt;input&gt;</c-highlighter>
			标签的衍生组件，使用它们以获得统一的样式风格
		</p>
		<the-inputs-input id="input" />
		<br />
		<hr />
		<theinputs-checkbox id="checkbox" />
		<br />
		<hr />
		<theinputs-radio id="radio" />
		<br />
		<hr />
		<theinputs-switch id="switch" />
		<br />
		<hr />
		<!-- Doc -->
		<demo-doc>
			<template v-slot:prop>
				<li>
					<c-highlighter>modeValue</c-highlighter>
					用于数据绑定
				</li>
				<li>
					<c-highlighter>disable - Boolean</c-highlighter>
					禁用组件
					<c-highlighter>default - false</c-highlighter>
				</li>
				<li>
					<c-highlighter>value</c-highlighter>
					传入待交值
				</li>
				<li>
					<c-highlighter>name - String</c-highlighter>
					等同
					<c-highlighter>&lt;input&gt;</c-highlighter>
					标签属性
					<c-highlighter>name</c-highlighter>
				</li>
				<li>
					<c-highlighter>id - String</c-highlighter>
					组件 id
				</li>
				<li>
					<c-highlighter>
						size - ['s','m','l','em','rem']
					</c-highlighter>
					设定组件尺寸
					<c-highlighter>default - em</c-highlighter>
					，
					<c-highlighter>em,rem</c-highlighter>
					为等同当前或根字体尺寸大小
				</li>
			</template>
			<template v-slot:event>
				<li>
					组件事件请参考
					<!-- TODO 指向 MDN input 标签事件参考 -->
					<m-button text hover>&lt;input&gt;</m-button>
					标签事件
				</li>
			</template>
		</demo-doc>
	</div>
</template>
<script>
	import pdn from '../../../common/mix/popDemoName';
	import TheinputsCheckbox from './TheInputs-Checkbox.vue';
	import TheinputsSwitch from './TheInputs-Switch.vue';
	import TheinputsRadio from './TheInputs-Radio.vue';
	import TheInputsInput from './TheInputs-input.vue';
	export default {
		mixins: [pdn],
		name: 'the-demo-inputs',
		components: {
			TheinputsCheckbox,
			TheinputsSwitch,
			TheinputsRadio,
			TheInputsInput,
		},
	};
</script>
<style></style>
