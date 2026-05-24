const { capitalizeTextFirstChar, createArray, random } = require("../lab/lab1");

describe("capitalizeTextFirstChar", () => {
  test("should return string type", () => {
    const result = capitalizeTextFirstChar("hello world");

    expect(typeof result).toBe("string");
  });

  test("should capitalize first character of every word", () => {
    const result = capitalizeTextFirstChar("i'm ahmed ali");

    expect(result).toBe("I'm Ahmed Ali");
  });

  test("should throw error if parameter is number", () => {
    expect(() => capitalizeTextFirstChar(12)).toThrow(
      "parameters should be string",
    );
  });
});

describe("createArray", () => {
  test("should return array", () => {
    const result = createArray(3);

    expect(Array.isArray(result)).toBe(true);
  });

  test("should return array of length 2 and include 1", () => {
    const result = createArray(2);

    expect(result.length).toBe(2);
    expect(result).toContain(1);
  });

  test("should return array of length 3 and not include 3", () => {
    const result = createArray(3);

    expect(result.length).toBe(3);
    expect(result).not.toContain(3);
  });
});

describe("random", () => {
  test("should return number type", () => {
    const result = random(1, 10);

    expect(typeof result).toBe("number");
  });

  test("should return number between 5 and 7", () => {
    const result = random(5, 7);

    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThanOrEqual(7);
  });

  test("should return NaN if one parameter passed", () => {
    const result = random(5);

    expect(result).toBeNaN();
  });
});
