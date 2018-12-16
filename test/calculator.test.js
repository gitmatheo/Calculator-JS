const calculator = require("./js/calculator");

test("adds two numbers", () => {
  test = calculator();
  expect(test.add(5, 5)).toBe(10);
});

test("subtracts two number", () => {
  test = calculator();
  expect(test.subtract(10, 5)).toBe(5);
});

test("multiplies two numbers", () => {
  test = calculator();
  expect(test.multiply(5, 5)).toBe(25);
});

test("divides two numbers", () => {
  test = calculator();
  expect(test.divide(10, 2)).toBe(5);
});

test("throws error if divided by 0", () => {
  test = calculator();
  expect(test.divide).toThrow(Error);
});
