import { add, divide, multiply, subtract } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 2;
  const b: number = 2;
  const expected: number = 4;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});
test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply three and four is twelve", () => {
  // Arrange
  const a: number = 3;
  const b: number = 4;
  const expected: number = 12;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide twelve by three is four", () => {
  // Arrange
  const a: number = 12;
  const b: number = 3;
  const expected: number = 4;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
test("divide twelve by zero is Infinity", () => {
  // Arrange
  const a: number = 12;
  const b: number = 0;
  const expected: number = Infinity;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
