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
    name: 'component-documentation-doc',
    props: {
        parseProps: {
            type: Object,
            required: true,
        },
        description: {
            type: Object,
            required: true,
        },
    },
    methods: {
        renderProps() {
            function handleTypeStyle(value) {
                switch (typeof value) {
                    case 'string':
                        return `"${value}"`;
                    default:
                        return value;
                }
            }

            function elP(content) {
                return h('p', null, content);
            }
            const props = Object.keys(this.parseProps).map((key) => {
                const prop = this.parseProps[key];
                const description = this.description.props[key];
                if (!description) {
                    console.warn(`Prop :'${key}' - need description`);
                }
                return h('li', null, [
                    h('strong', null, key + ':'),
                    elP(`Type - ${handleType(prop.type)}`),
                    prop.required ? elP('Required: True') : '',
                    prop.range ? elP(`Range - ${handleRange(prop.range)}`) : '',
                    prop.default != undefined
                        ? elP(`Default - ${handleTypeStyle(prop.default)}`)
                        : '',
                    description ? elP(description) : '',
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
            [this.renderProps()]
        );
    },
};
</script>

<style>
.doc ul > li {
    margin-top: 1.8em;
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
