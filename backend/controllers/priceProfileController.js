const products= require("../data/products");
const {calculatePrice} = require("../utils/calculatePrice");

//in-memory store
let pricingProfiles =[];

//new pricingprofile and apply adjusment 

const createPricingProfile=(req,res)=>{
    const {profileName, productIds, basedOn, adjustmentType, incrementType, value } = req.body;

      if (!profileName || !productIds || !basedOn || !adjustmentType || !incrementType || value == null) {
    return res.status(400).json({ error: "Missing required fields" });
      }

      //pricing adjusment

      const updatedProducts = products.filter((p)=>productIds.includes(p.id)).map(p=>{
        const basePrice = basedOn === 'global' ? p.globalPrice : p.newPrice || p.globalPrice;
        const newPrice = calculatePrice(basePrice, adjustmentType, incrementType, value);
        return {
            ...p, newPrice
        };
      });



      //save profile

    const profile = {
    id: pricingProfiles.length + 1,
    name: profileName,
    products: updatedProducts,
    basedOn,
    adjustmentType,
    incrementType,
    value
  };
  pricingProfiles.push(profile);

  res.json({ profile, updatedProducts });

};
const getPricingProfiles = (req, res) => {
  res.json(pricingProfiles);
};

module.exports = { createPricingProfile, getPricingProfiles };