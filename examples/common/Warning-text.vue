<template>
    <j-row Y="center" class="warning-text">
        <!-- <i style="font-size: 1.7rem" class="bi bi-exclamation-circle"></i> -->
        <span class="type-hints text-hint"> 注意! </span>
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
    background: var(--border-dark);
    min-height: 60px;
    padding-left: 0.5rem;
}

.warning-text:before {
    background-color: var(--warning);
    border-radius: 2em;
    width: 0.4em;
    height: 2em;
    content: ' ';
    margin: 0 0.3em;
}
.warning-text .type-hints {
    margin: auto 0.3em;
    width: 50px;
    font-size: 1rem;
}
</style>
