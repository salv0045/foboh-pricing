export const calculatePrice = (basePrice, adjustmentType, incrementType, value) => {
  let newPrice = basePrice;

  if (adjustmentType === "Fixed") {
    newPrice = incrementType === "Increase" ? basePrice + value : basePrice - value;
  } else if (adjustmentType === "Dynamic") {
    newPrice =
      incrementType === "Increase"
        ? basePrice + (basePrice * value) / 100
        : basePrice - (basePrice * value) / 100;
  }

  return newPrice < 0 ? 0 : newPrice; // prevent negative
};
