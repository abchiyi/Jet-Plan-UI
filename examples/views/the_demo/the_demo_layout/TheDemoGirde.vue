<template>
    <div>
        <h1>栅格系统</h1>
        <p>基于 flexbox 的24栏网格系统</p>
        <hr />
        <div id="doc">
            <!-- j-col -->
            <doc-item name="<j-col> :" title-is="h2">
                <li id="props">
                    <doc-item title-is="h3" name="Props:">
                        <li id="props-j-col-tag">
                            <p>
                                <high-lighter>tag</high-lighter>
                                type - String , default - div
                            </p>
                            <p>指定当前组件渲染标签</p>
                        </li>
                        <li id="props-j-col-col">
                            <p>
                                <high-lighter>col</high-lighter>
                                type - Number | range - 0 ~ 24
                            </p>
                            <p>未特定屏幕尺寸下所元素占用列数</p>
                        </li>
                        <li id="props-j-col-all">
                            <p>
                                <high-lighter>xs</high-lighter>
                                <high-lighter>sm</high-lighter>
                                <high-lighter>md</high-lighter>
                                <high-lighter>lg</high-lighter>
                                <high-lighter>xl</high-lighter>
                                type - Number , range - 0 ~ 24
                            </p>
                            <p>设置特定屏幕尺寸下所元素占用列数</p>
                        </li>
                        <li id="props-j-col-offset">
                            <p>
                                <high-lighter>offset</high-lighter>
                                type - String | range - 0 ~ 24
                            </p>
                            <p>未特定屏幕宽度下设置位移</p>
                        </li>
                        <li id="props-j-col-offset-all">
                            <p>
                                <high-lighter>offsetXs</high-lighter>
                                <high-lighter>offsetSm</high-lighter>
                                <high-lighter>offsetMd</high-lighter>
                                <high-lighter>offsetLg</high-lighter>
                                <high-lighter>offsetXl</high-lighter>
                                type - Number , range - 0 ~ 24
                            </p>
                            <p>特定屏幕宽度下设置位移</p>
                        </li>
                        <li id="props-j-col-relative-to-screen">
                            <p>
                                <high-lighter>relativeToScreen</high-lighter>
                                type - Boolean , default - false
                            </p>
                            <p>始终相对屏幕计算列宽,而非相对父元素</p>
                        </li>
                    </doc-item>
                </li>
            </doc-item>
            <!-- j-row -->
            <doc-item name="<j-row> :" title-is="h2">
                <li>
                    <doc-item title-is="h3" name="Props:">
                        <li id="props-j-row-tag">
                            <p>
                                <high-lighter>tag</high-lighter>
                                type - String , default - div
                            </p>
                            <p>指定当前组件渲染标签</p>
                        </li>
                        <li id="props-j-row-x">
                            <p>
                                <high-lighter>X</high-lighter>
                                type - String , range - start | center | end ,
                                default - start
                            </p>
                            <p>设置元素横轴起始点</p>
                        </li>
                        <li id="props-j-row-y">
                            <p>
                                <high-lighter>Y</high-lighter>
                                type - String , range - top | center | bottom |
                                , default - top
                            </p>
                            <p>设置元素纵轴起始点</p>
                        </li>
                        <li id="props-j-row-warp">
                            <p>
                                <high-lighter>warp</high-lighter>
                                type - Boolean , default - false
                            </p>
                            <p>
                                子元素超出组件显示宽度时是否换行,
                                不换行则会压缩每个元素的宽度
                            </p>
                        </li>
                        <li id="props-j-row-reverse">
                            <p>
                                <high-lighter>reverse</high-lighter>
                                type - Boolean , default - false
                            </p>
                            <p>反向排列元素</p>
                        </li>
                        <li id="props-j-row-nogap">
                            <p>
                                <high-lighter>no-gap</high-lighter>
                                type - Boolean , default - false
                            </p>
                            <p>取消 'j-col' 组件间隙</p>
                        </li>
                    </doc-item>
                </li>
            </doc-item>
        </div>
        <br />
        <h2>基础网格</h2>
        <p>
            通过使用使用组件
            <high-lighter>&lt;j-col&gt;</high-lighter>
            组合网格
        </p>
        <hr />
        <br />
        <demo-box title="基础栅格" :code="code1" :expand="true">
            <div id="base-gired">
                <j-row class="girde-item" v-for="n in 4" :key="n">
                    <j-col :col="n * 4">
                        <j-cube class="girde-cube">
                            <span>
                                {{ n * 4 }}
                            </span>
                        </j-cube>
                    </j-col>
                    <j-col :col="24 - n * 2">
                        <j-cube class="girde-cube" dark>
                            <span>
                                {{ 24 - n * 4 }}
                            </span>
                        </j-cube>
                    </j-col>
                </j-row>
            </div>
        </demo-box>
        <h2>偏移定位</h2>
        <p>
            使用
            <high-lighter>&lt;j-col&gt;</high-lighter>
            组件的 offset 属性来进行偏移定位
        </p>
        <hr />
        <br />
        <demo-box title="Offset" :code="code2" :expand="v1">
            <div id="gired-flex">
                <j-row class="girde-item" v-for="n in 4" :key="n">
                    <j-col :col="4" :offset="n * 2">
                        <j-cube class="girde-cube">{{ n * 4 }}</j-cube>
                    </j-col>
                </j-row>
            </div>
        </demo-box>
        <h2>子元素起始轴</h2>
        <p>
            使用
            <high-lighter>&lt;j-row&gt;</high-lighter>
            组件的 X,Y 属性以快速定位元素
        </p>
        <hr />
        <br />

        <demo-box title="X YStart" :code="code3" :expand="v1">
            <div>
                <j-row id="flex-y" warp spaceMode="between">
                    <span>
                        <j-radio id="y-top" value="top" v-model="y" />
                        <label for="y-top">Y top</label>
                    </span>
                    <span>
                        <j-radio id="y-center" value="center" v-model="y" />
                        <label for="y-center">Y middle</label>
                    </span>
                    <span>
                        <j-radio id="y-bottom" value="bottom" v-model="y" />
                        <label for="y-bottom">Y bottom</label>
                    </span>
                </j-row>
                <j-row id="flex-x" warp spaceMode="between">
                    <span>
                        <j-radio id="x-start" value="start" v-model="x" />
                        <label for="x-start">X Start</label>
                    </span>
                    <span>
                        <j-radio id="x-center" value="center" v-model="x" />
                        <label for="x-center">X Center</label>
                    </span>
                    <span>
                        <j-radio id="x-end" value="end" v-model="x" />
                        <label for="x-end">X end</label>
                    </span>
                </j-row>
                <hr />
                <j-row class="girde-item" style="height: 100px" :Y="y" :X="x">
                    <j-col :col="4">
                        <j-cube class="girde-cube" />
                    </j-col>
                    <j-col :col="4">
                        <j-cube class="girde-cube" style="height: 48px" />
                    </j-col>
                    <j-col :col="4">
                        <j-cube class="girde-cube" style="height: 72px" />
                    </j-col>
                </j-row>
            </div>
        </demo-box>
    </div>
