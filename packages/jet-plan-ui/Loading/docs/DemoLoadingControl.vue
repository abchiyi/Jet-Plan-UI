<template>
  <div class="demo">
    <slot
      :mode="mode"
      :font-size="fontSize + 'px'"
      :value="Number(value)"
      :diameter="Number(diameter)"
      :lineWidth="Number(lineWidth)"
      :loading="loading"
    ></slot>
  </div>
  <div class="demo control padding">
    <p class="sub-title">Value</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Value {{ (value * 100).toFixed(0) }}%</p>
        <Range>
          <input type="range" min="0" max="1" step="0.001" v-model="value" />
        </Range>
      </ActionLabel>
    </Row>

    <p class="sub-title">diameter 直径</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Diameter {{ diameter }}</p>
        <Range>
          <input id="loading-dimeter" min="1" v-model="diameter" type="range" />
        </Range>
      </ActionLabel>
    </Row>

    <p class="sub-title">LineWidth 线宽</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">LineWidth {{ lineWidth }}</p>
        <Range>
          <input
            id="loading-line-width"
            v-model="lineWidth"
            type="range"
            min="1"
          />
        </Range>
      </ActionLabel>
    </Row>

    <p class="sub-title">Loading mode</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p class="sub-text">Loading mode {{ loading ? "on" : "off" }}</p>
        <Switch><input type="checkbox" v-model="loading" /></Switch>
      </ActionLabel>
    </Row>

    <p class="sub-title">Size</p>
    <Row Y="center" spaceMode="between">
      <ActionLabel :active="false">
        <p class="sub-text">Size {{ fontSize }}px</p>
        <Range>
          <input type="range" min="1" max="200" v-model="fontSize" />
        </Range>
      </ActionLabel>
    </Row>

    <p><span>Loading Style</span></p>
    <Row y="center" space-mode="between">
      <ActionLabel v-for="item in ['circle', 'bar']" :key="item">
        <Radio>
          <input type="radio" v-model="mode" :value="item" />
        </Radio>
        <span>{{ item }}</span>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { ActionLabel } from "src/components";
import { Row, Radio, Switch, Range } from "jet-plan-ui";
import { ref } from "vue";

const mode = ref("bar");
const loading = ref(false);
const fontSize = ref(100);
const lineWidth = ref(15);
const diameter = ref(100);
const value = ref(0.35);
</script>
