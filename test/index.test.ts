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

  it("should find nested values", () => {
    const lookup = dotpather("check.that.attribute");

    expect(lookup({ check: { that: { attribute: 666 } } })).toBe(666)
  })

  it("should return undefined if path not found", () => {
    const lookup = dotpather("invalid.path");

    expect(lookup({ valiid: { path: true } })).toBeUndefined();
  })
})
