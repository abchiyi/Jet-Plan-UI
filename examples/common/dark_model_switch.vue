<template>
    <j-button tag="label" for="dark-mode-switch">
        <j-switch v-model="value" id="dark-mode-switch" />
        <span class="dms-ico">
            <j-transition-fade mode="out-in">
                <i v-if="value" class="bi bi-moon"></i>
                <i
                    v-else-if="value === false"
                    class="bi bi-brightness-high-fill"
                ></i>
            </j-transition-fade>
        </span>
    </j-button>
</template>

<script>
export default {
    name: 'dark-mode-switch',
    created() {
        if (this.$jetTheme.theme.name !== 'jetPlanDark') {
            this.value = false;
        } else {
            this.value = true;
        }
    },
    data() {
        return {
            value: false,
        };
    },
    watch: {
        value(v) {
            if (v) {
                this.$jetTheme.setTheme('jetPlanDark');
            } else {
                this.$jetTheme.setTheme('jetPlanLight');
            }
        },
    },
};
</script>
<style scoped>
.dms-ico {
    text-align: center;
    width: 1.2rem;
}

#dark-mode-switch {
    pointer-events: none !important;
}
</style>
