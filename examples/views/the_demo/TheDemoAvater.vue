<template>
    <div>
        <h1>Avatar</h1>
        <p>用于图形, 图标，头像</p>
        <hr />

        <h2>示例：</h2>
        <j-control-bar for-id="c-switch-to-circle">
            <template v-slot:text> 切换外形为圆形 </template>
            <j-switch id="c-switch-to-circle" v-model="toCircle" />
        </j-control-bar>
        <j-control-bar for-id="c-switch-border">
            <template v-slot:text> 启用边框 </template>
            <j-switch id="c-switch-border" v-model="border" />
        </j-control-bar>
        <j-control-bar for-id="slider-size">
            <template v-slot:text> 尺寸 </template>
            <j-slider id="slider-size" :min="2" :max="8" v-model="size" />
            <j-button text id="show-size"> {{ size }} em</j-button>
        </j-control-bar>
        <demo-box title="Avatar" expand :code="code">
            <j-row warp>
                <div class="demo-item text-hint">
                    <span>图标</span>
                    <j-avatar
                        id="avatar-ico"
                        :border="border"
                        :circle="toCircle"
                        :size="size"
                    >
                        <i class="bi bi-files"></i>
                    </j-avatar>
                </div>
                <div class="demo-item text-hint">
                    <span>图片</span>
                    <j-avatar :border="border" :circle="toCircle" :size="size">
                        <img
                            src="../../../public/pexels-creative-vix-9754.jpg"
                            alt="avatar-bg"
                        />
                    </j-avatar>
                </div>
                <div class="demo-item text-hint">
                    <span>文字</span>
                    <j-avatar
                        id="avatar-a"
                        :border="border"
                        :circle="toCircle"
                        :size="size"
                    >
                        A
                    </j-avatar>
                </div>
                <div class="demo-item text-hint">
                    <span>文字-多字符</span>
                    <j-avatar
                        id="avatar-text"
                        :border="border"
                        :circle="toCircle"
                        :size="size"
                    >
                        <span style="padding: 0 10px"> Abc123 </span>
                    </j-avatar>
                </div>
            </j-row>
        </demo-box>

        <component-documentation
            :component="Avatar"
            :description="AvatarDescription"
        />

        <doc-item name="Slots:" tag="h2">
            <ul>
                <li>
                    <p><strong>default</strong></p>
                    <p>仅有默认插槽</p>
                </li>
            </ul>
        </doc-item>
    </div>
</template>

<script>
import { Avatar } from '@ui';
export default {
    name: 'the-demo-avatar',
    data() {
        return {
            Avatar: Avatar,
            AvatarDescription: {
                props: {
                    border: '说明：启用边框',
                    circle: '说明：设置外观为圆形',
                    size: '说明：设置最小高度/宽度，单位/em',
                },
            },
            toCircle: true,
            border: false,
            size: 2.5,
            code: `

            `,
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

#show-size {
    width: 4rem;
    text-align: center;
}

#avatar-ico {
    background: #3498db;
}
#avatar-a {
    background: #1abc9c;
}
#avatar-text {
    background: #c0392b;
}
</style>
