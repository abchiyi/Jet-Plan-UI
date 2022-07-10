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
        titleTagProps: {
            type: String,
            default: 'h2',
        },
    },
    data() {
        return {};
    },
    methods: {
        renderPropsTitle() {
            return [h(this.titleTagProps, null, ['Props:']), h('hr')];
        },
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
                return prop.validator();
            }

            try {
                const PROPS = this.component.props;
                const TEMP_PROPS = {};
                for (let key in PROPS) {
                    const prop = PROPS[key];
                    TEMP_PROPS[key] = {};
                    TEMP_PROPS[key].default = prop.default;
                    TEMP_PROPS[key].type = parseType(prop.type);
                    try {
                        TEMP_PROPS[key].range = parseValidator(prop);
                    } catch (error) {
                        if (typeof prop.validator == 'function') {
                            console.warn(
                                `Prop:${key} - validator need back value`
                            );
                        }
                    }
                    TEMP_PROPS[key].required = Boolean(prop.required);
                }
                return TEMP_PROPS;
            } catch (error) {
                return {};
            }
        },
    },
    render() {
        return h('div', {}, [
            this.renderPropsTitle(),
            h(docProps, {
                parseProps: this.parseProps(),
                description: this.description,
            }),
        ]);
    },
};
</script>

<style>
</style>
