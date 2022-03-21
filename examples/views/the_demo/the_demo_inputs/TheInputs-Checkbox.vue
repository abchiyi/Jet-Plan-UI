<template>
	<div>
		<strong>Checkbox</strong>
		<!-- Demo -->
		<j-control-bar for-id="disabled-checkbox">
			<template v-slot:text>禁用组件</template>
			<j-switch v-model="disabled" id="disabled-checkbox" />
		</j-control-bar>
		<demo-box title="Checkbox" :code="code">
			<div id="demo-checkbox-group">
				<div id="check-all-group">
					<j-checkbox
						id="check-all"
						:value="data"
						v-model="showData"
						:disabled="disabled"
					/>
					<label for="check-all">Check All</label>
				</div>
				<div id="checkbox-group">
					<div v-for="item in data" :key="item">
						<j-checkbox
							:disabled="disabled"
							:id="item"
							:value="item"
							v-model="showData"
						/>
						<label :for="item">{{ item }}</label>
					</div>
				</div>
			</div>
		</demo-box>
	</div>
</template>
<script>
	export default {
		name: 'inputs-checkbox',
		data: () => {
			return {
				disabled: false,
				data: ['Checkbox1', 'Checkbox2', 'Checkbox3'],
				showData: [],
				code: `// javaScript
let data: ["Checkbox1", "Checkbox2", "Checkbox3"],
let showData: [];

// Html
<body>
    <p>Data:{{ showData }}</p>
    <div id="check-all-group">
        <j-checkbox id="check-all" :value="data" v-model="showData" />
        <label for="check-all">Check All</label>
    </div>
    <div id="checkbox-group">
        <div v-for="item in data" :key="item">
        <j-checkbox :id="item" :value="item" v-model="showData" />
        <label :for="item">{{ item }} </label>
        </div>
    </div>
</body>`,
			};
		},
	};
</script>
<style></style>
