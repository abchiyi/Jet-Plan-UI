
<template>
    <base-action
        @hover_from="_showBubble"
        @hover_to="hiddenBubble"
        :class="classes"
    >
        <slot></slot>
        <transition-slide v-bind="positionMach.transitionSlide">
            <j-row X="start" :class="bubbleClasses" v-show="showBubble">
                <j-button tag="div" v-shadow:bottom="4">
                    {{ message }}
                </j-button>
            </j-row>
        </transition-slide>
    </base-action>
</template>

<script>
import baseAction from '../action-feedback/baseAction.vue';
import { Row as JRow } from '../gird/index';
import { Shadow } from '../tool/directives';
import { TransitionSlide } from '../animations';
import { TimedActionLimit } from '../tool/lib';
const talEnter = new TimedActionLimit(400, 1);
const talOut = new TimedActionLimit(50, 1);
const Name = 'j-bubble';
export default {
    name: Name,
    components: {
        TransitionSlide,
        baseAction,
        JRow,
    },
    props: {
        message: {
            required: true,
        },
        position: {
            type: String,
            required: true,
            validator: (v) => {
                return (
                    [
                        'top',
                        'top-end',
                        'top-start',
                        'bottom',
                        'bottom-end',
                        'bottom-start',
                        'left',
                        'left-top',
                        'left-bottom',
                        'right',
                        'right-top',
                        'right-bottom',
                    ].indexOf(v) !== -1
                );
            },
        },
    },
    computed: {
        classes() {
            return [Name];
        },
        bubbleClasses() {
            return ['bubble', this.positionMach.bubblePosition];
        },
        positionMach() {
            let rr = this.position.split('-');
            function reverse(str) {
                // 设置参数以呈现元素从父元素中出现，而不是从外部飞入
                switch (str) {
                    case 'top':
                        return 'bottom';
                    case 'bottom':
                        return 'top';
                    case 'left':
                        return 'right';
                    case 'right':
                        return 'left';
                    default:
                        break;
                }
            }
            function calcXY(position, start) {
                if (['top', 'bottom'].indexOf(position) != -1) {
                    return start ? { X: start } : { X: 'center' };
                } else {
                    return start ? { Y: start } : { Y: 'center' };
                }
            }
            return {
                bubblePosition: rr[0],
                transitionSlide: {
                    position: reverse(rr[0]),
                    ...calcXY(rr[0], rr[1]),
                },
            };
        },
    },

    data() {
        return {
            showBubble: false,
            showBubbleNow: false,
        };
    },
    methods: {
        _showBubble() {
            tal.action(() => {});
            this.showBubbleNow = true;
            tal.setCooledAlarm(() => {
                this.showBubble = this.showBubbleNow;
            });
        },
        hiddenBubble() {
            talOut.action(() => {});
            this.showBubbleNow = false;
            talOut.setCooledAlarm(() => {
                this.showBubble = this.showBubbleNow;
            });
        },
    },
    directives: {
        Shadow,
    },
};
</script>

<style>
.j-bubble {
    display: inline-block;
    position: relative;
}

.j-bubble .bubble {
    position: absolute;
}

.j-bubble .bottom,
.j-bubble .top {
    left: 0;
    right: 0;
}

.j-bubble .left,
.j-bubble .right {
    top: 0;
    bottom: 0;
}

.j-bubble .top {
    bottom: 100%;
    margin-bottom: 5px;
}
.j-bubble .bottom {
    top: 100%;
    margin-top: 5px;
}
.j-bubble .left {
    right: 100%;
    margin-right: 5px;
}
.j-bubble .right {
    left: 100%;
    margin-left: 5px;
}
</style>
