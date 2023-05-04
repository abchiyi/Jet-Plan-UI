import type { VNode } from "vue";

interface content {
  default: string | VNode;
  closeButton: string | VNode;
}

export interface alert {
  type: "info" | "error" | "warning" | "success";
  timeout?: number | null;
  content: string | content | VNode;
  key: number;
}

export declare type customTransition = (vNode: VNode | undefined) => VNode;
