import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ProductItem = ({ product }) => {
  const { selectedProducts, setSelectedProducts, calculatedProducts } = useContext(ProductContext);

  const isSelected = selectedProducts.includes(product.id);
  const displayPrice = calculatedProducts.find((p) => p.id === product.id)?.newPrice || "-";

  const handleSelect = () => {
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product.id]);
    }
  };

  return (
    <tr>
      <td>
        <input type="checkbox" checked={isSelected} onChange={handleSelect} />
      </td>
      <td>{product.title}</td>
      <td>{product.sku}</td>
      <td>{product.category}</td>
      <td>${product.globalPrice}</td>
      <td>{displayPrice !== "-" ? displayPrice - product.globalPrice : "-"}</td>
      <td>{displayPrice !== "-" ? displayPrice : "-"}</td>
    </tr>
  );
};

export default ProductItem;
