import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ProductList from "../components/ProductList";
import { ProductContext } from "../context/ProductContext";

const productsMock = [
  { id: 1, title: "Product 1", sku: "SKU1", category: "Cat1", globalPrice: 100 },
  { id: 2, title: "Product 2", sku: "SKU2", category: "Cat2", globalPrice: 200 },
];

describe("ProductList", () => {
  const contextValue = {
    products: productsMock,
    selectedProducts: [],
    toggleSelectProduct: vi.fn(),
    selectAllProducts: vi.fn(),
    deselectAllProducts: vi.fn(),
  };

  it("renders products table", () => {
    render(
      <ProductContext.Provider value={contextValue}>
        <ProductList />
      </ProductContext.Provider>
    );

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("FOBOH Pricing")).toBeInTheDocument();
  });

  it("selects a product on checkbox click", () => {
    render(
      <ProductContext.Provider value={contextValue}>
        <ProductList />
      </ProductContext.Provider>
    );

    const checkbox = screen.getAllByRole("checkbox")[1]; // first product checkbox
    fireEvent.click(checkbox);
    expect(contextValue.toggleSelectProduct).toHaveBeenCalledWith(1);
  });

  it("select all checkbox calls toggleSelectProduct for each product", () => {
    render(
      <ProductContext.Provider value={contextValue}>
        <ProductList />
      </ProductContext.Provider>
    );

    
  });
});
