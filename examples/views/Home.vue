<template>
    <j-page v-model="mobileDevicesWidth">
        <template v-slot:header>
            <j-row spaceMode="between">
                <j-col :xs="0" :sm="0" :md="0">
                    <logo-title />
                </j-col>
                <demo-header v-model="mobileDevicesWidth"></demo-header>
            </j-row>
        </template>
        <template v-slot:sidebar>
            <logo-title />
            <hr style="margin: auto" />
            <ul id="links">
                <li>
                    <router-link-a>About</router-link-a>
                </li>
            </ul>
        </template>
        <!-- 正文 -->
        <j-row id="header" tag="header" X="center" Y="center" warp>
            <div class="left">
                <img src="../assets/logo.png" alt="logo" id="logo" />
            </div>
            <div class="right">
                <div class="title">
                    <h1 style="font-size: 3rem">Jet UI</h1>
                    <p>适用于移动端和桌面端的 UI 组件库</p>
                </div>
                <j-row warp X="center" class="buttons">
                    <j-button primary @click="to('/get-started')">
                        Get Start
                    </j-button>
                    <button-github />
                    <button-gitee />
                </j-row>
            </div>
        </j-row>
    </j-page>
</template>

<script>
import logoTitle from '../components/logoTitle.vue';
export default {
    components: { logoTitle },
    name: 'the-home',
    data() {
        return {
            mobileDevicesWidth: false,
            showMenuButton: undefined,
        };
    },
    methods: {
        to(url) {
            this.$router.push(url);
        },
    },
};
</script>
<style scoped>
#header {
    margin-top: 120px;
}

#header > .left {
    text-align: right;
    user-select: none;
    padding: 0 20px;
}

#header #logo {
    height: 220px;
    overflow: hidden;
}

#header .j-button {
    font-size: 1.5em;
}

#header .buttons,
#header .title {
    height: 110px;
    text-align: center;
}

.j-sidebar {
    width: 255px;
}

.j-sidebar > .j-button {
    padding: unset;
}

.j-sidebar > header > .j-row {
    font-size: 1.6rem;
    height: 72px;
}
.j-sidebar #version {
    font-size: 0.6rem;
}

#links {
    list-style: none;
    padding: unset;
}
</style>
