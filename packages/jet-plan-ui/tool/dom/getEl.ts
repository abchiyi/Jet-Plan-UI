import { warn, type CreateComponentPublicInstance } from "vue";

/** 始终输出一个 HTMLElement,
 * 在未获取到组件的挂载节点时在控制台输出一条错误信息
 * @param component 组件 this 指向
 * @param name 组件名称
 * @param warningMessage 开/关警告消息
 * @returns HTMLElement
 */
export default function getEl(
  component: object,
  name = "getEl",
  warningMessage = true
): HTMLElement {
  const Component = component as CreateComponentPublicInstance;
  const $El = Component.$el as HTMLElement | undefined;

  if ($El) return $El;
  if (warningMessage)
    warn(`[${name}] 组件挂载的节点无效，请确保在 'mounted' 阶段或以后调用。`);
  return document.createElement("div");
}
