import React, { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const PricingForm = () => {
  const { selectedProducts, applyAdjustment } = useContext(ProductContext);
  const [adjustmentType, setAdjustmentType] = useState("Fixed");
  const [incrementType, setIncrementType] = useState("Increase");
  const [value, setValue] = useState("");

  const handleApply = () => {
    applyAdjustment(adjustmentType, incrementType, Number(value));
  };

  const disabled = selectedProducts.length === 0 || value === "" || Number(value) <= 0;

  return (
    <div style={{ margin: "10px 0" }}>
      <select value={adjustmentType} onChange={(e) => setAdjustmentType(e.target.value)}>
        <option value="Fixed">Fixed ($)</option>
        <option value="Dynamic">Dynamic (%)</option>
      </select>

      <select value={incrementType} onChange={(e) => setIncrementType(e.target.value)}>
        <option value="Increase">Increase (+)</option>
        <option value="Decrease">Decrease (-)</option>
      </select>

      <input
        type="number"
        placeholder="Enter value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={handleApply} disabled={disabled}>
        Apply
      </button>

      {disabled && <p>Select products and enter a valid value to apply.</p>}
    </div>
  );
};

export default PricingForm;
