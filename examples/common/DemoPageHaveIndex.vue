<template>
    <div class="demo-page-have-index">
        <ul class="container">
            <li
                class="item"
                :class="[
                    $route.path == item.href && item.index.length
                        ? 'expand'
                        : '',
                ]"
                v-for="item in paths"
                :key="item"
            >
                <!-- Link -->
                <router-link-a
                    style="padding-left: 1.5rem; margin: unset"
                    :href="item.href"
                    focus
                >
                    {{ item.name }}
                </router-link-a>
                <!-- Index -->
                <j-transition-folded>
                    <div
                        class="page-index"
                        v-show="$route.path == item.href && item.index.length"
                    >
                        <j-button
                            style="padding-left: 2.5rem"
                            v-for="i in item.index"
                            :key="i"
                            active
                            focus
                            hover
                            text
                            row
                            @click="goAnchor(i.to)"
                        >
                            {{ i.name }}
                        </j-button>
                    </div>
                </j-transition-folded>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'demo-page-have-index',
    data() {
        return {
            path: undefined,
        };
    },
    props: {
        paths: Object,
    },
    methods: {
        goAnchor(id) {
            this.$router.push(id);
        },
    },
};
</script>
<style scoped>
.item {
    overflow: hidden;
    padding: 5px;
}
.item::marker {
    color: #00000000;
    list-style: unset;
    font-size: 0;
}
.item *,
.item {
    text-align: start;
}
.item.expand {
    border-radius: var(--m-radius);
    background: var(--page-background);
}

#links,
.container {
    padding: unset;
}

.router-link-a + .page-index {
    margin-top: 5px;
}
</style>
