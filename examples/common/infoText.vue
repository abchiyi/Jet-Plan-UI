<template>
    <j-row Y="center" class="warning-text">
        <!-- <i style="font-size: 1.7rem" class="bi bi-exclamation-circle"></i> -->
        <span class="type-hints text-hint"> 提示： </span>
        <span class="text">
            <slot></slot>
        </span>
    </j-row>
</template>

<script>
export default {
    name: 'info-text',
};
</script>

<style>
</style>
