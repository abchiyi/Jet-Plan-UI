<template>
    <div
        id="page"
        :class="modelValue ? 'is-open' : 'is-closed'"
        v-re-screen-size="autoSidebarControl"
    >
        <!-- 正文 -->
        <Row id="page-content" :class="classSidebarOpen" X="center">
            <Col id="content">
                <main>
                    <slot></slot>
                </main>
                <footer>
                    <hr />
                    <slot name="footer"></slot>
                </footer>
            </Col>
        </Row>
        <!-- 头栏 -->
        <Header
            id="page-header"
            :class="classSidebarOpen"
            class="frosted-glass"
        >
            <slot name="header"></slot>
        </Header>
        <!-- 遮罩 -->
        <Mask :value="sidebarExpand && !sidebarDock" />
        <!-- 侧栏 -->
        <Sidebar
            id="page-sidebar"
            :dock="sidebarDock"
            v-focus="onBlur"
            :expand="modelValue"
            @click="andClose"
        >
            <slot name="sidebar" />
        </Sidebar>
    </div>
</template>

<script>
import { Row, Col } from '../../gird';
import { Mask } from '../../mask';
import Header from '../Header.vue';
import Sidebar from '../Sidebar.vue';
export default {
    name: 'j-page',
    components: {
        Row,
        Col,
        Mask,
        Header,
        Sidebar,
    },
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
        autoSidebar: {
            type: Boolean,
            default: false,
        },
    },
    model: {
        prop: 'modeValue',
        event: 'update:modelValue',
    },
    data() {
        return {
            sidebarExpand: false,
            sidebarDock: false,
        };
    },
    methods: {
        autoSidebarControl(el, v) {
            v.contains(['xl', 'lg'], (bool) => {
                el;
                if (this.autoSidebar) {
                    this.$emit('update:modelValue', bool);
                    this.sidebarDock = bool;
                }
            });
        },
        onBlur() {
            if (!this.sidebarDock) {
                this.$emit('update:modelValue', false);
            }
        },
        andClose() {
            if (!this.dock) this.onBlur();
        },
    },
    computed: {
        classSidebarOpen() {
            return [
                this.modelValue && this.sidebarDock ? 'with-sidebar-open' : '',
            ];
        },
    },
    watch: {
        modelValue(v) {
            this.sidebarExpand = v;
        },
    },
};
</script>

<style scoped>
#page-sidebar {
    width: 255px;
}

#page-header,
#page-content {
    transition: all 500ms var(--ease-in-out);
    padding: 0 10px;
}

#page-header.with-sidebar-open,
#page-content.with-sidebar-open {
    margin-left: 255px;
}

#page-header {
    height: 72px;
}

.content,
main,
footer {
    --HEIGHT-FOOTER: 150px;
    --HEIGHT-HEADER: 72px;
    --TOP-MARGIN: 100px;
}

#page-content > #content {
    max-width: 760px;
    height: 100vh;
    width: 100%;
}

main {
    margin-top: var(--TOP-MARGIN);
}

footer {
    height: var(--HEIGHT-FOOTER);
    box-sizing: border-box;
    position: sticky;
    top: 100vh;
}
</style>
