<script>
import { h } from 'vue';
import { propInit } from '@ui/tool/lib';
import docProps from './componentDocumentationProps.vue';

function defaultData() {
    return {
        props: {},
    };
}

export default {
    name: 'component-documentation',
    props: {
        component: propInit(Object, defaultData(), null, true),
        description: propInit(Object, defaultData(), null, true),

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
            function parseType(PROP) {
                const types = PROP.type;
                if (types) {
                    return types instanceof Array
                        ? types.map((type) => {
                              switch (type) {
                                  case undefined:
                                      return 'undefined';
                                  default:
                                      return typeof type();
                              }
                          })
                        : [typeof PROP.type()];
                }
                return [];
            }

            function ifValue(newObj, value, key) {
                if (value != undefined) {
                    newObj[key] = value;
                }
            }

            return Object.keys(this.component.props).map((propName) => {
                function parseValidator(prop) {
                    if (prop.validator) {
                        try {
                            return prop.validator();
                        } catch (error) {
                            console.warn(
                                `Prop:${propName} - validator need back value`
                            );
                        }
                    }
                }

                function getDescription(description) {
                    const _description = description.props[propName];
                    if (_description) {
                        return _description;
                    }
                    console.warn(`Prop :'${propName}' - need description`);
                }

                function getDefaultValue() {
                    if (
                        Object.keys(PROP).indexOf('default') !== -1 &&
                        PROP.default == undefined
                    ) {
                        return 'undefined';
                    }
                    return PROP.default;
                }

                const PROP = this.component.props[propName];
                const TEMP_PROP = {};
                TEMP_PROP.name = propName;
                ifValue(TEMP_PROP, getDefaultValue(PROP), 'default');
                ifValue(TEMP_PROP, parseType(PROP), 'type');
                ifValue(TEMP_PROP, PROP.required, 'required');
                ifValue(TEMP_PROP, parseValidator(PROP), 'range');
                ifValue(
                    TEMP_PROP,
                    getDescription(this.description),
                    'description'
                );

                return TEMP_PROP;
            });
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
