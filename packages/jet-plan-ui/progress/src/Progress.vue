<template>
    <div :class="classes" :style="styles">
        <svg v-if="ring" viewBox="0 0 160 160">
            <g stroke-width="20">
                <g class="background">
                    <circle cx="80" cy="80" r="80" stroke="none" />
                    <circle cx="80" cy="80" r="70" fill="none" />
                </g>
                <g class="progressbar" :stroke-dashoffset="percentageOfRing">
                    <circle cx="80" cy="80" r="80" stroke="none" />
                    <circle cx="80" cy="80" r="70" fill="none" />
                </g>
            </g>
        </svg>
    </div>
</template>

<script>
import { propInit, propInitBoolean } from '../../tool/lib';
export default {
    name: 'j-progress',
    props: {
        value: propInit([Number, String], 0),
        failed: propInitBoolean(false),
        pause: propInitBoolean(false),
        height: propInit(String, '8px'),
        ring: propInitBoolean(false),
    },
    computed: {
        // 计算输入数字绝对值,最大100
        percentage: function () {
            return Math.abs(this.value) > 100 ? 100 : Math.abs(this.value);
        },
        percentageOfRing() {
            return 440 - 4.4 * this.percentage;
        },
        styles: function () {
            let style = {};
            style['--percentage'] = this.percentage + '%';
            style['--height'] = this.height;
            return style;
        },
        classes: function () {
            let className = [this.ring ? 'circle' : 'progress'];

            // 控制是否显示完成的进度条
            className.push(this.percentage == 100 ? 'complete' : '');
            className.push(this.failed ? 'failed' : '');
            className.push(this.pause ? 'pause' : '');

            return className;
        },
    },
};
</script>

<style scoped>
.progress {
    --c1: #5fc2ff;
    --c2: #3498db;
    /* --height: 8px; */
}

/* 更小的进度条 */
.smal {
    --height: 4px;
}

.progress.pause {
    --c1: #ffca58;
    --c2: #ecb02c;
}

/* 基础圆角外形 */
.progress::before,
.progress::after,
.progress {
    height: var(--height);
    border-radius: calc(var(--height) / 2);
}

/* 预先绘制透明的伪类元素以便应用色彩过渡动画 */

.circle .progressbar,
.progress::before,
.progress::after {
    content: '';
    display: block;
    transition: 0.3s var(--ease-out);
}

/* 伪类元素未脱离文本流,其自身会被挤出主体框,使用位移移动到正确的位置 */
.progress::after {
    transform: translateY(calc(var(--height) * -1));
}

/* 进度条 */
.progress {
    margin: 5px 0;
    /* overflow: hidden; */
    background-color: var(--border);
}

/* 进度条滚动部分 */
.progress::before {
    background: linear-gradient(
        45deg,
        var(--c2) 33%,
        var(--c1) 34%,
        var(--c1) 59%,
        var(--c2) 60%
    );
    background-size: calc(var(--height) * 2) var(--height);
    display: block;
    animation: rolling 60s linear infinite;
    transition: 0.3s cubic-bezier(0.5, 0.5, 0, 1.2);
}
@keyframes rolling {
    100% {
        background-position: calc(var(--height) * 400);
    }
}

/* 暂停 */

.progress.pause::before {
    animation-play-state: paused;
}

.progress::after,
.progress::before {
    width: var(--percentage);
}

/* 状态遮罩 */
.progress.complete::after {
    background: var(--success);
}
.progress.failed::after {
    background: var(--error);
}

.circle {
    background: unset;
    transform: rotate(-90deg);
    display: inline-block;
    height: 1em;
    width: 1em;
}

.circle .background {
    stroke: var(--border);
    fill: none;
}

.circle .progressbar {
    /* stroke-dashoffset: var(--percentage-of-ring); */
    stroke-dasharray: 440;
    /* stroke-dashoffset: 220; */
    stroke-linecap: round;
    stroke: var(--info);
    fill: none;
}

.circle.complete .progressbar {
    stroke: var(--success);
}
.circle.failed .progressbar {
    stroke: var(--error);
}
.circle.pause .progressbar {
    stroke: var(--warning);
}
</style>

/* 进度条宽度默认为父元素的宽度,可手动指定宽度，可选择
大号还是小号进度条，使用failed控制显示失败的进度条
接受0~100的整数或浮点来设定进度条的位置 */
