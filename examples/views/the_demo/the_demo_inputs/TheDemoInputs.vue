<template>
    <div>
        <h1>Inputs</h1>
        <p>
            以下组件都是
            <high-lighter>&lt;input&gt;</high-lighter>
            标签的衍生组件，使用它们以获得统一的样式风格
        </p>
        <hr />
        <the-inputs-input id="input" />
        <theinputs-checkbox id="checkbox" />
        <theinputs-radio id="radio" />
        <theinputs-switch id="switch" />
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
