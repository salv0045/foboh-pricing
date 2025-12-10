import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PricingForm from "../components/PricingForm";
import { ProductContext } from "../context/ProductContext";

describe("PricingForm", () => {
  const applyAdjustment = vi.fn();
  const contextValue = { selectedProducts: [1, 2], applyAdjustment };

  it("renders form elements", () => {
    render(
      <ProductContext.Provider value={contextValue}>
        <PricingForm />
      </ProductContext.Provider>
    );

    expect(screen.getByPlaceholderText("Enter value")).toBeInTheDocument();
    expect(screen.getByText("Apply")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Fixed ($)" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Increase (+)" })).toBeInTheDocument();
  });

  it("calls applyAdjustment on click", () => {
    render(
      <ProductContext.Provider value={contextValue}>
        <PricingForm />
      </ProductContext.Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Enter value"), { target: { value: "10" } });
    fireEvent.click(screen.getByText("Apply"));

    expect(applyAdjustment).toHaveBeenCalledWith("Fixed", "Increase", 10);
  });

  it("disables apply button when value is invalid", () => {
    render(
      <ProductContext.Provider value={{ selectedProducts: [], applyAdjustment }}>
        <PricingForm />
      </ProductContext.Provider>
    );

    expect(screen.getByText("Apply")).toBeDisabled();
  });
});
