<template>
  <div class="demo no-padding demo-bubble">
    <slot
      :customRender="transitionFunction"
      :position="POS"
      :show="SHOW"
    ></slot>
  </div>
  <div class="demo xy-selector">
    <!-- Position -->
    <p><strong>Bubble position</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel
        v-for="item in ['top', 'bottom', 'left', 'right']"
        :key="item"
      >
        <Radio>
          <input :value="item" type="radio" v-model="bubblePosition" />
        </Radio>
        <strong>{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <!-- Start -->
    <p><strong>Bubble start</strong></p>
    <Row y="center" space-mode="between">
      <ActionLabel v-for="item in ['start', 'end', 'center']" :key="item">
        <Radio>
          <input
            :value="transformStart(item)"
            type="radio"
            v-model="bubbleStart"
          />
        </Radio>
        <strong>{{ transformStart(item)?.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <!-- Show -->
    <p><strong>Bubble Show</strong></p>
    <Row y="center" space-mode="between">
      <ActionLabel>
        <Switch>
          <input type="checkbox" v-model="bubbleShowDisabled" />
        </Switch>
        <strong>手动控制气泡</strong>
      </ActionLabel>
      <ActionLabel>
        <Switch>
          <input
            type="checkbox"
            v-model="bubbleShow"
            :disabled="!bubbleShowDisabled"
          />
        </Switch>
        <strong>{{ SHOW.valueOf().toString().toLocaleUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <!-- Transition -->
    <p>
      <strong>Transition {{ transitionType.toLocaleLowerCase() }}</strong>
    </p>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in Object.keys(transitions)" :key="item">
        <Radio>
          <input :value="item" type="radio" v-model="transitionType" />
        </Radio>
        <strong>{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, h, type ComputedRef, watch } from "vue";
import { ActionLabel } from "src/components";
import { RTS } from "src/theme";
import {
  TransitionFolded,
  TransitionSlider,
  TransitionScale,
  TransitionFade,
  Switch,
  Radio,
  Row,
  type RenderFunction,
} from "jet-plan-ui";
const colors = computed(() => RTS.getTheme());

const transitionType = ref("Slider"); // 动画效果
const bubblePosition = ref("top"); // 气泡显示位置
const bubbleStart = ref("center"); // 气泡起始位置
const bubbleShow = ref(false); // 手动开关
const bubbleShowDisabled = ref(false); // 禁用手动控制开关
const transitions: { [key: string]: any } = {
  Folded: TransitionFolded,
  Slider: TransitionSlider,
  Scale: TransitionScale,
  Fade: TransitionFade,
};

const transitionFunction: ComputedRef<RenderFunction | undefined> = computed(
  () => {
    return transitionType.value !== "Slider"
      ? vNode =>
          h(transitions[transitionType.value], null, { default: () => vNode })
      : undefined;
  }
);

function transformStart(v: string) {
  if (["top", "bottom"].indexOf(bubblePosition.value) === -1) {
    switch (true) {
      case v == "start":
        return "top";
      case v == "end":
        return "bottom";
    }
  }
  return v;
}
watch(bubblePosition, position => {
  if (["top", "bottom"].indexOf(position) === -1) {
    switch (true) {
      case bubbleStart.value == "start":
        bubbleStart.value = "top";
        break;
      case bubbleStart.value == "end":
        bubbleStart.value = "bottom";
        break;
    }
  } else {
    switch (true) {
      case bubbleStart.value == "top":
        bubbleStart.value = "start";
        break;
      case bubbleStart.value == "bottom":
        bubbleStart.value = "end";
        break;
    }
  }
});

const POS = computed(() => {
  if (bubbleStart.value === "center") return bubblePosition.value;
  return `${bubblePosition.value}-${bubbleStart.value}`;
});

const SHOW = computed(() => {
  if (!bubbleShowDisabled.value) return "unset";
  else return bubbleShow.value;
});
</script>
<style scoped>
.demo .demo-bubble {
  position: relative;
  min-height: 82px;
  padding: unset;
  z-index: 0;
}
</style>
