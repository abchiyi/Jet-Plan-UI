<template>
    <article id="scroll-to">
        <doc-item name="v-scroll-to:" tag="h2">
            <li>
                <p>
                    <high-lighter>="value"</high-lighter>
                    : type - Number
                </p>
                <p>
                    传入任意数字作为参数,这个参数将在要滚动到的对象高度超出屏幕时启用，作用是设置滚动到元素时元素顶部距离屏幕的距离
                </p>
            </li>
            <li>
                <p>
                    <high-lighter>:args</high-lighter>
                </p>
                <p>传入任意元素 id</p>
            </li>
        </doc-item>
        <p>
            当元素高度小于视窗高度时，滚动到该元素将会把该元素至于视窗中央。当元素高度大于视窗高度时将会把元素头部滚动至视窗顶部。
            在元素高度大于视窗时，会将元素滚动至 “value”
            中指定的距离屏幕顶部的高度。
        </p>
        <div id="scroll-controll">
            <j-button row tag="a" v-scroll-to:120="`#cube1`">
                滚动至大于屏幕高度元素,定义顶部距离视窗200px
            </j-button>
            <j-button row tag="a" v-scroll-to="`#cube2`">
                滚动至小于屏幕高度元素
            </j-button>
            <j-button row tag="a" v-scroll-to="`#cube3`">
                滚动至大于屏幕高度元素,未定义顶部距离视窗位置
            </j-button>
        </div>
        <demo-box title="v-scroll-to" :code="code">
            <j-row X="center">
                <j-col style="width: 100px">
                    <j-cube
                        id="cube2"
                        v-scroll-to="`#scroll-controll`"
                        style="height: 100px; background: var(--warning)"
                    >
                        100px
                    </j-cube>
                    <j-cube
                        id="cube1"
                        style="height: 120vh"
                        v-scroll-to="`#scroll-controll`"
                    >
                        120vh
                    </j-cube>

                    <j-cube
                        id="cube3"
                        v-scroll-to="`#scroll-controll`"
                        style="height: 120vh; background: var(--error)"
                    >
                        120vh
                    </j-cube>
                </j-col>
            </j-row>
        </demo-box>
    </article>
</template>
<script>
export default {
    name: 'the-demo-directives-scroll-to',
    data: () => {
        return {
            code: `// HTML
<body>
    <j-button tag='a' v-scroll-to:120="'#cube1'">
        滚动至大于屏幕高度元素,定义顶部距离视窗200px
    </j-button>
    <j-button tag='a' v-scroll-to="#cube2'">
        滚动至小于屏幕高度元素
    </j-button>
    <j-button tag='a' v-scroll-to="'#cube3'">
        滚动至大于屏幕高度元素,未定义顶部距离视窗位置
    </j-button>
    <j-row X='center'>
        <j-col style="width:100px">
            <j-cube id="cube1" style="height:120vh">120vh</j-cube>
            <j-cube id="cube2" style="height:100px">100px</j-cube>
            <j-cube id="cube3" style="height:120vh">120vh</j-cube>
        </j-col>
    </j-row>
</body>`,
        };
    },
};
</script>
<style></style>
