import { describe, test, expect } from "vitest";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

import { replaceCodeBox, genToc, injectHTagId } from "../lib";

function readeMdFile(path: string): string {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return fs.readFileSync(resolve(__dirname, path)).toString();
}

const testCode = readeMdFile("./test.md");
const testCode2 = readeMdFile("./test2.md");
const testCode3 = readeMdFile("./test3.md");

describe("vitePluginMdReTagTest", () => {
  test("replaceCodeBox", () => {
    const code = replaceCodeBox(testCode);
    expect(code).toMatchSnapshot();
  });
  test("从 .md 文本生成 Toc 数据", () => {
    expect(genToc(testCode)).toMatchSnapshot();
    expect(genToc(testCode2)).toMatchSnapshot();
    expect(genToc(testCode3)).toMatchSnapshot();
    expect(genToc(testCode3)).toEqual([
      {
        children: [
          { children: [], level: 2, text: "安装组件库" },
          { children: [], level: 2, text: "注册组件" },
        ],
        level: 1,
        text: "快速开始",
      },
    ]);
  });
  test("为 'h' 标签生成锚点", () => {
    expect(injectHTagId(testCode)).toMatchSnapshot();
    expect(injectHTagId(testCode2)).toMatchSnapshot();
    expect(injectHTagId(testCode3)).toMatchSnapshot();
  });
});
