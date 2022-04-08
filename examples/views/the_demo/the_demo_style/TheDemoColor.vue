<template>
    <div>
        <h1>主题 option 说明</h1>
        <p>主题中所有定义的 option 功能明细</p>
        <hr />
        <h2>JetPlanLight</h2>
        <j-row warp>
            <j-cube
                :style="{
                    backgroundColor: light[key],
                }"
                v-for="key in Object.keys(light)"
                v-auto-color
                class="cube"
                :key="key"
            >
                {{ key }}
            </j-cube>
        </j-row>
        <h2>JetPlanDark</h2>
        <j-row warp>
            <j-cube
                :style="{
                    backgroundColor: dark[key],
                }"
                v-for="key in Object.keys(dark)"
                v-auto-color
                class="cube"
                :key="key"
            >
                {{ key }}
            </j-cube>
        </j-row>
    </div>
</template>

<script>
import { jetPlanLight, jetPlanDark } from '@theme';
export default {
    name: 'the-demo-color',
    data() {
        return {
            light: jetPlanLight,
            dark: jetPlanDark,
        };
    },
};
</script>

<style>
.cube {
    box-sizing: border-box var(--border);
    outline: 1px solid var(--border);
    border-radius: var(--m-radius);
    font-weight: 400;
    font-size: 12px;
    padding: 2px;
    height: 60px;
    width: 80px;
    margin: 5px;
}
</style>
