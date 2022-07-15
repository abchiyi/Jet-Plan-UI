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

            function elP(content, if_v) {
                if (if_v) {
                    return h('p', null, content);
                }
            }

            return h(
                'ul',
                null,
                this.parseProps.map((prop) => {
                    function description(description) {
                        return h('p', { class: ['font-mono'] }, description);
                    }
                    return [
                        h('strong', null, prop.name + ':'),
                        elP(
                            `Type - ${handleType(prop.type)}`,
                            prop.type.length
                        ),
                        elP('Required: True', prop.required),
                        elP(`Range - ${handleRange(prop.range)}`, prop.range),
                        elP(
                            `Default - ${handleTypeStyle(prop.default)}`,
                            prop.default
                        ),
                        description(),
                    ];
                })
            );
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
