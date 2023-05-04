import infoCollector from "./infoCollector.js";
import tplReplacer from "./tplReplacer.js";

async function run() {
  const meta = await infoCollector();
  tplReplacer(meta);
}

run();
