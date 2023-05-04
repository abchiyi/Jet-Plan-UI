# h1

## h2

### h3

## h2-2

### h3-2

#### h4

##### h5

###### h6

<script setup lang="ts">
import { Transition } from "vue";
</script>

```xml
<script>
    import { defineComponent, h } from "vue";
    import { theme } from 'theme.js'
    export default defineComponent({
        setup(){
            return {
                background: theme.toMap().background,
                theme,
            }
        },
        render(
            return h('div',{
                class:"demo",
                style: {
                    color: theme.toMap().text.light， // 应用 css 变量
                }
            })
        )
    })
</script>
<style>
:root{
    background:red
}
</style>
```

<!-- 缩进测试 -->
- ## 标题

    ```ts
    console.log('test code')
    ```
