<template>
    <article id="time-action-limit">
        <doc-item name="TimedActionLimit:" tag="h2" no-dot no-padding>
            <p>限制单位时间内所能执行操作的次数。</p>
            <hr />
            <doc-item name="Args:" tag="h3">
                <li>
                    <high-lighter>timeout:Number</high-lighter>
                    动作等待时间，单位为ms。
                    <strong style="font-size: 1em">这个值是必须的</strong>
                </li>
                <li>
                    <high-lighter>limt:Number</high-lighter>
                    设定过热前可执行动作次数。
                    <high-lighter>default:1</high-lighter>
                </li>
                <li>
                    <high-lighter>waitCoolingDown:Boolean</high-lighter>
                    是否要求完全冷却后方可执行动作。如设定为‘true’时，在冷却完成前执行动作则会重置冷却时间。
                    <high-lighter>default:true</high-lighter>
                </li>
            </doc-item>

            <doc-item name="Methods:" tag="h3">
                <li>
                    <high-lighter>.action(callback)</high-lighter>
                    将需要执行的函数作为参数传入，即可对该函数进行单位时间执行次数限制。
                </li>
                <li>
                    <high-lighter>.setCooledAlarm(callback)</high-lighter>
                    通知外部程序已冷却完成。
                </li>
                <li>
                    <high-lighter> .setOverheatAlarm(callback) </high-lighter>
                    通知外部程序已过热。
                </li>
            </doc-item>
        </doc-item>

        <doc-item name="示例:" tag="h2" no-padding no-dote>
            <p>
                在下方 Demo 中限制为
                2s内可执行2次操作,你需要连续点击它来对比两种模式的差异
            </p>
            <hr />

            <j-control-bar for-id="demo-wcd-control">
                <template v-slot:text>
                    {{ wcd ? '阻塞式等待' : '动态等待' }}
                </template>
                <j-switch id="demo-wcd-control" v-model="wcd" />
            </j-control-bar>
            <demo-box title="TimedActionLimit" :code="code">
                <!-- Demo -->
                <div>
                    <!-- 冷却进度条 -->
                    <div
                        :class="coolDownProgressClass"
                        id="demo-cool-down-progress"
                        class="font-mono"
                    >
                        <j-row X="center">{{ text }}</j-row>
                    </div>
                    <!-- 点击示例 -->
                    <j-cube
                        id="demo-show-click-counter"
                        class="font-mono"
                        @click="click"
                        style="user-select: none"
                        :style="{ fontSize: clickCounter == 0 ? '1em' : '' }"
                    >
                        {{ clickCounter == 0 ? 'ClickMe!!' : clickCounter }}
                    </j-cube>
                </div>
            </demo-box>
        </doc-item>
    </article>
</template>
<script>
import { TimedActionLimit } from '@ui/tool/lib';
// const tal = new TimedActionLimit(2000, 2);
export default {
    name: 'the-tool-lib',
    data: () => {
        return {
            code: `//注意！code 示例为 demo 的简化版本
//JavaScript
let clickCounter = 0;
// 控制是否等待冷却完成
let wcd = true;
const tal = new TimedActionLimit(2000,2,wcl);

tal.setCooledAlarm(() => {
    alert('Cooled!')
    })
tal.setOverheatAlarm(() => {
    alert('Overheat!')
    })

function click() {
    tal.action(()=>{
        clickCounter++;
    })
}

//HTML
<body>
    <p onclick="click()">{{ clickCounter == 0? 'ClickMe!!':clickCounter }}</p>
</body>
      `,
            clickCounter: 0,
            overheat: false,
            text: 'Cooled!',
            wcd: true,
        };
    },
    mounted() {},
    watch: {
        overheat(v) {
            if (v) {
                setTimeout(() => {
                    this.overheat = false;
                    this.text = 'Cooling...';
                }, 1000);
            }
        },
    },
    methods: {
        click() {
            this.tal.action(() => {
                this.clickCounter++;
            });
        },
    },
    computed: {
        coolDownProgressClass() {
            return [
                this.overheat ? 'overheat' : '',
                !this.overheat && this.clickCounter > 1 ? 'cooling' : '',
            ];
        },
        tal() {
            let tal = new TimedActionLimit(2000, 2, this.wcd);
            tal.setCooledAlarm(() => {
                this.text = 'Cooled!';
            });
            tal.setOverheatAlarm(() => {
                this.overheat = true;
                this.text = 'Overheat!';
            });
            return tal;
        },
    },
};
</script>
<style>
#demo-show-click-counter {
    font-size: 48px;
}
#demo-cool-down-progress {
    background-color: var(--success);
    border-radius: var(--s-radius);
    display: inline-block;
    margin-bottom: 1em;
    color: white;
    padding: 5px;
    height: 1em;
    width: 90px;
}

#demo-cool-down-progress.overheat {
    transition: all 0.5s var(--ease-out);
    background-color: var(--error);
    width: 100%;
}

#demo-cool-down-progress.cooling {
    transition: background 0.2s var(--ease-out);
    animation: cooling 1s var(--ease-out);
}

@keyframes cooling {
    0% {
        background-color: var(--error);
        width: 100%;
    }
    80% {
        background-color: var(--warning);
    }
    100% {
        background-color: var(--success);
        width: 90px;
    }
}
</style>
