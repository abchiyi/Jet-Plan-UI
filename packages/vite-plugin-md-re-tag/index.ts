import type { Plugin } from "vite";

import { injectGenToc, injectHTagId } from "./lib";

export default function mdReTag(): Plugin {
  return {
    name: "set-code-box",
    enforce: "pre",
    transform(rawCode, id) {
      function handleCode(rawCode: string, processSequences: Function[]) {
        let tempCode = rawCode;
        for (const key in processSequences) {
          const handleCode = processSequences[key];
          tempCode = handleCode(tempCode);
        }
        return tempCode;
      }
      /**处理 rawCode 函数序列，先进先出执行 */
      const processSequences = [injectGenToc, injectHTagId];

      if (/.md$/.test(id)) return handleCode(rawCode, processSequences);
    },
  };
}
