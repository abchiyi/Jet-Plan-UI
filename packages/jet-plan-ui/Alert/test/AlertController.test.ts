import AlertController from "../src/AlertController";
import { describe, test, expect } from "vitest";
import { h } from "vue";

function sleep(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}
const alertController = new AlertController();

describe("Test AlertController ", () => {
  test("拥有属性 alerts ", () => {
    expect(alertController).toHaveProperty("alerts");
  });

  test("Method: sendMessage", async () => {
    await alertController.removeAll();

    alertController.sendMessage("success", 50, "Test1");
    alertController.sendMessage("success", 50, "Test2");

    expect(alertController.alerts[0]).toMatchSnapshot();

    expect(alertController.alerts.length).toBe(2);

    await sleep(60);
    expect(alertController.alerts.length).toBe(1);
    await sleep(60);
    expect(alertController.alerts.length).toBe(0);

 
  });

  test("Method: _$remove", async () => {
    await alertController.removeAll();
    alertController.sendMessage("success", null, "message2");
    alertController._$remove(alertController.alerts[0]);
    expect(alertController.alerts.length).toBe(0);
    expect(alertController.alerts).not.include({
      type: "success",
      content: "Test",
      timeout: null,
    });
  });

  test("Method: removeAll", async () => {
    await alertController.removeAll();
    expect(alertController.alerts.length).toBe(0);

    for (let n = 0; n < 15; n++) {
      alertController.sendMessage("success", 1000, "Test");
    }
    await alertController.removeAll(200);
    expect(alertController.alerts.length).toBe(0);
    expect(alertController.counter).toEqual(0);
  });

  test("Attr:key", async () => {
    await alertController.removeAll();

    alertController.sendMessage("info", null, "test1");
    await sleep(2);
    expect(alertController.key).toBe(1);
    expect(alertController.key).toBe(alertController.alerts[0].key);

    // key 的值始终与 .alerts 中的第一位元素保持一致
    alertController.sendMessage("info", null, "test2");
    alertController.alerts.shift();
    await sleep(2);
    expect(alertController.key).toEqual(2);
  });
  test("Attr:counter", async () => {
    await alertController.removeAll();
    alertController.counter = 0;

    alertController.sendMessage("info", null, "test1");
    expect(alertController.counter).toEqual(1);
  });
});
