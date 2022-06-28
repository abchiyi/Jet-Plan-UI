<template>
    <div :class="classes">
        <component :is="titleIs">
            {{ name }}
        </component>
        <slot name="title"></slot>
        <ul>
            <slot>
                <li style="color: var(--error)"><strong>Empty !</strong></li>
            </slot>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'doc-item',
    props: {
        name: {
            type: String,
            //   required: true,
        },
        titleIs: {
            type: String,
            default: 'strong',
        },
        noDot: {
            type: Boolean,
            default: false,
        },
        noPadding: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return [
                'doc',
                this.noDot ? 'no-dot' : '',
                this.noPadding ? 'no-padding' : '',
            ];
        },
    },
};
</script>

<style>
.doc > ul > li {
    margin-top: 1em;
}

.doc li::marker {
    margin: unset;
}

.doc.no-dot > ol,
.doc.no-dot > ul {
    list-style-type: none;
}

.doc.no-padding > ol,
.doc.no-padding > ul {
    padding-left: unset;
}

.doc {
    margin-top: 3em;
    margin-bottom: 20px;
}
</style>