</template>

<script>
import pdn from '../../../common/mix/popDemoName';
export default {
    name: 'grid-demo',
    mixins: [pdn],
    data() {
        return {
            code1: `
<j-row class="girde-item" v-for="n in 4" :key="n">
    <j-col :col="n * 4"><j-cube class="girde-cube">{{ n * 4 }}</j-cube></j-col>
    <j-col :col="24 - n * 2">
        <j-cube class="girde-cube" dark> {{ 24 - n * 4 }} </j-cube>
    </j-col>
</j-row>

<style>
.girde-item {
margin-bottom: 8px;
}
.girde-cube {
height: 36px;
width: 100%;
}
</style>
`,

            code2: `
<j-col :col="4" :offset="n * 2">
    <j-cube class="girde-cube">{{ n * 4 }}</j-cube>
</j-col>`,
            code3: `
<j-row class="row girde-item" :Y="y" :X="x">
    <j-col :col="4"><j-cube class="girde-cube"/></j-col>
    <j-col :col="4"><j-cube class="girde-cube" style="height:48px"/></j-col>
    <j-col :col="4"><j-cube class="girde-cube" style="height:72px"/></j-col>
</j-row>`,
            v1: true,
            x: 'start',
            y: 'top',
            position: ['start', 'center', 'end', 'around', 'between'],
        };
    },
};
</script>

<style scoped>
#flex-x > span > *,
#flex-y > span > * {
    vertical-align: middle;
}
.girde-item + .girde-item {
    margin-top: 8px;
}
.girde-cube {
    height: 36px;
    width: 100%;
}
</style>
