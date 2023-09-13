// vite.config.ts
import vitePluginInspect from "file:///C:/Users/meme_/Desktop/WorkHome/JET_UI/node_modules/vite-plugin-inspect/dist/index.mjs";
import autoprefixer from "file:///C:/Users/meme_/Desktop/WorkHome/JET_UI/node_modules/autoprefixer/lib/autoprefixer.js";
import vue from "file:///C:/Users/meme_/Desktop/WorkHome/JET_UI/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import markdown from "file:///C:/Users/meme_/Desktop/WorkHome/JET_UI/node_modules/vite-plugin-md/dist/index.js";
import { defineConfig } from "file:///C:/Users/meme_/Desktop/WorkHome/JET_UI/node_modules/vite/dist/node/index.js";
import { resolve } from "path";

// packages/vite-plugin-md-re-tag/lib.ts
function replaceCodeBox(rawCode) {
  const a = rawCode.replace(
    /<pre v-pre="true"><code/g,
    `<doc-code-box><pre v-pre="true"><code`
  );
  return a.replace(/<\/code><\/pre>/g, `</code></pre></doc-code-box>`);
  const codeBoxRE = /[\t\x20]*?```(.|\s)+?```/g;
  function toCodeBoxComponent(rawCode2) {
    var _a;
    const codeList = rawCode2.split("\n");
    const language = (_a = codeList[0]) == null ? void 0 : _a.replace(/`/g, "").trim();
    const code = codeList.slice(1, codeList.length - 1);
    const retraction = codeList[0].match(/[\t\x20]*/);
    const start = codeList[0].replace(
      /```(.|s)*/,
      `<doc-code-box ${language ? `language=${language}` : ""} ><pre><code>
`
    );
    const end = codeList[codeList.length - 1].replace(
      "```",
      "</code></pre></doc-code-box>"
    );
    return [start, ...code.map((item) => retraction + item), end].join("\n");
  }
  function replaceCodeBlock(codeBlocks, rawCode2) {
    if (codeBlocks && codeBlocks.length) {
      const item = codeBlocks.shift();
      const replacedCode = rawCode2.replace(item, toCodeBoxComponent(item));
      return replaceCodeBlock(codeBlocks, replacedCode);
    } else {
      return rawCode2;
    }
  }
  return replaceCodeBlock(rawCode.match(codeBoxRE), rawCode);
}
function injectGenToc(rawCode) {
  const tempCode = `
import { TocStorm, type Toc } from "src/tool";
const toc = TocStorm();
toc.TocData = JSON.parse(\`${JSON.stringify(genToc(rawCode))}\`)
`;
  return injectStript(tempCode, rawCode);
}
function injectHTagId(rawCode) {
  function isHTag(code, re) {
    return Boolean(code.match(re));
  }
  function formatCode(rawCode2, h) {
    function removeHashTag(code) {
      return code.replace(/^#+/, "").trim();
    }
    const formattedCode = removeHashTag(rawCode2);
    return `<${h} id="${formattedCode}">${formattedCode}</${h}>`;
  }
  return rawCode.split("\n").map((code) => {
    switch (true) {
      case isHTag(code, /^#\s(.|\s)/):
        return formatCode(code, "h1");
      case isHTag(code, /^##\s(.|\s)/):
        return formatCode(code, "h2");
      case isHTag(code, /^###\s(.|\s)/):
        return formatCode(code, "h3");
      case isHTag(code, /^####\s(.|\s)/):
        return formatCode(code, "h4");
      case isHTag(code, /^#####\s(.|\s)/):
        return formatCode(code, "h5");
      case isHTag(code, /^######\s(.|\s)/):
        return formatCode(code, "h6");
      default:
        return code;
    }
  }).join("\n");
}
function injectStript(templateCode, rawCode) {
  function getString(re, rawCode2) {
    const RegExpMatchArray = rawCode2.match(re);
    return RegExpMatchArray ? RegExpMatchArray[0] : "";
  }
  const scriptRE = /^<script(.|\s)+?<\/script>/g;
  const scriptREStart = /<script(.|\s)+?>/g;
  function templateScript(templateCode2) {
    return `<script lang="ts" setup>${templateCode2}<\/script>
`;
  }
  const script = rawCode.match(scriptRE);
  if (script) {
    const scriptCode = script[0];
    const scriptStart = getString(scriptREStart, scriptCode);
    return rawCode.replace(scriptStart, `${scriptStart}
${templateCode}`);
  }
  return templateScript(templateCode) + rawCode;
}
function genToc(rawCode) {
  const codeList = rawCode.split("\n");
  function isHTag(code, re) {
    return Boolean(code.match(re));
  }
  function newHData(level, text) {
    return { level, text: text.replace(/^#+/, "").trim() };
  }
  const TempData = [];
  for (const key in codeList) {
    const code = codeList[key];
    switch (true) {
      case isHTag(code, /^#\s(.|\s)/):
        TempData.push(newHData(1, code));
        break;
      case isHTag(code, /^##\s(.|\s)/):
        TempData.push(newHData(2, code));
        break;
      case isHTag(code, /^###\s(.|\s)/):
        TempData.push(newHData(3, code));
        break;
      case isHTag(code, /^####\s(.|\s)/):
        TempData.push(newHData(4, code));
        break;
      case isHTag(code, /^#####\s(.|\s)/):
        TempData.push(newHData(5, code));
        break;
      case isHTag(code, /^######\s(.|\s)/):
        TempData.push(newHData(6, code));
        break;
    }
  }
  function genData(hDataList, level) {
    function taskSplitting(hDataList2, level2) {
      const nextLevel = hDataList2.find((item) => item.level < level2);
      if (level2 === 6 || nextLevel)
        return hDataList2;
      const indexArray = (() => {
        const temp = [];
        hDataList2.forEach((item, index) => {
          if (item.level === level2)
            temp.push(index);
        });
        return temp;
      })();
      const tempHDataList = (() => {
        const temp = [];
        indexArray.forEach((key, index) => {
          const nextKey = index + 1 < indexArray.length ? index + 1 : null;
          const nextIndex = nextKey ? indexArray[nextKey] : void 0;
          temp.push(hDataList2.slice(key, nextIndex));
        });
        return temp;
      })();
      return tempHDataList.map((item) => {
        const parent = item.shift();
        return { ...parent, children: taskSplitting(item, level2 + 1) };
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

// packages/vite-plugin-md-re-tag/index.ts
function mdReTag() {
  return {
    name: "set-code-box",
    enforce: "pre",
    transform(rawCode, id) {
      function handleCode(rawCode2, processSequences2) {
        let tempCode = rawCode2;
        for (const key in processSequences2) {
          const handleCode2 = processSequences2[key];
          tempCode = handleCode2(tempCode);
        }
        return tempCode;
      }
      const processSequences = [injectGenToc, injectHTagId];
      if (/.md$/.test(id))
        return handleCode(rawCode, processSequences);
    }
  };
}

// packages/vite-plugin-md-set-code-box/index.ts
function mdReTag2() {
  return {
    name: "vite-plugin-md-re-tag",
    enforce: "pre",
    transform(rawCode, id) {
      function handleCode(rawCode2, processSequences) {
        let tempCode = rawCode2;
        for (const key in processSequences) {
          const handleCode2 = processSequences[key];
          tempCode = handleCode2(tempCode);
        }
        return tempCode;
      }
      if (/.md$/.test(id))
        return handleCode(rawCode, [replaceCodeBox]);
    }
  };
}

// vite.config.ts
var __vite_injected_original_dirname = "C:\\Users\\meme_\\Desktop\\WorkHome\\JET_UI";
function _resolve(path) {
  return resolve(__vite_injected_original_dirname, path);
}
var vite_config_default = defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    mdReTag(),
    markdown(),
    mdReTag2(),
    vitePluginInspect()
  ],
  resolve: {
    alias: {
      "jet-plan-ui-theme": _resolve("./packages/jet-plan-ui-theme"),
      "jet-plan-ui": _resolve("./packages/jet-plan-ui"),
      packages: resolve("./packages"),
      public: _resolve("./public"),
      src: _resolve("./src")
    }
  },
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: [
            "Android 4.1",
            "iOS 7.1",
            "Chrome > 31",
            "ff > 31",
            "ie >= 8",
            "> 1%"
          ],
          grid: true
        })
      ]
    }
  },
  build: {
    target: "esnext",
    outDir: "docs"
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./setupEnv.ts"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZXMvdml0ZS1wbHVnaW4tbWQtcmUtdGFnL2xpYi50cyIsICJwYWNrYWdlcy92aXRlLXBsdWdpbi1tZC1yZS10YWcvaW5kZXgudHMiLCAicGFja2FnZXMvdml0ZS1wbHVnaW4tbWQtc2V0LWNvZGUtYm94L2luZGV4LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWVtZV9cXFxcRGVza3RvcFxcXFxXb3JrSG9tZVxcXFxKRVRfVUlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1lbWVfXFxcXERlc2t0b3BcXFxcV29ya0hvbWVcXFxcSkVUX1VJXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZW1lXy9EZXNrdG9wL1dvcmtIb21lL0pFVF9VSS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cclxuaW1wb3J0IHZpdGVQbHVnaW5JbnNwZWN0IGZyb20gXCJ2aXRlLXBsdWdpbi1pbnNwZWN0XCI7XHJcbmltcG9ydCBhdXRvcHJlZml4ZXIgZnJvbSBcImF1dG9wcmVmaXhlclwiO1xyXG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcclxuaW1wb3J0IG1hcmtkb3duIGZyb20gXCJ2aXRlLXBsdWdpbi1tZFwiO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IG1kUmVUYWcgZnJvbSBcIi4vcGFja2FnZXMvdml0ZS1wbHVnaW4tbWQtcmUtdGFnXCI7XHJcbmltcG9ydCBzZXRDb2RlQm94IGZyb20gXCIuL3BhY2thZ2VzL3ZpdGUtcGx1Z2luLW1kLXNldC1jb2RlLWJveFwiO1xyXG5cclxuZnVuY3Rpb24gX3Jlc29sdmUocGF0aDogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHJlc29sdmUoX19kaXJuYW1lLCBwYXRoKTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoeyBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10gfSksXHJcbiAgICBtZFJlVGFnKCksXHJcbiAgICBtYXJrZG93bigpLFxyXG4gICAgc2V0Q29kZUJveCgpLFxyXG4gICAgdml0ZVBsdWdpbkluc3BlY3QoKSxcclxuICBdLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiamV0LXBsYW4tdWktdGhlbWVcIjogX3Jlc29sdmUoXCIuL3BhY2thZ2VzL2pldC1wbGFuLXVpLXRoZW1lXCIpLFxyXG4gICAgICBcImpldC1wbGFuLXVpXCI6IF9yZXNvbHZlKFwiLi9wYWNrYWdlcy9qZXQtcGxhbi11aVwiKSxcclxuICAgICAgcGFja2FnZXM6IHJlc29sdmUoXCIuL3BhY2thZ2VzXCIpLFxyXG4gICAgICBwdWJsaWM6IF9yZXNvbHZlKFwiLi9wdWJsaWNcIiksXHJcbiAgICAgIHNyYzogX3Jlc29sdmUoXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjc3M6IHtcclxuICAgIHBvc3Rjc3M6IHtcclxuICAgICAgcGx1Z2luczogW1xyXG4gICAgICAgIGF1dG9wcmVmaXhlcih7XHJcbiAgICAgICAgICBvdmVycmlkZUJyb3dzZXJzbGlzdDogW1xyXG4gICAgICAgICAgICBcIkFuZHJvaWQgNC4xXCIsXHJcbiAgICAgICAgICAgIFwiaU9TIDcuMVwiLFxyXG4gICAgICAgICAgICBcIkNocm9tZSA+IDMxXCIsXHJcbiAgICAgICAgICAgIFwiZmYgPiAzMVwiLFxyXG4gICAgICAgICAgICBcImllID49IDhcIixcclxuICAgICAgICAgICAgXCI+IDElXCIsXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgICAgZ3JpZDogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgdGFyZ2V0OiBcImVzbmV4dFwiLFxyXG4gICAgb3V0RGlyOiBcImRvY3NcIixcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIGVudmlyb25tZW50OiBcImpzZG9tXCIsXHJcbiAgICBzZXR1cEZpbGVzOiBbXCIuL3NldHVwRW52LnRzXCJdLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1lbWVfXFxcXERlc2t0b3BcXFxcV29ya0hvbWVcXFxcSkVUX1VJXFxcXHBhY2thZ2VzXFxcXHZpdGUtcGx1Z2luLW1kLXJlLXRhZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWVtZV9cXFxcRGVza3RvcFxcXFxXb3JrSG9tZVxcXFxKRVRfVUlcXFxccGFja2FnZXNcXFxcdml0ZS1wbHVnaW4tbWQtcmUtdGFnXFxcXGxpYi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbWVtZV8vRGVza3RvcC9Xb3JrSG9tZS9KRVRfVUkvcGFja2FnZXMvdml0ZS1wbHVnaW4tbWQtcmUtdGFnL2xpYi50c1wiO2V4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ29kZUJveChyYXdDb2RlOiBzdHJpbmcpIHtcclxuICAvL1xyXG4gIGNvbnN0IGEgPSByYXdDb2RlLnJlcGxhY2UoXHJcbiAgICAvPHByZSB2LXByZT1cInRydWVcIj48Y29kZS9nLFxyXG4gICAgYDxkb2MtY29kZS1ib3g+PHByZSB2LXByZT1cInRydWVcIj48Y29kZWBcclxuICApO1xyXG5cclxuICByZXR1cm4gYS5yZXBsYWNlKC88XFwvY29kZT48XFwvcHJlPi9nLCBgPC9jb2RlPjwvcHJlPjwvZG9jLWNvZGUtYm94PmApO1xyXG4gIC8vIHJldHVybiByYXdDb2RlO1xyXG5cclxuICBjb25zdCBjb2RlQm94UkUgPSAvW1xcdFxceDIwXSo/YGBgKC58XFxzKSs/YGBgL2c7XHJcblxyXG4gIGZ1bmN0aW9uIHRvQ29kZUJveENvbXBvbmVudChyYXdDb2RlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGNvZGVMaXN0ID0gcmF3Q29kZS5zcGxpdChcIlxcblwiKTtcclxuXHJcbiAgICBjb25zdCBsYW5ndWFnZSA9IGNvZGVMaXN0WzBdPy5yZXBsYWNlKC9gL2csIFwiXCIpLnRyaW0oKTtcclxuICAgIGNvbnN0IGNvZGUgPSBjb2RlTGlzdC5zbGljZSgxLCBjb2RlTGlzdC5sZW5ndGggLSAxKTtcclxuICAgIGNvbnN0IHJldHJhY3Rpb24gPSBjb2RlTGlzdFswXS5tYXRjaCgvW1xcdFxceDIwXSovKTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gY29kZUxpc3RbMF0ucmVwbGFjZShcclxuICAgICAgL2BgYCgufHMpKi8sXHJcbiAgICAgIGA8ZG9jLWNvZGUtYm94ICR7bGFuZ3VhZ2UgPyBgbGFuZ3VhZ2U9JHtsYW5ndWFnZX1gIDogXCJcIn0gPjxwcmU+PGNvZGU+XFxuYFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGVuZCA9IGNvZGVMaXN0W2NvZGVMaXN0Lmxlbmd0aCAtIDFdLnJlcGxhY2UoXHJcbiAgICAgIFwiYGBgXCIsXHJcbiAgICAgIFwiPC9jb2RlPjwvcHJlPjwvZG9jLWNvZGUtYm94PlwiXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBbc3RhcnQsIC4uLmNvZGUubWFwKGl0ZW0gPT4gcmV0cmFjdGlvbiArIGl0ZW0pLCBlbmRdLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXBsYWNlQ29kZUJsb2NrKFxyXG4gICAgY29kZUJsb2NrczogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwsXHJcbiAgICByYXdDb2RlOiBzdHJpbmdcclxuICApOiBzdHJpbmcge1xyXG4gICAgaWYgKGNvZGVCbG9ja3MgJiYgY29kZUJsb2Nrcy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGNvZGVCbG9ja3Muc2hpZnQoKSBhcyBzdHJpbmc7XHJcbiAgICAgIGNvbnN0IHJlcGxhY2VkQ29kZSA9IHJhd0NvZGUucmVwbGFjZShpdGVtLCB0b0NvZGVCb3hDb21wb25lbnQoaXRlbSkpO1xyXG4gICAgICAvLyBjb2RlQmxvY2tzIFx1NEUyRFx1NUI1OFx1NTcyOFx1Njc2MVx1NzZFRVx1NjVGNlx1N0VFN1x1N0VFRFx1NkRGMVx1NTE2NVxyXG4gICAgICByZXR1cm4gcmVwbGFjZUNvZGVCbG9jayhjb2RlQmxvY2tzLCByZXBsYWNlZENvZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gY29kZUJsb2NrcyBcdTRFMkRcdTRFMERcdTVCNThcdTU3MjhcdTk3MDBcdTg5ODFcdTY2RkZcdTYzNjJcdTc2ODRcdTY3NjFcdTc2RUVcdTY1RjZcdThGRDRcdTU2REUgcmF3Q29kZVxyXG4gICAgICByZXR1cm4gcmF3Q29kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXBsYWNlQ29kZUJsb2NrKHJhd0NvZGUubWF0Y2goY29kZUJveFJFKSwgcmF3Q29kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RHZW5Ub2MocmF3Q29kZTogc3RyaW5nKSB7XHJcbiAgY29uc3QgdGVtcENvZGUgPSBgXHJcbmltcG9ydCB7IFRvY1N0b3JtLCB0eXBlIFRvYyB9IGZyb20gXCJzcmMvdG9vbFwiO1xyXG5jb25zdCB0b2MgPSBUb2NTdG9ybSgpO1xyXG50b2MuVG9jRGF0YSA9IEpTT04ucGFyc2UoXFxgJHtKU09OLnN0cmluZ2lmeShnZW5Ub2MocmF3Q29kZSkpfVxcYClcclxuYDtcclxuXHJcbiAgcmV0dXJuIGluamVjdFN0cmlwdCh0ZW1wQ29kZSwgcmF3Q29kZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RIVGFnSWQocmF3Q29kZTogc3RyaW5nKSB7XHJcbiAgZnVuY3Rpb24gaXNIVGFnKGNvZGU6IHN0cmluZywgcmU6IFJlZ0V4cCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oY29kZS5tYXRjaChyZSkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZm9ybWF0Q29kZShyYXdDb2RlOiBzdHJpbmcsIGg6IHN0cmluZykge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlSGFzaFRhZyhjb2RlOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIGNvZGUucmVwbGFjZSgvXiMrLywgXCJcIikudHJpbSgpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9ybWF0dGVkQ29kZSA9IHJlbW92ZUhhc2hUYWcocmF3Q29kZSk7XHJcbiAgICByZXR1cm4gYDwke2h9IGlkPVwiJHtmb3JtYXR0ZWRDb2RlfVwiPiR7Zm9ybWF0dGVkQ29kZX08LyR7aH0+YDtcclxuICB9XHJcblxyXG4gIHJldHVybiByYXdDb2RlXHJcbiAgICAuc3BsaXQoXCJcXG5cIilcclxuICAgIC5tYXAoKGNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICBjYXNlIGlzSFRhZyhjb2RlLCAvXiNcXHMoLnxcXHMpLyk6IC8vIGgxXHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0Q29kZShjb2RlLCBcImgxXCIpO1xyXG5cclxuICAgICAgICBjYXNlIGlzSFRhZyhjb2RlLCAvXiMjXFxzKC58XFxzKS8pOiAvLyBoMlxyXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdENvZGUoY29kZSwgXCJoMlwiKTtcclxuXHJcbiAgICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jIyNcXHMoLnxcXHMpLyk6IC8vIGgzXHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0Q29kZShjb2RlLCBcImgzXCIpO1xyXG5cclxuICAgICAgICBjYXNlIGlzSFRhZyhjb2RlLCAvXiMjIyNcXHMoLnxcXHMpLyk6IC8vIGg0XHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0Q29kZShjb2RlLCBcImg0XCIpO1xyXG5cclxuICAgICAgICBjYXNlIGlzSFRhZyhjb2RlLCAvXiMjIyMjXFxzKC58XFxzKS8pOiAvLyBoNVxyXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdENvZGUoY29kZSwgXCJoNVwiKTtcclxuXHJcbiAgICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jIyMjIyNcXHMoLnxcXHMpLyk6IC8vIGg2XHJcbiAgICAgICAgICByZXR1cm4gZm9ybWF0Q29kZShjb2RlLCBcImg2XCIpO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIGNvZGU7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuam9pbihcIlxcblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5qZWN0U3RyaXB0KHRlbXBsYXRlQ29kZTogc3RyaW5nLCByYXdDb2RlOiBzdHJpbmcpIHtcclxuICBmdW5jdGlvbiBnZXRTdHJpbmcocmU6IFJlZ0V4cCwgcmF3Q29kZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBSZWdFeHBNYXRjaEFycmF5ID0gcmF3Q29kZS5tYXRjaChyZSk7XHJcbiAgICByZXR1cm4gUmVnRXhwTWF0Y2hBcnJheSA/IFJlZ0V4cE1hdGNoQXJyYXlbMF0gOiBcIlwiO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2NyaXB0UkUgPSAvXjxzY3JpcHQoLnxcXHMpKz88XFwvc2NyaXB0Pi9nO1xyXG4gIGNvbnN0IHNjcmlwdFJFU3RhcnQgPSAvPHNjcmlwdCgufFxccykrPz4vZztcclxuXHJcbiAgZnVuY3Rpb24gdGVtcGxhdGVTY3JpcHQodGVtcGxhdGVDb2RlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBgPHNjcmlwdCBsYW5nPVwidHNcIiBzZXR1cD4ke3RlbXBsYXRlQ29kZX08L3NjcmlwdD5cXG5gO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU2MjdFXHU1MjMwIHNjcmlwdCBcdTY4MDdcdTdCN0VcdTVDMDZcdTUxNzZcdTZDRThcdTUxNjVcdTUyMzBcdTVERjJcdTY3MDkgc2NyaXB0IFx1NjgwN1x1N0I3RVx1NTE4NVxyXG4gIGNvbnN0IHNjcmlwdCA9IHJhd0NvZGUubWF0Y2goc2NyaXB0UkUpO1xyXG4gIGlmIChzY3JpcHQpIHtcclxuICAgIGNvbnN0IHNjcmlwdENvZGUgPSBzY3JpcHRbMF07XHJcbiAgICBjb25zdCBzY3JpcHRTdGFydCA9IGdldFN0cmluZyhzY3JpcHRSRVN0YXJ0LCBzY3JpcHRDb2RlKTtcclxuICAgIHJldHVybiByYXdDb2RlLnJlcGxhY2Uoc2NyaXB0U3RhcnQsIGAke3NjcmlwdFN0YXJ0fVxcbiR7dGVtcGxhdGVDb2RlfWApO1xyXG4gIH1cclxuXHJcbiAgLy8gXHU2NzJBXHU2MjdFXHU1MjMwIHNjcmlwdCBcdTY4MDdcdTdCN0VcdTVDMDZcdTUxNzZcdTZDRThcdTUxNjVcdTUyMzBcdTRFRTNcdTc4MDFcdTU5MzRcdTkwRThcclxuICByZXR1cm4gdGVtcGxhdGVTY3JpcHQodGVtcGxhdGVDb2RlKSArIHJhd0NvZGU7XHJcbn1cclxuXHJcbmltcG9ydCB0eXBlIHsgVG9jIH0gZnJvbSBcInNyYy90b29sXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuVG9jKHJhd0NvZGU6IHN0cmluZykge1xyXG4gIGNvbnN0IGNvZGVMaXN0ID0gcmF3Q29kZS5zcGxpdChcIlxcblwiKTtcclxuXHJcbiAgZnVuY3Rpb24gaXNIVGFnKGNvZGU6IHN0cmluZywgcmU6IFJlZ0V4cCkge1xyXG4gICAgcmV0dXJuIEJvb2xlYW4oY29kZS5tYXRjaChyZSkpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBuZXdIRGF0YShsZXZlbDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcpOiBUb2Mge1xyXG4gICAgcmV0dXJuIHsgbGV2ZWwsIHRleHQ6IHRleHQucmVwbGFjZSgvXiMrLywgXCJcIikudHJpbSgpIH07XHJcbiAgfVxyXG4gIGNvbnN0IFRlbXBEYXRhOiBUb2NbXSA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IGtleSBpbiBjb2RlTGlzdCkge1xyXG4gICAgY29uc3QgY29kZSA9IGNvZGVMaXN0W2tleV07XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jXFxzKC58XFxzKS8pOiAvLyBoMVxyXG4gICAgICAgIFRlbXBEYXRhLnB1c2gobmV3SERhdGEoMSwgY29kZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jI1xccygufFxccykvKTogLy8gaDJcclxuICAgICAgICBUZW1wRGF0YS5wdXNoKG5ld0hEYXRhKDIsIGNvZGUpKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgaXNIVGFnKGNvZGUsIC9eIyMjXFxzKC58XFxzKS8pOiAvLyBoM1xyXG4gICAgICAgIFRlbXBEYXRhLnB1c2gobmV3SERhdGEoMywgY29kZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jIyMjXFxzKC58XFxzKS8pOiAvLyBoNFxyXG4gICAgICAgIFRlbXBEYXRhLnB1c2gobmV3SERhdGEoNCwgY29kZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBpc0hUYWcoY29kZSwgL14jIyMjI1xccygufFxccykvKTogLy8gaDVcclxuICAgICAgICBUZW1wRGF0YS5wdXNoKG5ld0hEYXRhKDUsIGNvZGUpKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgaXNIVGFnKGNvZGUsIC9eIyMjIyMjXFxzKC58XFxzKS8pOiAvLyBoNlxyXG4gICAgICAgIFRlbXBEYXRhLnB1c2gobmV3SERhdGEoNiwgY29kZSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2VuRGF0YShoRGF0YUxpc3Q6IFRvY1tdLCBsZXZlbDogbnVtYmVyKSB7XHJcbiAgICBmdW5jdGlvbiB0YXNrU3BsaXR0aW5nKGhEYXRhTGlzdDogVG9jW10sIGxldmVsOiBudW1iZXIpOiBUb2NbXSB7XHJcbiAgICAgIGNvbnN0IG5leHRMZXZlbCA9IGhEYXRhTGlzdC5maW5kKChpdGVtOiBUb2MpID0+IGl0ZW0ubGV2ZWwgPCBsZXZlbCk7XHJcbiAgICAgIGlmIChsZXZlbCA9PT0gNiB8fCBuZXh0TGV2ZWwpIHJldHVybiBoRGF0YUxpc3Q7XHJcblxyXG4gICAgICAvLyBcdTc4NkVcdTVCOUFcdTU0MENcdTdFQTdcdTY4MDdcdTdCN0VcdTYyNDBcdTU3MjhcdTRGNERcdTdGNkVcdUZGMENcdTY4MDdcdThCQjBcdTUxNzYgaW5kZXhcclxuICAgICAgY29uc3QgaW5kZXhBcnJheSA9ICgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcDogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBoRGF0YUxpc3QuZm9yRWFjaCgoaXRlbTogVG9jLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5sZXZlbCA9PT0gbGV2ZWwpIHRlbXAucHVzaChpbmRleCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICAgIH0pKCk7XHJcblxyXG4gICAgICAvLyBcdTRFQ0VcdTY4MDdcdThCQjBcdTc2ODQgaW5kZXggXHU1OTA0XHU2MkM2XHU1MjA2XHU1RThGXHU1MjE3XHJcbiAgICAgIGNvbnN0IHRlbXBIRGF0YUxpc3QgPSAoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXA6IFRvY1tdW10gPSBbXTtcclxuICAgICAgICBpbmRleEFycmF5LmZvckVhY2goKGtleTogbnVtYmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXh0S2V5ID0gaW5kZXggKyAxIDwgaW5kZXhBcnJheS5sZW5ndGggPyBpbmRleCArIDEgOiBudWxsO1xyXG4gICAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gbmV4dEtleSA/IGluZGV4QXJyYXlbbmV4dEtleV0gOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICB0ZW1wLnB1c2goaERhdGFMaXN0LnNsaWNlKGtleSwgbmV4dEluZGV4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICAgIH0pKCk7XHJcblxyXG4gICAgICAvLyBcdTUyMDZcdTkxNERcdTRFRkJcdTUyQTFcclxuICAgICAgcmV0dXJuIHRlbXBIRGF0YUxpc3QubWFwKChpdGVtOiBUb2NbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGl0ZW0uc2hpZnQoKSBhcyBUb2M7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucGFyZW50LCBjaGlsZHJlbjogdGFza1NwbGl0dGluZyhpdGVtLCBsZXZlbCArIDEpIH07XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXNrU3BsaXR0aW5nKGhEYXRhTGlzdCwgbGV2ZWwpO1xyXG4gIH1cclxuXHJcbiAgaWYgKFRlbXBEYXRhLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGdlbkRhdGEoVGVtcERhdGEsIFRlbXBEYXRhWzBdLmxldmVsKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1lbWVfXFxcXERlc2t0b3BcXFxcV29ya0hvbWVcXFxcSkVUX1VJXFxcXHBhY2thZ2VzXFxcXHZpdGUtcGx1Z2luLW1kLXJlLXRhZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWVtZV9cXFxcRGVza3RvcFxcXFxXb3JrSG9tZVxcXFxKRVRfVUlcXFxccGFja2FnZXNcXFxcdml0ZS1wbHVnaW4tbWQtcmUtdGFnXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZW1lXy9EZXNrdG9wL1dvcmtIb21lL0pFVF9VSS9wYWNrYWdlcy92aXRlLXBsdWdpbi1tZC1yZS10YWcvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5pbXBvcnQgeyBpbmplY3RHZW5Ub2MsIGluamVjdEhUYWdJZCB9IGZyb20gXCIuL2xpYlwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWRSZVRhZygpOiBQbHVnaW4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiBcInNldC1jb2RlLWJveFwiLFxyXG4gICAgZW5mb3JjZTogXCJwcmVcIixcclxuICAgIHRyYW5zZm9ybShyYXdDb2RlLCBpZCkge1xyXG4gICAgICBmdW5jdGlvbiBoYW5kbGVDb2RlKHJhd0NvZGU6IHN0cmluZywgcHJvY2Vzc1NlcXVlbmNlczogRnVuY3Rpb25bXSkge1xyXG4gICAgICAgIGxldCB0ZW1wQ29kZSA9IHJhd0NvZGU7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gcHJvY2Vzc1NlcXVlbmNlcykge1xyXG4gICAgICAgICAgY29uc3QgaGFuZGxlQ29kZSA9IHByb2Nlc3NTZXF1ZW5jZXNba2V5XTtcclxuICAgICAgICAgIHRlbXBDb2RlID0gaGFuZGxlQ29kZSh0ZW1wQ29kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZW1wQ29kZTtcclxuICAgICAgfVxyXG4gICAgICAvKipcdTU5MDRcdTc0MDYgcmF3Q29kZSBcdTUxRkRcdTY1NzBcdTVFOEZcdTUyMTdcdUZGMENcdTUxNDhcdThGREJcdTUxNDhcdTUxRkFcdTYyNjdcdTg4NEMgKi9cclxuICAgICAgY29uc3QgcHJvY2Vzc1NlcXVlbmNlcyA9IFtpbmplY3RHZW5Ub2MsIGluamVjdEhUYWdJZF07XHJcblxyXG4gICAgICBpZiAoLy5tZCQvLnRlc3QoaWQpKSByZXR1cm4gaGFuZGxlQ29kZShyYXdDb2RlLCBwcm9jZXNzU2VxdWVuY2VzKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG1lbWVfXFxcXERlc2t0b3BcXFxcV29ya0hvbWVcXFxcSkVUX1VJXFxcXHBhY2thZ2VzXFxcXHZpdGUtcGx1Z2luLW1kLXNldC1jb2RlLWJveFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWVtZV9cXFxcRGVza3RvcFxcXFxXb3JrSG9tZVxcXFxKRVRfVUlcXFxccGFja2FnZXNcXFxcdml0ZS1wbHVnaW4tbWQtc2V0LWNvZGUtYm94XFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9tZW1lXy9EZXNrdG9wL1dvcmtIb21lL0pFVF9VSS9wYWNrYWdlcy92aXRlLXBsdWdpbi1tZC1zZXQtY29kZS1ib3gvaW5kZXgudHNcIjtpbXBvcnQgdHlwZSB7IFBsdWdpbiB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5pbXBvcnQgeyByZXBsYWNlQ29kZUJveCB9IGZyb20gXCIuLi92aXRlLXBsdWdpbi1tZC1yZS10YWcvbGliXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZFJlVGFnKCk6IFBsdWdpbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwidml0ZS1wbHVnaW4tbWQtcmUtdGFnXCIsXHJcbiAgICBlbmZvcmNlOiBcInByZVwiLFxyXG4gICAgdHJhbnNmb3JtKHJhd0NvZGUsIGlkKSB7XHJcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZUNvZGUocmF3Q29kZTogc3RyaW5nLCBwcm9jZXNzU2VxdWVuY2VzOiBGdW5jdGlvbltdKSB7XHJcbiAgICAgICAgbGV0IHRlbXBDb2RlID0gcmF3Q29kZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9jZXNzU2VxdWVuY2VzKSB7XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVDb2RlID0gcHJvY2Vzc1NlcXVlbmNlc1trZXldO1xyXG4gICAgICAgICAgdGVtcENvZGUgPSBoYW5kbGVDb2RlKHRlbXBDb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlbXBDb2RlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgvLm1kJC8udGVzdChpZCkpIHJldHVybiBoYW5kbGVDb2RlKHJhd0NvZGUsIFtyZXBsYWNlQ29kZUJveF0pO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBQ3JCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTs7O0FDTmdYLFNBQVMsZUFBZSxTQUFpQjtBQUUvYSxRQUFNLElBQUksUUFBUTtBQUFBLElBQ2hCO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFFQSxTQUFPLEVBQUUsUUFBUSxvQkFBb0IsOEJBQThCO0FBR25FLFFBQU0sWUFBWTtBQUVsQixXQUFTLG1CQUFtQkEsVUFBaUI7QUFaL0M7QUFhSSxVQUFNLFdBQVdBLFNBQVEsTUFBTSxJQUFJO0FBRW5DLFVBQU0sWUFBVyxjQUFTLE9BQVQsbUJBQWEsUUFBUSxNQUFNLElBQUk7QUFDaEQsVUFBTSxPQUFPLFNBQVMsTUFBTSxHQUFHLFNBQVMsU0FBUyxDQUFDO0FBQ2xELFVBQU0sYUFBYSxTQUFTLEdBQUcsTUFBTSxXQUFXO0FBQ2hELFVBQU0sUUFBUSxTQUFTLEdBQUc7QUFBQSxNQUN4QjtBQUFBLE1BQ0EsaUJBQWlCLFdBQVcsWUFBWSxhQUFhO0FBQUE7QUFBQSxJQUN2RDtBQUNBLFVBQU0sTUFBTSxTQUFTLFNBQVMsU0FBUyxHQUFHO0FBQUEsTUFDeEM7QUFBQSxNQUNBO0FB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QUNOLFNBQVM7QUFBQSxJQUNULFVBQVUsU0FBUyxJQUFJO0FBQ3JCLGVBQVMsV0FBV0MsVUFBaUIsa0JBQThCO0FBQ2pFLFlBQUksV0FBV0E7QUFDZixtQkFBVyxPQUFPLGtCQUFrQjtBQUNsQyxnQkFBTUMsY0FBYSxpQkFBaUI7QUFDcEMscUJBQVdBLFlBQVcsUUFBUTtBQUFBLFFBQ2hDO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFDQSxVQUFJLE9BQU8sS0FBSyxFQUFFO0FBQUcsZUFBTyxXQUFXLFNBQVMsQ0FBQyxjQUFjLENBQUM7QUFBQSxJQUNsRTtBQUFBLEVBQ0Y7QUFDRjs7O0FIcEJBLElBQU0sbUNBQW1DO0FBVXpDLFNBQVMsU0FBUyxNQUFjO0FBQzlCLFNBQU8sUUFBUSxrQ0FBVyxJQUFJO0FBQ2hDO0FBR0EsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSSxFQUFFLFNBQVMsQ0FBQyxVQUFVLE9BQU8sRUFBRSxDQUFDO0FBQUEsSUFDcEMsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1RDLFNBQVc7QUFBQSxJQUNYLGtCQUFrQjtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxxQkFBcUIsU0FBUyw4QkFBOEI7QUFBQSxNQUM1RCxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDaEQsVUFBVSxRQUFRLFlBQVk7QUFBQSxNQUM5QixRQUFRLFNBQVMsVUFBVTtBQUFBLE1BQzNCLEtBQUssU0FBUyxPQUFPO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUCxhQUFhO0FBQUEsVUFDWCxzQkFBc0I7QUFBQSxZQUNwQjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsTUFBTTtBQUFBLFFBQ1IsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxJQUNiLFlBQVksQ0FBQyxlQUFlO0FBQUEsRUFDOUI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogWyJyYXdDb2RlIiwgInRlbXBsYXRlQ29kZSIsICJoRGF0YUxpc3QiLCAibGV2ZWwiLCAicmF3Q29kZSIsICJwcm9jZXNzU2VxdWVuY2VzIiwgImhhbmRsZUNvZGUiLCAibWRSZVRhZyIsICJyYXdDb2RlIiwgImhhbmRsZUNvZGUiLCAibWRSZVRhZyJdCn0K
