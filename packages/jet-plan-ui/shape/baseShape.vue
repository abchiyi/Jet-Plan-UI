<script>
import { propInit, propInitBoolean } from '../tool/lib';
import { getOffset } from '../tool/lib/dom';
import { h } from 'vue';
const NAME = 'j-base-shape';
function checkAndSetTransition(el) {
    function getTransitionDuration(el) {
        return parseFloat(window.getComputedStyle(el).transitionDuration);
    }
    if (!getTransitionDuration(el)) {
        el.style.transition = '0.3s var(--ease-in-out)';
    }
}
export default {
    name: NAME,
    props: {
        border: propInit(String, '0'),
        round: propInitBoolean(false),
    },
    methods: {
        getSize() {
            const height = getOffset(this.$refs.self).size.height + 'px';
            this.dataHeight = height;
        },
        renderDefault() {
            if (this.$slots.default) {
                return this.$slots.default();
            }
        },
    },
    data() {
        return {
            dataHeight: 'unset',
        };
    },
    mounted() {
        if (this.round) this.getSize();
        this.$refs.self.addEventListener('transitionend', () => {
            this.getSize();
        });
        checkAndSetTransition(this.$refs.self);
    },
    updated() {
        checkAndSetTransition(this.$refs.self);
    },
    computed: {
        class() {
            return [NAME, this.round ? 'round' : ''];
        },
        style() {
            return {
                border:
                    this.border != 0
                        ? `${this.border}px solid var(--border)`
                        : '',
            };
        },
    },
    watch: {
        round(v) {
            if (v) this.getSize();
        },
    },
    render() {
        return h(
            'div',
            {
                class: this.class,
                style: this.style,
                ref: 'self',
            },
            [this.renderDefault()]
        );
    },
};
</script>

<style>
.j-base-shape.round {
    border-radius: v-bind(dataHeight);
}
</style>
