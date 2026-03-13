import { mean, median } from "./average";

  test("test mean of two numbers", () => {
    // Arrange
    const numbers: number[] = [1, 2];
    const expected: number = 1.5;

    // Act
    const actual: number = mean(numbers);

    // Assert
    expect(actual).toBe(expected);
  });

  test("test mean of five numbers", () => {
    // Arrange
    const numbers: number[] = [1, 2, 3, 4, 5];
    const expected: number = 3;

    // Act
    const actual: number = mean(numbers);

    // Assert
    expect(actual).toBe(expected);
  });

  test("test mean of no numbers throws an error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Die Liste darf nicht leer sein");
});


test("median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 6, 7, 8];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 2, 5, 6, 7, 8];
  const expected: number = (5 + 6) / 2;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("median for no elements throws an error", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow();
});



