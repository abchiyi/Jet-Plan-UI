import type { App, Plugin } from "vue";

import Row from "./src/row.vue";
import Col from "./src/col.vue";

export const GridPlugin: Plugin = {
  install(app: App) {
    app.component(Row.name, Row);
    app.component(Col.name, Col);
  },
};

export { Row, Col };
