const sum = require("./sum.js");

describe("all test cases related to sum file", () => {
  test("should be equal to 5", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });
});
