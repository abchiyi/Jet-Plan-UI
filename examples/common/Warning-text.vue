<template>
    <j-row Y="center" class="warning-text">
        <!-- <i style="font-size: 1.7rem" class="bi bi-exclamation-circle"></i> -->
        <span> 注意! </span>
        <span class="text">
            <slot></slot>
        </span>
    </j-row>
</template>

<script>
export default {
    name: 'warning-text',
};
</script>

<style>
.warning-text {
    border-radius: var(--m-radius);
    background: var(--secondary);
    min-height: 60px;
}

.warning-text:before {
    background-color: var(--warning);
    border-radius: 2em;
    width: 0.4em;
    height: 2em;
    content: ' ';
    margin: 0 0.3em;
}
</style>
