const BASE_URL = "http://localhost:5000/api";

//fetching product with optional search term and filters
export const fetchProducts = async (searchTerm = "", filterOptions = {}) => {
  const queryString = new URLSearchParams({ search: searchTerm, ...filterOptions }).toString();
    const response = await fetch(`${BASE_URL}/products?${queryString}`);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

// Create a new pricing profile
export const createPricingProfile = async (pricingProfileData) => {
  const response = await fetch(`${BASE_URL}/price-profiles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pricingProfileData),
  });
  if (!response.ok) {
    throw new Error("Failed to create pricing profile");
  }
  return response.json();
};

// Fetch all pricing profiles
export const fetchPricingProfiles = async () => {
  const response = await fetch(`${BASE_URL}/price-profiles`);
  if (!response.ok) {
    throw new Error("Failed to fetch pricing profiles");
  }
  return response.json();
};
