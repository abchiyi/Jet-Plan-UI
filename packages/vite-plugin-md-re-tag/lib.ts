export function replaceCodeBox(rawCode: string) {
  //
  const a = rawCode.replace(
    /<pre v-pre="true"><code/g,
    `<doc-code-box><pre v-pre="true"><code`
  );

  return a.replace(/<\/code><\/pre>/g, `</code></pre></doc-code-box>`);
  // return rawCode;

  const codeBoxRE = /[\t\x20]*?```(.|\s)+?```/g;

  function toCodeBoxComponent(rawCode: string) {
    const codeList = rawCode.split("\n");

    const language = codeList[0]?.replace(/`/g, "").trim();
    const code = codeList.slice(1, codeList.length - 1);
    const retraction = codeList[0].match(/[\t\x20]*/);
    const start = codeList[0].replace(
      /```(.|s)*/,
      `<doc-code-box ${language ? `language=${language}` : ""} ><pre><code>\n`
    );
    const end = codeList[codeList.length - 1].replace(
      "```",
      "</code></pre></doc-code-box>"
    );

    return [start, ...code.map(item => retraction + item), end].join("\n");
  }

  function replaceCodeBlock(
    codeBlocks: RegExpMatchArray | null,
    rawCode: string
  ): string {
    if (codeBlocks && codeBlocks.length) {
      const item = codeBlocks.shift() as string;
      const replacedCode = rawCode.replace(item, toCodeBoxComponent(item));
      // codeBlocks 中存在条目时继续深入
      return replaceCodeBlock(codeBlocks, replacedCode);
    } else {
      // codeBlocks 中不存在需要替换的条目时返回 rawCode
      return rawCode;
    }
  }

  return replaceCodeBlock(rawCode.match(codeBoxRE), rawCode);
}

export function injectGenToc(rawCode: string) {
  const tempCode = `
import { TocStorm, type Toc } from "src/tool";
const toc = TocStorm();
toc.TocData = JSON.parse(\`${JSON.stringify(genToc(rawCode))}\`)
`;

  return injectStript(tempCode, rawCode);
}

export function injectHTagId(rawCode: string) {
  function isHTag(code: string, re: RegExp) {
    return Boolean(code.match(re));
  }

  function formatCode(rawCode: string, h: string) {
    function removeHashTag(code: string) {
      return code.replace(/^#+/, "").trim();
    }
    const formattedCode = removeHashTag(rawCode);
    return `<${h} id="${formattedCode}">${formattedCode}</${h}>`;
  }

  return rawCode
    .split("\n")
    .map((code: string) => {
      switch (true) {
        case isHTag(code, /^#\s(.|\s)/): // h1
          return formatCode(code, "h1");

        case isHTag(code, /^##\s(.|\s)/): // h2
          return formatCode(code, "h2");

        case isHTag(code, /^###\s(.|\s)/): // h3
          return formatCode(code, "h3");

        case isHTag(code, /^####\s(.|\s)/): // h4
          return formatCode(code, "h4");

        case isHTag(code, /^#####\s(.|\s)/): // h5
          return formatCode(code, "h5");

        case isHTag(code, /^######\s(.|\s)/): // h6
          return formatCode(code, "h6");

        default:
          return code;
      }
    })
    .join("\n");
}

function injectStript(templateCode: string, rawCode: string) {
  function getString(re: RegExp, rawCode: string) {
    const RegExpMatchArray = rawCode.match(re);
    return RegExpMatchArray ? RegExpMatchArray[0] : "";
  }

  const scriptRE = /^<script(.|\s)+?<\/script>/g;
  const scriptREStart = /<script(.|\s)+?>/g;

  function templateScript(templateCode: string) {
    return `<script lang="ts" setup>${templateCode}</script>\n`;
  }

  // 找到 script 标签将其注入到已有 script 标签内
  const script = rawCode.match(scriptRE);
  if (script) {
    const scriptCode = script[0];
    const scriptStart = getString(scriptREStart, scriptCode);
    return rawCode.replace(scriptStart, `${scriptStart}\n${templateCode}`);
  }

  // 未找到 script 标签将其注入到代码头部
  return templateScript(templateCode) + rawCode;
}

import type { Toc } from "src/tool";

export function genToc(rawCode: string) {
  const codeList = rawCode.split("\n");

  function isHTag(code: string, re: RegExp) {
    return Boolean(code.match(re));
  }
  function newHData(level: number, text: string): Toc {
    return { level, text: text.replace(/^#+/, "").trim() };
  }
  const TempData: Toc[] = [];

  for (const key in codeList) {
    const code = codeList[key];
    switch (true) {
      case isHTag(code, /^#\s(.|\s)/): // h1
        TempData.push(newHData(1, code));
        break;

      case isHTag(code, /^##\s(.|\s)/): // h2
        TempData.push(newHData(2, code));
        break;

      case isHTag(code, /^###\s(.|\s)/): // h3
        TempData.push(newHData(3, code));
        break;

      case isHTag(code, /^####\s(.|\s)/): // h4
        TempData.push(newHData(4, code));
        break;

      case isHTag(code, /^#####\s(.|\s)/): // h5
        TempData.push(newHData(5, code));
        break;

      case isHTag(code, /^######\s(.|\s)/): // h6
        TempData.push(newHData(6, code));
        break;
    }
  }

  function genData(hDataList: Toc[], level: number) {
    function taskSplitting(hDataList: Toc[], level: number): Toc[] {
      const nextLevel = hDataList.find((item: Toc) => item.level < level);
      if (level === 6 || nextLevel) return hDataList;

      // 确定同级标签所在位置，标记其 index
      const indexArray = (() => {
        const temp: number[] = [];
        hDataList.forEach((item: Toc, index: number) => {
          if (item.level === level) temp.push(index);
        });
        return temp;
      })();

      // 从标记的 index 处拆分序列
      const tempHDataList = (() => {
        const temp: Toc[][] = [];
        indexArray.forEach((key: number, index: number) => {
          const nextKey = index + 1 < indexArray.length ? index + 1 : null;
          const nextIndex = nextKey ? indexArray[nextKey] : undefined;
          temp.push(hDataList.slice(key, nextIndex));
        });
        return temp;
      })();

      // 分配任务
      return tempHDataList.map((item: Toc[]) => {
        const parent = item.shift() as Toc;
        return { ...parent, children: taskSplitting(item, level + 1) };
      });
    }

    return taskSplitting(hDataList, level);
  }

  if (TempData.length) {
    return genData(TempData, TempData[0].level);
  } else {
    return [];
  }
}
