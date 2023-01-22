import dotpather from '../index';

describe("dotpather", () => {
  it("should be a function", () => {
    expect(dotpather).not.toBeUndefined();
    expect(typeof dotpather).toBe("function");
  })

  it("should return value at property", () => {
    const lookup = dotpather("check");
    expect(lookup({ check: "woo" })).toBe("woo");

    expect(lookup({ check: { derp: true } })).toStrictEqual({ derp: true });
  })
})
