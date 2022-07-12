<template>
    <div>
        <h1>栅格系统</h1>
        <p>基于 flexbox 的24栏网格系统</p>
        <hr />
        <!-- 示例 -->
        <doc-item tag="h2" name="网格">
            <demo-box title="网格" :code="code1" expand>
                <div id="base-grid">
                    <j-row class="grid-item" v-for="n in 4" :key="n">
                        <j-col :col="n * 4">
                            <j-cube class="grid-cube">
                                <span>
                                    {{ n * 4 }}
                                </span>
                            </j-cube>
                        </j-col>
                        <j-col :col="24 - n * 2">
                            <j-cube class="grid-cube" dark>
                                <span>
                                    {{ 24 - n * 4 }}
                                </span>
                            </j-cube>
                        </j-col>
                    </j-row>
                </div>
            </demo-box>
        </doc-item>

        <doc-item tag="h2" name="偏移">
            <p>
                使用
                <high-lighter>&lt;j-col&gt;</high-lighter>
                组件的 offset 属性来进行偏移定位
            </p>
            <p class="text-hint">一下示例的每个方块的宽度为 4</p>
            <!-- 偏移量控制 -->
            <j-control-bar for-id="offset-slider">
                <template v-slot:text> 设置偏移 </template>
                <j-slider
                    id="offset-slider"
                    :max="20"
                    :step="1"
                    v-model="offset"
                />
            </j-control-bar>

            <demo-box title="Offset" :code="code2" expand>
                <div id="grid-flex">
                    <j-row class="grid-item">
                        <j-col :col="4" :offset="offset">
                            <j-cube class="grid-cube">{{ offset }}</j-cube>
                        </j-col>
                    </j-row>
                    <j-row class="grid-item">
                        <j-col :col="4" :offset="4">
                            <j-cube class="grid-cube">{{ 4 }}</j-cube>
                        </j-col>
                    </j-row>
                    <j-row class="grid-item">
                        <j-col :col="4" :offset="6">
                            <j-cube class="grid-cube">{{ 6 }}</j-cube>
                        </j-col>
                    </j-row>
                </div>
            </demo-box>
        </doc-item>

        <doc-item tag="h2" name="定位">
            <p>
                使用
                <high-lighter>&lt;j-row&gt;</high-lighter>
                组件的 X,Y 属性以快速定位元素
            </p>
            <j-card>
                <j-row id="flex-y" warp spaceMode="between">
                    <div class="radio-xy">
                        <j-radio id="y-top" value="top" v-model="y" />
                        <label for="y-top"><span>Y top</span> </label>
                    </div>
                    <div class="radio-xy">
                        <j-radio id="y-center" value="center" v-model="y" />
                        <label for="y-center"><span>Y middle</span></label>
                    </div>
                    <div class="radio-xy">
                        <j-radio id="y-bottom" value="bottom" v-model="y" />
                        <label for="y-bottom"><span>Y bottom</span></label>
                    </div>
                </j-row>
                <j-row id="flex-x" warp spaceMode="between">
                    <div class="radio-xy">
                        <j-radio id="x-start" value="start" v-model="x" />
                        <label for="x-start"><span>X Start</span></label>
                    </div>
                    <div class="radio-xy">
                        <j-radio id="x-center" value="center" v-model="x" />
                        <label for="x-center"><span>X Center</span></label>
                    </div>
                    <div class="radio-xy">
                        <j-radio id="x-end" value="end" v-model="x" />
                        <label for="x-end"><span>X end</span></label>
                    </div>
                </j-row>
            </j-card>
            <demo-box title="X YStart" :code="code3" expand>
                <j-row class="grid-item" style="height: 100px" :Y="y" :X="x">
                    <j-col :col="4">
                        <j-cube class="grid-cube" />
                    </j-col>
                    <j-col :col="4">
                        <j-cube class="grid-cube" style="height: 48px" />
                    </j-col>
                    <j-col :col="4">
                        <j-cube class="grid-cube" style="height: 72px" />
                    </j-col>
                </j-row>
            </demo-box>
        </doc-item>

        <!-- 文档 -->
        <div id="doc">
            <h2>J-Row</h2>
            <component-documentation
                title-tag-props="strong"
                :component="components.row"
                :description="components.descriptionRow"
            />
            <h2>J-Col</h2>
            <component-documentation
                title-tag-props="strong"
                :component="components.col"
                :description="components.descriptionCol"
            />
        </div>
    </div>
