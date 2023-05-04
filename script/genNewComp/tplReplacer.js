import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import handlebars from "handlebars";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PACKAGE_NAME = "jet-plan-ui";

function kebabCase(string) {
  return string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function newComponentPath(meta) {
  return `../../packages/${PACKAGE_NAME}/${meta.compName}`;
}

function getTplFilePath(meta) {
  return {
    // docs 目录
    readme: {
      from: "./.template/docs/README.md.tpl",
      to: `../../packages/${PACKAGE_NAME}/${meta.compName}/docs/README.md`,
    },
    demo: {
      from: "./.template/docs/demo.vue.tpl",
      to: `../../packages/${PACKAGE_NAME}/${meta.compName}/docs/Demo${meta.compName}.vue`,
    },
    // src 目录
    vue: {
      from: "./.template/src/index.vue.tpl",
      to: `../../packages/${PACKAGE_NAME}/${meta.compName}/src/index.vue`,
    },
    // 根目录
    install: {
      from: "./.template/index.ts.tpl",
      to: `../../packages/${PACKAGE_NAME}/${meta.compName}/index.ts`,
    },
    // 测试目录
    test: {
      from: "./.template/test/test.ts.tpl",
      to: `${newComponentPath(meta)}/test/${meta.compName}.test.ts`,
    },
  };
}

function compFilesTplReplacer(meta) {
  const filePaths = getTplFilePath(meta);
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(
      resolve(__dirname, filePaths[key].from),
      "utf-8"
    );

    const fileContent = handlebars.compile(fileTpl)(meta);

    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.log(err);
    });
  });
}

// 读取 packages/list.json 并更新
const listJsonTplReplacer = meta => {
  const listFilePath = "../../packages/list.json";
  const listFileTpl = fs.readFileSync(
    resolve(__dirname, listFilePath),
    "utf-8"
  );
  const listFileContent = JSON.parse(listFileTpl);
  listFileContent.push(meta);
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2);
  fs.writeFile(
    resolve(__dirname, listFilePath),
    newListFileContentFile,
    err => {
      if (err) console.log(err);
    }
  );
  return listFileContent;
};

// 更新 router.ts
const routerTplReplacer = listFileContent => {
  const routerFileFrom = "./.template/router.ts.tpl";
  const routerFileTo = "../../src/router/routerComponents.ts";
  const routerFileTpl = fs.readFileSync(
    resolve(__dirname, routerFileFrom),
    "utf-8"
  );
  const routerMeta = {
    routes: listFileContent.map(comp => {
      return `{
    name: "${comp.compName}",
    path: "${kebabCase(comp.compName)}",
    component: () => import("packages/${PACKAGE_NAME}/${
        comp.compName
      }/docs/README.md"),
  }`;
    }),
  };
  const routerFileContent = handlebars.compile(routerFileTpl, {
    noEscape: true,
  })(routerMeta);
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err);
  });
};

// 更新 install.ts
const installTsTplReplacer = listFileContent => {
  const installFileFrom = "./.template/install.ts.tpl";
  const installFileTo = "../../packages/jet-plan-ui/index.ts";
  const installFileTpl = fs.readFileSync(
    resolve(__dirname, installFileFrom),
    "utf-8"
  );
  const installMeta = {
    importPlugins: listFileContent
      .map(
        ({ compName }) => `import { ${compName}Plugin } from './${compName}';`
      )
      .join("\n"),
    installPlugins: listFileContent
      .map(({ compName }) => `${compName}Plugin.install?.(app);`)
      .join("\n    "),
    exportPlugins: listFileContent
      .map(({ compName }) => `export * from './${compName}'`)
      .join("\n"),
  };
  const installFileContent = handlebars.compile(installFileTpl, {
    noEscape: true,
  })(installMeta);
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
    if (err) console.log(err);
  });
};

// 更新测试文件
export default function (meta) {
  compFilesTplReplacer(meta);
  const listFileContent = listJsonTplReplacer(meta);
  routerTplReplacer(listFileContent);
  installTsTplReplacer(listFileContent);

  console.log(
    `组件新建完毕，请前往 packages/${PACKAGE_NAME}/${meta.compName} 目录进行开发`
  );
}
