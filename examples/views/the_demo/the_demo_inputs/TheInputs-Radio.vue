<template>
	<div>
		<h3>Radio</h3>
		<j-control-bar for-id="disabled-radio">
			<template v-slot:text>禁用组件</template>
			<j-switch v-model="disabled" id="disabled-radio" />
		</j-control-bar>
		<demo-box title="Radio" :code="code">
			<ul id="demo-radio-group">
				<li v-for="v in data" :key="v">
					<j-radio
						:disabled="disabled"
						:id="v"
						name="radioData"
						v-model="radioData"
						:value="v"
					/>
					<label :for="v">{{ v }}</label>
				</li>
			</ul>
		</demo-box>
	</div>
</template>
<script>
	export default {
		name: 'the-inputs-radio',
		data: () => {
			return {
				data: ['Radio1', 'Radio2', 'Radio3'],
				radioData: undefined,
				disabled: false,
				code: `
// Script
let data = ["Radio1", "Radio2", "Radio3"]
let radioData;

// Html
<body>
    <div v-for="v in data" :key="v">
        <j-radio :id="v" name="radioData" v-model="radioData" :value="v" />
        <label :for="v">{{ v }}</label>
    </div>
</body>`,
			};
		},
	};
</script>
<style></style>
