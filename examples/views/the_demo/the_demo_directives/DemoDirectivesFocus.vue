<template>
    <article id="focus">
        <doc-item name="v-focus:" tag="h2">
            <p>判断操作是否聚焦于某个元素。</p>
            <hr />
            <doc-item name="Value:">
                <ul>
                    <li>
                        <p>
                            <high-lighter>
                                ="function()=>{CallBack}"</high-lighter
                            >
                        </p>
                        <p>接受一个无参数回调函数，会在点击元素外时执行回调</p>
                    </li>
                </ul>
            </doc-item>
        </doc-item>
        <demo-box title="v-focus">
            <j-row X="center">
                <j-cube
                    v-focus="onblur"
                    @click="
                        () => {
                            value = true;
                        }
                    "
                    style="width: 200px; padding: 0 10px"
                >
                    {{ value ? 'NowClickOutside' : 'NowClickMe' }}
                </j-cube>
            </j-row>
        </demo-box>
        <demo-box
            title="Html"
            code='
<div
    style="height=100px;width=100px;background=red;"
    @click="onClick"
    v-focus="onblur"
    >
    <p>Test</p>
</div>'
        />
        <demo-box
            title="Script"
            code="
export default{
    data(){
        return {
            value:false
        }
    },
    methods:{
        onClick(){
            this.value=true;
        },
        onblur(){
            this.value=false;
        }
    }
}
        "
        />
    </article>
</template>
<script>
export default {
    name: 'demo-directives-focus',
    data: () => {
        return {
            value: false,
        };
    },
    methods: {
        onblur() {
            this.value = false;
        },
    },
};
</script>
<style></style>
