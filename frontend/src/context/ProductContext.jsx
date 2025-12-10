import React, { createContext, useState } from "react";
import { calculatePrice } from "../utils/calculatePrice";


export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); // all products from API
  const [selectedProducts, setSelectedProducts] = useState([]); // ids of selected products

  const toggleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const selectAllProducts = () => {
    setSelectedProducts(products.map((p) => p.id));
  };

  const deselectAllProducts = () => {
    setSelectedProducts([]);
  };

  // NEW: Apply adjustment to selected products
 const applyAdjustment = (adjustmentType, incrementType, value) => {
  setProducts((prev) =>
    prev.map((p) => {
      if (!selectedProducts.includes(p.id)) return p;

      const newPrice = calculatePrice(
        p.globalPrice,
        adjustmentType,
        incrementType,
        value
      );

      return {
        ...p,
        newPrice,
        adjustmentType,
        incrementType,
        adjustmentValue: value,
      };
    })
  );
};


  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        selectedProducts,
        toggleSelectProduct,
        selectAllProducts,
        deselectAllProducts,
        applyAdjustment, // <-- add this
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
