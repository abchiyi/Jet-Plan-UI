<template>
  <div class="demo demo-alert">
    <slot :transition="transitionFunction" :alertController="AC"></slot>
  </div>
  <div class="demo padding control">
    <!-- Type -->
    <p><span>Message type</span></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel
        v-for="item in ['info', 'success', 'warning', 'error']"
        :key="item"
      >
        <Radio>
          <input :value="item" type="radio" v-model="messageType" />
        </Radio>
        <span>{{ item.toUpperCase() }}</span>
      </ActionLabel>
    </Row>
    <!-- Time -->
    <p><span>Show Time</span></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>
          <span>{{ ms }} ms</span>
          to close
        </p>
        <Range>
          <input type="range" max="4000" min="0" v-model.number="ms" />
        </Range>
      </ActionLabel>
    </Row>

    <!-- Custom Transition -->
    <p>
      <span>Transition{{ transitionType }}</span>
    </p>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in Object.keys(transitions)" :key="item">
        <Radio>
          <input :value="item" type="radio" v-model="transitionType" />
        </Radio>
        <span>{{ item.toUpperCase() }}</span>
      </ActionLabel>
    </Row>

    <!-- Send Message -->
    <Row>
      <Button primary block @click="sendMessage">Send Message</Button>
      <Button block @click="() => AC.removeAll()">Close All</Button>
    </Row>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, h, type ComputedRef, onMounted, type Ref } from "vue";
import { ActionLabel } from "src/components";
import {
  type customTransition,
  TransitionFolded,
  TransitionScale,
  AlertController,
  TransitionFade,
  type alert,
  Button,
  Radio,
  Range,
  Row,
} from "jet-plan-ui";
const transitions: { [key: string]: any } = {
  Folded: TransitionFolded,
  Scale: TransitionScale,
  Fade: TransitionFade,
};

const transitionType = ref("Scale"); // 动画效果
const AC = new AlertController(); // 控制器

const messageType: Ref<alert["type"]> = ref("info"); // 消息类型
const ms = ref(2000); // 关闭时间
function sendMessage() {
  AC.sendMessage(messageType.value, ms.value, {
    closeButton: h("i", { class: "bi bi-x-lg" }),
    default: content.value,
  });
}

const transitionFunction: ComputedRef<customTransition> = computed(() => {
  return vNode =>
    h(
      transitions[transitionType.value],
      { mode: "out-in" },
      { default: () => vNode }
    );
});

const content = computed(() => {
  return (
    "Type " + messageType.value[0].toUpperCase() + messageType.value.slice(1)
  );
});

onMounted(() =>
  AC.sendMessage("info", null, {
    default: "This is Alert .",
    closeButton: h("i", { class: "bi bi-x-lg" }),
  })
);
</script>
