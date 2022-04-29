<template>
    <div>
        <h1>Avater</h1>
        <p>用于图形, 图标，头像</p>
        <hr />
        <j-control-bar for-id="c-switch-to-circle">
            <template v-slot:text> 切换外形为矩形 </template>
            <j-switch id="c-switch-to-circle" v-model="toCircle" />
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
                    <j-avater :circle="toCircle">
                        <i class="bi bi-files"></i>
                    </j-avater>
                </div>
                <div class="demo-item text-hint">
                    <span>图片</span>
                    <j-avater :circle="toCircle">
                        <img
                            src="../../../public/pexels-creative-vix-9754.jpg"
                            alt="avater-bg"
                        />
                    </j-avater>
                </div>
                <div class="demo-item text-hint">
                    <span>文字</span>
                    <j-avater :circle="toCircle">A</j-avater>
                </div>
                <div class="demo-item text-hint">
                    <span>文字-多字符</span>
                    <j-avater :circle="toCircle">
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
