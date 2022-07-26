<template>
    <code class="high-lighter font-mono">
        <slot>inline code</slot>
    </code>
</template>

<script>
export default {
    name: 'high-lighter',
};
</script>

<style>
code.high-lighter {
    background-color: var(--border-dark);
    border-radius: var(--s-radius);
    color: var(--text-light);
    display: inline-block;
    padding: 0 6px;
}

.high-lighter + .high-lighter {
    margin-left: 5px;
}
</style>
