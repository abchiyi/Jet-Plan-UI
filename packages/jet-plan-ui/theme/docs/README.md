# 主题

**_Jet ui_** 提供了一个自由度极高的主题系统,使用它来轻松的切换，自定义，或从网络
动态加载主题

## 定义主题

**_Jet UI_** 组件依赖于主题控制器工作，在使用组件前你应该在若入口文件出初始化`主题控制器`。

### 主题控制器
<!-- TODO 添加跳转链接 -->

初始化主题控制器

```ts
import { newReactiveThemeSystem } from "jet-plan-ui";
const RTS = newReactiveThemeSystem(
    styleId:string, //存放 css 的<style>元素的 id
    defaultTheme:Theme // 默认主题，同时此主题将作为类型推断使用
);
```

- #### 获取主题 `.getTheme`

    此方法返回一个计算属性，计算属性将始终指向当前应用的主题。

    **函数定义:**

    ```ts
    .getTheme(): ComputedRef<Theme>
    ```

- #### 安装主题 `.install`

    此方法接受一个含有 `install` 方法的对象或一个函数用于安装主题。

    **函数定义:**

    ```ts
    .install(theme: ThemePack | installTheme ): void
    ```

- #### 添加主题 `.addTheme`

  此方法接受一个结构与初始化主题时提供的默认主题结构一致的对象，并将其添加到主题列表中

  **函数定义:**

    ```ts
    .addTheme(theme: Theme ): void
    ```

  <!-- TODO 添加跳转链接 -->

- #### 设置主题 `.setTheme`

  此方法接受一个字符串或一个对象。当参数为字符串时将会在已安装的主题中查找主题并应用主题，未找到时将会抛出一个错误，参数为对象时将该对象作为主题
  处理，在安装该主后并应用主题。

    ```ts
    .steTheme(theme:string | Theme): void
    ```

#### 完整示例

这里使用内置的主题包作为示例，建议在独立文件中初始化主题控制器。

**_theme.js_**

```ts
import { newReactiveThemeSystem, type ThemePack } from "jet-plan-ui";
import { jetAuto, jetDark, jetLight } from "jet-plan-ui-theme";
export const RTS = newReactiveThemeSystem("theme", jetLight);

// 定义主题包
const themePack: ThemePack = {
    install(v) {
    v.addTheme(jetAuto);
    v.addTheme(jetDark);
    },
};

RTS.install(themePack);
RTS.setTheme("JetAuto");
```

在`main.js`中导入即可

**_main.js_**

```ts
...
import './theme.js'
...
```

## 使用主题

- ### 在组件中

    在组件中使用主题时推荐引入已定义的主题控制器，通过调用其`getTheme`方法获取当前主题。

    **_示例_**

    ```xml
    <template>
        <div class='component'>这是一个组件</div>
    </template>
    <script lang='ts'>
        import RTS from 'theme.ts' // 导入定义的主题控制器
        export default defineComponent({
            setup(){
                return {
                    colors:RTS.getTheme() // 获取当前主题
                }
            }
        })
    </script>
    <style>
        .component{
            /* 应用主题色彩到css */
            background:v-bind('colors.background.default');
        }
    </style>
    ```

- ### 在`css`中

    在`css`中使用主题配置时需要以`css变量`的形式调用。

    **_示例 customTheme_**

    ```ts
    {
        background:{ 
            default:white,
            dark: black
        }
    }
    ```

    在 css 中调用时将会把所有的色彩配置转换为以 kebab 格式的命名的css变量。

    ```css
    .component{
        /* kebab 格式的变量 */
        background:var(--background);
        color:var(--background-dark);
    }
    ```

## 新建主题

- ### defineTheme

    **函数定义：**

    ```ts
    defineTheme(theme:Object):Theme
    ```

    定义新主题时，在满足必要的基础属性后，你可以任意添加、嵌套属性。

    **示例：**
    `Tips：属性 default，AUTO，name 为特殊键，定义主题时不要以其他方式使用它们。`

    ```ts
    import { defineTheme } from 'jet-plan-ui'

    export const newTheme defineTheme({
        name:"newTheme",
        first：{
            second：{
                third：{
                    default:'white'
                    testKey:"rgb(40, 44, 52)"
                    testKey2:"#282c34"
                }
            }
        }
    })
    ```

    以上主题在被解析为 css 时都将会转换为 kebab 格式的命名的 css 变量，如下所示：

    ```css
    :root {
        --first-second-third：white;
        --first-second-third-test-key：rgb(40, 44, 52);
        --first-second-third-test-key-2：#282c34;
    }
    ```

    可以看见所有的键名都将以 '父级->子级' 的顺序排列，其中 属性`default`不会被解析
    到 css 变量名中，它将作为该层级的默认值。

- ### 定义AutoDarkModeTheme

    定义支持自动暗黑模式的主题你需要用到特殊属性`AUTO`，它接受一个函数作为其值。
    该功能依赖于浏览器的媒体查询功能，所以它只会在支持暗黑模式的浏览器和操作系统上生效。

    **_函数定义_**

    ```ts
    {
        AUTO:()=>Theme
    }
    ```
