<template>
    <div :class="classes"></div>
</template>

<script>
const NAME = 'j-alert';
export default {
    name: NAME,
    computed: {
        classes() {
            return [NAME];
        },
    },
};
</script>

<style>
</style>
