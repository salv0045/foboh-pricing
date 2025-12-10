import React from "react";

const Filters = ({
  searchTerm,
  setSearchTerm,
  selectedBrand,
  setSelectedBrand,
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
  selectedSegment,
  setSelectedSegment,
  brands,
  categories,
  subCategories,
  segments,
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title or SKU"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">All Brands</option>
        {brands.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={selectedSubCategory} onChange={(e) => setSelectedSubCategory(e.target.value)}>
        <option value="">All Sub-Categories</option>
        {subCategories.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <select value={selectedSegment} onChange={(e) => setSelectedSegment(e.target.value)}>
        <option value="">All Segments</option>
        {segments.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
