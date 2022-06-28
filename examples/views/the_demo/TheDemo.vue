<template>
    <j-page v-model="value" auto-sidebar>
        <!--浮动头栏 -->
        <template v-slot:header>
            <demo-header :title="title" v-model="value"></demo-header>
        </template>
        <!-- 浮动侧栏 -->
        <template v-slot:sidebar>
            <logo-title />
            <hr style="margin: auto" />
            <ul id="links">
                <!-- Start -->
                <li>
                    <expand-menu v-model="expand.start">
                        <template v-slot:text>开始</template>
                        <j-transition-folded>
                            <demo-page-have-index
                                v-show="expand.start"
                                :paths="links.start"
                            />
                        </j-transition-folded>
                    </expand-menu>
                </li>

                <!-- Style -->
                <li>
                    <expand-menu v-model="expand.style">
                        <template v-slot:text>样式</template>
                        <j-transition-folded>
                            <demo-page-have-index
                                v-show="expand.style"
                                :paths="links.styles"
                            />
                        </j-transition-folded>
                    </expand-menu>
                </li>

                <!-- Layout -->
                <li>
                    <expand-menu v-model="expand.layout">
                        <template v-slot:text>布局</template>
                        <j-transition-folded>
                            <demo-page-have-index
                                v-show="expand.layout"
                                :paths="links.layout"
                            />
                        </j-transition-folded>
                    </expand-menu>
                </li>

                <!-- tools -->
                <li>
                    <expand-menu v-model="expand.tools">
                        <template v-slot:text>工具</template>
                        <j-transition-folded>
                            <demo-page-have-index
                                v-show="expand.tools"
                                :paths="links.tools"
                            />
                        </j-transition-folded>
                    </expand-menu>
                </li>

                <!-- components -->
                <li>
                    <expand-menu v-model="expand.components">
                        <template v-slot:text>组件</template>
                        <j-transition-folded>
                            <demo-page-have-index
                                v-show="expand.components"
                                :paths="links.components"
                            />
                        </j-transition-folded>
                    </expand-menu>
                </li>
            </ul>
        </template>
        <template v-slot:default>
            <!-- <router-view /> -->

            <router-view
                @md-title="
                    (v) => {
                        title = v;
                    }
                "
                v-slot="{ Component }"
            >
                <transition mode="out-in" name="j-transition-fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </template>
        <template v-slot:footer>
            <p>Footer</p>
        </template>
    </j-page>
    <j-alert :data="$jetAlert"></j-alert>
</template>

<script>
import logoTitle from '../../components/logoTitle.vue';
import {
    TheDemoCompontentsRouter,
    TheDemoStart,
    TheDemoStyle,
    TheDemoTool,
    TheDemoLayout,
} from '../../router';
function toLinks(routerConf) {
    return routerConf.map((item) => {
        return {
            name: item.name,
            href: item.path,
            index: item.index ? item.index : [],
        };
    });
}
export default {
    components: { logoTitle },
    data() {
        return {
            value: false,
            title: null,
            expand: {
                start: true,
                style: true,
                components: true,
                tools: true,
                layout: true,
            },
        };
    },
    computed: {
        links() {
            return {
                start: toLinks(TheDemoStart),
                components: toLinks(TheDemoCompontentsRouter),
                tools: toLinks(TheDemoTool),
                styles: toLinks(TheDemoStyle),
                layout: toLinks(TheDemoLayout),
            };
        },
    },
};
</script>

<style>
#links {
    padding: 0 16px;
    list-style: none;
}
.demo-box {
    margin: 10px 0;
    border-radius: 16px;
    padding: 15px 20px;
    display: block;
}

.slide_left-enter-active,
.slide_left-leave-active,
.slide_right-enter-active,
.slide_right-leave-active {
    transition: all 0.3s;
    position: absolute !important;
    /* background-color: #fff; */
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
.slide_left-enter-from,
.slide_right-leave-to {
    opacity: 1;
    transform: translateX(100%);
}
.slide_right-enter-from,
.slide_left-leave-to {
    opacity: 1;
    transform: translateX(-100%);
}
.slide_left-leave-to,
.slide_right-leave-to {
    opacity: 0.3;
}
</style>
