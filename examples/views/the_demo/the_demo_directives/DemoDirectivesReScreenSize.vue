<template>
    <article v-re-screen-size="log" id="re-screen-size">
        <doc-item name="v-re-screen-size:" tag="h2">
            <ul>
                <li>
                    <p><strong>Value:</strong></p>
                    <p>
                        <high-lighter>
                            ="function(el,value)=>{CallBack}"
                        </high-lighter>
                    </p>
                    <p>
                        接受一个有参数回调函数，当屏幕尺寸发生变动时（旋转屏幕或调节窗口大小），函数将会被调用
                    </p>
                </li>
            </ul>
            <h3 class="text-hint">参数详解：</h3>
            <j-code-box
                code='
// CallBack Function
(el, Value)=>{
    el // 元素节点
    value // 屏幕参数信息

    console.log(value)
}

>>---------Console----------
>>  {
        "activeCol": "xl", // 当前所处的屏幕宽度范围.
        "width": 1407, // 当前屏幕宽度/px
        "height": 1002, // 当前屏幕高度/px
        "col": { // 当前所处的屏幕宽度范围
            "xs": false,
            "sm": false,
            "md": false,
            "lg": false,
            "xl": true
        }
        // 验证屏幕宽度是否在指定的范围中
        function contains(
            Array, // 包含宽度字符的序列，例如 ["xl", "lg"]
            (Boolean)=>{CallBack} // 当前屏幕宽度在以上序列中时回调值为 true
        )
    }
                    '
            />
        </doc-item>
        <demo-box
            title="Html"
            code='<div v-re-screen-size="callBack">Test</div>'
        />
        <demo-box
            title="Script"
            code="
export default{
    methods:{
        callBack(el,value){
            console.log(el)
            console.log(value)
        }
    }
}
        "
        />
        <info-text
            >尝试改变屏幕宽度你将能看见关于屏幕宽度的提示，在控制台中能看见相应的输出</info-text
        >
    </article>
</template>
<script>
export default {
    name: 're-screen-size',
    data: () => {
        return {
            oldCol: undefined,
        };
    },
    methods: {
        log(el, value) {
            el;
            if (this.oldCol != value.activeCol) {
                this.$jetAlert.info(`Screen Col - ${value.activeCol}`, 1500);
                console.log(value);
            }
            this.oldCol = value.activeCol;
        },
    },
};
</script>
<style></style>
