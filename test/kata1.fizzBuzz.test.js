const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz')
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(7)).toBe(7)
    expect(fizzBuzz(11)).toBe(11)
    expect(fizzBuzz(16)).toBe(16)
  });
});
