<template>
    <div id="the-how-to-use">
        <h1>如何使用</h1>
        <p>组件库支持完全引入和部分引入</p>
        <hr />
        <h2>完整引入</h2>
        <j-code-box
            can-copy
            :code="`

import { resolveComponent, createApp, h } from 'vue'

// 导入组件库和主题
import ui from 'jet-plan-ui'
import theme from 'jet-plan-ui-theme'

// 安装主题
ui.$jetTheme.install(theme)

const BASE_COMPONENT = {
    name: 'app',
    render: () => h(resolveComponent('router-view'))
}
createApp(BASE_COMPONENT)
    .use(ui)
    .mount('#app')
        `"
        >
            <template v-slot:icon-copy>
                <i class="bi bi-clipboard"></i> </template
        ></j-code-box>
        <h3>部分引入</h3>
        <!-- TODO  部分引入-->
    </div>
</template>
<script>
export default {
    name: 'the-how-to-use',
};
</script>
<style lang=""></style>
