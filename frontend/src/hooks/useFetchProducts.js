import { useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export const useFetchProducts = () => {
  const { setProducts } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };

    fetchProducts();
  }, [setProducts]);
};
