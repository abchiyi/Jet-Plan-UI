<script>
import { h } from 'vue';
function handleType(type) {
    if (type.length > 1) {
        return type.toString().replace(/,/g, ' | ');
    }
    return type[0];
}
function handleRange(range) {
    if (range) {
        return range.toString().replace(/,/g, ' | ');
    }
    return 'None';
}
export default {
    props: {
        parseProps: {
            type: Object,
            required: true,
        },
    },
    methods: {
        renderTitle() {
            return [h('h2', null, ['Props:']), h('hr')];
        },
        renderProps() {
            const props = Object.keys(this.parseProps).map((key) => {
                const prop = this.parseProps[key];
                return h('li', null, [
                    // Name
                    h('strong', null, key + ':'),
                    // Type
                    h('p', null, `Type - ${handleType(prop.type)}`),
                    // Required
                    prop.required ? h('p', null, `Required: True`) : '',
                    // Range
                    prop.range
                        ? h('p', null, `Range - ${handleRange(prop.range)}`)
                        : '',
                ]);
            });

            return h('ul', null, props);
        },
    },
    render() {
        return h(
            'div',
            {
                class: ['doc'],
            },
            [...this.renderTitle(), this.renderProps()]
        );
    },
};
</script>

<style>
.doc ul > li {
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
