<template>
  <Alert
    :alert-controller="PROPS.alertController"
    :transition="PROPS.transition"
  />
</template>
<script lang="ts" setup>
import {
  type customTransition,
  type AlertController,
  Alert,
} from "jet-plan-ui";

const PROPS = defineProps<{
  alertController: AlertController;
  transition: customTransition;
}>();
</script>
