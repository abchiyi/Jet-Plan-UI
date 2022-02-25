<template>
  <div id="too-lib">
    <p>
      工具存放以下路径中
      <inline-code>tool/lib</inline-code>
    </p>
    <!--TimeActionLimit -->
    <article id='time-action-limit'>
      <h2>Class
        <inline-code class="">TimedActionLimit</inline-code>
      </h2>

      <p>
        <inline-code>TimedActionLimit</inline-code> 作用为限制单位时间内所能执行操作的次数。
      </p>
      <p>在下方 Demo 中限制为 2s内可执行2次操作</p>
      <!-- Demo box -->
      <demo-box
        title='TimedActionLimit'
        :code='code'
      >
        <!-- control -->
        <template v-slot:header>
          <m-control-bar for-id="demo-wcd-control">
            <template v-slot:text>
              {{wcd?'阻塞式等待':'动态等待'}}
            </template>
            <template v-slot:control>
              <m-switch
                id="demo-wcd-control"
                v-model="wcd"
              />
            </template>
          </m-control-bar>
        </template>

        <!-- Demo -->
        <div>
          <!-- 冷却进度条 -->
          <div
            :class="cooldownProgressClass"
            id="demo-cooldown-progress"
          >
            <m-row X="center">{{text}}</m-row>
          </div>
          <!-- 点击示例 -->
          <m-cube
            id="demo-show-click-conter"
            @click="click"
            style="user-select:none"
            :style="{fontSize:clickConter==0?'1em':''}"
          >
            {{ clickConter == 0? 'ClickMe!!':clickConter}}
          </m-cube>
        </div>
      </demo-box>
      <doc-of-class></doc-of-class>
    </article>
  </div>
</template>
<script>
import inlineCode from '../../../common/inlineCode.vue';
import { TimedActionLimit } from '@/tool/lib'
// const tal = new TimedActionLimit(2000, 2);
export default {
  components: { inlineCode },
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
      text: "Cooled!",
      wcd: true,
    }
  },
  mounted () {

  },
  watch: {
    overheat (v) {
      if (v) {
        setTimeout(() => {
          this.overheat = false
          this.text = 'Cooling...'
        }, 1000)
      }
    }
  },
  methods: {
    click () {
      this.tal.action(() => {
        this.clickConter++
      })
    }
  },
  computed: {
    cooldownProgressClass () {
      return [
        this.overheat ? 'overheat' : '',
        !this.overheat && this.clickConter > 1 ? 'cooling' : ''
      ]
    },
    tal () {
      let tal = new TimedActionLimit(2000, 2, this.wcd)
      tal.setCooledAlarm(
        () => {
          this.text = 'Cooled!'
        }
      )
      tal.setOverheatAlarm(
        () => {
          this.overheat = true
          this.text = 'Overheat!'
        }
      )
      return tal
    }
  }
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
