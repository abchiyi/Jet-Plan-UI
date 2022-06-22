<template>
    <div ref="self" :style="style" class="j-slider" @mousedown="trackStart">
        <div class="track" :class="classTrack">
            <div ref="thumb" class="thumb-shell">
                <div class="thumb"></div>
            </div>
        </div>
    </div>
</template>

<script>
const NAME = 'j-slider';
// import BaseAction from '../action-feedback/baseAction.vue';
import { getOffset } from '../tool/lib/dom';
// import { bubble as Bubble } from '../bubble';
export default {
    name: NAME,
    components: {
        // BaseAction,
        // Bubble,
    },
    data() {
        return {
            nowPosition: undefined,
            thumbSize: undefined,
            useTransition: true,
        };
    },
    methods: {
        trackStart(event) {
            document.addEventListener('mousemove', this.transitionOff);
            document.addEventListener('mousemove', this.trackMove);
            document.addEventListener('mouseup', this.trackEnd);
            this.transitionOn();
            this.updateValue(event);
        },
        trackMove(event) {
            this.transitionOff();
            this.updateValue(event);
        },
        trackEnd() {
            document.removeEventListener('mousemove', this.trackMove);
            document.removeEventListener('mouseup', this.trackEnd);
        },
        updateValue(event) {
            const elSize = getOffset(this.$refs.self);
            const thumbRadius = this.thumbSize.elWidth / 2;
            const nowPosition = event.pageX - elSize.x;
            const MAX = elSize.elWidth - thumbRadius;
            const MIN = thumbRadius;

            switch (true) {
                case nowPosition < MIN:
                    this.nowPosition = MIN;
                    break;
                case nowPosition > MAX:
                    this.nowPosition = MAX;
                    break;
                default:
                    this.nowPosition = nowPosition;
                    break;
            }
        },
        transitionOn() {
            this.useTransition = true;
        },
        transitionOff() {
            this.useTransition = false;
        },
    },
    computed: {
        style() {
            return {
                '--track-fill-width': this.nowPosition + 'px',
            };
        },
        classTrack() {
            return [!this.useTransition ? 'move' : ''];
        },
    },
    mounted() {
        this.thumbSize = getOffset(this.$refs.thumb);
        this.nowPosition = this.thumbSize.elWidth / 2;
    },
};
</script>

<style>
.j-slider {
    background-color: var(--border);
    border-radius: 0.5rem;
    position: relative;
    user-select: none;
    margin: 0.8rem 0;
    cursor: pointer;
    height: 0.5rem;
    width: 200px;
}
.track {
    background-color: var(--primary);
    width: var(--track-fill-width);
    border-radius: 0.5rem;
    pointer-events: none;
    user-select: none;
    height: 0.5rem;
}
.thumb-shell {
    right: calc(-100% + 0.5rem);
    position: relative;
    top: -0.25rem;
    height: 1rem;
    width: 1rem;
}
.thumb {
    border: solid 3.5px var(--foreground);
    background-color: var(--border);
    box-sizing: border-box;
    border-radius: 1rem;
    user-select: none;
    height: 1rem;
    width: 1rem;
}

/* 过渡动画 */
.track {
    transition: 0.4s var(--ease-out);
}
.track.move {
    transition: unset;
}
</style>
