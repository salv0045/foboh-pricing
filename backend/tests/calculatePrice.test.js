const { calculatePrice } = require("../utils/calculatePrice");

describe("calculatePrice", () => {
  it("should increase fixed price correctly", () => {
    expect(calculatePrice(100, "Fixed", "Increase", 20)).toBe(120);
  });

  it("should decrease fixed price correctly", () => {
    expect(calculatePrice(100, "Fixed", "Decrease", 20)).toBe(80);
  });

  it("should increase dynamic price correctly", () => {
    expect(calculatePrice(100, "Dynamic", "Increase", 20)).toBe(120);
  });

  it("should decrease dynamic price correctly", () => {
    expect(calculatePrice(100, "Dynamic", "Decrease", 20)).toBe(80);
  });

  it("should never return negative price", () => {
    expect(calculatePrice(50, "Fixed", "Decrease", 100)).toBe(0);
  });
});
