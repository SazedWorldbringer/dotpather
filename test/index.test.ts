import dotpather from '../index';

describe("dotpather", () => {
  it("should be a function", () => {
    expect(dotpather).not.toBeUndefined();
    expect(typeof dotpather).toBe("function");
  })
})
