import type { Plugin } from "vite";

import { replaceCodeBox } from "../vite-plugin-md-re-tag/lib";

export default function mdReTag(): Plugin {
  return {
    name: "vite-plugin-md-re-tag",
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
      if (/.md$/.test(id)) return handleCode(rawCode, [replaceCodeBox]);
    },
  };
}
