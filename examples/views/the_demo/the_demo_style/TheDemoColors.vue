<template>
  <div>
    <doc-item name="主题" title-is="h1" noDot noPadding>
      <p>
        Jet plan UI 内置了一个主题控制器
        <high-lighter> $jetTheme </high-lighter>
        。使用它来轻松的切换，自定义，或从网络动态加载主题
      </p>
      <hr />
      <li id="theme-switcher">
        <doc-item name="选择主题" noPadding title-is="h2">
          <j-all-theme />
        </doc-item>
      </li>

      <doc-item
        id="theme-install-use"
        name="使用主题"
        title-is="h2"
        noPadding
        noDot
      >
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
    </doc-item>

    <!-- <article id="jet-theme">
      <doc-item name="$jetTheme" title-is="h2" no-padding>
        Jet PLan UI 提供的主题控制器
        <hr />
        <doc-item name="properties:" title-is="h3">
          <li id="jet-theme-allTheme">
            <p>
              主题控制器所提供的所有属性均是响应式的，你可使用 '$watch'
              来追踪其变化
            </p>
            <hr />
            <p>
              <high-lighter>.allTheme</high-lighter>
              - type: Object, default: {}
            </p>
            <p>存放所有已安装的主题</p>
          </li>
          <li id="jet-theme-theme">
            <p>
              <high-lighter>.theme</high-lighter>
              - type: Object, default: null
            </p>
            <p>当前应用的主题</p>
          </li>
        </doc-item>
        <doc-item name="methods:" title-is="h3">
          <li id="jet-theme-installTheme">
            <p>
              <high-lighter>.installTheme</high-lighter>
              - args: name:String, object: object, extend: object
            </p>
            <p>
              'name' 当前安装主题的名称, 'object' 当前要注册的主题对象，'extend'
              被继承对象。
              <br />当要注册的主题只设置了部分样式属性时可向 'extend'
              参数传入一个完整的主题对象，'extend'
              中的主题部分设置将会被要安装的主题所覆盖，从而得到一个完整的主题
            </p>
            <j-code-box
              :code="`
/**
* 在任意组件中
*/

const fullSizeTheme = {
    option1:'red'
    ...
}

const theme = {
    ...
}

this.$jetTheme.installTheme(
    'newTheme',// name
    theme, // object
    fullSizeTheme // extend
)

            `"
            />
          </li>
          <li id="jet-theme-install">
            <p>
              <high-lighter>.install</high-lighter>
              - args: theme: Object|Function
            </p>
            <p>
              用于安装主题。参数'theme'
              期望是一个对象或函数。当是一个对象时，将会尝试调用对象的
              'install'方法来安装主题。是一个函数时将会被直接执行。
              被执行的安装函数的第一个参数为 'jetTheme' 主题控制器
            </p>
            <j-code-box
              :code="`
/**
* 在任意组件中
*/
const light_theme = {
    ...
}

const dark_theme = {
    ...
}

// 参数为对象时
this.$jetTheme.install(
    {
        install(jetTheme) {
            jetTheme.installTheme('light', light)
            jetTheme.installTheme('dark', dark)
        }
    }
)

// 参数为函数时
this.$jetTheme.install(
    (jetTheme)=>{
        jetTheme.installTheme(
            jetTheme.installTheme('light', light)
            jetTheme.installTheme('dark', dark)
        )
    }
)
            `"
            />
          </li>
          <li id="jet-theme-toAuto">
            <p>
              <high-lighter>.toAuto</high-lighter>
              - args:lightTheme:object, darkTheme: object - return:
              autoDarkTheme
            </p>
            <p>
              需要一个亮色，一个暗色两个主题作为参数，将生成一个支持跟随系统或浏览器
              'darkMode'(暗黑模式) 自动切换的主题。
            </p>
            <j-code-box
              :code="`
/**
* 在任意组件中
*/

// 亮色主题
const lightTheme = {
    ...
}

// 暗色主题
const darkTheme = {
    ...
}

// 生成新主题
const autoDarkTheme =
    this.$jetTheme
        .toAuto(lightTheme,
                darkTheme)

