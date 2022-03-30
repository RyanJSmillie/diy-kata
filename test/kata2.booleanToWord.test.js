const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns Yes when passed true", () => {
    expect(booleanToWord(2 === 2)).toBe('Yes')
});

  it("returns No when passed false", () => {
    expect(booleanToWord(2 === 3)).toBe('No')
  });
});
