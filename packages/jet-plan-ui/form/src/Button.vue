<script>
import { h } from 'vue';
import { ActionFeedback } from '../../action-feedback';
import { autoTextColor } from '../../tool/lib';
export default {
    name: 'j-button',
    data() {
        return {
            value: false,
            maskSize: null,
            baseColor: '',
        };
    },
    mounted() {
        this.calcTextColor();
    },
    updated() {
        this.calcTextColor();
    },
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        text: {
            type: Boolean,
            default: false,
        },
        primary: {
            type: Boolean,
            default: false,
        },
        row: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            let classes = ['shape', 'j-button'];
            if (this.primary) classes.push('primary');
            if (this.disabled) classes.push('disabled');
            if (this.row) classes.push('row');
            classes.push(this.text ? 'text-button' : 'button');

            return classes;
        },
    },
    methods: {
        renderDefault() {
            let solt = this.$slots.default;
            if (solt) {
                return solt();
            }
            return 'Submit';
        },
        calcTextColor() {
            if (!this.text) {
                this.baseColor = autoTextColor(this.$refs.self.$el);
            }
        },
    },
    render() {
        return h(
            ActionFeedback,
            {
                class: this.classes,
                tag: 'button',
                active: true,
                ref: 'self',
                style: {
                    '--base-text-color': this.baseColor,
                },
            },
            {
                default: () => [this.renderDefault()],
            }
        );
    },
};
</script>
<style>
/*------------ Default ----------*/

/* a 标签启用下划线 */
a.j-button {
    text-decoration: underline;
}

.j-button {
    transition: all 0.3s var(--ease-out);
    background-color: var(--secondary);
    border-radius: var(--m-radius);
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    padding: 5px 10px;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: var(--base-text-color);
    cursor: pointer;
    font-size: 0.8rem;
    white-space: nowrap;
}

.j-button {
    /* margin: 0 0 0 2px; */
    margin: calc(1em * 0.15);
}
/*------------ disabled ----------*/
.j-button.disabled {
    color: var(--text-disabled);
    cursor: not-allowed;
}

/*------------ OneLine ----------*/
.j-button.row {
    margin-left: unset;
    margin-right: unset;
    display: block;
    width: 100%;
}
/* Button Mode Only*/
.j-button.button.primary {
    background-color: var(--primary);
}
/* Text Button */
/*------------ Default ----------*/
.j-button.text-button {
    background: unset;
    padding: 6px 8px;
}
/*------------ Primary ----------*/
.j-button.text-button.primary {
    color: var(--primary);
}
/* ------------ disabled ---------- */
.j-button.primary.disabled {
    background: var(--border);
}

.j-button.text-button.disabled {
    color: var(--text-disabled);
    background: unset;
}

/* p span */
span > .j-button.text-button,
p > .j-button.text-button {
    padding-top: unset;
    padding-bottom: unset;
}
</style>
