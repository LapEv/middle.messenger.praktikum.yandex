import isObjects from "../is-object";

describe("Test is Object", () => {
  test("Should be an object", () => {
    expect(isObjects({ a: { b: { c: 1 } } })).toBeTruthy;
  });

  test("Should not be an object", () => {
    const b = new Map();
    b.set("a", 2);

    expect(isObjects(b)).not.toBeTruthy;
    expect(isObjects("text")).not.toBeTruthy;
    expect(isObjects(2)).not.toBeTruthy;
    expect(isObjects(new Set())).not.toBeTruthy;
    expect(isObjects(Symbol("1"))).not.toBeTruthy;
  });
});
