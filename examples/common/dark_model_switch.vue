<template>
    <span class="dms-ico">
        <j-switch v-model="value" id="dark-mode-switch" />
        <j-transition-fade mode="out-in">
            <i v-if="value" class="bi bi-moon"></i>
            <i
                v-else-if="value === false"
                class="bi bi-brightness-high-fill"
            ></i>
        </j-transition-fade>
    </span>
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
