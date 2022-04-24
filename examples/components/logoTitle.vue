<template>
    <j-row class="logo-header" X="center" Y="center">
        <j-button class="text-hint" text @click="toHomePage">
            <j-row X="center" Y="center">
                <img src="../assets/logo.png" alt="logo" height="30" />
                <span class="version"
                    >JetPlanUI -
                    <span class="font-mono">{{ version }}</span></span
                >
            </j-row>
        </j-button>
    </j-row>
</template>
<script>
import version from '../version.js';
export default {
    name: 'logo-title',
    methods: {
        toHomePage() {
            this.$router.push('/');
        },
    },
    data() {
        return {
            version: version.version,
        };
    },
};
</script>
<style scoped>
.logo-header {
    height: 72px;
}
</style>
