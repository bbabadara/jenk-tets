const { add } = require("./math");

test("addition test", () => {
  expect(add(2, 3)).toBe(5);
});