import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import PricingForm from "./PricingForm";

const ProductList = () => {
  const {
    products,
    selectedProducts,
    toggleSelectProduct,
    selectAllProducts,
    deselectAllProducts,
  } = useContext(ProductContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [subCategoryFilter, setSubCategoryFilter] = useState("");
  const [segmentFilter, setSegmentFilter] = useState("");
  const [brandFilter, setBrandFilter] = useState("");

  useEffect(() => {
    let temp = products;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      temp = temp.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.sku.toLowerCase().includes(term)
      );
    }
    if (categoryFilter) temp = temp.filter((p) => p.category === categoryFilter);
    if (subCategoryFilter) temp = temp.filter((p) => p.subCategory === subCategoryFilter);
    if (segmentFilter) temp = temp.filter((p) => p.segment === segmentFilter);
    if (brandFilter) temp = temp.filter((p) => p.brand === brandFilter);

    setFilteredProducts(temp);
  }, [searchTerm, categoryFilter, subCategoryFilter, segmentFilter, brandFilter, products]);

  // Determines if all filtered products are selected
  const allSelected = filteredProducts.length > 0 && filteredProducts.every((p) => selectedProducts.includes(p.id));

  const handleSelectAllToggle = () => {
    if (allSelected) {
      // Deselect all filtered products
      filteredProducts.forEach((p) => toggleSelectProduct(p.id));
    } else {
      // Select all filtered products
      filteredProducts.forEach((p) => {
        if (!selectedProducts.includes(p.id)) toggleSelectProduct(p.id);
      });
    }
  };

  return (
    <div>
      <h2>FOBOH Pricing</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or SKU"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      {/* Filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="">All Categories</option>
          {[...new Set(products.map((p) => p.category))].map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select value={subCategoryFilter} onChange={(e) => setSubCategoryFilter(e.target.value)}>
          <option value="">All Sub-Categories</option>
          {[...new Set(products.map((p) => p.subCategory))].map((sub) => (
            <option key={sub} value={sub}>{sub}</option>
          ))}
        </select>

        <select value={segmentFilter} onChange={(e) => setSegmentFilter(e.target.value)}>
          <option value="">All Segments</option>
          {[...new Set(products.map((p) => p.segment))].map((seg) => (
            <option key={seg} value={seg}>{seg}</option>
          ))}
        </select>

        <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)}>
          <option value="">All Brands</option>
          {[...new Set(products.map((p) => p.brand))].map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      {/* Pricing Form */}
      <PricingForm products={filteredProducts} />

      {/* Product Table */}
      <table border="1" cellPadding="5" style={{ marginTop: "20px", width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={handleSelectAllToggle}
              />
              {" "}Select All
            </th>
            <th>Title</th>
            <th>SKU Code</th>
            <th>Category</th>
            <th>Brand</th>  
            <th>Based On Price</th>
            <th>Adjustment</th>
            <th>New Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(p.id)}
                  onChange={() => toggleSelectProduct(p.id)}
                />
              </td>
              <td>{p.title}</td>
              <td>{p.sku}</td>
              <td>{p.category}</td>
               <td>{p.brand}</td> 
              <td>${p.globalPrice.toFixed(2)}</td>
              <td>{p.adjustmentValue !== undefined
    ? `${p.incrementType === "Increase" ? "+" : "-"}${
        p.adjustmentType === "Dynamic"
          ? p.adjustmentValue + "%"
          : "$" + p.adjustmentValue
      }`
    : "-"}</td>
              <td>{p.newPrice !== undefined ? `$${p.newPrice.toFixed(2)}` : "-"}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
