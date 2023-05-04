import type { alert as Alert } from "./Alert";
import { reactive, watch } from "vue";
export default class {
  alerts: Alert[];
  counter: number;
  key: number;

  constructor() {
    this.alerts = reactive([]);
    this.counter = 0;
    this.key = 0;

    watch(this.alerts, alerts => {
      const alert = alerts[0] as Alert | undefined;
      this.key = alert ? alert.key : 0;
      if (alert && alert.timeout) {
        setTimeout(() => this._$remove(alert), alert.timeout);
      }
    });
  }

  sendMessage(
    messageType: Alert["type"],
    timeout: Alert["timeout"],
    content: Alert["content"]
  ) {
    this.counter++;
    const data = {
      type: messageType,
      key: this.counter,
      content,
      timeout,
    };
    this.alerts.push(data);
  }

  _$remove(data: Alert) {
    const index = this.alerts.indexOf(data);
    if (index !== -1) this.alerts.splice(index, 1);
  }

  async removeAll(ms?: number) {
    function sleep(delay: number) {
      return new Promise(resolve => setTimeout(resolve, delay));
    }
    if (ms) {
      while (this.alerts.length) {
        const data = this.alerts.shift();
        if (!data) break;
        this._$remove(data);
        await sleep(ms);
      }
    } else {
      this.alerts.splice(0);
    }
    this.counter = 0; // 完全清空序列后重置计数器
  }
}
