// hljs
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";

// hljs css
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("css", css);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("ts", ts);

import { defineStore } from "pinia";

export interface Toc {
  text: string;
  level: number;
  children?: Toc[];
}

export const TocStorm = defineStore("Toc", {
  state: () => {
    return {
      TocData: [
        {
          level: 1,
          text: "Title",
          children: [
            { level: 2, text: "Hello, this is nav 1 .", children: [] },
            { level: 2, text: "Hello, this is nav 2 .", children: [] },
          ],
        },
      ] as Toc[],
    };
  },
});
