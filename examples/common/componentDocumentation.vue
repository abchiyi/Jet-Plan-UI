<script>
import { h } from 'vue';
import docProps from './componentDocumentationProps.vue';
export default {
    name: 'component-documentation',
    props: {
        component: {
            type: Object,
            required: true,
        },
        description: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {};
    },
    methods: {},
    computed: {
        parseProps() {
            function parseType(types) {
                let tempType = [];
                if (types instanceof Array) {
                    for (let key in types) {
                        let a = typeof types[key]();
                        tempType.push(a);
                    }
                    return tempType;
                } else {
                    return [typeof types()];
                }
            }
            function parseValidator(prop) {
                if (prop.validator !== undefined) {
                    try {
                        return prop.validator();
                    } catch (TypeError) {
                        return 'rangeUndefined';
                    }
                }
            }

            const PROPS = this.component.props;
            const TEMP_PROPS = {};
            for (let key in PROPS) {
                const prop = PROPS[key];
                TEMP_PROPS[key] = {};
                TEMP_PROPS[key].default = prop.default;
                TEMP_PROPS[key].type = parseType(prop.type);
                TEMP_PROPS[key].range = parseValidator(prop);
                TEMP_PROPS[key].required = Boolean(prop.required);
            }
            return TEMP_PROPS;
        },
    },
    render() {
        return h('div', {}, [
            h(docProps, {
                parseProps: this.parseProps,
                description: this.description,
            }),
        ]);
    },
};
</script>

<style>
</style>
