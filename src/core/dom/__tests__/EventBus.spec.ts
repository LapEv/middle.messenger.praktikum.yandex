import EventBus from "../EventBus";

describe("Subscribe to eventBus events", () => {
  test("Skip the event and listen for the event to be triggered", () => {
    const eventBus = new EventBus();
    return new Promise((resolve, reject) => {
      const timeOut = setTimeout(() => reject("Rejected"), 1000);
      eventBus.on("eventName", () => {
        clearTimeout(timeOut);
        resolve("Event started");
      });

      eventBus.emit("eventName");
    }).then((data) => expect(data).toEqual("Event started"));
  });

  test("Destroy all events, skip the event and listen that the event was not received", () => {
    const eventBus = new EventBus();
    return new Promise((resolve, reject) => {
      const timeOut = setTimeout(() => reject("Event not started"), 500);
      eventBus.on("eventName", () => {
        clearTimeout(timeOut);
        resolve("Event started");
      });

      eventBus.destroy();
      eventBus.emit("eventName");
    })
      .then(() => {
        throw new Error("Event should not be started");
      })
      .catch((e) => {
        expect(e).toEqual("Event not started");
      });
  });
});
