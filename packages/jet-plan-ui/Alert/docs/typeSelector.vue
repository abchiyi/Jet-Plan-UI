<template>
  <div class="demo demo-alert">
    <slot :transition="transitionFunction" :alertController="AC"></slot>
  </div>
  <div class="demo xy-selector">
    <!-- Type -->
    <p><strong>Message type</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel
        v-for="item in ['info', 'success', 'warning', 'error']"
        :key="item"
      >
        <Radio>
          <input :value="item" type="radio" v-model="messageType" />
        </Radio>
        <strong>{{ item.toUpperCase() }}</strong>
      </ActionLabel>
    </Row>
    <!-- Time -->
    <p><strong>Show Time</strong></p>
    <Row Y="center" spaceMode="between">
      <ActionLabel>
        <p>
          <strong>{{ ms }} ms</strong>
          to close
        </p>
        <Range>
          <input type="range" max="4000" min="0" v-model.number="ms" />
        </Range>
      </ActionLabel>
    </Row>

    <!-- Custom Transition -->
    <p>
      <strong>Transition{{ transitionType }}</strong>
    </p>
    <Row Y="center" spaceMode="between">
      <ActionLabel v-for="item in Object.keys(transitions)" :key="item">
        <Radio>
          <input :value="item" type="radio" v-model="transitionType" />
        </Radio>
        <strong>{{ item.toUpperCase() }}</strong>
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
import { RTS } from "src/theme";
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
const colors = computed(() => RTS.getTheme());
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
<style scoped>
.action-label {
  background: v-bind("colors.value.background.dark");
  padding: 0.8em 0.5em;
  outline: unset;
  margin: unset;
  width: 100%;
}

.action-label + .action-label {
  margin-left: 0.5em;
}
.j-row + .j-row {
  margin-top: 0.5rem;
}
strong {
  font-family: "sarasa mono";
  font-size: 12px;
}
p > strong {
  color: v-bind("colors.value.text.hint");
  font-size: 0.6rem;
}
p {
  margin-bottom: 0.2rem;
}

.j-button {
  margin: 0.5rem 0;
  font-size: 1rem;
  font-family: "sarasa mono", Consolas, "Courier New", Courier, FreeMono,
    monospace;
  padding: 0.5rem 0;
  border-radius: 8px;
}

.j-button + .j-button {
  margin-left: 0.5rem;
}

.demo.demo-alert {
  position: relative;
  min-height: 82px;
  padding: unset;
  z-index: 0;
}
</style>
