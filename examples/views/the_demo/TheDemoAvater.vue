<template>
    <div>
        <h1>Avater</h1>
        <p>用于图形, 图标，头像</p>
        <hr />
        <doc-item name="Props:" title-is="h2">
            <li id="avater-border">
                <p>
                    <high-lighter>border</high-lighter>: type - Boolean, default
                    - false
                </p>
                <p>关闭/开启 边框</p>
            </li>
            <li id="avater-circle">
                <p>
                    <high-lighter>circle</high-lighter>: type - Boolean, default
                    - true
                </p>
                <p>切换 圆形/圆角矩形</p>
            </li>
            <li id="avater-size">
                <p>
                    <high-lighter>size</high-lighter>: type - String|Boolean,
                    default - 2
                </p>
                <p>控制组件尺寸，默认为组件字体尺寸 2倍，即2em</p>
            </li>
            <li id="avater-color">
                <p>
                    <high-lighter>color</high-lighter>: type - String, default -
                    'var(--foreground)'
                </p>
                <p>设置组件背景色</p>
            </li>
        </doc-item>
        <doc-item name="Slots:" title-is="h2">
            <li>
                <p><high-lighter>default</high-lighter>: 仅有默认插槽</p>
            </li>
        </doc-item>

        <h2>示例：</h2>
        <hr />
        <j-control-bar for-id="c-switch-to-circle">
            <template v-slot:text> 切换外形为矩形 </template>
            <j-switch id="c-switch-to-circle" v-model="toCircle" />
        </j-control-bar>
        <j-control-bar for-id="c-switch-border">
            <template v-slot:text> 启用边框 </template>
            <j-switch id="c-switch-border" v-model="border" />
        </j-control-bar>
        <demo-box
            title="Avater"
            expand
            code='
<div class="demo-item text-hint">
    <span>图标</span>
    <j-avater>
        <i class="bi bi-files"></i>
    </j-avater>
</div>
<div class="demo-item text-hint">
    <span>图片</span>
    <j-avater>
        <img
            src="../../../public/pexels-creative-vix-9754.jpg"
            alt="avater-bg"
        />
    </j-avater>
</div>
<div class="demo-item text-hint">
    <span>文字</span>
    <j-avater>A</j-avater>
</div>
<div class="demo-item text-hint">
    <span>文字-多字符</span>
    <j-avater>
        <span style="padding: 0 10px"> Abc123 </span>
    </j-avater>
</div>'
        >
            <j-row warp>
                <div class="demo-item text-hint">
                    <span>图标</span>
                    <j-avater
                        color="#263238"
                        :border="border"
                        :circle="toCircle"
                    >
                        <i class="bi bi-files"></i>
                    </j-avater>
                </div>
                <div class="demo-item text-hint">
                    <span>图片</span>
                    <j-avater :border="border" :circle="toCircle">
                        <img
                            src="../../../public/pexels-creative-vix-9754.jpg"
                            alt="avater-bg"
                        />
                    </j-avater>
                </div>
                <div class="demo-item text-hint">
                    <span>文字</span>
                    <j-avater
                        color="#ff4d28"
                        :border="border"
                        :circle="toCircle"
                        >A</j-avater
                    >
                </div>
                <div class="demo-item text-hint">
                    <span>文字-多字符</span>
                    <j-avater :border="border" :circle="toCircle">
                        <span style="padding: 0 10px"> Abc123 </span>
                    </j-avater>
                </div>
            </j-row>
        </demo-box>
    </div>
</template>

<script>
export default {
    name: 'the-demo-avater',
    data() {
        return {
            toCircle: true,
            border: false,
        };
    },
};
</script>

<style>
.demo-item {
    margin: 0 10px;
}
.demo-item > span {
    margin: 5px;
}
</style>