this.$jetTheme.installTheme(
    'autoDarkMode',
    autoDarkTheme
)
            `"
            />
          </li>
          <li id="setTheme">
            <p>
              <high-lighter>.setTheme</high-lighter>
              - args: name:string
            </p>
            <p>用于设置主题，'name' 主题注册名</p>
          </li>
        </doc-item>
      </doc-item>
    </article> -->
    <!-- <article id="customize-theme">
      <doc-item name="Customize theme" title-is="h2" no-padding>
        定制你自己的主题
        <hr />
        <doc-item name="快速定制主题" title-is="h3">
          <li>
            <h4>拓展现有主题</h4>
            <p>
              在这里推荐使用
              <high-lighter>$jerTheme.installTheme</high-lighter>
              的，'extend' 参数来对 JetPlanUI
              提供的默认主题进行继承拓展。这样得到的新主题能更好的适配组件库
            </p>
            <j-code-box
              :code="`
// 导入 jet plan ui 主题
import { light } from 'jet-plan-ui-theme'

// 这样你就得到了一个基于 JetPlan_light 主题继承拓展后的主题
this.$jetTheme.installTheme(
    'yourTheme',
    {
        // your theme options
        ...
    },
    light
)
            `"
            />
          </li>
          <li>
            <h4>主题选项</h4>
            <p>组件库已使用的 option 参考</p>
            <j-code-box
              lang="JavaScript"
              can-copy
              :code="`
/**
* JavaScript
* File : index.js
*/
 export default {
    // background
    foreground: '', // 前景色
    border: '', // 边框色，如<hr /> 分割线，开关组件的边框
    background: '', // 背景色，默认应用于 <body> 元素
    disabled: '', // 组件被禁用时色彩

    // text color
    'text-disabled': '', // 文本被禁用时的色彩
    'text-hint': '', // 辅助文本色彩
    text: '', // 文本背景色

    // base color
    secondary:'', // 次要背景色，通常用于次级按钮
    primary: '', // 主题色，控制按钮，开关的色彩风格，通常定制主题仅需修改此项

    // 以下四个选项均遵循其字意义
    success: '',
    warning: '',
    error: '',
    info: '',

    // others
    frosted_glass:'', // 毛玻璃/亚克力效果色，必须为半透明 。
    card: '', // 卡片或任意浮动组件背景色，请与 foreground（前景色）保持一致
    shadow: '', // 阴影色，必须为半透明。所有阴影色彩均依赖于此
    mask: '', // 遮罩背景色，必须为半透明

    /**
    * 文本反色，由指令 v-auto-color 使用
    * 详见 https://jetplanui.github.io/#/directives 页中的 autoColor 条目
    */
    'text-light': '',
    'text-dark': ''
}
            `"
            >
              <template v-slot:icon-copy>
                <i class="bi bi-clipboard"></i>
              </template>
            </j-code-box>
          </li>
        </doc-item>
        <doc-item name="在主题中添加你的 option">
          <p>主题控制器支持添加你定义的属性</p>
          <hr />
          TODO 新文档页面，主题原理
          <li>
            <h4>主题原理</h4>
            <p>
              主题控制器只做一件事，将 option 以 key:value 的形式输出为 css
              变量，然后输入到 css 选择器 :root
              中，因此你可以在任何位置使用定义的值
            </p>
            <p>例如：</p>
            <j-code-box
              :code="`
//  定义 options
{
    primary:'#FFF'
}

// 组件中
<div style='var(--primary)' >
    Primary-Color
</div>

// css 文件
div{
    background:var(--primary)
}

// JavaScript
el.style.background = 'var(--primary)'
             `"
            ></j-code-box>
          </li>
        </doc-item>
      </doc-item>
    </article> -->
  </div>
</template>

<script>
import pdn from '@common/mix/popDemoName';
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

#theme-box {
  background-color: var(--foreground);
  border-radius: var(--m-radius);
  padding: 5px 20px;
}

#colors {
  background: var(--foreground);
}

#all-theme {
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
