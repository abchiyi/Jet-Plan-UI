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
        function getTransitionDuration(el) {
            return parseFloat(window.getComputedStyle(el).transitionDuration);
        }
        function checkAndSetTransition(el) {
            if (!getTransitionDuration(el)) {
                el.style.transition = '0.1s ease-in-out';
            }
        }
        let el = this.$refs.self.$el;
        el.addEventListener('transitionend', () => {
            checkAndSetTransition(el);
            this.calcTextColor();
        });
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
    background-color: var(--border-light);
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
    white-space: nowrap;
    box-shadow: var(--shadow);
}

.j-button {
    margin: calc(1em * 0.15);
}

/* p span */
span > .j-button.text-button,
p > .j-button.text-button {
    padding-top: unset;
    padding-bottom: unset;
}

/*------------ active ----------*/
.j-button.active {
    box-shadow: unset;
}

/*------------ OneLine ----------*/
.j-button.row {
    margin-left: unset;
    margin-right: unset;
    display: block;
    width: 100%;
}

/* Text Button */
/*------------ Default ----------*/
.j-button.text-button {
    background: unset;
    padding: 6px 8px;
}

/*------------ Primary ----------*/
.j-button.primary {
    background-color: var(--primary);
}
.j-button.text-button.primary {
    color: var(--primary);
    background: unset;
}

/*------------ disabled ----------*/
.j-button.disabled {
    background-color: var(--border-light);
    color: var(--text-disabled);
    cursor: not-allowed;
}
.j-button.text-button.disabled {
    color: var(--text-disabled);
    background: unset;
}
</style>
