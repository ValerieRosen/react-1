const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("it works for positive numbers", () => {
    expect(addCommas(6)).toBe("6");
    expect(addCommas(89)).toBe("89");
    expect(addCommas(988)).toBe("988");
  });

  test("it works for positive large numbers", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
    expect(addCommas(16000210)).toBe("16,000,210");
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("it works for negative small numbers", () => {
    expect(addCommas(-6)).toBe("-6");
    expect(addCommas(-57)).toBe("-57");
    expect(addCommas(-124)).toBe("-124");
  });

  test("it works for negative large numbers", () => {
    expect(addCommas(-6344)).toBe("-6,344");
    expect(addCommas(-34567)).toBe("-34,567");
    expect(addCommas(-78999456)).toBe("-78,999,456");
  });

  test("it works for small positive decimals", () => {
    expect(addCommas(1.234)).toBe("1.234");
    expect(addCommas(8.99)).toBe("8.99");
    expect(addCommas(477.99088)).toBe("477.99088");
  });
});
