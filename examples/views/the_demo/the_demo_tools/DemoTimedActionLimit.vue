<template>
    <article id="time-action-limit">
        <h2>Class TimedActionLimit:</h2>
        <p>限制单位时间内所能执行操作的次数。</p>
        <hr />

        <doc-item name="示例:" tag="h3" no-padding no-dote>
            <p>
                在下方 Demo 中限制为
                2s内可执行2次操作,你需要连续点击它来对比两种模式的差异
            </p>

            <j-control-bar for-id="demo-wcd-control">
                <template v-slot:text>
                    {{ wcd ? '阻塞式等待' : '非阻塞式等待' }}
                </template>
                <j-switch id="demo-wcd-control" v-model="wcd" />
            </j-control-bar>
            <demo-box title="TimedActionLimit">
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
            <demo-box
                title="Js"
                code="

import { TimedActionLimit } from 'jet-plan-ui/tool/lib'
export default{
    data(){
        return {
            wcd:true, // 控制是否等待冷却完成
            clickCounter:0 //点击计数
            tal: new TimedActionLimit(2000,2, this.wcd)
        }
    },
    mounted(){
        this.tal.setCooledAlarm(() => {
            alert('Cooled!')
            })
        this.tal.setOverheatAlarm(() => {
            alert('Overheat!')
            })
    },
    methods:{
        click() {
            tal.action(()=>{this.clickCounter++})
        }
    }
}

"
            />
            <demo-box
                title="Html"
                code='
<body>
    <p onclick="click()">
        {{ clickCounter == 0 ? "ClickMe!!" : clickCounter }}
    </p>
</body>
            '
            />
        </doc-item>

        <h3>详解:</h3>
        <p>TimedActionLimit([ timeout, limit, [waitCoolingDown] ])</p>
        <doc-item name="Args:" tag="h4">
            <ul>
                <li>
                    <p><strong>timeout:</strong></p>
                    <p>type - number</p>
                    到达执行限制次数后的等待时间，单位/ms
                </li>
                <li>
                    <p><strong>limit:</strong></p>
                    <p>type - number</p>
                    <p>default - 1</p>
                    <p>限制可执行次数</p>
                </li>
                <li>
                    <p><strong>waitCoolingDown:</strong></p>
                    <p>type - boolean</p>
                    <p>default - true</p>
                    <p>
                        为 true 时每执行一次将刷新等待时间， 为 false
                        时仅第一次执行刷新等待时间。
                    </p>
                </li>
            </ul>
        </doc-item>

        <doc-item name="Methods:" tag="h4">
            <ul>
                <li>
                    <p><strong>.action(callback):</strong></p>
                    <p>
                        将需要执行的函数作为参数传入，即可对该函数进行单位时间执行次数限制。
                    </p>
                </li>
                <li>
                    <p><strong>.setCooledAlarm(callback):</strong></p>
                    <p>设置等待时间结束时将会被执行的回调函数。</p>
                </li>
                <li>
                    <p><strong>.setOverheatAlarm(callback):</strong></p>
                    <p>设置到达执行限制次数后被执行的回调函数。</p>
                </li>
            </ul>
        </doc-item>
    </article>
</template>
<script>
import { TimedActionLimit } from '@ui/tool/lib';
export default {
    name: 'the-tool-lib',
    data: () => {
        return {
            clickCounter: 0,
            overheat: false,
            text: 'Cooled!',
            wcd: true,
        };
    },
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
