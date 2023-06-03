import type { VNode } from "vue";
/**
 * 用于自定义组件内的部分节点
 * @param vNode:VNode 组件传入的可自定义渲染的部分
 * @returns VNode 将作为最终输出被渲染到页面中
 */
export declare type RenderFunction = (vNode?: VNode) => VNode;
