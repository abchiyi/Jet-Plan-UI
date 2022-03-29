<template>
  <div id="the-demo-progressbar">
    <doc-item id="describes" title-is="h2" name="进度条:">
      <li><p>用于展示加载进度</p></li>
    </doc-item>
    <hr />
    <div id="doc">
      <doc-item title-is="h2" name="<j-progress>:">
        <li>
          <doc-item name="Props:">
            <li id="prop-value">
              <p>
                <high-lighter>value</high-lighter>
                :type - String|Number, default - 0, range - 0 ~ 100
              </p>
              <p>控制进度条百分比</p>
            </li>
            <li id="prop-failed">
              <p>
                <high-lighter>failed</high-lighter>
                : type - Boolean, default - false
              </p>
              <p>切换进度条为失败状态</p>
            </li>
            <li id="prop-height">
              <p>
                <high-lighter>height</high-lighter>
                : type - String, default - "8px"
              </p>
              <p>控制状态栏行高</p>
            </li>
          </doc-item>
        </li>
      </doc-item>
    </div>
    <j-control-bar for-id="demo-progress-to-susccess">
      <template v-slot:text>完成进度条</template>
      <j-switch id="demo-progress-to-susccess" v-model="success" />
    </j-control-bar>
    <j-control-bar for-id="demo-progress-to-failed">
      <template v-slot:text>失败进度条</template>
      <j-switch id="demo-progress-to-failed" v-model="failed" />
    </j-control-bar>
    <demo-box title="<j-progress>" :code="code" :expand="true">
      <div id="demo-content">
        <j-progress :failed="failed" :value="number"></j-progress>
      </div>
    </demo-box>
  </div>
</template>

<script>
import pdn from '../../common/mix/popDemoName';
export default {
  mixins: [pdn],
  name: 'the-demo-progress',
  data() {
    return {
      code: `
//javascript
let value = 50;
let filed = false;

// HTML
<j-control-bar for-id="demo-progress-to-susccess">
    <template v-slot:text>完成进度条</template>
        <j-switch
            id="demo-progress-to-susccess"
            v-model="success"
        />
</j-control-bar>
<j-control-bar for-id="demo-progress-to-failed">
    <template v-slot:text>失败进度条</template>
        <j-switch
            id="demo-progress-to-failed"
            v-model="failed"
        />
</j-control-bar>
<div id="demo-content">
    <j-progress
        :failed="failed"
        :value="number"
    ></j-progress>
</div>
                `,
      intervalID: null,
      success: false,
      failed: false,
      number: 50,
    };
  },
  watch: {
    success() {
      if (this.success) {
        this.intervalID = setInterval(() => {
          this.number++;
        }, 100);
      } else {
        this.number = 50;
        clearInterval(this.intervalID);
      }
    },
    number() {
      if (this.number > 100) {
        clearInterval(this.intervalID);
      }
    },
  },
};
</script>
