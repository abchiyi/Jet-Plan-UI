<template>
    <div class="no-theme-control" v-if="!$jetTheme">没有设置主题控制器!</div>
    <div class="no-theme-control no-theme" v-if="noTheme">
        没有加载任何主题!
    </div>
    <j-row warp v-if="$jetTheme" class="all-theme">
        <div v-for="key in Object.keys($jetTheme.allThemes)" :key="key">
            <theme-cube
                @click="$emit('setTheme', key)"
                :theme="$jetTheme.allThemes[key]"
                :name="key"
            />
        </div>
    </j-row>
</template>

<script>
import themeCube from './themem-cube.vue';
export default {
    name: 'j-all-theme',
    components: {
        themeCube,
    },
    emits: ['setTheme'],
    computed: {
        noTheme() {
            try {
                return !this.$jetTheme.theme;
            } catch (error) {
                return true;
            }
        },
    },
};
</script>

<style>
.all-theme {
    background: var(--foreground);
    border-radius: 8px;
    padding: 20px;
    padding-bottom: 5px;
}

.no-theme-control {
    animation: waring-flicker 1.5s ease-in-out infinite;
    background-color: rgb(255, 90, 40);
    text-align: center;
    padding: 10px 40px;
    border-radius: 8px;
    color: #fff;
    font-size: 2rem;
}

.no-theme {
    background-color: rgb(255, 181, 53);
}

@keyframes waring-flicker {
    0% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0.5;
    }
}
</style>
