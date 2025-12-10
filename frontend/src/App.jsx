import React from "react";
import { ProductProvider } from "./context/ProductContext";
import ProductList from "./components/ProductList";
import { useFetchProducts } from "./hooks/useFetchProducts";

const ProductFetcher = () => {
  useFetchProducts(); // fetch products from backend
  return <ProductList />;
};

const App = () => {
  return (
    <ProductProvider>
      <ProductFetcher />
    </ProductProvider>
  );
};

export default App;
