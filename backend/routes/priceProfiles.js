const express = require("express");
const router = express.Router();

const {createPricingProfile, getPricingProfiles} = require("../controllers/priceProfileController")


//new routing price and apply adjustment 
router.post("/", createPricingProfile);

//get all pricing profiles

router.get("/", getPricingProfiles);

module.exports= router;