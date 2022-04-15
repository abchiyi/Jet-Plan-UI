<template>
    <div>
        <h2>Inputs</h2>
        <p>
            以下组件都是
            <high-lighter>&lt;input&gt;</high-lighter>
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
        <doc-item name="Props:" tag-is="h2">
            <li>
                <high-lighter>modeValue</high-lighter>
                用于数据绑定
            </li>
            <li>
                <high-lighter>disable - Boolean</high-lighter>
                禁用组件
                <high-lighter>default - false</high-lighter>
            </li>
            <li>
                <high-lighter>value</high-lighter>
                传入待交值
            </li>
            <li>
                <high-lighter>name - String</high-lighter>
                等同
                <high-lighter>&lt;input&gt;</high-lighter>
                标签属性
                <high-lighter>name</high-lighter>
            </li>
            <li>
                <high-lighter>id - String</high-lighter>
                组件 id
            </li>
            <li>
                <high-lighter> size - ['s','m','l','em','rem'] </high-lighter>
                设定组件尺寸
                <high-lighter>default - em</high-lighter>
                ，
                <high-lighter>em,rem</high-lighter>
                为等同当前或根字体尺寸大小
            </li>
        </doc-item>
    </div>
</template>
<script>
import pdn from '../../../common/mix/popDemoName';
import TheinputsCheckbox from './TheInputs-Checkbox.vue';
import TheinputsSwitch from './TheInputs-Switch.vue';
import TheinputsRadio from './TheInputs-Radio.vue';
import TheInputsInput from './TheInputs-input.vue';
import DocItem from '../../../common/DocItem.vue';
export default {
    mixins: [pdn],
    name: 'the-demo-inputs',
    components: {
        TheinputsCheckbox,
        TheinputsSwitch,
        TheinputsRadio,
        TheInputsInput,
        DocItem,
    },
};
</script>
<style></style>
