
<template>
    <j-row style="display: inline-block">
        <base-action
            @hover_from="_showBubble"
            @hover_to="hiddenBubble"
            :class="classes"
            ref="self"
            v-re-screen-size="autoCheckPosition"
        >
            <j-row X="center" Y="center">
                <slot></slot>
                <transition-slide v-bind="positionMach.transitionSlide">
                    <div
                        v-show="showBubble"
                        :class="bubbleClasses"
                        class="font-mono"
                        ref="bubble"
                        tag="div"
                        v-shadow:bottom="4"
                    >
                        {{ message }}
                    </div>
                </transition-slide>
            </j-row>
        </base-action>
    </j-row>
</template>

<script>
import baseAction from '../action-feedback/baseAction.vue';
import { Row as JRow } from '../gird/index';
import { Shadow, ReScreenSize } from '../tool/directives';
import { TransitionSlide } from '../animations';
import { TimedActionLimit } from '../tool/lib';
import { getOffset } from '../tool/lib/dom';
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

        show: {
            type: [Boolean, undefined],
            default: undefined,
        },
    },
    computed: {
        classes() {
            return [Name];
        },
        bubbleClasses() {
            return [
                'bubble',
                this.positionMach.bubblePosition,
                this.positionMach.start,
            ];
        },
        positionMach() {
            let rr = this.newPosition.split('-');
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
            return {
                start: rr[1],
                bubblePosition: rr[0],
                transitionSlide: {
                    position: reverse(rr[0]),
                },
            };
        },
    },

    data() {
        return {
            showBubble: false,
            showBubbleNow: false,
            nearEdgeOfScreen: undefined,
            newPosition: this.position,
        };
    },
    methods: {
        _showBubble(event) {
            if (this.show != undefined) return;
            this.autoCheckPosition(event.event.target);
            this.edgeAvoidance();
            talEnter.action(() => {});
            this.showBubbleNow = true;
            talEnter.setCooledAlarm(() => {
                this.showBubble = this.showBubbleNow;
            });
        },
        hiddenBubble() {
            if (this.show != undefined) return;
            talOut.action(() => {});
            this.showBubbleNow = false;
            talOut.setCooledAlarm(() => {
                this.showBubble = this.showBubbleNow;
            });
        },
        autoCheckPosition(el, screenSize) {
            const marginMax = 50;
            let elSize = getOffset(el);
            screenSize = screenSize ? screenSize : ReScreenSize.reSize();
            this.nearEdgeOfScreen = {
                top: elSize.size.top <= marginMax,
                left: elSize.size.left <= marginMax,
                right: screenSize.width - elSize.size.right <= marginMax,
                bottom: screenSize.height - elSize.size.bottom <= marginMax,
            };
        },
        edgeAvoidance() {
            let rr = this.position.split('-');
            let position = rr[0];
            let start = rr[1];
            function xStartTo(nearEdgeOfScreen) {
                if (nearEdgeOfScreen.left) {
                    return nearEdgeOfScreen.right ? '' : 'start';
                } else if (nearEdgeOfScreen.right) {
                    return 'end';
                } else if (nearEdgeOfScreen.top) {
                    position = 'bottom';
                    return '';
                }
                return start;
            }
            switch (position) {
                case 'top':
                    start = xStartTo(this.nearEdgeOfScreen);
                    if (this.nearEdgeOfScreen.top) position = 'bottom';
                    break;
                case 'bottom':
                    start = xStartTo(this.nearEdgeOfScreen);
                    if (this.nearEdgeOfScreen.bottom) position = 'top';
                    break;
                case 'left':
                    if (this.nearEdgeOfScreen.left) position = 'right';
                    break;
                case 'right':
                    if (this.nearEdgeOfScreen.right) position = 'left';
                    break;
                default:
                    break;
            }
            this.newPosition = `${position}${start ? '-' : ''}${
                start ? start : ''
            }`;
        },
    },
    directives: {
        Shadow,
        ReScreenSize,
    },
    watch: {
        show(v) {
            this.showBubble = v;
        },
    },
};
</script>

<style>
.j-bubble {
    display: inline-block;
    position: relative;
}

.j-bubble .bubble {
    transition: all 0.3s var(--ease-out);
    background-color: var(--secondary);
    border-radius: var(--m-radius);
    color: var(--base-text-color);
    box-sizing: border-box;
    display: inline-block;
    padding: 5px 10px;
    user-select: none;
    font-size: 0.8rem;
    white-space: nowrap;
    position: absolute;
    z-index: 1;
}

.j-bubble .bottom.start,
.j-bubble .top.start {
    left: 0;
}
.j-bubble .bottom.end,
.j-bubble .top.end {
    right: 0;
}

.j-bubble .top {
    bottom: 100%;
    margin-bottom: 5px;
}
.j-bubble .bottom {
    top: 100%;
    margin-top: 5px;
}

.j-bubble .right.top,
.j-bubble .left.top {
    top: 0;
    bottom: unset;
}

.j-bubble .right.bottom,
.j-bubble .left.bottom {
    bottom: 0;
    top: unset;
}

.j-bubble .right {
    left: 100%;
    margin-left: 5px;
}

.j-bubble .left {
    right: 100%;
    margin-right: 5px;
}

.j-bubble .right.j-transition-slide-enter-from,
.j-bubble .right.j-transition-slide-leave-active {
    transform: translate3d(-40px, 0, 0);
}
.j-bubble .left.j-transition-slide-enter-from,
.j-bubble .left.j-transition-slide-leave-active {
    transform: translate3d(40px, 0, 0);
}
</style>
