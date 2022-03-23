<template>
	<div id="time-action-limit">
		<p>
			工具存放以下路径中
			<c-highlighter>tool/lib</c-highlighter>
		</p>
		<!--TimeActionLimit -->
		<article id="time-action-limit">
			<doc-item name="TimedActionLimit:" title-is="h2">
				<p>限制单位时间内所能执行操作的次数。</p>
				<doc-item name="Args:" title-is="h3">
					<li>
						<c-highlighter>timeout:Number</c-highlighter>
						动作等待时间，单位为ms。
						<strong style="font-size: 1em">这个值是必须的</strong>
					</li>
					<li>
						<c-highlighter>limt:Number</c-highlighter>
						设定过热前可执行动作次数。
						<c-highlighter>default:1</c-highlighter>
					</li>
					<li>
						<c-highlighter>waitCoolingDown:Boolean</c-highlighter>
						是否要求完全冷却后方可执行动作。如设定为‘true’时，在冷却完成前执行动作则会重置冷却时间。
						<c-highlighter>default:true</c-highlighter>
					</li>
				</doc-item>

				<doc-item name="methos:" title-is="h3">
					<li>
						<c-highlighter>.action(callback)</c-highlighter>
						将需要执行的函数作为参数传入，即可对该函数进行单位时间执行次数限制。
					</li>
					<li>
						<c-highlighter>.setCooledAlarm(callback)</c-highlighter>
						通知外部程序已冷却完成。
					</li>
					<li>
						<c-highlighter>
							.setOverheatAlarm(callback)
						</c-highlighter>
						通知外部程序已过热。
					</li>
				</doc-item>
				<template v-slot:use>
					<li>
						<!-- XXX 可能变更的包名  mousse-ui -->
						导入路径:
					</li>
					<j-code-box
						code="import { TimedActionLimit } from mousse-ui/tool/lib"
					/>
				</template>
			</doc-item>
			<p>在下方 Demo 中限制为 2s内可执行2次操作</p>
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
						:class="cooldownProgressClass"
						id="demo-cooldown-progress"
					>
						<j-row X="center">{{ text }}</j-row>
					</div>
					<!-- 点击示例 -->
					<j-cube
						id="demo-show-click-conter"
						@click="click"
						style="user-select: none"
						:style="{ fontSize: clickConter == 0 ? '1em' : '' }"
					>
						{{ clickConter == 0 ? 'ClickMe!!' : clickConter }}
					</j-cube>
				</div>
			</demo-box>
		</article>
	</div>
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
let clickConter = 0;
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
        clickConter++;
    })
}

//HTML
<body>
    <p onclick="click()">{{ clickConter == 0? 'ClickMe!!':clickConter }}</p>
</body>
      `,
				clickConter: 0,
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
					this.clickConter++;
				});
			},
		},
		computed: {
			cooldownProgressClass() {
				return [
					this.overheat ? 'overheat' : '',
					!this.overheat && this.clickConter > 1 ? 'cooling' : '',
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
	#demo-show-click-conter {
		font-family: SarasaMono;
		font-size: 48px;
	}
	#demo-cooldown-progress {
		background-color: var(--success);
		border-radius: var(--s-radius);
		font-family: SarasaMono;
		display: inline-block;
		margin-bottom: 1em;
		color: white;
		padding: 5px;
		height: 1em;
		width: 90px;
	}

	#demo-cooldown-progress.overheat {
		transition: all 0.5s var(--ease-out);
		background-color: var(--error);
		width: 100%;
	}

	#demo-cooldown-progress.cooling {
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
