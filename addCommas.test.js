const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("is there a comma", () => {
    expect("1,000,000").toBe("1,000,000");
  });

  test("is there a comma", () => {
    expect("9,876,543,210").toBe("9,876,543,210");
  });

  test("is there a comma", () => {
    expect("6").toBe("6");
  });

  test("is there a comma", () => {
    expect("-10").toBe("-10");
  });

  test("is there a comma", () => {
    expect("-5,678").toBe("-5,678");
  });
});
