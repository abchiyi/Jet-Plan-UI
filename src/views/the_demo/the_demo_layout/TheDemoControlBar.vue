<template>
	<div id="demo-m-control-bar">
		<doc-item id="describes" name="控制条组件:" title-is="h2">
			<p>
				强化
				<inline-code>input</inline-code>
				衍生组件的可点击范围,使得组件内任意区域均可触发点击
			</p>
		</doc-item>
		<hr />
		<doc-item name="<m-control-bar> :" title-is="h2">
			<li id="m-control-bar-props">
				<doc-item name="Props:" title-is="h3">
					<li id="prop-for-id">
						<p>
							<inline-code>for-id</inline-code>
							type - String, required - true
						</p>
						<p>
							被控制组件的
							<inline-code>id</inline-code>
							,这个值是必须的
						</p>
					</li>
					<li id="prop-reverse">
						<p>
							<inline-code>reverse</inline-code>
							type - Boolean, default - false
						</p>
						<p>反向排列内部元素</p>
					</li>
				</doc-item>
			</li>
			<li id="m-control-bar-slots">
				<doc-item name="Slots:" title-is="h3">
					<li id="slot-text">
						<p>
							<inline-code>text</inline-code>
							文本或任意你想要放置于内部的元素
						</p>
					</li>
					<li id="slot-control">
						<p>
							<inline-code>control</inline-code>
							只能放置 input 组件以及 input 衍生组件
						</p>
					</li>
				</doc-item>
			</li>
		</doc-item>
		<doc-item name="如何使用:" title-is="h2">
			<li id="demo">
				<demo-box title="<m-control-bar>" :code="code" :expand="true">
					<template v-slot:header>
						<m-control-bar for-id="to-reverse">
							<template v-slot:text>反向排列元素</template>
							<template v-slot:control>
								<m-switch id="to-reverse" v-model="toReverse" />
							</template>
						</m-control-bar>
					</template>
					<div id="demo-default">
						<m-control-bar
							for-id="demo-switch"
							:reverse="toReverse"
						>
							<template v-slot:text>Switch</template>
							<template v-slot:control>
								<m-switch id="demo-switch" v-model="value" />
							</template>
						</m-control-bar>
						<m-control-bar
							for-id="demo-checkbox"
							:reverse="toReverse"
						>
							<template v-slot:text>Checkbox</template>
							<template v-slot:control>
								<m-checkbox
									id="demo-checkbox"
									v-model="value"
								/>
							</template>
						</m-control-bar>
						<m-control-bar
							for-id="demo-radio1"
							:reverse="toReverse"
						>
							<template v-slot:text>Radio1</template>
							<template v-slot:control>
								<m-radio
									id="demo-radio1"
									value="demo-value1"
									v-model="valueRadio"
								/>
							</template>
						</m-control-bar>
						<m-control-bar
							for-id="demo-radio2"
							:reverse="toReverse"
						>
							<template v-slot:text>Radio2</template>
							<template v-slot:control>
								<m-radio
									id="demo-radio2"
									value="demo-value2"
									v-model="valueRadio"
								/>
							</template>
						</m-control-bar>
					</div>
				</demo-box>
			</li>
		</doc-item>
	</div>
</template>
<script>
	import pdn from '../../../common/mix/popDemoName';
	export default {
		mixins: [pdn],
		name: '',
		data: () => {
			return {
				code: `
//Javascript
let value = false;
let valueRadio = [];
let toReverse = false,


// HTML
<div id="demo-default">
<m-control-bar
    for-id="demo-switch"
    :reverse="toReverse"
>
    <template v-slot:text>Switch</template>
    <template v-slot:control>
        <m-switch id="demo-switch" v-model="value" />
    </template>
</m-control-bar>
<m-control-bar
    for-id="demo-checkbox"
    :reverse="toReverse"
>
    <template v-slot:text>Checkbox</template>
    <template v-slot:control>
        <m-checkbox
            id="demo-checkbox"
            v-model="value"
        />
    </template>
</m-control-bar>
<m-control-bar
    for-id="demo-radio1"
    :reverse="toReverse"
>
    <template v-slot:text>Radio1</template>
    <template v-slot:control>
        <m-radio
            id="demo-radio1"
            value="demo-value1"
            v-model="valueRadio"
        />
    </template>
</m-control-bar>
<m-control-bar
    for-id="demo-radio2"
    :reverse="toReverse"
>
    <template v-slot:text>Radio2</template>
    <template v-slot:control>
        <m-radio
            id="demo-radio2"
            value="demo-value2"
            v-model="valueRadio"
        />
    </template>
</m-control-bar>`,
				value: false,
				valueRadio: [],
				toReverse: false,
			};
		},
	};
</script>
<style></style>
