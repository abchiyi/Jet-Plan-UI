<template>
    <div>
        <h1>主题</h1>
        <p>
            Jet plan UI 内置了一个主题控制器
            <high-lighter> $jetTheme </high-lighter>
            。使用它来轻松的切换，自定义，或从网络动态加载主题
        </p>
        <hr />

        <h2>主题切换器：</h2>
        <demo-box code="<j-all-theme />" expand title="theme-switcher">
            <j-all-theme />
        </demo-box>

        <!-- 安装&使用主题 -->
        <doc-item
            id="theme-install-use"
            name="使用主题"
            title-is="h2"
            noPadding
            noDot
        >
            <template v-slot:title>
                <hr />
            </template>
            <li id="set-theme-at-main-file">
                <p class="text-hint">在'main.js'（app 入口 js）:</p>
                <j-code-box
                    :code="`
// main.js

// 导入ui和主题
import ui from 'jet-plan-ui'
import { jetPlanLight } from 'jet-plan-ui-theme'

// 安装主题
ui.$jetTheme.installTheme(
    'jet-ui-light',
    jetPlanLight
)

// 通过向 '.setTheme' 方法指定 主题的安装名来应用主题
ui.$jetTheme.setTheme('jet-ui-light')
          `"
                />
            </li>
            <li id="set-theme-at-component">
                <p>在组件中更改/安装主题:</p>
                <p class="text-hint">
                    $JetTheme 是全局注册的你可以在任何地方调用它。比如在组件中
                </p>
                <j-code-box
                    :code="`
import { jetPlanDark } from 'jet-plan-ui-theme'

export default{
    name:'some-component',
    mounted(){

        this.$jetTheme.installTheme(
            'jet-ui-dark',
            jetPlanDark
        )

        this.$jetTheme.setTheme('jet-ui-dark')
    }
}
          `"
                />
            </li>
            <li id="use-theme-pack">
                <p>使用主题包:</p>
                <p class="text-hint">
                    主题控制的 '.install'
                    方法接受一个对象或一个函数以一次性安装主题包内有主题
                </p>
                <j-code-box
                    :code="`
import JetPlanUI from 'jet-plan-ui';
import jetPlanTheme from 'jet-plan-ui-theme';

ui.$jetTheme.install(
    JetPlanTheme
);
          `"
                />
            </li>
        </doc-item>
        <!-- 创建主题 -->
        <doc-item id="theme-create" name="创建主题" title-is="h2" noPadding>
            <template v-slot:title>
                <p>在这里讲述了如何快速定制属于你的主题</p>
                <hr />
            </template>
            <li id="theme-create-extend">
                <h3>从现有主题创建新主题</h3>
                <p>
                    使用 '$jetTheme.installTheme' 方法来从现有主题拓展一个新主题
                </p>
                <j-code-box
                    :code="`
// main.js

// 导入组件库和主题
import ui from 'jet-plan-ui'
import { jetPLanLight } from 'jet-plan-ui-theme'

// 拓展&安装主题
ui.$jetTheme.installTheme(
    'jetPlanLight_Red', // 主题名称
    {
        primary:'#ef5961' // 要覆盖的 option
    },
    jetPlanLight // 蓝本主题,其中所有的 option 将被继承,
)
            `"
                />
            </li>
            <li id="theme-create-new">
                <h3>创建新主题</h3>
                <p>
                    如需要完全重定义主题可参照以下配置。一个完整的主题对象所包含的所有
                    'option' 参考。
                </p>
                <j-code-box
                    lang="javascript"
                    :code="`
// jetPLanDark
 export default {
    // BACKGROUND
    foreground: '#363636',
    background: '#202020',
    disabled: '#535353',
    border: '#6a6a6a',

    // TEXT
    'text-disabled': '#CCCCCC4d',
    'text-hint': '#CCCCCC',
    text: '#FCFCFC',

    // INFO
    secondary: this.border,
    primary: '#1687a7',
    success: '#4cd966',
    warning: '#ecb02c',
    error: '#f33f2e',
    info: '#0d75ec',

    // OTHERS
    frosted_glass: this.foreground + 'b3',
    card: this.foreground,
    shadow: '#00000033',
    mask: '#85858560',
    'text-light': this.text,
    'text-dark': '#505050',
}
          `"
                />
            </li>
            <li id="theme-create-add-option">
                <h3>自定义 option</h3>
                <p>
                    如果你的组件有额外的 'option'
                    需求则只需在注册主题时通过拓展来加入选项，或直接在主题对象中加入
                    'option'。要使用 'option 中定义的值时则只需通过 css
                    变量的形式引用即可。或者从当前定义的主题 '$jetTheme.theme'
                    中读取值
                </p>
                <hr />
                <p>设置自定义 'option'</p>
                <j-code-box
                    :code="`
// main.js

// 导入组件库和主题
import ui from 'jet-plan-ui'
import { jetPLanLight } from 'jet-plan-ui-theme'

// 拓展&安装主题
ui.$jetTheme.installTheme(
    'jetPlanLight_Red', // 主题名称
    {
        myOption:'#ef5961' // 自定义 option
    },
    JetPlanLight // 蓝本主题,其中所有的 option 将被继承,
)

          `"
                />
                <p>使用自定义 'option'</p>
                <j-code-box
                    lang="css"
                    :code="`
 /* 在css中访问 */
.body{
    background: var(--myOption);
}
          `"
                />
                <br />
                <j-code-box
                    lang="JavaScript"
                    :code="`
 // 在组件中调用当前主题
{
    mounted(){
        // 可通过 'jetTheme.theme' 访问到当前使用的主题
        this.$jetTheme.theme.myOption
    }
}
          `"
                />
            </li>
        </doc-item>
        <doc-item
            id="theme-auto-dark-mode"
            name="创建自动深色模式"
            title-is="h2"
            noPadding
        >
            <template v-slot:title>
                <p>
                    使用 '$jetTheme.toAuto' 方法来创建一个随系统切换的深色模式
                </p>
            </template>
            <li>
                <j-code-box
                    :code="`
// main.js

// 导入组件库和主题
import ui from 'jet-plan-ui'
import { jetPLanLight, jetPLanDark } from 'jet-plan-ui-theme'

// 安装主题
ui.$jetTheme.installTheme(
    'jetPlanAuto', // 主题名称

    // 将两个主题合并为一个主题
    $jetTheme.toAuto(
        jetPLanLight, // 第一位参数提供亮色主题
        jetPLanDark // 第二位参数提供暗色主题
    )
)
            `"
                />
            </li>
        </doc-item>
    </div>
</template>

<script>
import pdn from '../../../common/mix/popDemoName';
import DocItem from '../../../common/DocItem.vue';
export default {
    components: { DocItem },
    name: 'the-demo-style',
    mixins: [pdn],
};
</script>

<style>
.theme-item > span {
    padding-left: 8px;
}

.color-box {
    align-items: top;
    display: flex;
}
.color-box > * {
    width: 130px;
    display: inline-block;
}
.color-box p {
    font-size: 19px;
}

.color {
    border: 3px solid var(--border);
    border-radius: var(--m-radius);
    height: 50px;
    width: 50px;
    margin: 5px;
}

.show-h-tag > *:last-child {
    margin-left: 10px;
}
.show-h-tag > * {
    display: inline-block;
}
.shadow {
    box-shadow: 0 2px 10px 1px var(--shadow);
}
</style>
