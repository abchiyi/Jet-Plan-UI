<template>
    <div>
        <h3>Input</h3>
        <demo-box title="input" :code="code">
            <j-input aria-label="demo-input" v-model="value" />
            <p>
                <strong>
                    {{ value }}
                </strong>
            </p>
        </demo-box>
    </div>
</template>
<script>
export default {
    name: 'the-demo-input',
    data: () => {
        return {
            code: `<j-input />`,
            value: 'Abc123',
        };
    },
};
</script>
<style></style>
