<template>
    <j-row class="logo-header" X="center" Y="center">
        <j-button class="text-hint" text @click="toHomePage">
            <j-row X="center" Y="center">
                <img src="../assets/logo.png" alt="logo" height="30" />
                <span class="version"
                    >JetPlanUI - <span class="font-mono">V0.1.9</span></span
                >
            </j-row>
        </j-button>
    </j-row>
</template>
<script>
export default {
    name: 'logo-title',
    methods: {
        toHomePage() {
            this.$router.push('/');
        },
    },
};
</script>
<style scoped>
.logo-header {
    height: 72px;
}
</style>
