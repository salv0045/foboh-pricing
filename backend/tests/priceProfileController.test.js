const { createPricingProfile, getPricingProfiles } = require("../controllers/priceProfileController");
const products = require("../data/products");

// Reset in-memory store for each test
let pricingProfiles;
beforeEach(() => {
  pricingProfiles = [];
});

describe("PriceProfile API", () => {
  it("should create a new price profile", () => {
    const req = {
      body: {
        profileName: "Test Profile",
        productIds: [1, 2],
        basedOn: "global",
        adjustmentType: "Fixed",
        incrementType: "Increase",
        value: 10
      }
    };
    const res = {
      json: jest.fn()
    };

    createPricingProfile(req, res);

    expect(res.json).toHaveBeenCalled();
    const response = res.json.mock.calls[0][0];
    expect(response.profile).toHaveProperty("id");
    expect(response.updatedProducts.length).toBe(2);
  });

  it("should fail if required fields are missing", () => {
    const req = { body: {} };
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    createPricingProfile(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Missing required fields" });
  });

  it("should return all pricing profiles", () => {
    const req = {};
    const res = { json: jest.fn() };

    getPricingProfiles(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
