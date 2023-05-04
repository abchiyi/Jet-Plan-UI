import { warn, type CreateComponentPublicInstance } from "vue";

/** 始终输出一个 HTMLInputElement,
 * 在未获取到组件内部的 input 节点时在控制台输出一条错误信息
 * @param component 组件 this 指向
 * @param name 组件名称
 * @param warningMessage 开/关警告消息
 * @returns HTMLInputElement
 */
export default function getInputEl(
  component: object,
  name = "getInputEl",
  warningMessage = true
): HTMLInputElement {
  const Component = component as CreateComponentPublicInstance;
  const $El = Component.$el as HTMLElement | undefined;
  if (!$El && warningMessage) warn("在组件 mounted 后调用 getInputEl");
  const input = $El?.querySelector("input");
  if (input) {
    return input;
  } else {
    if (warningMessage) {
      warn(
        `[${name}]:未找到 input 元素，是否在 default 插槽内提供了 input 元素`
      );
    }
    return document.createElement("input");
  }
}
