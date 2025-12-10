const express = require("express");
const cors = require("cors");
const app= express();
const PORT= 5000;

//import products and routes
const products = require("./data/products");
const productRoutes = require("./routes/products");
const priceProfileRoutes = require("./routes/priceProfiles");
//Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);
app.use("/api/price-profiles", priceProfileRoutes);


//  test endpoint to check products data directly
app.get("/test-products", (req, res) => res.json(products));

// Root endpoint
app.get("/", (req, res) => {
  res.send("FOBOH backend running");
});





// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
