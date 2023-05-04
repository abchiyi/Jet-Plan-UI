import { triggerResize } from "jet-plan-ui/tool/test/tool.test";

export async function triggerScreenSizeMobile() {
  triggerResize(300);
}
export async function triggerScreenSizeTablet() {
  triggerResize(800);
}
export async function triggerScreenSizeDesktop() {
  triggerResize(1400);
}