</template>

<script>
import pdn from '../../../common/mix/popDemoName';
import { Row, Col } from '@ui';
export default {
    name: 'grid-demo',
    mixins: [pdn],
    data() {
        return {
            code1: `
<j-row class="grid-item" v-for="n in 4" :key="n">
    <j-col :col="n * 4"><j-cube class="grid-cube">{{ n * 4 }}</j-cube></j-col>
    <j-col :col="24 - n * 2">
        <j-cube class="grid-cube" dark> {{ 24 - n * 4 }} </j-cube>
    </j-col>
</j-row>

<style>
.grid-item {
margin-bottom: 8px;
}
.grid-cube {
height: 36px;
width: 100%;
}
</style>
`,
            code2: `
<j-col :col="4" :offset="n * 2">
    <j-cube class="grid-cube">{{ n * 4 }}</j-cube>
</j-col>`,
            code3: `
<j-row class="row grid-item" :Y="y" :X="x">
    <j-col :col="4"><j-cube class="grid-cube"/></j-col>
    <j-col :col="4"><j-cube class="grid-cube" style="height:48px"/></j-col>
    <j-col :col="4"><j-cube class="grid-cube" style="height:72px"/></j-col>
</j-row>`,
            x: 'start',
            y: 'top',
            components: {
                row: Row,
                col: Col,
                descriptionRow: {
                    props: {
                        X: '说明：X轴起始位置。',
                        Y: '说明：Y轴起始位置。',
                        spaceMode: '说明：空格排布模式。',
                        warp: '说明：允许换行。',
                        reverse: '说明：反向排列X轴元素。',
                        noGap: '说明：禁用 <j-col> 组件的外边距。',
                        tag: '说明：组件渲染为指定标签。',
                    },
                },
                descriptionCol: {
                    props: {
                        tag: '说明：组件渲染为指定标签。',
                        col: '说明：未特定屏幕宽度下指定的组件所占列数。',
                        xs: '说明：在 <=578px 宽度屏幕尺寸下指定组件所占列数。',
                        sm: '说明：在 >578px,<=768px 屏幕宽度下指定组件所占列数。',
                        md: '说明：在 >768px,<=992px 屏幕宽度下指定组件所占列数。',
                        lg: '说明：在 >992px,<=1200px 屏幕宽度下指定组件所占列数。',
                        xl: '说明：在 >1200px 屏幕宽度下指定组件所占列数。',
                        offset: '说明：未特定屏幕宽度下指定偏移列数。 ',
                        offsetXs: '说明：<=578px 屏幕宽度下指定组件偏移列数。 ',
                        offsetSm:
                            '说明：>578px,<=768px 屏幕宽度下指定组件偏移列数。',
                        offsetMd:
                            '说明：>768px,<=992px 屏幕宽度下指定组件偏移列数。',
                        offsetLg: '说明：>1200px 屏幕宽度下指定组件偏移列数。',
                        relativeToScreen:
                            '说明：每栏所占宽度相对于屏幕宽度而非父组件宽度。',
                    },
                },
            },
            offset: 2,
        };
    },
};
</script>

<style scoped>
.radio-xy {
    vertical-align: middle;
    user-select: none;
    width: 120px;
}

#flex-x > span > *,
#flex-y > span > * {
    vertical-align: middle;
}
.grid-item + .grid-item {
    margin-top: 8px;
}
.grid-cube {
    height: 36px;
    width: 100%;
}
</style>
