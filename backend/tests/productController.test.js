// tests/productController.test.js
// Mock the products array
const mockProducts = [
  { id: 1, title: "Test Product 1", sku: "TP01", category: "CatA", subCategory: "Sub1", segment: "Seg1", brand: "BrandX" },
  { id: 2, title: "Another Product", sku: "AP02", category: "CatB", subCategory: "Sub2", segment: "Seg2", brand: "BrandY" },
  { id: 3, title: "Product 3", sku: "P3", category: "CatA", subCategory: "Sub1", segment: "Seg1", brand: "BrandX" }
];

// Wrap the mock in a function to avoid "before initialization" error
jest.mock("../data/products", () => {
  return mockProducts;
});

const { getProducts } = require("../controllers/productController");

describe("Product API", () => {
  let res;

  beforeEach(() => {
    res = { json: jest.fn() };
  });

  it("should return all products if no query params", () => {
    const req = { query: {} };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.length).toBe(mockProducts.length);
  });

  it("should search products by title or SKU", () => {
    const req = { query: { search: "Test" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].title.toLowerCase()).toContain("test");
  });

  it("should filter products by category", () => {
    const req = { query: { category: "CatA" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.every(p => p.category === "CatA")).toBe(true);
  });

  it("should filter products by subCategory", () => {
    const req = { query: { subCategory: "Sub1" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.every(p => p.subCategory === "Sub1")).toBe(true);
  });

  it("should filter products by segment", () => {
    const req = { query: { segment: "Seg1" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.every(p => p.segment === "Seg1")).toBe(true);
  });

  it("should filter products by brand", () => {
    const req = { query: { brand: "BrandX" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.every(p => p.brand === "BrandX")).toBe(true);
  });

  it("should apply multiple filters together", () => {
    const req = { query: { category: "CatA", brand: "BrandX" } };
    getProducts(req, res);
    const result = res.json.mock.calls[0][0];
    expect(result.every(p => p.category === "CatA" && p.brand === "BrandX")).toBe(true);
  });
});
