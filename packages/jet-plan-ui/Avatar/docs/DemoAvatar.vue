<template>
  <j-row X="center">
    <Avatar id="avatar-a" v-bind="props">A</Avatar>
    <Avatar id="avatar-ico" v-bind="props"><i class="bi bi-files"></i></Avatar>
    <Avatar v-bind="props">
      <img src="/9754.jpg" alt="avatar-bg" />
    </Avatar>
  </j-row>
</template>

<script setup>
import { Avatar } from "jet-plan-ui";
const props = defineProps({ circle: { type: Boolean, default: true } });
</script>
<style scoped>
.j-avatar + .j-avatar {
  margin-left: 1em;
}
.j-avatar {
  background: #3498db;
}
#avatar-ico {
  background: #c0392b;
}
</style>
